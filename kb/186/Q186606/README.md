---
layout: page
title: "Q186606: Terminal Server's NetWare User Access For Terminal Server"
permalink: /kb/186/Q186606/
---

## Q186606: Terminal Server's NetWare User Access For Terminal Server

	Article: Q186606
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If Client Services for NetWare is installed, NetWare User Access for Terminal
	Server can be used to grant NetWare users access to the Terminal Server.
	
	MORE INFORMATION
	================
	
	This tool is used to copy NetWare user accounts to Terminal Server. Both users
	and groups are copied.
	
	NOTE: NetWare 4.x servers must be in bindery emulation mode for this to work
	because Terminal Server, like Windows NT Server, does not support the NDS API.
	
	NOTE: Migrated users' passwords will be blank.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
