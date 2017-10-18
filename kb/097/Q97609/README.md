---
layout: page
title: "Q97609: CONVERT.BAT Fails with a Syntax Error if You Are Running NDOS"
permalink: kb/097/Q97609/
---

## Q97609: CONVERT.BAT Fails with a Syntax Error if You Are Running NDOS

	Article: Q97609
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Conversion Disk for users of the Stacker CONVERT.BAT file does not run with
	Symantec's Norton Utilities NDOS command interpreter. If NDOS is loaded when you
	try to run the conversion program, it fails before any actions are performed and
	displays the following error message:
	
	  Syntax error "<path>\dblspace.exe"
	  Deleting a:\zz.bat
	
	  1 files(s) deleted
	
	The MS-DOS Stacker conversion program cannot continue because it could not find
	your copy of the DBLSPACE.EXE file. The DBLSPACE.EXE should be located in the
	directory that contains your MS-DOS files.
	
	Add your MS-DOS directory to your search path, and then run CONVERT again. (For
	information about changing your search path, type "HELP PATH" (without the
	quotation marks) at the command prompt.)
	
	CAUSE
	=====
	
	The problem occurs when the GETPATH.BAT file (called by CONVERT.BAT) issues the
	following command because NDOS does not accept the semicolons (;) in the current
	path as separators:
	
	  for %%f in (%PATH%) do call zz %%f
	
	Additional query words: 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
