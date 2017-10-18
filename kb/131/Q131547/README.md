---
layout: page
title: "Q131547: NE2000 Network Adapter Driver Reports Incorrect MAC Address"
permalink: kb/131/Q131547/
---

## Q131547: NE2000 Network Adapter Driver Reports Incorrect MAC Address

	Article: Q131547
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The network adapter driver reports an incorrect or duplicate MAC address. For
	example, an NE2000 adapter with a physical card address of 00001B4ADA42 reports
	the address as 000000001B1B.
	
	Other symptoms include errors relating to having duplicate MAC addresses on the
	network and not being validated on a domain.
	
	CAUSE
	=====
	
	When you use the Windows for Workgroups NE2000 network adapter driver with a
	network adapter with the number 42 or 57 in the MAC address, the MAC address is
	reported incorrectly. This problem is not related to the network protocol or
	brand of network adapter in use.
	
	RESOLUTION
	==========
	
	To resolve this problem, use either of the following methods:
	
	- Use a network adapter that does not contain the number 42 or 57 in the MAC
	  address.
	
	- If you are using Novell NetWare, use an ODI MAC driver for the network
	  adapter.
	
	MORE INFORMATION
	================
	
	
	Additional query words: 3.10 3.11 ub eagle
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
