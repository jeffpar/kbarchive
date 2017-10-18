---
layout: page
title: "Q157058: XADM: MTA Restart Fails and Logs Error 2051"
permalink: kb/157/Q157058/
---

## Q157058: XADM: MTA Restart Fails and Logs Error 2051

	Article: Q157058
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a failure and a subsequent failed restart attempt, the Microsoft Exchange
	Server Message Transfer Agent (MTA) logs an event similar to the following:
	
	  Event ID: 2051
	  Source: MSExchangeMTA
	  Description: A fatal internal MTA error occurred. Contact Microsoft Product
	  Support Services. An illegal GET from element 3CB84D01 occurred at offset
	  2073. [BASE DISP:FANOUT 14 8] (16)
	
	CAUSE
	=====
	
	If a failure occurred during the processing of a message, upon restart, key
	routing information for some addresses on the recipients list may not be
	consistent, causing the fatal error described above.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
