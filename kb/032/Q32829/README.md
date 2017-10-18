---
layout: page
title: "Q32829: PRB: L1089 Error, TMP Environment Variable Missing, Incorrect"
permalink: kb/032/Q32829/
---

## Q32829: PRB: L1089 Error, TMP Environment Variable Missing, Incorrect

	Article: Q32829
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.x,4.x,5.0x,5.1,5.11,5.13,5.15,5.3,5.31.009,5.5,5.6
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.x, 4.x, 5.0x, 5.1, 5.11, 5.13, 5.15, 5.3, 5.31.009, 5.5, 5.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to link an application with Microsoft LINK fails and the following
	message appears on the screen:
	
	  L1089 'filename' : cannot open response file
	
	CAUSE
	=====
	
	Either the TMP environment variable is not set correctly or it is missing from
	the environment.
	
	RESOLUTION
	==========
	
	Modify the AUTOEXEC.BAT file to set the TMP environment variable to a valid
	directory path. For example,
	
	  set tmp=c:\temp
	
	Additional query words: 3.00 3.01 3.02 3.04 3.05 3.06 3.51 3.55 3.60 3.64 3.65 3.69 4.06 4.07 4.10 5.01.20 5.01.21 5.02 5.03 5.05 5.10 5.11 5.13 5.15 5.30 5.31.009 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK3xDOSSearch kbLINK4xDOSSearch kbLINK50xDOSSearch kbLINK510DOS kbLINK511DOS kbLINK513DOS kbLINK515DOS kbLINK530DOS kbLINK53109DOS kbLINK550DOS kbLINK560DOS
	Version           : MS-DOS:3.x,4.x,5.0x,5.1,5.11,5.13,5.15,5.3,5.31.009,5.5,5.6
	
	=============================================================================
	
