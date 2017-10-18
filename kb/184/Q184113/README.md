---
layout: page
title: "Q184113: XCON: Content Conversion Fails After Repeated Replies"
permalink: kb/184/Q184113/
---

## Q184113: XCON: Content Conversion Fails After Repeated Replies

	Article: Q184113
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A user sends a message in Rich Text Format (RTF) to a user on another Exchange
	Server computer connected by an X.400 Connector with "Remote clients support
	MAPI" configured. The second user replies to the message, including the original
	text, and also using RTF. The original user then replies to this reply, again
	including the message. After several replies (the number depends on the amount
	of data exchanged), one of the recipients receives a non-delivery report (NDR)
	with Reason = Unable to Transfer, and Diagnostic = A syntax error was detected
	in the content of the message. The message transfer agent (MTA) that generated
	the NDR is an Exchange Server 5.0 SP2 MTA, and it will have reported a Content
	Conversion Failure (Event ID 290).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the following fix by contacting Microsoft
	Technical Support or wait for the next Exchange Server service pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.0
	SP2.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchangeClientSearch kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
