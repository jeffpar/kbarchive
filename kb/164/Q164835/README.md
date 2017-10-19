---
layout: page
title: "Q164835: XCON: RETIX Message Does Not Trigger Read Receipt"
permalink: /kb/164/Q164835/
---

## Q164835: XCON: RETIX Message Does Not Trigger Read Receipt

	Article: Q164835
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a message from RETIX OPEN SERVER 1.45 to Microsoft Exchange Server
	and you have selected the Read Receipt option, no read receipt is sent from
	Microsoft Exchange Server to the RETIX system.
	
	CAUSE
	=====
	
	This problem occurs because RETIX requests a read-receipt but no NonReceipt
	Notification. This operation is illegal, and currently is treated as "No
	Receipt." Therefore, no read receipt is sent.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
