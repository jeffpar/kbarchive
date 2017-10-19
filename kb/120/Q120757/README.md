---
layout: page
title: "Q120757: WINS Manager: Config. and Replication Partners Menus Disabled"
permalink: /kb/120/Q120757/
---

## Q120757: WINS Manager: Config. and Replication Partners Menus Disabled

	Article: Q120757
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	When using WINS Manager to administer a remote WINS server, you may notice
	that all menu options are enabled except for the Configuration and
	Replication Partners options of the Server menu.
	
	Most WINS Manager commands are performed using IP-to-IP (non-NetBIOS)
	connections. However, the Configuration and Replication Partners options
	run over RPC which requires NetBIOS sessions (over TCP/IP) to be
	established. If the NetBIOS connection fails, these two menu items will
	appear disabled. Similarly, attempting to use Registry Editor to remotely
	access the computer's Registry will fail because it also relies on an RPC
	connection to be established. Once a NetBIOS connection is made, these
	options are enabled.
	
	To fix this problem:
	
	1. Verify that you are a member of the Administrators or Domain Administrators
	  groups and that you are logged in with a proper password.
	
	2. Verify that you are able to get a "Name to IP" resolution of the name of the
	  WINS server you are focused on:
	
	  a. From the Options menu choose Preferences. Try setting the address display
	     as "Computer Name (IP Address)" and/or "IP Address (Computer Name)" and
	     set the focus again on the remote WINS server by selecting it from the
	     list of WINS servers.
	
	  b. Use the IPCONFIG /ALL command to find the IP addresses of the primary and
	     secondary WINS servers you are consulting. Then enter the IP address and
	     name of the remote WINS server as a static mapping into the database of
	     the primary and secondary WINS servers you are consulting.
	
	NOTE: Verify that all WINS servers are configured with static (not dynamic)
	IP Addresses; they should not be DHCP clients.
	
	Additional query words: grayed-out grey unavailable
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
