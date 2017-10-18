---
layout: page
title: "Q264329: XCON: MTA Stops Transferring Data After an X.25 Error"
permalink: kb/264/Q264329/
---

## Q264329: XCON: MTA Stops Transferring Data After an X.25 Error

	Article: Q264329
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 16-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server message transfer agent (MTA) may stop transferring messages
	through all X.400 connectors that use a X.25 Winsock stack, even if those
	connectors are available.
	
	CAUSE
	=====
	
	This issue can occur if multiple (two or more) X.25 Winsock stacks are
	configured and one link is down. When the X.25 Winsock driver returns an error
	to the MTA listen call, both links may stop transferring data.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How toObtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	
	Additional query words: X25 CIREL
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
