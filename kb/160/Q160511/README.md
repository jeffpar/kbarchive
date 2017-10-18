---
layout: page
title: "Q160511: Regsec.exe Gives Strange Results for Non-Administrator"
permalink: kb/160/Q160511/
---

## Q160511: Regsec.exe Gives Strange Results for Non-Administrator

	Article: Q160511
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows NT Server or Workstation 4.0 Resource Kit now includes a utility
	called Regsec.exe. This utility removes the Everyone group from the root of the
	HKEY_LOCAL_MACHINE, HKEY_USERS, HKEY_CURRENT_USER, and HKEY_CLASSES_ROOT
	registry hives. No online Help is available from the command line and typing
	"/?" from the command line carries out the changes of the permissions on the
	registry. Carrying out this command changes behavior for all users who logon
	locally (other than the Administrators group). Power Users are affected for
	computers running Windows NT Workstation. On computers running Windows NT
	Server, Account Operators, Server Operators, Print Operators, and all other
	non-Administrator accounts are affected.
	
	MORE INFORMATION
	================
	
	The Resource Kit Help file states:
	
	This command-line utility removes the Everyone group from a registry key.
	Removing the Everyone group can enable you to implement stricter and more
	specific security.
	
	Some of the symptoms include desktop icons becoming plain yellow file folders,
	and not being able to double click on "My Computer" and other icons. If Windows
	NT Explorer is launched, all the file icons are the default Windows icon.
	
	Remote network connections are not affected.
	
	Normal behavior can be returned by adding the group Everyone to the root of each
	hive listed above with READ access.
	
	Additional query words: security shell admin gui double-click
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
