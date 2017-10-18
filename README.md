# Microsoft KnowledgeBase Archive (circa 2002)

This repository contains all the KB content from Microsoft's FTP archive, circa 2002.

It started with a collection of 56,989 TXT files, which were then [converted](scripts/genmd.js) to Markdown files
in anticipation of publishing the content using GitHub Pages.  The original TXT files have not been stored in the
repository, since they can be obtained from snapshots of Microsoft's FTP archive elsewhere, and since the Markdown
files are virtually identical, with only minor reformatting of the headers (to make them consistent with the way KB
articles were formatted in the Microsoft Programmer's Library CD-ROMs) and removal of the boilerplate legal notices
(which will be restored prior to publishing, via a page template).

A [log file](scripts/genmd.log) recorded the use of any non-ASCII characters.  These haven't been examined yet,
so it's unclear if the files used CP-437, CP-1252, UTF-8, or some other character set.
