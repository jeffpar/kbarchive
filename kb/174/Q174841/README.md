---
layout: page
title: "Q174841: How to Manage Windows Tips at Startup"
permalink: /kb/174/Q174841/
---

## Q174841: How to Manage Windows Tips at Startup

	Article: Q174841
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the Restoring
	the Registry online Help topic in Regedit.exe or the Restoring a Registry
	Key online Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	You can add, delete, or change the Welcome tips that are displayed when a user
	logs on.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the Changing Keys And Values
	online Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and Edit Registry Data topics in Regedt32.exe. Note
	that you should back up the registry before you edit it.
	
	The value name starts with 0 and progresses sequentially with no gaps. You may
	Add Value, change the text of a value, or delete the last or all values and
	start over.
	
	The Tips are stored as sequentially named REG_SZ entries in:
	
	HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion
	\Explorer\Tips
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	The control for the Tips is user based and is located at:
	
	HKEY_USERS\<User's ID>\Software\Microsoft\Windows\CurrentVersion
	\Explorer\Tips
	
	as two (2) REG_BINARY entries.
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	Show: Controls whether the Tips are displayed. 01000000 enables the display,
	while 00000000 disables it.
	
	Next: Controls which Tip is displayed next. 00000000 displays Tip 0, 01000000
	displays Tip 1 and 0a000000 displays Tip 10.
	
	Additional query words: startup show
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
