---
layout: page
title: "Q169690: XCON: MTA Terminates with 2191, 2198, 2197, and 9405 Events"
permalink: kb/169/Q169690/
---

## Q169690: XCON: MTA Terminates with 2191, 2198, 2197, and 9405 Events

	Article: Q169690
	Product(s): Microsoft Exchange
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,5.0,5.0 SP1,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 20-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 5.0, 5.0 SP1, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange message transfer agent (MTA) may terminate unexpectedly
	with event messages similar to the following:
	
	  Event ID:2191
	  Source:MSExchangeMTA
	  Type:Warning
	  Category:Internal Processing
	  Description:
	  An MTA database server error was encountered while adding an entry to a
	  queue. Called from MTA. Procedure 234. Database error code: ODXOINIU -
	  Object does not exist. Queue name: 00000000. Object at fault: 06000040.
	  [DB
	  Server DISP:FANOUT 11 62] (14)
	
	  Event ID:2198
	  Source:MSExchangeMTA
	  Type:Warning
	  Category:Internal Processing
	  Description:
	  An MTA database server error was encountered while unlocking a queue.
	  Called from MTA. Procedure 234. Database error code: ODXOINIU - Object
	  does
	  not exist. Queue: 00000000. [DB Server DISP:FANOUT 11 127] (14)
	
	  Event ID:2197
	  Source:MSExchangeMTA
	  Type:Warning
	  Category:Internal Processing
	  Description:
	  An MTA database server error was encountered while locking a queue.
	  Called
	  from MTA. Procedure 205. Database error code: ODXOINIU - Object does not
	  exist. Queue: 00000000. [DB Server DELIVER 9 84] (14)
	
	  Event ID:9405
	  Source:MSExchangeMTA
	  Type:Error
	  Category:Field Engineering
	  Description:
	  An unexpected error has occurred which may cause the MTA to terminate.
	  Error: Double acquire of semaphore 2151. [BASE DELIVER 9] (16)
	
	CAUSE
	=====
	
	This problem occurs when an internal list within the MTA, called the Intentions
	List, becomes corrupt.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange versions 4.0,
	SP1, SP2, SP3, and SP4. This problem has been corrected in the latest U.S.
	Service Pack for Microsoft Exchange Server version 4.0. For information on
	obtaining the Service Pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange versions 5.0
	and SP1. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbExchange500SP1 kbExchange400SP1 kbExchange400SP2 kbExchange400SP3 kbExchange400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,5.0,5.0 SP1,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
