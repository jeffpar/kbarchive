#!/usr/bin/env node
/**
 * @fileoverview Script for generating Markdown (.md) files from KnowledgeBase (.TXT) files
 * @author <a href="mailto:Jeff@pcjs.org">Jeff Parsons</a>
 *
 * This should be run from the project's root:
 *
 *      node scripts/genmd.js txt | tee scripts/genmd.log
 */

"use strict";

let fs = require("fs");
let path = require("path");
let mkdirp = require("mkdirp");
let rootDir = "";

let TEST = false;
if (TEST) rootDir = "tmp/";

/**
 * isAlphaNum(s)
 *
 * @param {string} s
 * @return {boolean}
 */
function isAlphaNum(s)
{
    if (!s) return false;
    return !!s.match(/^[a-z0-9]*$/i);
}

/**
 * toHex(n, cch)
 *
 * Number.toString(16) works, but it doesn't do zero-padded fixed-length upper-case output.
 *
 * @param {number} n
 * @param {number} [cch] (default is 2 characters)
 * @return {string}
 */
function toHex(n, cch = 2)
{
    let s = "";
    let ach = "0123456789ABCDEF";
    while (cch--) {
        s = ach[n & 0xf] + s;
        n >>= 4;
    }
    return s;
}

/**
 * replaceSpecial(s)
 *
 * Replace selected "special characters" with corresponding HTML entities, as well as any character sequences
 * that might be misinterpreted by the Liquid template engine used by Jekyll and GitHub Pages.
 *
 * @param {string} s
 * @return {string}
 */
function replaceSpecial(s)
{
    return s.replace(/&/g, "&amp;").replace(/\|/g, "&#124;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/\$/g, "&#36;").replace(/\*/g, "&#42;").replace(/\[/g, "&#91;").replace(/\\/g, "&#92;").replace(/]/g, "&#93;").replace(/__/g, "&#95;&#95;").replace(/{{/g, "{ {").replace(/}}/g, "} }");
}

/**
 * validateASCII(s, sSource)
 *
 * Verify that all characters in the string are valid (7-bit) ASCII, and replace any characters that are
 * either not supported or not valid.
 *
 * @param {string} s
 * @param {string} sSource
 * @return {string}
 */
function validateASCII(s, sSource)
{
    let sNew = "";
    for (let i = 0; i < s.length;) {
        let ch = s[i];
        let chCode = s.charCodeAt(i++);
        if (chCode >= 0x7F || chCode < 0x20 && chCode != 0x09 && chCode != 0x0A && chCode != 0x0D) {
            ch = "<" + toHex(chCode) + ">";
            console.log(sSource + ", pos " + i + ": unrecognized character " + ch + " (" + chCode + ")");
            /*
             * Some CP-1252 characters slipped into the titles of a few KB articles, so deal with those here.
             */
            if (chCode == 0x91 /* left single quote */ || chCode == 0x92 /* right single quote */) {
                ch = "'";
            }
            if (chCode == 0x93 /* left double quote */ || chCode == 0x94 /* right double quote */) {
                ch = '"';
            }
        }
        sNew += ch;
    }
    return sNew;
}

/**
 * processDir(sDir)
 *
 * @param {string} sDir
 */
function processDir(sDir) {
    fs.readdir(sDir, function(err, aFiles) {
        if (err) {
            throw err;
        }
        let aPaths = aFiles.map(function(sFile) {
            return path.join(sDir, sFile);
        });
        aPaths.forEach(function(sPath) {
            if (fs.statSync(sPath).isDirectory()) {
                processDir(sPath);
                return;
            }
            if (path.extname(sPath) == ".TXT") {
                processFile(sPath);
            }
        });
    });
}

/**
 * processFile(sFile)
 *
 * @param {string} sFile
 */
function processFile(sFile) {
    let sNewDir = sFile.replace("txt/", rootDir + "kb/").replace(".TXT", "");
    let sNewFile = path.join(sNewDir, "README.md");

    // if (TEST) console.log("processing " + sFile + " new dir: " + sNewDir + " new file: " + sNewFile);

    let sText = fs.readFileSync(sFile, "binary");
    /*
        Example text:

        DOCUMENT:Q10022  07-SEP-2001  [word97]
        TITLE   :OFF97: EPS File Is Not Printed or Is Printed Incorrectly in NT
        PRODUCT :Word 97 for Windows
        PROD/VER:WINDOWS:97; winnt:4.0
        OPER/SYS:
        KEYWORDS:kbprint kbPrinting

        ======================================================================
     */
    let re = /DOCUMENT:(Q[0-9]+)\s+([0-9A-Z-]+)\s+\[([^\]]*)]\s*TITLE\s*:([^\r\n]*)\s*PRODUCT\s*:([^\r\n]*)\s*PROD\/VER::?([^\r\n]*)\s*OPER\/SYS:([^\r\n]*)\s*KEYWORDS:([^\r\n]*)\s*=+[\r\n]+/g;
    /*
     * I don't really expect to find more than one KB article per TXT file; this loop is just a hold-over
     * from the script I wrote to generate articles from the monolithic text files captured from the MSPL CD-ROMs.
     */
    let match, aMatches = [];
    while (match = re.exec(sText)) {
        /*
         * match[1]: article identifier
         * match[2]: date
         * match[3]: product code(s)
         * match[4]: article title
         * match[5]: product name(s)
         * match[6]: product version(s)
         * match[7]: operating system(s)
         * match[8]: keyword(s)
         */
        aMatches.push(match);
    }
    for (let i = 0; i < aMatches.length; i++) {
        match = aMatches[i];
        let iBody = match.index + match[0].length;
        let cchBody;
        if (i < aMatches.length - 1) cchBody = aMatches[i+1].index - iBody;
        let sBody = sText.substr(iBody, cchBody).trim();
        let j = sBody.indexOf("\r\nTHE INFORMATION PROVIDED IN THE MICROSOFT KNOWLEDGE BASE IS");
        if (j >= 0) {
            sBody = sBody.substr(0, j);
        } else {
            console.log("warning: no legal notice?");
        }
        processText(match[1], match[4], match[3], match[5], match[6], match[7], match[8], match[2], sBody, sNewDir, sNewFile);
    }
}

/**
 * processText(sID, sTitle, sProductID, sProductName, sProductVersions, sSystem, sKeywords, sDateModified, sText, sNewDir, sNewFile)
 *
 * @param {string} sID
 * @param {string} sTitle
 * @param {string} sProductID
 * @param {string} sProductName
 * @param {string} sProductVersions
 * @param {string} sSystem
 * @param {string} sKeywords
 * @param {string} sDateModified
 * @param {string} sText
 * @param {string} sNewDir
 * @param {string} sNewFile
 */
function processText(sID, sTitle, sProductID, sProductName, sProductVersions, sSystem, sKeywords, sDateModified, sText, sNewDir, sNewFile)
{
    let sNewText = "{% raw %}\n\n";

    sNewText += "\tArticle: " + sID + "\n";
    sNewText += "\tProduct(s): " + sProductName + "\n";
    sNewText += "\tVersion(s): " + sProductVersions + "\n";
    sNewText += "\tOperating System(s): " + sSystem + "\n";
    sNewText += "\tKeyword(s): " + sKeywords + "\n";
    sNewText += "\tLast Modified: " + sDateModified + "\n\t\n";

    let aLines = sText.split(/(?:^|\r?\n) ?/);
    for (let l = 0; l < aLines.length;) {
        sNewText += '\t' + validateASCII(aLines[l++], sID + ", line " + l) + '\n';
    }
    sNewText += "\n{% endraw %}\n";

    let sNewTitle = replaceSpecial(validateASCII(sTitle, sID + " title"));
    let sSiteDir = '/' + sNewDir.replace(rootDir, "");
    sNewText = "---\nlayout: page\ntitle: \"" + sID + ": " + sNewTitle + "\"\npermalink: " + sSiteDir + "/\n---\n\n## " + sID + ": " + sNewTitle + "\n\n" + sNewText;
    if (TEST) return;

    if (!fs.existsSync(sNewDir)) {
        mkdirp.sync(sNewDir);
    }
    const size = fs.existsSync(sNewFile) && fs.statSync(sNewFile).size || 0;
    /*
     * TODO: Add a flag to force overwrites, to be sure everything is updated.  All we can say for sure
     * (without wasting more time reading the file) is that if the sizes are different, the files differ.
     */
    if (size != sNewText.length) fs.writeFileSync(sNewFile, sNewText);

    /*
     * Update listings by product ID, too.
     */
    if (!isAlphaNum(sProductID)) {
        throw new Error(sID + " contains unexpected product ID: " + sProductID);
    }
    sNewDir = rootDir + "id/" + sProductID.toLowerCase();
    if (!fs.existsSync(sNewDir)) {
        mkdirp.sync(sNewDir);
    }
    sNewFile = sNewDir + "/README.md";
    sNewText = "- [" + sID + ": " + sNewTitle + "](../.." + sSiteDir + "/)\n";
    if (!fs.existsSync(sNewFile)) {
        sNewText = "---\nlayout: page\ntitle: \"" + sProductName + "\"\npermalink: /" + sNewDir.replace(rootDir, "") + "/\n---\n\n## KB Articles for " + sProductName + "\n\n" + sNewText;
    }
    fs.appendFileSync(sNewFile, sNewText);
}

if (process.argv.length <= 2) {
    console.log("usage: node genmd [input directory]");
    process.exit();
}

try {
    processDir(process.argv[2]);
}  catch (err) {
    console.log(err.message);
}
