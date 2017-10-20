# Microsoft KnowledgeBase Archive

This repository was initially populated with KB content from Microsoft's FTP archive, circa 2002, and
then back-filled with KB articles from other sources (eg, Microsoft Programmer's Library CD-ROM).  The scripts
used:

	node scripts/genmd.js txt | tee scripts/genmd.log
	node ../pcjs/modules/shared/bin/kbgen ../pcjs/pubs/pc/reference/microsoft/mspl13/archive/basic/basknow.txt
	node ../pcjs/modules/shared/bin/kbgen ../pcjs/pubs/pc/reference/microsoft/mspl13/archive/msc/mscknl.txt
	node ../pcjs/modules/shared/bin/kbgen ../pcjs/pubs/pc/reference/microsoft/mspl13/archive/masm/masmknwl.txt

TODO: Add a step for sorting all indexes stored in the [id](id/) folder.  For the *genmd* script, index order
is dependent on the file system, and for the *kbgen* script, index order is determined by the order of the articles
in the MSPL13 *txt* files.  Currently, the [mspl13_basic](id/mspl13_basic), [mspl13_c](id/mspl13_c), and
[mspl13_masm](id/mspl13_masm) indexes are sorted by hand.

All the original text files have been [converted](scripts/genmd.js) to Markdown files in preparation for
publishing via GitHub Pages.  The boilerplate legal notices have been removed from the Markdown files,
in part to save a little space, but they will be restored by the page template that's used to publish them.

A [log file](scripts/genmd.log) records the use of non-ASCII characters.  These haven't been examined yet,
so it's unclear if the files used CP-437, CP-1252, UTF-8, or some other character set.  In some cases, it might
simply be garbled data, or binary data that should have been translated to something readable.
