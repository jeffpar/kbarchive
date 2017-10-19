---
layout: page
title: "Q147694: Clients Not Obtaining DHCP Leases Across Some Proteon Routers"
permalink: /kb/147/Q147694/
---

## Q147694: Clients Not Obtaining DHCP Leases Across Some Proteon Routers

	Article: Q147694
	Product(s): Microsoft Windows NT
	Version(s): 3.11,3.11a,3.11b,3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	DHCP client computers are unable to obtain leases from DHCP servers over Proteon
	CNX500, CNX600, RBX200 and DNX300 routers.
	
	
	CAUSE
	=====
	
	The DHCP client properly sends the DHCP Discover packet to the DHCP server over
	the router and the server responds with a DHCP Offer packet. This problem occurs
	when the router does not forward the DHCP Offer packet to the client computer.
	
	RESOLUTION
	==========
	
	To correct this problem, obtain the software upgrade version 15.2A - Patch level
	37 from Proteon Technical Support at (508) 898-3100. To verify the software
	version of your Proteon router, type the following command at the * prompt:
	
	T 5 C
	
	The configuration of the router appears. The second line displays the version
	number and patch level.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 3.50 3.51 dhcp tcpip
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbTCPIPSearch kbZNotKeyword3 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : :3.11,3.11a,3.11b,3.5,3.51
	
	=============================================================================
	
