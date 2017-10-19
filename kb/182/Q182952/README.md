---
layout: page
title: "Q182952: XCON: X.400 Backbone Must Route SMTP Messages By DDA Type"
permalink: /kb/182/Q182952/
---

## Q182952: XCON: X.400 Backbone Must Route SMTP Messages By DDA Type

	Article: Q182952
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To send Simple Mail Transfer Protocol (SMTP) messages over an X.400 backbone
	using Microsoft Exchange Server, the backbone systems must be configured to
	route messages based on the Domain Defined Attributes (DDA) type in the
	originator/recipient (O/R) address of the messages. If one or more backbone
	systems are unable to route messages based on the DDA type, you cannot send SMTP
	messages over the backbone.
	
	MORE INFORMATION
	================
	
	Microsoft recognizes the need for Exchange Server to allow SMTP messages to be
	sent over an X.400 backbone that cannot route messages based on the DDA type. We
	have modified the Microsoft Exchange Server 5.0 message transfer agent (MTA) so
	that SMTP messages can be routed to a dedicated X.400 private management domain
	(PRMD) that contains an Internet Mail Service or other Internet connection. This
	feature allows Exchange Server to convert SMTP one-off addresses to X.400
	one-off addresses, based on information in the X.400 connection to the system
	used to connect to the Internet.
	
	
	This supported feature is now available, but has not been fully regression tested
	and should be applied only to systems having a specific need for it. Unless you
	are severely impacted by the lack of this feature, Microsoft recommends that you
	wait for the next Service Pack that contains this feature. Contact Microsoft
	Technical Support for more information.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	
