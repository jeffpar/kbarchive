---
layout: page
title: "Q243295: How to Print to Local Printer from a Terminal Server Client"
permalink: kb/243/Q243295/
---

## Q243295: How to Print to Local Printer from a Terminal Server Client

	Article: Q243295
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprint
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to print to a local printer when you are connected to
	Windows NT Terminal Server.
	
	MORE INFORMATION
	================
	
	When you connect a Terminal Server client (RDP4.0 or RDP5.0) to Windows NT
	Terminal Server Edition 4.0, make sure the following items are complete to print
	to the Terminal Server Client's local printer:
	
	- The Terminal Server must have the client's printer driver installed at the
	  server. Install the Windows NT printer driver on the Terminal Server
	  regardless of what operating system is running on the client computer.
	
	- The Terminal Server must have NetBIOS name resolution to the Terminal Server
	  Client computer. Microsoft recommends you use WINS for NetBIOS name
	  resolution. If you cannot use WINS, then you need to use a static IP address
	  if you are on a LAN or request a predetermined IP address if you are using a
	  RAS or VPN client. The server's LMHOSTS file needs to resolve the client
	  computer's NetBIOS name to the client computer's static or predetermined IP
	  address.
	
	- If you use a RAS or VPN connection, you must log in to the domain in order to
	  have NetBIOS functionality.
	
	- You need to share the local printer on the client computer.
	
	NOTE: Windows 2000 Terminal Services provides local printer redirection by
	default using Virtual Channels.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbprint 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
