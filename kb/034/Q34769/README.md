---
layout: page
title: "Q34769: PRB: LINK Error &quot;Do Not Change Diskette in Drive C&quot;"
permalink: /kb/034/Q34769/
---

## Q34769: PRB: LINK Error &quot;Do Not Change Diskette in Drive C&quot;

	Article: Q34769
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.x,5.01.20,5.01.21,5.03,5.05,5.1,5.13,5.15,5.3,5.31.009,5.5,5.6
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.x, 5.01.20, 5.01.21, 5.03, 5.05, 5.1, 5.13, 5.15, 5.3, 5.31.009, 5.5, 5.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to link an application fails and Microsoft LINK generates the
	following message:
	
	  Temporary file .\xxxxxxxx has been created
	  Do not change diskette in drive C:
	
	CAUSE
	=====
	
	Not enough memory is available to link the application. The message appears when
	the linker generates a file on disk and the disk does not have enough room to
	hold the file. This situation occurs when the TMP environment variable does not
	exist, when it specifies a nonexistent or full directory, and when the disk that
	contains the directory is almost full.
	
	If you are compiling an application with Microsoft FORTRAN and linking with LINK
	version 3.55, reset the TMP environment variable to point to the root directory
	of a hard disk. This procedure may clear the error. If the TMP environment
	variable is set to a ramdrive or a network drive, setting it to point to a
	subdirectory on a hard disk may help.
	
	Additional query words: 3.x 5.01.20 5.01.21 5.03 5.05 5.10 5.13 5.15 5.30 5.31.009 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK3xDOSSearch kbLINK50120DOS kbLINK50121DOS kbLINK503DOS kbLINK510DOS kbLINK513DOS kbLINK515DOS kbLINK530DOS kbLINK53109DOS kbLINK550DOS kbLINK560DOS kbLINK505DOS
	Version           : MS-DOS:3.x,5.01.20,5.01.21,5.03,5.05,5.1,5.13,5.15,5.3,5.31.009,5.5,5.6
	
	=============================================================================
	
