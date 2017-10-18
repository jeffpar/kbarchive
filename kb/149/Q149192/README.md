---
layout: page
title: "Q149192: XFOR: Dir-Sync Agent Submits Custom Recipient Proxy Address"
permalink: kb/149/Q149192/
---

## Q149192: XFOR: Dir-Sync Agent Submits Custom Recipient Proxy Address

	Article: Q149192
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
	
	The Microsoft Exchange Directory Synchronization (Dir-Sync) agent will send out
	the proxy Microsoft Mail for PC Networks address (in 10/10/10 format) to
	Microsoft Mail for PC Networks requestors, even if the requestors do not ask for
	the specific gateway address type (either because the Microsoft Mail for PC
	Networks postoffices do not explicitly ask for them or the access component is
	not installed).
	
	WORKAROUND
	==========
	
	This functionality is part of the product design. The only way to prevent any
	custom recipient address from being sent out to the Microsoft Mail for PC
	Networks Dir-Sync stream, is by:
	
	- Using trust levels.
	
	- Not exporting the recipient containers for the gateway custom recipients.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
