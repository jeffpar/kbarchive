---
layout: page
title: "Q187643: XCON: Message Content Changes When Sending via X.400 to UNIX"
permalink: kb/187/Q187643/
---

## Q187643: XCON: Message Content Changes When Sending via X.400 to UNIX

	Article: Q187643
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 13-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an Exchange user sends a message via an X.400 Connector that contains the
	following syntax in the message body:
	
	  execute the following command in Unix: cp ../.login .profile
	
	the syntax will be modified and will appear as follows after the recipient
	receives the message:
	
	  execute the following command in Unix: cp. ./.login. profile
	
	Notice that the periods and spaces have shifted in the syntax shown above.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	Additional query words: MTA
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
