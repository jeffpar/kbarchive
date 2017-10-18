---
layout: page
title: "Q186482: Terminal Server Modifications to NetDDE"
permalink: kb/186/Q186482/
---

## Q186482: Terminal Server Modifications to NetDDE

	Article: Q186482
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
	
	When NETDDE starts in Windows NT Server or Windows NT Workstation, NETDDE
	registers the computer name on the network with the NetBIOS designation of
	[1fh]. To register this name for use by NETDDE, the computer name must be
	unique. This is normally not a problem because computer names must be unique in
	any case. However, NETDDE in Terminal Server registers as [1fh] with the user
	name rather than the computer name. This makes sense because all the users
	connected to the Terminal Server will use the same computer name, making NETDDE
	impossible. However, registering NETDDE with the user name introduces a new
	requirement that all users on the network use unique user names if NETDDE is
	going to be used. If NETDDE is not used, this should not be a concern. Users who
	use the Terminal Server client to connect to multiple sessions will find that
	NETDDE will only start in the first session if they try to use the same user
	name for multiple sessions.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
