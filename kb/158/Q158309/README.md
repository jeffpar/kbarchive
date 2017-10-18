---
layout: page
title: "Q158309: XFOR: Event ID 178 During Directory Synchronization"
permalink: kb/158/Q158309/
---

## Q158309: XFOR: Event ID 178 During Directory Synchronization

	Article: Q158309
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Directory synchronization may fail between a computer running Microsoft Exchange
	Server and a Microsoft Mail for PC Networks postoffice. The following event
	appears in the Microsoft Windows NT Event Viewer:
	
	  Event ID: 178
	  Source: MSExchangeMTA
	  Category: X400 Service
	
	  An error occurred while transferring in message because the directory name
	  could not be expanded to an O/R address. An X.400 API Association (XAPIA)
	  unable-to-transfer reason code and unrecognized-OR-name diagnostic code were
	  returned. [MTA SUBMIT 17 73] (14)
	
	CAUSE
	=====
	
	This event occurs if the Directory Synchronization object does not have a valid
	X.400 address.
	
	RESOLUTION
	==========
	
	To resolve the problem:
	
	1. Using the Exchange Server Administrator program, select the Exchange Server
	  container, double-click the Directory Synchronization object, and then click
	  the E-mail Addresses tab.
	
	2. Type a valid X.400 address.
	
	MORE INFORMATION
	================
	
	For additional information about Microsoft Mail for PC Networks directory
	synchronization, please click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q96060 PC DirSync: Directory Synchronization (Dir-Sync)
	
	For additional information on Exchange Server directory synchronization, please
	see Chapter 14 of the Microsoft Exchange Server Administrator's Guide.
	
	For additional information about how to perform manual directory synchronization
	between Microsoft Mail for PC Networks postoffices and Exchange Server, please
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q147464 XFOR: Manual Dirsync with Exchange Server as Dirsync Server
	
	  Q148309 XFOR: Manual Dir-Sync with Exchange as Dir-Sync Requestor
	
	For additional information about Event ID 178 from the Exchange Server message
	transfer agent, please click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q155104 Event ID 178 Results if Mailbox has No X.400 Address
	
	Additional query words: dirsync DXA DX
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
