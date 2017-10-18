---
layout: page
title: "Q186575: NetWare User Access for Terminal Server"
permalink: kb/186/Q186575/
---

## Q186575: NetWare User Access for Terminal Server

	Article: Q186575
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
	
	The NetWare User Access for Terminal Server administrator tool (or Nw2nt.exe at
	a command prompt) can be used to migrate NetWare users from a bindery-context
	NetWare server (not an NDS mode server) to Terminal Server. Both users and
	groups can be migrated.
	
	NOTE: All migrated user passwords will be blank.
	
	NOTE: Be careful what groups exist on the NetWare server before migrating. For
	instance, if there is a group called Adminstrators on the NetWare server, users
	will be added to the existing Terminal Server's Administrator's group.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
