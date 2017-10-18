---
layout: page
title: "Q243274: XCON: GWART Does Not Contain All Possible Routes"
permalink: kb/243/Q243274/
---

## Q243274: XCON: GWART Does Not Contain All Possible Routes

	Article: Q243274
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Following a routing calculation, the Microsoft Exchange Server message transfer
	agent (MTA) does not show all possible routes out of the site for a given
	address space in the route table.
	
	MORE INFORMATION
	================
	
	This behavior is by design. The Gateway Address Routing Tree (GWART) does not
	contain all possible routes for a given address space. It does, however, contain
	all possible routes out of the site which are unique in connector, address
	space, and restriction.
	
	To illustrate this GWART behavior using a basic example, consider when three
	sites have Internet Mail Service, all with an address space of SMTP=*, as
	follows:
	
	  Route 1 - Site A, Internet Mail Service A, Address Space:SMTP=*
	  Route 2 - Site B, Internet Mail Service B, Address Space:SMTP=*
	  (Site B connected to Site A)
	  Route 3 - Site C, Internet Mail Service C, Address Space:SMTP=*
	  (Site C connected to Site B)
	
	For Site A, the possible routes available in the GWART for the "SMTP=*" address
	space are:
	
	  Route 1 - Internet Mail Service A (SMTP=*)
	  Route 2 - Internet Mail Service B (SMTP=*)
	
	Because all routes are identical in respect to address space, and Route 3 is
	higher cost (more than two hops), the GWART only includes Route 1 (because the
	local route is always reflected) and Route 2 (because it is the shortest hop
	path out of the site for the equivalent address space).
	
	If Site C sets the Internet Mail Service C Address Space of SMTP:* to be Site
	Restricted, there are two address spaces, one with a restriction and one
	without. The possible routes that appear in the GWART on Site A at that point
	are:
	
	  Route 1 - Internet Mail Service A (SMTP=*)
	  Route 2 - Internet Mail Service B (SMTP=*)
	  Route 3 - Internet Mail Service C (SMTP=*, restricted)
	
	Because the routes are different in restrictions, they are both included in the
	GWART.
	
	To expound further on this behavior, consider where you may have two different
	connectors in the site which each then lead to four unique routes to get to
	address space A. Then there are eight unique (non-looping) routes in total.
	However, the GWART only shows two routes, one for each unique local connector,
	with the lowest cost route from each local connector. If there are multiple
	lowest cost routes of equal value, the GWART shows the shortest hop list for all
	equally lowest cost routes.
	
	Additional query words: missing
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
