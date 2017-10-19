---
layout: page
title: "Q244978: Event ID 1003 and DHCP Errors with Two DHCP Servers on Network."
permalink: /kb/244/Q244978/
---

## Q244978: Event ID 1003 and DHCP Errors with Two DHCP Servers on Network.

	Article: Q244978
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have two Dynamic Host Configuration Protocol (DHCP) servers connected
	to the network, and the DHCP Server Service of the unauthorized server is
	running, it may intercept a 'Discover' broadcast from a client computer and
	generate the following error message:
	
	  The DHCP client could not obtain an IP address.
	
	Also, Error ID 1003 may appear in the Event Log with the following description:
	
	  DHCP failed to obtain a lease for the card with Network Address MAC address
	  of client. Access is denied.
	
	CAUSE
	=====
	
	This issue can occur if the network interface card (NIC) of the unauthorized
	DHCP server is not intended to service the appropriate clients and prevents the
	client from obtaining an Internet Protocol (IP) address. Because of this, the
	DHCP Client Service does not start on the client computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, stop the DHCP Server service on the unauthorized server:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Services.
	
	2. In the Service list, click Microsoft DHCP Server, and then click Stop.
	
	3. Click Close.
	
	MORE INFORMATION
	================
	
	To prevent the DHCP Server Service from starting automatically:
	
	1. In the Services dialog box, click Microsoft DHCP Server.
	
	2. Click Startup.
	
	3. Click Disabled or Manual, and then click OK.
	
	4. Click Close.
	
	Additional query words: broadcast discover request
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
