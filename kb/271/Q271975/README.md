---
layout: page
title: "Q271975: XADM: Folders in English Instead of Brazilian or Portuguese"
permalink: kb/271/Q271975/
---

## Q271975: XADM: Folders in English Instead of Brazilian or Portuguese

	Article: Q271975
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
	
	When you use a Brazilian or Portuguese e-mail client to log on to a computer
	that is running the corresponding foreign language version of Exchange Server,
	the Inbox, Outbox, Sent Items, and Deleted Items folders appear in English
	rather than in the appropriate language.
	
	CAUSE
	=====
	
	This issue occurs because the Brazilian and Portuguese versions of the
	Emsmdb32.dll file contain the incorrect locale ID (LCID) language code.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
