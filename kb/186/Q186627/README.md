---
layout: page
title: "Q186627: How to Temporarily Disable Terminal Server Client Logons"
permalink: kb/186/Q186627/
---

## Q186627: How to Temporarily Disable Terminal Server Client Logons

	Article: Q186627
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
	
	If you need to disable connectivity to the Terminal Server, you have several
	options. Note that disabling connectivity for Terminal Server Clients is
	different from disabling normal user connectivity. For non-client connectivity
	you can pause or stop the Net Logon or Server services in Control
	Panel/Services. However, the Terminal Server service cannot be paused, stopped,
	or disabled.
	
	To disable Client connectivity, you can:
	
	1. Stop connectivity to the Terminal Server at the command prompt with the
	  Command, "Change Logon /Disable." You can re-enable connectivity with "Change
	  Logon /Enable."
	
	-or-
	
	2. Stop connectivity to a specific socket connection in Terminal Server
	  Connection Configuration under Connection/Disable. This is the same action as
	  opening the connection and selecting Logon/Disabled under the Advanced
	  Configuration.
	
	-or-
	
	3. Stop connectivity for a user or group to a specific socket connection in
	  Terminal Server Connection Configuration under Security/Permissions.
	
	-or-
	
	4. Stop connectivity for a specific user in User Manager by opening the user
	  account and selecting CONFIG. Here you can uncheck the box, "Allow Logon to
	  Terminal Server." If you modify the user's domain account, the user will not
	  be able to connect to the domain from ANY Terminal Server. The other options
	  are specific to the Terminal Server on which they are set.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
