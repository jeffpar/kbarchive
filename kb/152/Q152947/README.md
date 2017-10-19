---
layout: page
title: "Q152947: XCON: Err Msg: Suspected Deadlock"
permalink: /kb/152/Q152947/
---

## Q152947: XCON: Err Msg: Suspected Deadlock

	Article: Q152947
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
	
	The Microsoft Exchange Message Transfer Agent (MTA) is still alive but it fails
	to handle any additional incoming or outgoing messages via the Microsoft
	Exchange X.400 TCP/IP Connector. Several 9405 Event IDs appear in the Windows NT
	Event Log:
	
	  Error: suspected deadlock BASE KERNEL 29 (16) and MAIN BASE 1 (16)
	
	CAUSE
	=====
	
	The OPVRECON semaphore and the Kernel Control Block (CB) KPSEMID semaphore are
	acquired in a different order by two threads, causing a deadlock. This occurs
	when a message for an previously freed CB is sent into Platform, due to a close
	race condition, while the root thread is trying to acquire the same CB for a new
	connection.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
