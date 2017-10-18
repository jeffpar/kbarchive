---
layout: page
title: "Q215472: XFOR: How the X.400 Connector Handles High-Priority Mail"
permalink: kb/215/Q215472/
---

## Q215472: XFOR: How the X.400 Connector Handles High-Priority Mail

	Article: Q215472
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how the Microsoft X.400 Connector handles high-priority
	mail (including delivery and non-delivery reports).
	
	MORE INFORMATION
	================
	
	The Microsoft X.400 Connector will open a new X.400 association with the partner
	X.400 message transfer agent (MTA) when a high-priority message, delivery, or
	non-delivery report is queued for the partner X.400 MTA. (Delivery and
	non-delivery reports do not have priority indicators. Following X.411 spec, they
	are treated as high priority.)
	
	The new X.400 association will be used only for high-priority messages (including
	delivery and non-delivery reports). Normal or low-priority messages will flow
	across the existing association or a new association will be created.
	
	Note that high-priority messages can cause the establishment of a second
	association even when the number of queued messages has not reached the
	threshold value configured on the Override tab of the Microsoft X.400 Connector
	Property page.
	
	Additional query words: x400 ndr itu
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
