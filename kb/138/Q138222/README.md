---
layout: page
title: "Q138222: DHCP Server Delays Release of Client-Rejected IP Addresses"
permalink: /kb/138/Q138222/
---

## Q138222: DHCP Server Delays Release of Client-Rejected IP Addresses

	Article: Q138222
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If your computer running Windows NT Server and the Dynamic Host Configuration
	Protocol (DHCP) offers and reserves an IP address for a DHCP client, and the
	client takes a DHCP offer from another DHCP server, the DHCP server does not
	return the offered IP address to the pool of available addresses for 15 minutes.
	
	MORE INFORMATION
	================
	
	The following events occur when a DHCP client requests an IP address when
	multiple DHCP servers are on the network:
	
	1. When a DHCP client boots, it broadcasts a DHCPDISCOVER message to the
	  network.
	
	2. All DHCP servers in that network receive the DHCPDISCOVER message and they in
	  turn send their DHCPOFFER messages via broadcast.
	
	3. When a DHCP server sends a DHCPOFFER message, offering an IP address, the
	  DHCP server reserves that IP address so that it cannot be offered to another
	  DHCP client.
	
	4. When the DHCP client accepts an IP address, the DHCP server that offered that
	  address marks that address as being leased and the other DHCP servers return
	  the offered IP addresses to the pool of available addresses, however, with a
	  15 minute delay. The address should be returned to the available pool of
	  addresses as soon as the DHCP client requests an address from another DHPC
	  server.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in the latest U.S. Service Pack for Windows NT
	Workstation or Server version 3.51. For information on obtaining this update,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt tcp/ip tcp brackets () sp5
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
