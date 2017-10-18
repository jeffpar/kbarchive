---
layout: page
title: "Q152951: XCON: MTA Heap Corruption With Misconfigured TP4/TCP Connection"
permalink: kb/152/Q152951/
---

## Q152951: XCON: MTA Heap Corruption With Misconfigured TP4/TCP Connection

	Article: Q152951
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 30-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Message Transfer Agent (MTA) may experience heap
	corruption if there is a misconfigured incoming TCP/IP or TP4 connection. The
	heap corruption will exhibit itself as Dr. Watson errors in the MTA.
	
	CAUSE
	=====
	
	Microsoft Exchange Server is leaking buffers from SBPDSACP in the WinSock code.
	WINSOCK DMOD (TP4/TCP) creates too many threads when many connections are
	started and stopped. Threads of different types (TP4/TCP) can be created on the
	same Thread Control Block (CB) causing two WINSOCK threads to update the
	pointers in a select call simultaneously. This can cause heap corruption.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: Dr. Watson Crash
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
