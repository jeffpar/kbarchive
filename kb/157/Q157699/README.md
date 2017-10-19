---
layout: page
title: "Q157699: XCON: Messages Sent to Wang Via X.400 Do Not Return Receipts"
permalink: /kb/157/Q157699/
---

## Q157699: XCON: Messages Sent to Wang Via X.400 Do Not Return Receipts

	Article: Q157699
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 Service Packs 1, 2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Message Transfer Agent (MTA) will fail to process Read
	and Delivery Receipts when messages are sent from Microsoft Exchange to a Wang
	Office Gateway via the Microsoft Exchange X.400 Connector.
	
	CAUSE
	=====
	
	The MTA does not handle the Per Message Flag as specified in the 1984 X.400
	specification.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: wang 1984 red book sp3 p1 envelope
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbPTProdChange kbExchangeSearch kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
