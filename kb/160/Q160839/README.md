---
layout: page
title: "Q160839: Delay Occurs When Unlocking Workstation"
permalink: kb/160/Q160839/
---

## Q160839: Delay Occurs When Unlocking Workstation

	Article: Q160839
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt.32.exe.
	
	SUMMARY
	=======
	
	A noticeable delay occurs when the logged on user or an administrator attempts
	to unlock a workstation.
	
	MORE INFORMATION
	================
	
	Windows NT 4.0 will update the domain list if the cached list's age exceeds two
	minutes (by default). This feature is beneficial to users from a newly trusted
	domain who need to log on to workstations or servers that have been locked by a
	previous user.
	
	Adjusting the following registry entry allows modification to the time period in
	which the domain list becomes out-of-date. The valid range for this entry is 2
	minutes (default) to 1 day, specified in the number of seconds. Note that
	modifying this value could result in users not seeing the current domain list.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To modify this value, perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe), modify (or create if necessary) the
	  following:
	
	  Hive:   HKEY_LOCAL_MACHINE
	  Key:    Software\Microsoft\Windows NT\CurrentVersion\Winlogon
	  Value:  DcacheMinInterval
	  Type:   REG_DWORD
	  Data:   120-86400 (decimal)(expressed in seconds)
	
	2. Quit Registry Editor and restart your computer for these changes to take
	  effect.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
