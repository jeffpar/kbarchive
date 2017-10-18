---
layout: page
title: "Q171001: XCON: Connection Difficulties When RAS Session Is In Progress"
permalink: kb/171/Q171001/
---

## Q171001: XCON: Connection Difficulties When RAS Session Is In Progress

	Article: Q171001
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When one or more Microsoft Exchange Server computers are configured for Dynamic
	RAS and there is a Dynamic RAS session in progress, the Microsoft Exchange
	client and the Exchange Administrator program may have difficulty connecting to
	the server.
	
	CAUSE
	=====
	
	During initialization, the Microsoft Exchange client and the Exchange
	Administrator program send Remote Procedure Calls to the configured default
	gateway. By default, these calls are sent over the active RAS connection.
	
	RESOLUTION
	==========
	
	To disable RAS as the default gateway, end any active RAS sessions and perform
	the following steps:
	
	1. Start the Microsoft Exchange Administrator program and expand the
	  Configuration item.
	
	2. Choose Connection and select the RAS item from the left pane.
	
	3. On the General tab, select RAS Phone Book item.
	
	4. On the Server tab, select TCP/IP settings.
	
	5. Deselect the "Use default gateway on remote server" checkbox.
	
	6. Click OK.
	
	Additional query words: RAS client connect
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
