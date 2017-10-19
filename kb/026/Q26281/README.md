---
layout: page
title: "Q26281: Redirection Disables REM in Batch Files"
permalink: /kb/026/Q26281/
---

## Q26281: Redirection Disables REM in Batch Files

	Article: Q26281
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	In Microsoft MS-DOS versions 3.2 and later, redirection has higher priority
	than the REM command. For example, the following batch file causes the file
	test to contain either "BBBBB" or zero bytes after the REM statement,
	depending on which version of MS-DOS your are using. In other words, the
	redirection symbol is not disabled by the REM statement.
	
	     echo AAAAA > test
	     type test
	     REM echo BBBBB test > test
	     type test
	
	Even if you comment out the redirection with a REM statement, it still
	occurs, nullifying the file (because the REM command ensures that nothing
	would be redirected into the file).
	
	Additional query words: 6.22 3.2 3.21, 4.x 5.x 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
