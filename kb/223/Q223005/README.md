---
layout: page
title: "Q223005: XFOR: RTF Information Lost When Sent Through GroupWise Connector"
permalink: kb/223/Q223005/
---

## Q223005: XFOR: RTF Information Lost When Sent Through GroupWise Connector

	Article: Q223005
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Rich Text Format (RTF) information that is used in the message body or subject
	line is converted into plain text. This applies to all messages that have to
	pass through the Novell API gateway.
	
	CAUSE
	=====
	
	The API gateway does not recognize RTF information, and subsequently converts
	all characters to plain text format.
	
	MORE INFORMATION
	================
	
	The Microsoft Exchange Connector for Novell GroupWise is dependent on the API
	gateway for interoperability between Exchange Server and GroupWise. Any
	limitation of the API gateway will directly affect the fidelity of messages
	traversing the GroupWise connector. Note that this applies to all versions of
	the GroupWise connector.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
