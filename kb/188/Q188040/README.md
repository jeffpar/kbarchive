---
layout: page
title: "Q188040: XCON: MTA Disconnects and 2004 Event Appears in Event Log"
permalink: /kb/188/Q188040/
---

## Q188040: XCON: MTA Disconnects and 2004 Event Appears in Event Log

	Article: Q188040
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a message through the X.400 Connector, the message transfer agent
	(MTA) may disconnect and the following events may be displayed in the event
	log:
	
	  A command was sent at the network services interface. Control block
	  index = 1  Internal Connection Handle (LPI) = 1-15-1
	  Message type = NDATA request [POP4 POP4 UP 7 21] (8)
	
	  Event: 2004
	  Type: Warning
	  Category: Internal Processing
	  Description: Attempted to log an unknown event/error. Product
	  identifier 0, Event/error code 255 [BASE TCP/IP DRVR 8 0] (14)
	
	CAUSE
	=====
	
	This problem occurs if an error is returned after Winsock flow control has been
	established between the two servers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: dcl
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
