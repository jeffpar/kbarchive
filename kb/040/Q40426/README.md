---
layout: page
title: "Q40426: PRB: L1083 Error From Incorrect CONFIG.SYS FILES Statement"
permalink: kb/040/Q40426/
---

## Q40426: PRB: L1083 Error From Incorrect CONFIG.SYS FILES Statement

	Article: Q40426
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.x,4.x,5.01.20,5.01.21,5.02,5.03,5.05,5.1,5.11,5.13,5.15,5.3,5.31.009,5.5,5.6
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.x, 4.x, 5.01.20, 5.01.21, 5.02, 5.03, 5.05, 5.1, 5.11, 5.13, 5.15, 5.3, 5.31.009, 5.5, 5.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to link a file fails and Microsoft LINK generates the following
	message:
	
	  L1083 Cannot Open Run File
	
	CAUSE
	=====
	
	The four most likely causes for this error are as follows:
	
	- The FILES statement in the CONFIG.SYS file specifies more than 20 files in
	  versions of MS-DOS prior to version 3.3.
	
	- The FILES statement includes one or more space characters before or after the
	  equals sign (=)
	
	- The FILES statement contains trailing spaces.
	
	- The application is still running in another window.
	
	Other possible causes of this error are:
	
	- The disk or the root directory was full.
	
	- Another process opened or deleted the file.
	
	- A read-only file existed with the same name.
	
	- The floppy disk containing the file was removed.
	
	- A hard-disk error occurred. (Try running chkdsk.)
	
	RESOLUTION
	==========
	
	To address this problem, edit the CONFIG.SYS file to decrease the number of
	files specified in the FILES statement, delete any embedded or trailing spaces
	in the FILES statement, or update to MS-DOS version 3.3 or later. Also make sure
	all previous instances of the application have been terminated.
	
	Additional query words: 3.00 3.60 4.10 5.10 5.30 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK3xDOSSearch kbLINK4xDOSSearch kbLINK50120DOS kbLINK50121DOS kbLINK503DOS kbLINK510DOS kbLINK511DOS kbLINK513DOS kbLINK515DOS kbLINK530DOS kbLINK53109DOS kbLINK550DOS kbLINK560DOS kbLINK505DOS
	Version           : MS-DOS:3.x,4.x,5.01.20,5.01.21,5.02,5.03,5.05,5.1,5.11,5.13,5.15,5.3,5.31.009,5.5,5.6
	
	=============================================================================
	
