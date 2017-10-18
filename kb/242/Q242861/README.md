---
layout: page
title: "Q242861: XCON: Message Transfer Agent Stops on 9405 Errors"
permalink: kb/242/Q242861/
---

## Q242861: XCON: Message Transfer Agent Stops on 9405 Errors

	Article: Q242861
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
	
	The Microsoft Exchange Server message transfer agent (MTA) may stop and record a
	9405 event in the Windows NT Event Viewer. The 9405 event is from the Field
	Engineering category:
	
	  An unexpected error has occurred which may cause the MTA to terminate. Error:
	  Bad secure on object 2589. [BASE XFER-IN 28] (16)
	
	
	CAUSE
	=====
	
	Access to a connector such as the Internet Mail Service, located on the affected
	server, is limited using distribution lists (DLs). Because of this restriction,
	transferred messages have to be checked against this access limitation and the
	DLs have to be expanded. Depending on the size and the nesting level of the DLs,
	this may cause the error above.
	
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
	
