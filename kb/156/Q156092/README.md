---
layout: page
title: "Q156092: How to Make Program Manager the Shell in Windows NT 4.0"
permalink: /kb/156/Q156092/
---

## Q156092: How to Make Program Manager the Shell in Windows NT 4.0

	Article: Q156092
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 4.0 ships with a new shell, Explorer.exe. This can be changed to
	Program Manager by modifying a registry setting.
	
	MORE INFORMATION
	================
	
	To change the shell from Explorer to Program Manager, modify the following
	registry key:
	
	WARNING: Using Registry Editor can cause serious, system-wide errors that may
	require you to reinstall Windows NT. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	  \Software\Microsoft\WindowsNT\CurrentVersion\Winlogon\Shell
	  (currently Explorer.exe).
	
	3. Change Explorer.exe to Progman.exe.
	
	4. Quit Registry Editor; shut down and restart the system.
	
	If this is a new setup of Windows NT 4.0 you will have to create all Program
	Manager groups because Windows NT 4.0 setup does not create any Program Manager
	groups. If this is an upgrade from a previous version of Windows NT, you will
	have to create program groups for any applications you installed after
	installing Windows NT 4.0, because Explorer does not use program group files.
	Program groups will be created for any applications you install after changing
	your shell to Program Manager.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
