---
layout: page
title: "Q266205: XFOR: Delivery and Read Receipts Are Not Received"
permalink: /kb/266/Q266205/
---

## Q266205: XFOR: Delivery and Read Receipts Are Not Received

	Article: Q266205
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Microsoft Exchange Server, when you send a message and request delivery and
	read receipts, you may not receive a message, and a non-delivery report (NDR)
	may not be generated.
	
	CAUSE
	=====
	
	This issue can occur if you configured the Internet Mail Service in the
	following way:
	
	- The Transfer mode is set to Inbound Only.
	
	  -and-
	
	- The Internet Mail Service address space has been removed from the routing
	  table.
	
	When an Internet message with a delivery or read receipt request is accepted and
	processed by an Internet Mail Service configured in this way, the generated
	receipt gets trapped in the MTS-OUT queue and is not delivered.
	
	WORKAROUND
	==========
	
	To work around this issue, configure the Internet Mail Service Transfer mode to
	"Inbound and Outbound", and set the Internet Mail Service to forward all
	messages to an Internet Mail Service in your organization that is configured for
	outbound mail.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
