---
layout: page
title: "Q152886: XADM: Message Tracking Time Stamps are Incorrect"
permalink: kb/152/Q152886/
---

## Q152886: XADM: Message Tracking Time Stamps are Incorrect

	Article: Q152886
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the message tracking feature of Microsoft Exchange Server, the
	times reported for messages as they are tracked can be off by an hour.
	
	MORE INFORMATION
	================
	
	This happens when Daylight Savings Time is enabled on one of the Windows NT
	servers involved in the routing of the message. After you disable Daylight
	Savings Time, tracked messages will have the correct time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
