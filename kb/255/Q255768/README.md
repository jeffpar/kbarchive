---
layout: page
title: "Q255768: XADM: Mbclean Report Messages Are Composed in German"
permalink: /kb/255/Q255768/
---

## Q255768: XADM: Mbclean Report Messages Are Composed in German

	Article: Q255768
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
	
	If you run the Microsoft Exchange Server Mailbox Manager service (Mbclean.exe)
	that is included with Exchange Server 5.5 Service Pack 3 on a computer that is
	running the Simplified Chinese version of Microsoft Windows NT version 4.0 and
	Exchange Server 5.5, the report messages that the Microsoft Exchange Server
	Mailbox Manager service generates may be composed in German.
	
	CAUSE
	=====
	
	This issue can occur because the predefined strings for the report messages in
	the Simplified Chinese version of the Microsoft Exchange Mailbox Manager service
	are incorrect.
	
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
	
