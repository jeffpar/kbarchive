---
layout: page
title: "Q166594: XCON: Messages not Being Delivered Over the First Association"
permalink: kb/166/Q166594/
---

## Q166594: XCON: Messages not Being Delivered Over the First Association

	Article: Q166594
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Message Transfer Agent (MTA) has a backlog of messages
	(up to the default threshold) waiting to be delivered. The MTA makes an
	association with another LAN-MTA (RPC connection), but does not deliver mail
	over this connection.
	
	CAUSE
	=====
	
	The MTAs on both sides of the connection detect that the opposite MTA has the
	Turn to send messages. Because of this confusion, neither side sends messages.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The initiating MTA has passed the Turn to the receiving MTA, but the receiving
	MTA does not get it because the association is lost (for whatever reason). When
	the initiating MTA recovers the association and asks for the Turn back, the
	receiving MTA ignores this request because it does not believe it has the Turn.
	Therefore, no one has the Turn and no messages will be sent.
	
	After the message threshold has been reached (default value is 50), the MTAs will
	make a new association and begin delivering messages.
	
	Additional query words: RT-Turn-Please RT-Turn-Give ASB token give
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
