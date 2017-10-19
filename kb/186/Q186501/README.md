---
layout: page
title: "Q186501: Enabling Auto Admin Logon on the Terminal Server Console"
permalink: /kb/186/Q186501/
---

## Q186501: Enabling Auto Admin Logon on the Terminal Server Console

	Article: Q186501
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	Registry" Help topic in Regedit.exe or the "Restoring a Registry Key" Help
	topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	To have a Terminal Server computer start up and automatically log on with an
	administrator account, modify the registry using Registry Editor (Regedt32.ese).
	This will not affect Terminal Server Client logon attempts.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe), and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT
	     \CurrentVersion\Winlogon
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. Add the following values to Winlogon:
	
	     AutoAdminLogon: REG_SZ: 1
	     DefaultUserName: REG_SZ: <username>
	     DefaultPassword: REG_SZ: <Password for username>
	     DefaultDomainName: REG:SZ: <Domain for username>
	     DontDisplayLastUserName: REG_SZ: 0
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
