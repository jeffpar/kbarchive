---
layout: page
title: "Q253348: XCON: Exchange Server Cannot Reply All to Notes Recipients"
permalink: /kb/253/Q253348/
---

## Q253348: XCON: Exchange Server Cannot Reply All to Notes Recipients

	Article: Q253348
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
	
	If you reply all to a Lotus Notes user and either of the following conditions
	are true,
	
	- The Lotus Notes user has only a last name specified and does not have a Notes
	  proxy address specified in Exchange Server.
	
	- The Notes users have not performed a directory synchronization to Exchange
	  Server.
	
	the address may not resolve and you may not be able to send the e-mail.
	
	CAUSE
	=====
	
	This issue can occur because the Microsoft Exchange Connector for Lotus Notes
	treats messages that contain Notes addresses that cannot be resolved as Simple
	Mail Transfer Protocol (SMTP) messages. If the Notes addresses do not comply
	with SMTP standards, you cannot send messages to those addresses.
	
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
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
