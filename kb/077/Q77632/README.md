---
layout: page
title: "Q77632: Trailing Spaces in SET TEMP Returns Error in MS-DOS Shell"
permalink: kb/077/Q77632/
---

## Q77632: Trailing Spaces in SET TEMP Returns Error in MS-DOS Shell

	Article: Q77632
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you try to invoke an executable
	file from MS-DOS Shell:
	
	  BAD COMMAND OR FILENAME
	
	SHIFT+F9 works properly, but program items, the Run command on the File menu, and
	choosing an executable from the file list do not work.
	
	CAUSE
	=====
	
	These symptoms occur if the SET TEMP= statement in your AUTOEXEC.BAT file
	contains one or more trailing blank spaces as the last character(s). For
	example, in the statement
	
	  set temp=c:\tempdir
	
	any blank space(s) after the letter "r" in "tempdir" cause the above error. This
	error occurs if the TEMP variable containing the trailing space is set to any
	directory other than the root.
	
	The error message is displayed if an executable file is invoked by any of the
	following methods:
	
	- Pressing ENTER or double-clicking a program listed in the program list of the
	  Main group.
	
	- Pressing ENTER or double-clicking the executable filename under the file
	  list.
	
	- Choosing Run from the File menu and entering the executable file name on the
	  command line.
	
	WORKAROUND
	==========
	
	To determine if this is the problem, exit Shell, and enter the following command
	at the MS-DOS command prompt:
	
	  set temp=c:\ 
	
	This command sets the temporary directory to the root. Start Shell, then invoke
	the executable file by using one of the above methods.
	
	If this corrects the problem, remove any trailing blanks on the SET TEMP= line in
	the AUTOEXEC.BAT file.
	
	Additional query words: 5.00 6.00 dosshell doshell
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	
