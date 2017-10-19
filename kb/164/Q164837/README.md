---
layout: page
title: "Q164837: XFOR: IMS Shows Multiple Logons to the Information Store"
permalink: /kb/164/Q164837/
---

## Q164837: XFOR: IMS Shows Multiple Logons to the Information Store

	Article: Q164837
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc5 exc55
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you looking at the Logon information for a Microsoft Exchange Server 5.0
	computer that has an Internet Mail Service (IMS) installed and running, you may
	see that the IMS has multiple logons.
	
	MORE INFORMATION
	================
	
	The Microsoft Exchange Internet Mail Service was improved in version 5.0 to
	allow the service to log on to the store multiple times. This is by-design to
	allow the service to handle a higher message flow that may occur with the
	addition of POP3 support in Microsoft Exchange Server 5.0.The multiple logon
	will help prevent any "bottlenecking" that might have occurred during periods of
	high usage.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	
	=============================================================================
	
