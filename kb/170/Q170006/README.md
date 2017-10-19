---
layout: page
title: "Q170006: XCON: Event 9234 Reports Sockets Error 10038"
permalink: /kb/170/Q170006/
---

## Q170006: XCON: Event 9234 Reports Sockets Error 10038

	Article: Q170006
	Product(s): Microsoft Exchange
	Version(s): 4.0, 50., 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During heavy load, the Microsoft Exchange Message Transfer Agent (MTA) may
	report the following error:
	
	  Event 9234: MSExchangeMTA Operating System
	  A sockets error BASE IL on a select() call was detected.
	  The MTA will attempt to recover the sockets connection.
	  Control block index: 10038. [TCP/IP ASYNC 11 280 %6] (12)
	
	The MTA will continue to transfer messages.
	
	CAUSE
	=====
	
	This is a non-critical error that most often shows up when the MTA is processing
	a high number of messages and/or on multi-processor servers. The sockets error,
	10038, indicates that the MTA has attempted to open an invalid socket. As soon
	as another MTA thread releases a socket, the MTA thread in error will claim and
	use it.
	
	No data loss will occur as this activity is by design under heavy load. For more
	information on the 10038 sockets error, please see the following Microsoft
	Knowledge Base article:
	
	  Q155738 Application Coding Error Results in Error 100038 (WSAENOTSOCK)
	
	This behavior is by product design.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : 4.0, 50., 5.5
	Issue type        : kbbug
	
	=============================================================================
	
