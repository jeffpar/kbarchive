---
layout: page
title: "Q244467: XFOR: GroupWise DR Doesn't Work on Long Orig-Msg-ID"
permalink: /kb/244/Q244467/
---

## Q244467: XFOR: GroupWise DR Doesn't Work on Long Orig-Msg-ID

	Article: Q244467
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
	
	When you send e-mail from an Exchange Server mailbox to a Novell GroupWise
	mailbox and you request delivery receipts and read receipts, if the Orig-Msg-Id
	attribute is long enough, a delivery receipt is not sent.
	
	CAUSE
	=====
	
	This issue can occur if the Orig-Msg-Id attribute is split across two lines and
	there are more than two white spaces after the Orig-Msg-ID= keyword. This causes
	the delivery receipt address to be incorrectly parsed.
	
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
	Component         : GroupWise
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
