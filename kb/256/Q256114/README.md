---
layout: page
title: "Q256114: XIMS: Access Violation at CMtsOutQueue::LoadCachedDetailInfo"
permalink: kb/256/Q256114/
---

## Q256114: XIMS: Access Violation at CMtsOutQueue::LoadCachedDetailInfo

	Article: Q256114
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
	
	In Exchange Server version 5.5, when you monitor the queue of outbound messages
	awaiting conversion in the Internet Mail Service properties by using the
	Exchange Server Administrator program, if a comma (,) is included in an e-mail
	address, an access violation may occur.
	
	CAUSE
	=====
	
	This issue can occur if both ";" and "," are included in the specified e-mail
	address and the Internet Mail Service conversion process for outbound messages
	resolves to more than one correct e-mail address, because there is a issue with
	the way that e-mail addresses are resolved in the conversion process that can
	cause an access violation.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
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
	
