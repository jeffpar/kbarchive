---
layout: page
title: "Q168245: XFOR: POP3 Clients Unable to Download All Msgs"
permalink: /kb/168/Q168245/
---

## Q168245: XFOR: POP3 Clients Unable to Download All Msgs

	Article: Q168245
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may experience this problem if you applied version 5.0.1458.10 of Store.exe
	for Microsoft Exchange version 5.0, to resolve the problem described in the
	following article in the Microsoft Knowledge Base:
	
	  Q166562 XFOR: Store.exe GPFs When POP3 Client Submits Bad Message Header
	
	You may have POP3 clients that cannot download all of their mail. Typically, they
	will see the following errors in the event log:
	
	  12802
	  MSExchange Pop3
	  Error 0x8004010f during stream configuration
	
	  11310
	  MSExchange Pop3
	  The following error occurred: The requested item could not be found.
	
	If you telnet to port 110 and attempt to retrieve the message, the following
	error message appears:
	
	  The requested item could not be found.
	
	Not all messages are affected, only some. Usually the rejected messages are all
	of the same type, such as Microsoft Mail messages, or messages with attachments,
	and so on.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. More information will be posted in the Microsoft Knowledge Base as
	it becomes available.
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
