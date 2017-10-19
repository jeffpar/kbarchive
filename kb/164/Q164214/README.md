---
layout: page
title: "Q164214: Distance Vector Routing Basics"
permalink: /kb/164/Q164214/
---

## Q164214: Distance Vector Routing Basics

	Article: Q164214
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are two types of distributed routing technologies. They are Distance
	Vector and Link State. This article discusses Distance Vector routing.
	
	MORE INFORMATION
	================
	
	The Distance Vector routing algorithm is sometimes referred to as Bellman- Ford.
	In Distance Vector routing, each entity keeps a routing database with one entry
	for every possible destination in the system.
	
	The Distance Vector routing protocol specifies that each router advertises to its
	adjacent neighbors its routing table. For each network destination, the
	receiving routers pick the neighbor advertising the lowest cost, and then add
	this entry to its routing table. HELLO and RIP are common Distance Vector
	routing protocols.
	
	The problem with Distance Vector routing is slow convergence. In Distance Vector
	routing, when a change is made, the changes must be propagated to each router.
	This propagation causes all routing tables affected by this change to be
	recalculated. Distance Vector routing can be very slow converging after a
	topical change.
	
	A detailed explanation of the algorithm itself can be found in RFC 1058. The
	following is an excerpt from RFC 1058:
	
	  "In simple networks, it is common to use a metric that simply counts how many
	  gateways a message must go through. In more complex networks, a metric is
	  chosen to represent the total amount of delay that the message suffers, the
	  cost of sending it, or some other quantity which may be minimized. The main
	  requirement is that it must be possible to represent the metric as a sum of
	  'costs' for individual hops.
	
	  "Formally, if it is possible to get from entity i to entity j directly (i.e.,
	  without passing through another gateway between), then a cost, d(i,j), is
	  associated with the hop between i and j. In the normal case where all
	  entities on a given network are considered to be the same, d(i,j) is the same
	  for all destinations on a given network, and represents the cost of using
	  that network. To get the metric of a complete route, one just adds up the
	  costs of the individual hops that make up the route. For the purposes of this
	  memo, we assume that the costs are positive integers.
	
	  "Let D(i,j) represent the metric of the best route from entity i to entity j.
	  It should be defined for every pair of entities. d(i,j) represents the costs
	  of the individual steps. Formally, let d(i,j) represent the cost of going
	  directly from entity i to entity j. It is infinite if i and j are not
	  immediate neighbors. (Note that d(i,i) is infinite. That is, we don't
	  consider there to be a direct connection from a node to itself.) Since costs
	  are additive, it is easy to show that the best metric must be described by
	
	     D(i,i) = 0,                      all i
	     D(i,j) = min [d(i,k) + D(k,j)],  otherwise k
	
	  and that the best routes start by going from i to those neighbors k for which
	  d(i,k) + D(k,j) has the minimum value. (These things can be shown by
	  induction on the number of steps in the routes.) Note that we can limit the
	  second equation to k's that are immediate neighbors of i. For the others,
	  d(i,k) is infinite, so the term involving them can never be the minimum."
	
	Additional query words: prodnt 4.00 rras steelhead
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : 3.51 4.0
	
	=============================================================================
	
