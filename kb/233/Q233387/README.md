---
layout: page
title: "Q233387: RAS Clients Cannot Access LAN When IP Forwarding is Disabled"
permalink: kb/233/Q233387/
---

## Q233387: RAS Clients Cannot Access LAN When IP Forwarding is Disabled

	Article: Q233387
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When 'IP Forwarding' is disabled, Windows NT 4.0 no longer performs static
	routing based on the routes defined in its route table. As a result, in addition
	to not routing IP packets between its distinct local subnets, Windows NT 4.0
	does not route IP packets from its RAS clients to its LAN, even if these RAS
	clients use IP addresses that belong to the same subnet as that of the LAN by
	design.
	
	MORE INFORMATION
	================
	
	'IP Forwarding' can be enabled or disabled in Control Panel Network, Protocols
	tab, properties of TCP/IP, Routing tab.
	
	With 'IP Forwarding' enabled, Windows NT 4.0 routes IP packets according to the
	routes defined in its route table. This enables a Windows NT 4.0 RAS server to
	route IP traffic to and from a RAS client using the host route whose destination
	is the RAS client's specific IP address and whose gateway is the RAS server's
	NdisWAN Adapter.
	
	When IP forwarding is disabled, a Windows NT 4.0 RAS server no longer routes IP
	traffic according to its route table and so RAS clients, regardless of their IP
	address, are NOT able to send or receive IP traffic to or from the RAS server's
	LAN. In this respect, disabling 'IP Forwarding' restricts a RAS client's access
	to its RAS server, even if the RAS service's TCP/IP configuration is set to
	permit its RAS clients 'Access to Entire Network.'
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
