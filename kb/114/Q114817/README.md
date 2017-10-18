---
layout: page
title: "Q114817: No Shutdown Button in Windows NT Server Welcome Screen"
permalink: kb/114/Q114817/
---

## Q114817: No Shutdown Button in Windows NT Server Welcome Screen

	Article: Q114817
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Windows NT Workstation, the Shutdown button is available in the Welcome
	screen after pressing CTRL+ALT+DEL to log on. However, in Windows NT Server, the
	Shutdown button is not available by default.
	
	MORE INFORMATION
	================
	
	The ability to display the Shutdown button is configurable for both Workstation
	and Server versions of the operating system via the Registry.
	
	Follow these steps to configure this option for Windows NT Workstation and
	Windows NT Server:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be resolved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SOFTWARE\Microsoft\WindowsNT\CurrentVersion\Winlogon
	
	3. Double-click ShutdownWithoutLogon.
	
	4. Change the value of the string to 1 to make the Shutdown button available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
