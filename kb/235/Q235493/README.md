---
layout: page
title: "Q235493: XFOR:Stopping Connectivity Controller Doesn't Stop GWRouter"
permalink: /kb/235/Q235493/
---

## Q235493: XFOR:Stopping Connectivity Controller Doesn't Stop GWRouter

	Article: Q235493
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 24-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you stop the Microsoft Exchange Connectivity Controller (connector)
	service, it also stops the Microsoft Exchange Connector for Novell GroupWise
	(GroupWise connector) service. However, it does not stop the Microsoft Exchange
	Router for Novell GroupWise (GWRouter) service. Stopping the GWRouter service
	stops the GroupWise connector service, but not the controller service.
	
	MORE INFORMATION
	================
	
	This behavior is different from previous connectors such as the Lotus
	Notes/SNADS/OVVM(PROFS) connectors, where stopping the controller service shuts
	down all related services.
	
	Additional query words: router
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
