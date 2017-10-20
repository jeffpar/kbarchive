---
layout: page
title: "Q169416: RIP Routes May Have a Different Metric Than Expected"
permalink: /kb/169/Q169416/
---

## Q169416: RIP Routes May Have a Different Metric Than Expected

{% raw %}

	Article: Q169416
	Product(s): Microsoft Windows NT
	Version(s): 4.0
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
	
	Routes learned from the Routing Information Protocol (RIP) may not have the
	metrics that you would expect. When a Windows NT Router is advertising a non-RIP
	route over RIP, it will always be advertised with a metric of 2.
	
	MORE INFORMATION
	================
	
	A metric is a value that shows how desirable a particular route is. Other
	routing protocols give different meanings to the metric. Because the meanings
	for the metric are different, the metrics cannot be directly converted. When RIP
	advertises a non-RIP route, RIP will advertise the route with a metric of 2.
	
	A simple example is a Windows NT router advertising its local subnet routes.
	Routes for the locally attached LANs will show in the route table with a metric
	of 1 and the Protocol is Local. This local route will be advertised to a
	neighbor RIP router with the metric of 2. This neighbor router will then
	increase the metric for all routes by one to reflect its own hop count to the
	destination. In this neighbor's route table, you will see the metric of 3 when
	you would expect to see the metric of 2.
	
	Additional query words: RRAS
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
