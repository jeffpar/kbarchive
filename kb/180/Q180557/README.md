---
layout: page
title: "Q180557: DHCP Clients Unable to Obtain IP Lease from DHCP Server"
permalink: kb/180/Q180557/
---

## Q180557: DHCP Clients Unable to Obtain IP Lease from DHCP Server

	Article: Q180557
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When your Dynamic Host Configuration Protocol (DHCP) clients attempt to lease or
	renew IP lease information, they may receive the following error message:
	
	  No DHCP server available.
	
	NOTE: Your DHCP server is correctly configured and operating. A network trace
	captured at your DHCP server shows it is receiving the DHCP discovery packets
	from the clients but it does not offer any leases.
	
	CAUSE
	=====
	
	Your DHCP server is configured to be a DHCP Relay Agent in addition to a DHCP
	server. This causes the DHCP server to forward any DHCP Discover packets to
	another server without responding directly to the DHCP client.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove the DHCP Relay Agent configuration using the
	following steps on your DHCP server:
	
	1. Click Start, point to Settings, and click Control Panel.
	
	2. Double-click Network, click the Protocols tab, and double-click TCP/IP
	  Protocol.
	
	3. Click the DHCP Relay tab.
	
	4. Remove all IP addresses listed in the DHCP Servers list by clicking each
	  address and then clicking Remove.
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
