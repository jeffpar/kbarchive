---
layout: page
title: "Q262952: XFOR: Routing Cost on Exchange Connectors"
permalink: /kb/262/Q262952/
---

## Q262952: XFOR: Routing Cost on Exchange Connectors

	Article: Q262952
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you add a cost from 1 through 100 to any Exchange Server connector's Address
	Space tab, any messages that use that connector take the new cost into
	consideration when e-mail is routed.
	
	Routing cost typically ranges from 1 through 99. The default is 1. If the cost of
	a route is set to 1, other routes are used only if that route does not work. If
	the cost of a route is set to 100, that route is used only when all other routes
	does not work.
	
	MORE INFORMATION
	================
	
	The preceding information applies to all Exchange Server connectors.
	
	Additional query words: Route, load balance, IMC, IMS
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
