---
layout: page
title: "Q159929: User Manager Fails at Startup If Windows 95 Is in the Path"
permalink: kb/159/Q159929/
---

## Q159929: User Manager Fails at Startup If Windows 95 Is in the Path

	Article: Q159929
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT Workstation computers running User Manager for Domains from the
	Clients\Srvtools\Winnt directory of the Windows NT Server 4.0 CD may receive the
	following error at startup:
	
	  The dynamic link library MSNET32.dll could not be found in the specified
	  path.
	
	The error is followed by the search path used to locate the apparently missing
	DLL.
	
	CAUSE
	=====
	
	Msnet32.dll is not a Windows NT 4.0 file. The error occurs when the directory
	for Windows 95 or the Windows NT Server Tools for Windows 95 (NEXUS) are in the
	environment path.
	
	RESOLUTION
	==========
	
	1. Type "SET" (without the quotation marks) from the Windows NT command prompt
	  to see if Windows 95 or the Windows NT Server tools are in the search path.
	
	2. Check the Environment tab in the Control Panel System and remove conflicting
	  paths if any are present.
	
	3. If there are no conflicting paths, remove the offending path from the
	  Autoexec.bat and Autoexec.nt files. You can disable parsing of the
	  Autoexec.bat file by setting the ParseAutoexec.bat (Reg_sz) entry to 0
	  under:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows\NTCurrentVersion\Winlogon
	
	Additional query words: prodnt user manager server tools
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
