---
layout: page
title: "Q65444: Using Invalid Shell in SYSTEM.INI File Causes UAE"
permalink: kb/065/Q65444/
---

## Q65444: Using Invalid Shell in SYSTEM.INI File Causes UAE

	Article: Q65444
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You must have a valid filename for the shell you use with Microsoft Windows
	version 3.0 or you an Unrecoverable Application Error (UAE)is displayed when you
	start Windows.
	
	A valid file name can include Windows applications only, not MS-DOS applications.
	All other file names are invalid to use on this line and cause Windows to
	generate a UAE when it starts.
	
	MORE INFORMATION
	================
	
	Windows uses the shell referenced in the SYSTEM.INI file with the SHELL= line.
	For example, if you want to use the Windows 3.0 File Manager as the Windows
	shell, do the following:
	
	1. Use a text editor such as NOTEPAD.EXE or SYSEDIT.EXE to load the SYSTEM.INI
	  file.
	
	2. Under the [Boot] section of the SYSTEM.INI, edit the SHELL= line to read
	  SHELL=WINFILE.EXE.
	
	Note that the filename for File Manager is WINFILE.EXE, NOT FILEMAN.EXE as is
	often assumed.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
