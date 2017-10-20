# Microsoft KnowledgeBase Archive

This repository was initially populated with KB content from Microsoft's FTP archive, circa 2002, and
then back-filled with KB articles from other sources (eg, Microsoft Programmer's Library CD-ROM).

All the original text files have been [converted](scripts/genmd.js) to Markdown files in preparation for
publishing via GitHub Pages.  The boilerplate legal notices have been removed from the Markdown files,
in part to save a little space, but they will be restored by the page template that's used to publish them.

A [log file](scripts/genmd.log) records the use of non-ASCII characters.  These haven't been examined yet,
so it's unclear if the files used CP-437, CP-1252, UTF-8, or some other character set.  In some cases, it might
simply be garbled data, or binary data that should have been translated to something readable.
