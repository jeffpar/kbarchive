---
layout: page
title: "Q171050: XADM: Err Msg: Event ID 1005; Name Service Is Unavailable"
permalink: kb/171/Q171050/
---

## Q171050: XADM: Err Msg: Event ID 1005; Name Service Is Unavailable

	Article: Q171050
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc5 exc55
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Exchange Server system attendant service (SA) may become unstable, stop when
	you attempt to use the Exchange Administrator program, or produce one of the
	following error messages when you try to start it:
	
	  Event ID 1005, Source: MSExchangeSA, Unexpected error.
	  Name service is unavailable. Microsoft Windows NT ID No 0xc00206e2 occurred.
	
	  Event log. Error 121, Microsoft system attendant (SA) failed to start.
	
	CAUSE
	=====
	
	This problem may be caused by incorrect configuration of the network service RPC
	Configuration.
	
	RESOLUTION
	==========
	
	To resolve this problem, do the following:
	
	1. Go to Control Panel / Network and click the Services tab.
	
	2. Select the RPC Configuration service and click Properties.
	
	3. Confirm that the Name Service Provider box has "Windows NT Locator" and not
	  "DEC cell Directory Service" .
	
	4. Click OK and restart the Exchange Server computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
