---
layout: page
title: "Q146155: XADM: Outstanding Delivery Receipts not Sent to New Location"
permalink: kb/146/Q146155/
---

## Q146155: XADM: Outstanding Delivery Receipts not Sent to New Location

	Article: Q146155
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you move a mailbox from one Microsoft Exchange Server in a Microsoft Exchange
	Site to another Server in the same Site, outstanding messages requesting
	delivery receipts sent from that mailbox will not return the receipts to the new
	mailbox when the messages are delivered.
	
	MORE INFORMATION
	================
	
	The delivery receipt will be returned to the mailbox on the original Server and
	will not be forwarded to the new location. This only occurs with delivery
	receipts, not read receipts. Any subsequent messages requesting delivery
	receipts sent after the mailbox is moved will work as expected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of Microsoft
	Exchange Server. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	
	=============================================================================
	
