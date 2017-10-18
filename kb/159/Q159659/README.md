---
layout: page
title: "Q159659: Unable to Establish Adjacency with Neighboring OSPF Routers"
permalink: kb/159/Q159659/
---

## Q159659: Unable to Establish Adjacency with Neighboring OSPF Routers

	Article: Q159659
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides troubleshooting ideas for OSPF routers that are not able
	to establish an Adjacency. An Adjacency is established when the Link State
	database of neighboring routers is fully synchronized.
	
	1. Ping the neighboring router to ensure basic network connectivity.
	
	2. Windows NT OSPF routers have Authentication enabled by default. The default
	  password is 12345678. Be sure to change the Authentication to match all
	  neighboring OSPF routers. The password is configured on a per- interface
	  basis on the General tab. Passwords are case sensitive.
	
	3. Be sure that the Hello and Dead intervals match the Hello and Dead intervals
	  of neighboring OSPF routers. By default the Hello interval is 10 seconds and
	  the Dead interval is 40 seconds. These intervals are configured on a
	  per-interface basis in the Advanced tab.
	
	4. Be sure that area border routers (ABR) are on the backbone 0.0.0.0. Area
	  border routers are routers that are part of two or more different OSPF areas.
	  An ABR does not have to be physically on the backbone if a virtual link has
	  been created, attaching it to the backbone. Virtual links are configured
	  globally on the Virtual Interfaces tab. Virtual neighbors must be configured
	  using the router ID, not just any IP address.
	
	5. If the routers are on a non-broadcast multi access (NBMA) network, such as
	  X.25 or frame relay, their neighbors must be manually configured because
	  neighbors are unable to be found through multicast. Neighbors are configured
	  on a per-interface basis on the Neighbors tab. Neighbors must be configured
	  using the IP address of the neighbor to which the link state information
	  needs to be sent.
	
	6. If you have an NBMA network, such as X.25 or frame relay, that is in a hub
	  and spoke configuration, be sure to set the router priority on spoke routers
	  to 0 and the hub router to 1 or greater. A router priority of 0 means that
	  the router cannot become a designated router (DR) . The hub router must be
	  the DR because it is the only router that can communicate directly with all
	  other routers. The router priority defaults to 1 and is set on a
	  per-interfaces basis on the General tab.
	
	7. On broadcast (token ring, Ethernet, FDDI) or NBMA networks (X.25, frame
	  relay), be sure that all routers do not have a priority of 0. At least one
	  router needs a priority of 1 or greater to become the designated router.
	
	8. Be sure neighboring routers are configured correctly with the same area ID.
	
	9. When you configure an OSPF router, be careful not to duplicate router
	  identification numbers. The router identification number should uniquely
	  identify a router throughout the OSPF autonomous system.
	
	Additional query words: RRAS
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	
	=============================================================================
	
