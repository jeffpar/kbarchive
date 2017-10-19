---
layout: page
title: "Q168230: WinNT Err Msg: Cannot Find the Working Folder for This Program"
permalink: /kb/168/Q168230/
---

## Q168230: WinNT Err Msg: Cannot Find the Working Folder for This Program

	Article: Q168230
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 clients may receive the following dialog box just before the
	processing the logon script:
	
	  Cannot find the working folder for this program. The program may have
	  difficulty locating its files and documents. Make sure that the working
	  folder is specified properly in the property sheets for the program and any
	  shortcuts to it.
	
	  Do you wish to run the program anyway?
	
	If you click YES, the logon script runs.
	If you click NO, the logon script does not run.
	
	CAUSE
	=====
	
	This message is caused because the Lmscript.exe property sheet in the Working
	directory field refers to an inaccessible or nonexistent directory.
	
	RESOLUTION
	==========
	
	1. Right click %WINDIR%\System\Lmscript.exe.
	
	2. Select the Program tab.
	
	3. Specify a valid directory in the Working field. The default directory is the
	  current directory and can be specified by placing a period "." in the field.
	
	Additional query words: login domain dot
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
