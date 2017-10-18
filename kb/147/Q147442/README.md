---
layout: page
title: "Q147442: Hover! Does Not Run with Windows NT Version 3.5 or Win32s"
permalink: kb/147/Q147442/
---

## Q147442: Hover! Does Not Run with Windows NT Version 3.5 or Win32s

	Article: Q147442
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11,3.5,95
	Operating System(s): 
	Keyword(s): win31 win95 appscomp kbAppCompatibility
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience the following symptoms when you try to run the Microsoft
	Hover! game included on the Windows 95 CD-ROM:
	
	- If you try to run Hover! with Windows NT Workstation or Windows NT Server
	  version 3.5, you receive the following error message:
	
	  HOVER.exe Entry Point Not Found.
	  The procedure entry point <function> could not be located in the dynamic
	  link library <filename>.
	
	  If you click OK, you receive the following message:
	
	  Application error.
	  Failed to initialize properly.
	
	- If you try to run Hover! with Windows or Windows for Workgroups version 3.1
	  or 3.11 and Win32s, you receive the following error message:
	
	  The procedure entry point "CreateDIBSection" could not be located in the DLL
	  "w32scomb.dll."
	
	  If you click OK, one of the following error messages may be displayed,
	  depending on the version of Win32s that is installed:
	
	  - Cannot Run Program.
	  Unexpected error: 21
	
	  - MSVCRT20.DLL for Win32.
	  This version of MSVCRT20.DLL is not compatible with Win32s.
	
	CAUSE
	=====
	
	Hover! is not compatible with Windows NT Workstation version 3.5, Windows NT
	Server version 3.5, or Windows or Windows for Workgroups version 3.1 or 3.11 and
	Win32s.
	
	RESOLUTION
	==========
	
	You can run Hover! only with Windows 95.
	
	Additional query words: 3.10 3.11 win32
	
	======================================================================
	Keywords          : win31 win95 appscomp kbAppCompatibility 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbWin95search kbWFWSearch kbZNotKeyword3 kbWFW310 kbWFW311
	Version           : :3.1,3.11,3.5,95
	
	=============================================================================
	
