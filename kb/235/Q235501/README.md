---
layout: page
title: "Q235501: XFOR: Zero-Length Attachments Cause Errors in API Gateway"
permalink: kb/235/Q235501/
---

## Q235501: XFOR: Zero-Length Attachments Cause Errors in API Gateway

	Article: Q235501
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 10-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Novell GroupWise clients send a zero-length attachment in a message by
	means of the Microsoft Exchange Connector for Novell GroupWise, the message
	never arrives in Exchange Server. The API gateway reports the following error
	message while processing the outbound message:
	
	  Error processing message attachments.
	
	In addition, a non-delivery-report (NDR) is not be generated back to the
	GroupWise user, so the message appears to have mysteriously disappeared.
	
	CAUSE
	=====
	
	The API gateway does not support zero-length attachments in a message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange connector for
	Novell GroupWise due to its dependency on the API gateway.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
