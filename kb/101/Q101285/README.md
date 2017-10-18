---
layout: page
title: "Q101285: WFWG Err Msg: STOP! You Must Type a Full Path Including..."
permalink: kb/101/Q101285/
---

## Q101285: WFWG Err Msg: STOP! You Must Type a Full Path Including...

	Article: Q101285
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to share a local printer, you may receive the following error
	message:
	
	  STOP! you must type a full path including a drive letter
	
	CAUSE
	=====
	
	This error occurs when the TEMP environment variable is set to a directory that
	does not exist.
	
	WORKAROUND
	==========
	
	To correct this situation:
	
	1. Edit the AUTOEXEC.BAT file with a text editor, such as Microsoft Windows
	  Notepad. Ensure the SET TEMP statement is similar to the following:
	
	        SET TEMP=C:\WINDOWS\TEMP
	
	2. Run File Manager and ensure there is a C:\WINDOWS\TEMP directory. If there is
	  not, choose Create Directory from the File menu and create C:\WINDOWS\TEMP.
	
	3. If you changed your AUTOEXEC.BAT file in step 1, you need to exit Windows for
	  Workgroups and restart your computer.
	
	Additional query words: 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
