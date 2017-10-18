---
layout: page
title: "Q72740: Bypassing the 'Welcome to MS-DOS QBasic' Window"
permalink: kb/072/Q72740/
---

## Q72740: Bypassing the 'Welcome to MS-DOS QBasic' Window

	Article: Q72740
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you start the QBasic interpreter, the first screen will contain a window
	with the message "Welcome to MS-DOS QBasic" with additional lines following. To
	prevent this window from appearing when running QBasic, use the following
	command, where /run is optional but the filename must be specified:
	
	  qbasic [/run] [[drive:][path]filename]
	
	MORE INFORMATION
	================
	
	More specifically, only the following three commands will start QBasic without
	displaying an initial message window:
	
	  Command                               Comments
	  -------                               --------
	
	  qbasic /run [valid qbasic filename]   Runs an existing QBasic program
	
	  qbasic [valid qbasic filename]        Loads an existing QBasic
	                                        program displaying the program
	                                        lines
	
	  qbasic [nonexistent filename]         Loads a non-existent file
	                                        displaying a blank editing
	                                        screen
	
	Running QBasic using the /run switch or loading a valid QBasic program guarantees
	no initial window but does not guarantee a blank first screen. Only using the
	third command, which specifies the path of a filename that does not exist, will
	bring up the initial editing screen blank.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 6.21
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
