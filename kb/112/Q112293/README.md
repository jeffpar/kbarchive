---
layout: page
title: "Q112293: Installing WINUP9.EXE Files During WFWG 3.11 Installation"
permalink: /kb/112/Q112293/
---

## Q112293: Installing WINUP9.EXE Files During WFWG 3.11 Installation

	Article: Q112293
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you provide Novell NetWare 4.x client software earlier than WINUP9.EXE when
	you install Windows for Workgroups 3.11, the correct .DLL files may not be
	copied.
	
	CAUSE
	=====
	
	The Windows for Workgroups 3.11 NetWare 4 installation code was written with the
	assumption that the current NetWare 4.x client files are provided in WINUP8.EXE.
	WINUP9.EXE contains a different list of files and includes a new .DLL.
	
	WORKAROUND
	==========
	
	To work around this problem, install the WINUP9.EXE files, and then install
	Windows for Workgroups version 3.11. (Be sure to select NetWare version 4
	support.)
	
	MORE INFORMATION
	================
	
	The correct .DLL files are copied over if you install Windows for Workgroups
	3.11 under the following scenarios:
	
	- You are using WINUP8.EXE files.
	
	- You were running WINUP9.EXE with Windows 3.1 or Windows for Workgroups 3.1
	  and then upgraded to Windows for Workgroups 3.11.
	
	- You were using WINUP8.EXE files, upgraded to Windows for Workgroups 3.11, and
	  then installed the WINUP9.EXE files manually.
	
	- You were running DOSUP8.EXE files, upgraded to Windows for Workgroups 3.11,
	  and provided the WINUP8.EXE files as requested by Windows for Workgroups
	  Setup.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q121462 Obtaining Latest Novell Client Windows Drivers and DLLs
	
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
