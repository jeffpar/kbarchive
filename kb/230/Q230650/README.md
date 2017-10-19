---
layout: page
title: "Q230650: XCON: Moving Messages from One X.400 Connector Queue to Another"
permalink: /kb/230/Q230650/
---

## Q230650: XCON: Moving Messages from One X.400 Connector Queue to Another

	Article: Q230650
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following scenario describes the situation for how to move messages from one
	X.400 Connector queue to another:
	
	Server A is in Houston, running Exchange Server 5.5 Service Pack 2, on Windows NT
	4.0 Service Pack 3.
	It has the following X.400 Connectors:
	
	  X.400 Connector to Florida Cost = 1 (connected site only to Florida)
	  X.400 Connector to Arizona Cost = 100 (connected site only to Arizona)
	
	  Houston ------128 Kbps-------Florida-------T-1---------Arizona
	
	  Arizona is the directory replication hub.
	  There is no direct link between Houston and Arizona.
	
	There are messages sitting in the queue of the X.400 Connector to Arizona, and
	they are not getting delivered.
	
	Original:
	For example, If there are messages sitting in the queue to x400 connector to the
	Arizona, and are not getting delivered because of any reason. This article
	presents a way to move these messages to the other X400 connector to Florida
	queue on the same server.
	
	In general, this article presents a way to move messages from one X.400 Connector
	queue to another X.400 Connector queue on the same server, if server has the
	proper routing information.
	
	MORE INFORMATION
	================
	
	There are two approaches you can take:
	
	Method One
	----------
	
	1. On the X.400 Connector from which you want to move messages, change the
	  address space on the X.400 Connector, and make it invalid.
	
	2. Recalculate routing.
	
	3. Stop and restart the Message Transfer Agent (MTA) service.
	
	Method Two
	----------
	
	1. Delete the X.400 Connector from which you want to move messages.
	
	2. Recalculate routing.
	
	3. Stop and restart the MTA service.
	
	CAUTION: If the X.400 Connector is also involved in the directory replication
	topology, you must compensate for it.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
