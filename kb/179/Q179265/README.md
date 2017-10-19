---
layout: page
title: "Q179265: XADM: Event 7011 Occurs When Shutting Down Exchange Server"
permalink: /kb/179/Q179265/
---

## Q179265: XADM: Event 7011 Occurs When Shutting Down Exchange Server

	Article: Q179265
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The computer running Microsoft Exchange Server shuts down slowly (10-15 minutes)
	and the following event is written in the event log:
	
	  ID 7011 - Service control manager - Timeout(120000 ms)
	  waiting for transaction response.
	
	This has been seen on both Alpha and Intel platforms.
	
	When ARCserve is installed on an Exchange Server computer, these symptoms can
	occur. If the ARCserve services are terminated manually, Exchange Server will
	shut down normally and the Event 7011 does not occur.
	
	WORKAROUND
	==========
	
	To work around this issue, terminate the ARCserve services manually before
	shutting down the server.
	
	
	To work around this issue, remove ARCserve from the Exchange Server computer or
	terminate the ARCserve services manually before shutting down the server.
	
	MORE INFORMATION
	================
	
	ARCserve is manufactured by Computer Associates International, Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
