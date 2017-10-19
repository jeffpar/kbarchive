---
layout: page
title: "Q195696: XFOR: Limiting Size of Incoming Messages on Notes Connector"
permalink: /kb/195/Q195696/
---

## Q195696: XFOR: Limiting Size of Incoming Messages on Notes Connector

	Article: Q195696
	Product(s): Microsoft Exchange
	Version(s): WINNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Messages originating from Lotus Notes sent to users on Exchange Server ignore
	any message quota size set on the Microsoft Exchange Connector for Lotus Notes.
	
	MORE INFORMATION
	================
	
	This occurs because the "Message Size" limitation setting on a gateway's
	property page is actually verified only on the Exchange Server message transfer
	agent (MTA) side for messages travelling outbound to Lotus Notes. For incoming
	messages, there is currently no way to specify limitations on the connector
	itself.
	
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINNT:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
