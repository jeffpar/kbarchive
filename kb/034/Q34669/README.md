---
layout: page
title: "Q34669: PRB: L1087: &quot;Unexpected End-of-File on Scratch File&quot;"
permalink: /kb/034/Q34669/
---

## Q34669: PRB: L1087: &quot;Unexpected End-of-File on Scratch File&quot;

	Article: Q34669
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.x,4.x,5.01,5.1x,5.3,5.31.009,5.5,5.6; OS/2:5.1x,5.3,5.31.009
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.x, 4.x, 5.01, 5.1x, 5.3, 5.31.009, 5.5, 5.6 
	- Microsoft LINK for OS/2, versions 5.1x, 5.3, 5.31.009 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to link an application fails and Microsoft LINK generates the
	following message:
	
	  L1087: Unexpected end-of-file on scratch file
	
	CAUSE
	=====
	
	LINK generates this error when a problem occurs with the disk that holds the
	temporary linker-output file. This disk can be a floppy disk, a hard disk, or a
	RAM disk. Most likely, one of the following occurred:
	
	- The disk that holds the temporary file was removed from its drive.
	
	- The disk that holds the temporary file has insufficient space to hold the
	  file.
	
	RESOLUTION
	==========
	
	Make sure that the disk is available and that is has enough free space to
	contain the linker-output file. If the error persists, change the TMP
	environment variable to specify a directory on a hard disk instead of a RAM
	disk.
	
	Additional query words: 3.00 3.01 3.02 3.04 3.05 3.06 3.51 3.55 3.60 3.61 3.64 3.65 3.69 4.06 4.07 4.10 5.01.20 5.01.21 5.10 5.13 5.15 5.30 5.31.009 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK3xDOSSearch kbLINK4xDOSSearch kbLINK510xDOSSearch kbLINK530DOS kbLINK53109DOS kbLINK550DOS kbLINK560DOS kbLINK530OS2
	Version           : MS-DOS:3.x,4.x,5.01,5.1x,5.3,5.31.009,5.5,5.6; OS/2:5.1x,5.3,5.31.009
	
	=============================================================================
	
