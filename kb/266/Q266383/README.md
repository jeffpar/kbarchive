---
layout: page
title: "Q266383: XCON: MTA 2026 and Internet Mail Service 3016 Error Messages"
permalink: /kb/266/Q266383/
---

## Q266383: XCON: MTA 2026 and Internet Mail Service 3016 Error Messages

	Article: Q266383
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you enable message tracking, the following error messages may be logged in
	the application event log during periods of high server use:
	
	  Source: MSExchangeMTA: EventId: 2026
	  An internal MTA error occurred. Contact Microsoft Technical Support. Unable to
	  write to the message tracking log, error '. [BASE XFER-IN 18 40] (16)
	
	  Source: MSExchangeIMC: EventId: 3016
	  An error occurred while logging a message tracking record. This does not
	  affect message delivery. Verify that message tracking is configured
	  correctly.
	
	CAUSE
	=====
	
	This behavior can occur if the message transfer agent (MTA) and Internet Mail
	Service write message-tracking information (located in the Tracking.log folder
	under Exchsrvr) by using the system attendant. Under heavy server use, the
	system attendant may run out of the worker thread that writes to the Tracking
	log, which leads to the error messages that are logged by the MTA and Internet
	Mail Service.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q257348 XCON: 2026 and 3016 Warnings During Periods of High Server Use
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
