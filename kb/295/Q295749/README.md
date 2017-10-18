---
layout: page
title: "Q295749: XFOR: Internet Mail Service Set to Route Inbound Tries Outbound"
permalink: kb/295/Q295749/
---

## Q295749: XFOR: Internet Mail Service Set to Route Inbound Tries Outbound

	Article: Q295749
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbExchange550
	Last Modified: 11-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Exchange 5.5 Server, Internet Mail Service may attempt to route
	outbound mail even though Internet Mail Service is set for inbound routing only.
	
	RESOLUTION
	==========
	
	To resolve this behavior, remove any entries of the address space from the
	Internet Mail Service:
	
	1. Start the Exchange Administrator program.
	
	2. Click Internet Mail Service, click Properties on the File menu, and then
	  click the Address Space tab.
	
	3. Delete the entries of the address space.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange550 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
