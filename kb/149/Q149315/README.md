---
layout: page
title: "Q149315: XFOR: Exchange MS Mail Connector Adds SNADS GatewayName"
permalink: /kb/149/Q149315/
---

## Q149315: XFOR: Exchange MS Mail Connector Adds SNADS GatewayName

	Article: Q149315
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When sending mail to a SNADS recipient via the Microsoft Exchange MS Mail
	Connector, there is no need to include the GatewayName portion of the address
	(GatewayName\DGN\USER).
	
	If the GatewayName is included, the MS Mail Connector will reject the message as
	bad because the address will be incorrect and appear as
	"GatewayName\GatewayName\DGN\USER".
	
	MORE INFORMATION
	================
	
	You must install the SNADS access component on the Connector PO to allow
	outgoing SNADS mail from Microsoft Exchange. Once this is done, and the SNADS
	address space has been properly set on the Connector, the Interchange service
	will automatically insert the GatewayName portion of the address.
	
	The same applies for replies to incoming SNADS mail because the reply address
	will not contain the GatewayName portion of it.
	
	Additional query words: NDR proxy
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
