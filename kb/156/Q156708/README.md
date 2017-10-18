---
layout: page
title: "Q156708: XADM: Rule Forces CPU Usage Above 90%, Stops Message Delivery"
permalink: kb/156/Q156708/
---

## Q156708: XADM: Rule Forces CPU Usage Above 90%, Stops Message Delivery

	Article: Q156708
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Foreign system Read Receipts, when delivered by the Microsoft Exchange Message
	Transfer Agent (MTA) and then processed by a Microsoft Exchange Inbox rule that
	moves the message to the sent mail folder, can cause the Microsoft Exchange
	Information Store (IS) service to use 90-100% of the CPU. The MTA will then fail
	to deliver any further messages to the IS. The IS service cannot be stopped once
	this problem occurs and a reboot of the Microsoft Exchange Server computer is
	required.
	
	MORE INFORMATION
	================
	
	Mail messages will still be able to be sent out from the Microsoft Exchange
	Server and users will still be able to send and receive messages from other
	users on the same Microsoft Exchange Server but all messages coming into the
	Microsoft Exchange Server will be held up in the MTA Private Information Store
	queue.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: XSRVMTA
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
