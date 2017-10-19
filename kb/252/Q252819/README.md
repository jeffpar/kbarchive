---
layout: page
title: "Q252819: XFOR: Read Receipt from cc:Mail Loses Content"
permalink: /kb/252/Q252819/
---

## Q252819: XFOR: Read Receipt from cc:Mail Loses Content

	Article: Q252819
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
	
	When a message is sent from an external Internet address to a Lotus cc:Mail
	address through Exchange Server, the returned read receipt loses content and the
	external sender receives a blank read receipt.
	
	CAUSE
	=====
	
	When the Microsoft Exchange Connector for Lotus cc:Mail creates a message for
	read receipt, the Connector for cc:Mail does not set the PR_REPORT_TIME
	property, so the Internet Mail Service does not generate the message body for
	the read receipt when it sends the read receipt.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this issue, configure the Internet Mail Service to always use
	Rich Text Format (RTF), but be aware that this may destroy the format of some
	messages.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	Another issue that is a result of the same issue is that all read receipts from
	cc:Mail to Exchange Server users lose the last line of the read receipt lost,
	for example:
	
	  was read on 12/21/1999 5:19 PM
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
