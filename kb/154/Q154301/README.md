---
layout: page
title: "Q154301: XCON: MTA X.400 Connector Problems on Slow Links"
permalink: kb/154/Q154301/
---

## Q154301: XCON: MTA X.400 Connector Problems on Slow Links

	Article: Q154301
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an X.400 connector is used over a slow link, a number of different problems
	can occur. In some cases the message transfer agent (MTA) stops responding and a
	DRWATSON log is generated with exception e0020002 or Access Violation c0000005.
	One Application Event Log error is:
	
	  MTA error (Event ID = 9405):
	  An unexpected error has occurred which may cause the MTA to terminate.
	  Error: SBPDSCLS:CB TID=1,calling TID=0. [BASE TCP/IP DRVR 10] (16)
	
	Other symptoms include the following socket errors:
	
	  A sockets error 10060
	  (WSAETIMEDOUT) event ID 9215, A sockets error 10051 (WSAENETUNREACH) event ID
	  9215, A sockets error 10054 (WSAECONNRESET) event ID 9224.
	
	WORKAROUND
	==========
	
	The problem only happens when there is insufficient bandwidth or a high number
	of network errors. One workaround is increase the bandwidth available to the
	MTA.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: RPC X.25 ISDN
	
	======================================================================
	Keywords          : kbusage exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
