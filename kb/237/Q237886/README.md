---
layout: page
title: "Q237886: XFOR: Msg. Attachment Name Changed in Migration from cc:Mail DB6"
permalink: kb/237/Q237886/
---

## Q237886: XFOR: Msg. Attachment Name Changed in Migration from cc:Mail DB6

	Article: Q237886
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
	
	When you migrate messages from a Lotus cc:Mail DB6 post office, some messages
	with attachments may not have the proper attachment name. The name is replaced
	with NONAME<X>.TXT, where <X> is a number.
	
	CAUSE
	=====
	
	The attachment name is incorrectly read from the message header instead of being
	read from the message body.
	
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
	
