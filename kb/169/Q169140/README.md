---
layout: page
title: "Q169140: Using DHCP to Assign IP Addresses to Secondary Networks"
permalink: /kb/169/Q169140/
---

## Q169140: Using DHCP to Assign IP Addresses to Secondary Networks

	Article: Q169140
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use Dynamic Host Configuration Protocol (DHCP) to
	lease IP addresses for routers configured to use secondary IP addressing.
	
	MORE INFORMATION
	================
	
	Some routers can be configured with primary and secondary addresses that allows
	one port on a router to listen to multiple (logical) subnets.
	
	Windows NT 4.0 Service Pack 2 and later introduced Superscoping support for DHCP.
	This allows a DHCP server with one network interface card to assign leases for
	multiple logical subnets.
	
	To setup Superscopes in DHCP Manager, perform the following steps:
	
	1. Create a new scope in DHCP Manager that corresponds with the primary subnet
	  on the router.
	
	2. Create the Superscopes that will be a part of the secondary address(es)
	  configured on the router.
	
	3. Use the DHCP Manager to define the Superscope to include all the subnets.
	
	For complete steps on how to setup DHCP Superscoping, please refer to the
	following article in the Microsoft Knowledge Base:
	
	  Q161571 Using DHCP Superscopes to Serve Multiple Logical Subnets
	
	Additional query words: secondary router nt4sp2 ntdhcp
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
