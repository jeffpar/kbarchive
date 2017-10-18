---
layout: page
title: "Q241516: XADM: Exchange Becomes Unresponsive Approximately Every 24 Days"
permalink: kb/241/Q241516/
---

## Q241516: XADM: Exchange Becomes Unresponsive Approximately Every 24 Days

	Article: Q241516
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server becomes unresponsive to Microsoft Exchange Clients
	approximately every 24 days.
	
	CAUSE
	=====
	
	The extensible storage engine (JET), which is the underlying storage mechanism
	for Exchange Server, is incorrectly updating a list of current pages in memory,
	resulting in a cross-linked list of pages.
	
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
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
