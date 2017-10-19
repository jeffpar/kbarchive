---
layout: page
title: "Q147093: XCON: One Invalid X.400 Recp. Causes NDR For All X.400 Recps."
permalink: /kb/147/Q147093/
---

## Q147093: XCON: One Invalid X.400 Recp. Causes NDR For All X.400 Recps.

	Article: Q147093
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When there is a invalid X.400 address in the To: field of a message, the
	Microsoft Exchange Message Transfer Agent (MTA) will not deliver the message to
	any valid X.400 addresses that might also be present in the To: field.
	
	
	CAUSE
	=====
	
	The O/R Address is generated according to the Oneoff Address and the message is
	submitted to the MTA. The MTA detects an invalid recipient and generates
	Non-Delivery Receipts (NDRs) for all addresses. This is by product design.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
