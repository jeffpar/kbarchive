---
layout: page
title: "Q186487: Terminal Server Commands: NW2NT"
permalink: /kb/186/Q186487/
---

## Q186487: Terminal Server Commands: NW2NT

	Article: Q186487
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
	
	NW2NT - While this is not strictly a command line utility, it is unique to
	Terminal Server and can be run from the command line. NW2NT is used to give
	selected NetWare users access to the Terminal Server.
	
	1. Click Start, point to Programs, point to Administrative Tools (Common), and
	  click NetWare User Access for Terminal Server.
	
	2. Click Server to open the Select NetWare Server dialog box.
	
	3. In Select Server, click a NetWare server, and then click OK.
	
	4. In Username, type the name of an administrator for the NetWare server, and in
	  Password, type the password. User names configured for the NetWare server
	  appear in the NetWare User Access for Terminal Server dialog box.
	
	5. In From, select the users to whom you want to give access to the Terminal
	  Server, and then click Add. The names you selected will appear in To. Users
	  listed in From cannot access the Terminal Server.
	
	6. Click Apply to save all the changes you have made without closing the dialog
	  box.
	
	NOTES: If you want to grant NetWare users access to the entire domain, you must
	run this program from a Windows NT domain controller. If you run this program on
	a server on the domain that is not a domain controller, you can grant NetWare
	users access only to that specific Terminal Server. You can give access only to
	users from NetWare 3.x servers. At this time you cannot give access to users
	from NetWare 4.x servers (unless the NetWare server is set to Bindery
	Emulation).
	
	For more information, see the Services for NetWare Networks manual and Books
	Online.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
