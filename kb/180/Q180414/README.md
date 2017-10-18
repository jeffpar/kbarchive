---
layout: page
title: "Q180414: XFOR: Non-Delivery Report: 554 (not a type writer)"
permalink: kb/180/Q180414/
---

## Q180414: XFOR: Non-Delivery Report: 554 (not a type writer)

	Article: Q180414
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to send a message via the Internet Mail Service (Internet Mail
	Connector in version 4.0), you may receive the following non-delivery report
	(NDR):
	
	  A mail message was not sent due to a protocol error.
	  554 (not a type writer)
	  Input line to submit longer than 254 characters
	
	  "Unable to deliver the message due to a communications failure"
	
	CAUSE
	=====
	
	This error has been reported when a message has been sent to a distribution list
	containing hundreds of names. The message destined for another Exchange Server
	computer was being routed through another SMTP host called Secure Message Guard,
	that was unable to handle more than 254 characters on the To: line. The error is
	due to a limitation of the Secure Message Guard host.
	
	WORKAROUND
	==========
	
	Limit the character length on the message To: line to fewer than 254 characters.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
