---
layout: page
title: "Q249349: XADM: MTA Converts (a) to (040)a(041) in Message Tracking"
permalink: /kb/249/Q249349/
---

## Q249349: XADM: MTA Converts (a) to (040)a(041) in Message Tracking

	Article: Q249349
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 12-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you send a message to an Outlook contact or personal Address Book entry that
	contains an encapsulated RFC-822 address.
	
	For example:
	
	  C=us;a= ;p=microsoft;o=msft;s=user;DDA:RFC-822=user(a)domain.com
	
	you may find that the message tracking logs in the Microsoft Exchange Server
	Administrator program incorrectly show the (a) translated to (040)a(041). As a
	result, the above address appears as follows:
	
	  C=us;a= ;p=microsoft;o=msft;s=user;DDA:RFC-822=user(040)a(041)domain.com
	
	CAUSE
	=====
	
	The Exchange Server message transfer agent (MTA) is incorrectly translating the
	parentheses (), which are then written to the tracking log.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 SP3. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
