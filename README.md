# Microsoft KnowledgeBase Archive (circa 2002)

This repository contains all the KB content from Microsoft's FTP archive, circa 2002.

All 56,989 TXT files have been [converted](scripts/genmd.js) to Markdown files in preparation for publishing
via GitHub Pages.  The boilerplate legal notices have been removed from the Markdown files, in part to save a
little space, but they will be restored by the page template that is used to published them.

A [log file](scripts/genmd.log) records the use of non-ASCII characters.  These haven't been examined yet,
so it's unclear if the files used CP-437, CP-1252, UTF-8, or some other character set.  In some cases, it might
simply be garbled data, or binary data that should have been translated to something readable.
