#!/usr/bin/env node
/**
 * @fileoverview Script for generating Markdown (.md) files from extracting KnowledgeBase (.TXT) files
 * @author <a href="mailto:Jeff@pcjs.org">Jeff Parsons</a>
 */

"use strict";

let fs = require("fs");
let path = require("path");
let mkdirp = require("mkdirp");

/**
 * toHex(n, cch)
 *
 * Number.toString(16) will work, too, but it doesn't support fixed-length output.
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
    try {
        let sNewDir = sFile.replace("kbtxt/", "kb/").replace(".TXT", "");
        let sNewFile = path.join(sNewDir, "README.md");

        // console.log("processing " + sFile + " new dir: " + sNewDir + " new file: " + sNewFile);

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
        let re = /DOCUMENT:(Q[0-9]+)\s+([0-9A-Z-]+)\s+\[([^\]]*)\]\s*TITLE\s*:([^\r\n]*)\s*PRODUCT\s*:([^\r\n]*)\s*PROD\/VER::?([^\r\n]*)\s*OPER\/SYS:([^\r\n]*)\s*KEYWORDS:([^\r\n]*)\s*=+[\r\n]+/g;
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
    catch (err) {
        console.log(err.message);
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
    try {
        let sNewText = "";
        sNewText += "\tArticle: " + sID + "\n";
        sNewText += "\tProduct(s): " + sProductName + "\n";
        sNewText += "\tVersion(s): " + sProductVersions + "\n";
        sNewText += "\tOperating System(s): " + sSystem + "\n";
        sNewText += "\tKeyword(s): " + sKeywords + "\n";
        sNewText += "\tLast Modified: " + sDateModified + "\n\t\n";
        let aLines = sText.split(/(?:^|\r?\n) ?/);
        for (let l = 0; l < aLines.length;) {
            let sNewLine = "";
            let sLine = aLines[l++];
            for (let i = 0; i < sLine.length;) {
                let ch = sLine[i];
                let chCode = sLine.charCodeAt(i++);
                if (chCode >= 0x7F || chCode < 0x20 && chCode != 0x09 && chCode != 0x0A && chCode != 0x0D) {
                    ch = "<" + toHex(chCode) + ">";
                    console.log(sID + ", line " + l + ", pos " + i + ": unrecognized character " + ch + " (" + chCode + ")");
                }
                sNewLine += ch;
            }
            /*
             * The Liquid template engine gets confused by {{...}} sequences, even though they're inside code blocks,
             * so we insert spaces between the braces.
             */
            sNewText += '\t' + sNewLine.replace(/{{/g, "{ {").replace(/}}/g, "} }") + '\n';
        }
        let sSiteDir = sNewDir.replace("../", "/");
        sTitle = sTitle.replace(/&/g, "&amp;").replace(/\|/g, "&#124;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/\\/g, "&#92;").replace(/\$/g, "&#36;").replace(/\*/g, "&#42;").replace(/__/g, "&#95;&#95;").replace(/{{/g, "{ {").replace(/}}/g, "} }");
        sNewText = "---\nlayout: page\ntitle: \"" + sID + ": " + sTitle + "\"\npermalink: " + sSiteDir + "/\n---\n\n## " + sID + ": " + sTitle + "\n\n" + sNewText;
        if (!fs.existsSync(sNewDir)) mkdirp.sync(sNewDir);
        fs.writeFileSync(sNewFile, sNewText);
    }
    catch(err) {
        console.log(err.message);
    }
}

if (process.argv.length <= 2) {
    console.log("usage: node genmd [input directory]");
    process.exit();
}

processDir(process.argv[2]);
