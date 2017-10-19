---
layout: page
title: "Q230498: XCON: Message Looping NDR for Newly Created SMTP CR"
permalink: /kb/230/Q230498/
---

## Q230498: XCON: Message Looping NDR for Newly Created SMTP CR

	Article: Q230498
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 29-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You create a custom recipient (CR) for an SMTP address. After creating the
	address, you send a test message to the custom recipient and receive a
	non-delivery report (NDR) because of message looping.
	
	CAUSE
	=====
	
	When the message is composed to the recipient, the default address is an SMTP
	address, and is thus routed to an Internet Mail Service in the organization. The
	server receiving the message, however, does not have that recipient in the
	directory because of latency in the replication schedule, and attempts to route
	on the Distinguished Name (DN) of the custom recipient. This results in the
	message being passed back to the sending server, which generates a loop, and the
	message transfer agent (MTA) generates an NDR with the loop detection message.
	
	RESOLUTION
	==========
	
	To avoid the problem, allow time for directory replication to occur between the
	two sites before sending mail to the newly created custom recipient. After
	replication has occurred, the MTAs in the second site can resolve the custom
	recipient back to the SMTP address and forward the message onto an Internet Mail
	Service for final delivery.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
