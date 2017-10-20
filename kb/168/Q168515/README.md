---
layout: page
title: "Q168515: Explanation of an OSPF Area"
permalink: /kb/168/Q168515/
---

## Q168515: Explanation of an OSPF Area

{% raw %}

	Article: Q168515
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An Autonomous System (AS) in an Open Shortest Path First (OSPF) routed network
	can be broken up into areas. An OSPF area, based on the same concept as IP
	subnets, consists of a group of networks logically linked and sharing a single
	link state database (LSDB).
	
	MORE INFORMATION
	================
	
	Routers within a single area maintain the same LSDB and communicate this
	information to each other by flooding the area with link state advertisements
	(LSA).
	
	A router that is connected to more than one area is called an area border router
	(ABR). ABRs are most commonly used to connect tie areas together by being
	connected its own area and the backbone area. An area border router advertises a
	summary of its area information to other area border routers using summary
	advertisements. This area topology significantly reduces the amount of traffic
	between routers. It also reduces the size of the LSDB within an area. Since the
	LSDB is used to calculate the SPF, this size reduction can be a significant
	performance enhancement on the router.
	
	Area ID's are 32-bit numbers and in dotted decimal notation. The area ID is in no
	way related to the IP address of a network. However, it is possible to logically
	associate these numbers for administrative convenience.
	
	Additional query words: prodnt 4.00 steelhead rras
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	
	=============================================================================
	

{% endraw %}
