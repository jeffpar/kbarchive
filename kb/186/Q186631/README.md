---
layout: page
title: "Q186631: Modifying Terminal Server Clients Default Windows Directory Name"
permalink: kb/186/Q186631/
---

## Q186631: Modifying Terminal Server Clients Default Windows Directory Name

	Article: Q186631
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
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	By default, each Terminal Server user gets a system directory in the user's home
	directory, called Windows. This is the recommended name. However, it is
	sometimes useful to use a different name. For instance, users migrating .ini
	file and .grp file settings to Terminal Server from computers that do not use
	Windows as the system directory name might find it useful to specify a different
	name.
	
	MORE INFORMATION
	================
	
	This will be a global change and will affect all users.
	
	To use a directory name other than Windows, perform the following steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Start Registry Editor (Regedt32.exe), and go to the following subkey:
	
	     HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion
	        \Terminal Server
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. On the Edit menu, click Add Key, and type the following information:
	
	  Key Name: Windows
	
	3. On the Edit menu, click Add Value, and type the following information:
	
	  Value Name: UserDirectoryName
	  Data Type: REG_SZ
	
	  With the value being the new Windows directory name. For example:
	
	        HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion
	        \Terminal Server\Windows\UserDirectoryName = WIN31
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
