---
layout: page
title: "Q155036: XFOR: IMC: Inbound Messages Queued but Not Processed"
permalink: kb/155/Q155036/
---

## Q155036: XFOR: IMC: Inbound Messages Queued but Not Processed

	Article: Q155036
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 03-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Internet Mail Connector (IMC) queues messages in the
	Inbound Messages Awaiting Conversion queue. Messages stay in the queue and are
	not processed. Incoming IMC mail appears to be stuck in the Exchsrvr\imcdata\in
	directory.
	
	CAUSE
	=====
	
	The IMC fails during specific Binhex conversions. That thread is effectively
	looping during the conversion.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Server
	U.S. Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: SP2 hung hang stopped MIME
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
