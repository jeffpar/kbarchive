---
layout: page
title: "Q176518: XCON: Recalculating Routing does not Remove Deleted Routes"
permalink: /kb/176/Q176518/
---

## Q176518: XCON: Recalculating Routing does not Remove Deleted Routes

{% raw %}

	Article: Q176518
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you recalculate routing using the Microsoft Exchange Administrator program,
	the routing table may not reflect changes made to the routing in other Microsoft
	Exchange Sites.
	
	CAUSE
	=====
	
	In large topologies, these routes are not being removed quickly enough.
	Therefore, modifications have been made to the routing calculation to strip
	these routes more quickly.
	
	WORKAROUND
	==========
	
	Within a Site, one Microsoft Exchange Server is responsible for recalculating
	the routing information for that Site. This Exchange Server can be determined by
	clicking the General tab of the Site Addressing object you opened above and
	checking the Routing Calculation Server value. This Exchange Server must be
	running version 4.0.996.42 of the Microsoft Exchange Message Transfer Agent
	(MTA) or above.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	For example, an address space is deleted on a connector in Site 1 but the
	routing table in Site 2 still shows the deleted route. This deleted route still
	shows in the routing table even after a number of successful directory
	replication cycle have been completed amongst all Sites, even though the route
	no longer shows in Site 2's replica of Site 1.
	
	The current routing table can be examined following these steps:
	
	1. Start the Microsoft Exchange Administrator program.
	
	2. Expand the Organization container.
	
	3. Expand the Site container.
	
	4. Expand the Configuration container.
	
	5. Click the Site Addressing object.
	
	6. Click the Routing tab.
	
	Additional query words: GWART EMS_RID SP5
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
