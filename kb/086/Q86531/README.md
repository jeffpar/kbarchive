---
layout: page
title: "Q86531: Only One or Two Icons in Control Panel"
permalink: /kb/086/Q86531/
---

## Q86531: Only One or Two Icons in Control Panel

	Article: Q86531
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Windows version 3.1 Control Panel, only one or two icons
	appear.
	
	CAUSE
	=====
	
	One of the following files may be missing or corrupt, or the files may be
	located in the Windows directory, instead of the Windows \SYSTEM directory.
	
	- COMMDLG.DLL
	
	- VER.DLL
	
	- LZEXPAND.DLL
	
	WORKAROUND
	==========
	
	To resolve the problem, use the EXPAND.EXE utility to reinstall the .DLL file(s)
	from the Windows 3.1 Setup disks. (COMMDLG.DLL is on disk4 of the 5.25-inch and
	3.5-inch disks.)
	
	MORE INFORMATION
	================
	
	If one of these files is corrupted, Control Panel only displays one icon in
	standard mode and two icons in 386 enhanced mode.
	
	Other symptoms occur when starting an application that uses the COMMDLG.DLL file,
	such as Write or Notepad. An error occurs if an application tries to use
	COMMDLG.DLL and the file is corrupted. The following error message may be
	generated:
	
	  One of the library files needed to run this application is damaged. Please
	  reinstall this application.
	
	KBCategory: kbsetup kbprb
	KBSubcategory: win31
	
	Additional query words: 3.10 3.11 2 1
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
