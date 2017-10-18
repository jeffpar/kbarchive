---
layout: page
title: "Q184104: XCON: RTF Lost After Certain Number of Replies"
permalink: kb/184/Q184104/
---

## Q184104: XCON: RTF Lost After Certain Number of Replies

	Article: Q184104
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
	of data exchanged), one of the recipients observes that the message no longer
	contains RTF; it contains only the IA5 representation of the text. The message
	transfer agent (MTA) that sent this last message is an Exchange Server 5.0 SP2
	MTA.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the following fix by contacting Microsoft
	Technical Support or wait for the next Exchange Server service pack.
	
	This fix should have the following time stamp:
	
	  xx/xx/xx  xx:xx               xxx,xxx xxxxxxx.xxx (Intel)
	  xx/xx/xx  xx:xx               xxx,xxx xxxxxxx.xxx (Alpha)
	
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
	
