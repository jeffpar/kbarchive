---
layout: page
title: "Q152897: XCON: POP-4 State Checks (4282, 4283, 4284, 4287)"
permalink: /kb/152/Q152897/
---

## Q152897: XCON: POP-4 State Checks (4282, 4283, 4284, 4287)

	Article: Q152897
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following errors will be logged in the Windows NT Event Viewer Application
	Log if the Microsoft Exchange Message Transfer Agent (MTA) gets backed up trying
	to deliver messages and the transport connection is lost. These errors will be
	from the MSExchangeMTA service.
	
	  ID 4282 Category X.400 Service
	  An interoperability error occurred. Interface protocol 131 was violated. Error
	  code=8453 [POP4 MAIN BASE 1 18] (14)
	
	  ID 4283 Category X.400 Service
	  Unable to recognize an internal message identifier. Internal connection handle
	  (LP1) 1-3-14 Error code=8464 [POP4 POP4 UP 5 228] (14)
	
	  ID 4284 Category X.400 Service
	  An error has occurred during connection/disconnection. Error code=8511 [POP4
	  POP4 DOWN 4 179] (14)
	
	  ID 4287 Category X.400 Service
	  An internal MTA occurred. Contact Microsoft Product Support Services. Error
	  code=8650 [POP4 POP4 DOWN4 18] (14)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	When a message enters the MTA queue, it is assigned a unique identifier (MTSID
	in the message details in the MTA queue) by the MTA. When the message leaves the
	queue, the identifier is stripped and it might be re- used for another message
	that enters the queue.
	
	With Microsoft Exchange Server version 4.0, there is an issue where multiple
	messages might be assigned the same MTSID number. This ID collision will then
	cause the transport session to shut down. This causes messages to hang in the
	queue until one of the messages with the duplicate ID leaves the queue.
	
	Additional query words: tcp x.25 tp4 warnings pop-4
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
