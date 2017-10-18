---
layout: page
title: "Q152910: XADM: MTA Queue Message Time Stamp Off By One Hour"
permalink: kb/152/Q152910/
---

## Q152910: XADM: MTA Queue Message Time Stamp Off By One Hour

	Article: Q152910
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Administrator program Message Transfer Agent (MTA) queue
	might display the time stamp of messages as one hour ahead of the local time.
	This will result in messages being left in the queue and not picked up by the
	MTA.
	
	MORE INFORMATION
	================
	
	This problem appears when Daylight Savings Time (DST) is in effect. After
	disabling Daylight Savings Time, the queued messages will display the correct
	time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Server
	U.S. Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
