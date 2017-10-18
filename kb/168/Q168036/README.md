---
layout: page
title: "Q168036: Link State Routing Basics"
permalink: kb/168/Q168036/
---

## Q168036: Link State Routing Basics

	Article: Q168036
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
	
	There are 2 types of distributed routing technologies. They are distance vector
	and link state. This article discusses link state routing.
	
	MORE INFORMATION
	================
	
	Routers that use a link state routing protocol maintain a database of their
	individual autonomous system (AS)topology. An autonomous system is a group or
	collection of networks under common administration using the same routing
	protocol, and is sometimes called a routing domain. Autonomous systems are
	commonly divided into areas tied together by a backbone area. Each router in an
	autonomous system has an identical link state database (LSB). The link state
	database is composed of each router's local state.
	
	Routers distribute their local state by flooding the autonomous system with link
	state advertisements (sometimes referred to as link state packets). Link state
	advertisements (LSAs) are special packets which contain information about
	neighbors and route cost. These LSAs can also contain routing information
	gathered by other routing protocols and static routes.
	
	All routers in an autonomous system run the same routing algorithm. From the link
	state database, each router builds a tree of shortest paths with itself as the
	root. The tree contains the route to each destination in the autonomous system.
	
	Common link state routing protocols are open shortest path first (OSPF) and
	intermediate system-to-intermediate system interdomain routing protocol (IS-IS).
	
	Additional query words: RRAS
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	
	=============================================================================
	
