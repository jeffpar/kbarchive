---
layout: page
title: "Q254671: RRAS Route Table Not Updated When It Receives an RIP Metric 16"
permalink: /kb/254/Q254671/
---

## Q254671: RRAS Route Table Not Updated When It Receives an RIP Metric 16

	Article: Q254671
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Routing and Remote Access Service (RRAS) may not properly update its routing
	table when it receives a Routing Information Protocol (RIP) advertisement for a
	route with a metric of 16. When viewing the routing table with the Kernrout
	Print utility, the route with the previous metric is still present. The RRAS
	server continues to use the old route.
	
	CAUSE
	=====
	
	This behavior can occur under the following circumstances:
	
	- RRAS is configured to listen to RIP advertisements for normal routing.
	
	  -or-
	
	- A static route is configured as a backup route in the event that an RIP
	  learned route becomes unavailable.
	
	If the failed route advertisement has been modified to a metric of 16
	(unreachable), RRAS should update its routing table accordingly and use the
	backup static route. The routing table can still show the RIP learned route at
	its original metric.
	
	The following is an example of a routing table with a static route and RIP
	learned route to the same destination network:
	
	+-----------------------------------------------------------+
	| Destination | Mask        | Interface   | Metric | Source | 
	+-----------------------------------------------------------+
	| 172.17.0.0  | 255.255.0.0 | 192.168.1.2 | 3      | RIP    | 
	+-----------------------------------------------------------+
	| 172.17.0.0  | 255.255.0.0 | 192.168.1.1 | 5      | Static | 
	+-----------------------------------------------------------+
	
	When the RIP learned route becomes unreachable and is advertised as the
	following, the change is not reflected in the routing table:
	
	+-----------------------------------------------------------+
	| Destination | Mask        | Interface   | Metric | Source | 
	+-----------------------------------------------------------+
	| 172.17.0.0  | 255.255.0.0 | 192.168.1.2 | 16     | RIP    | 
	+-----------------------------------------------------------+
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : winnt:4.0,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
