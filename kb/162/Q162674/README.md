---
layout: page
title: "Q162674: XCON: MTA Sockets Error 10054 Connecting Over TCP/IP X.400"
permalink: kb/162/Q162674/
---

## Q162674: XCON: MTA Sockets Error 10054 Connecting Over TCP/IP X.400

	Article: Q162674
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
	
	When the Exchange message transfer agent (MTA) connects to a remote Exchange MTA
	over an X.400 TCP/IP connection, you may get the following event ID in the
	application event log of the local MTA:
	
	  7/31/97 4:15:31 PM MSExchangeMTA Warning Operating System 9221 N/A
	  EXCHSRV1 A sockets error 10054 on a WSARecvEx() call was detected. The
	  MTA will attempt to recover the sockets connection. Control block index:
	  1. [BASE IL TCP/IP DRVR 10 262] (12)
	
	Also, the connection to the remote MTA fails.
	
	CAUSE
	=====
	
	This scenario may occur when you use only DNS (Domain Name Service) for name
	resolution, and only the host name is entered under
	Org?Site?Connections?Connector?Stack.
	
	RESOLUTION
	==========
	
	Enter the FQDN or the IP address under
	<Org>?<Site>?Connections?Connector?Stack.
	
	
	Additional query words: exchange, mta sockets 10054 dns
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
