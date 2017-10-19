---
layout: page
title: "Q164175: XADM: Message Tracking Doesn't Track IMC-bound Mail"
permalink: /kb/164/Q164175/
---

## Q164175: XADM: Message Tracking Doesn't Track IMC-bound Mail

	Article: Q164175
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use Message Tracking to track messages sent out over the
	Internet Mail Connector (IMC) in Exchange Server 4.0 or the Internet Mail
	Service in Exchange Server 5.0 and later, no tracking information can be found.
	
	CAUSE
	=====
	
	This problem can occur if you use the Standard Edition of Exchange Server.
	
	RESOLUTION
	==========
	
	To enable Message Tracking for outbound IMC or Internet Mail Service messages if
	you use the Standard Edition of Exchange Server, you must install the Microsoft
	Exchange Connector (Site Connector) component. When you do this, the message
	transfer agent (MTA) object is exposed in the specific Server's container, and
	you can enable Message Tracking on the MTA's general property page in the
	Exchange Server Administrator program. This allows you to track inbound and
	outbound messages over the IMC and Internet Mail Service.
	
	NOTE: You do not need to actually create a site connector after you install the
	Connector Pack. When you install the connector, you enable message tracking on
	the IMC or Internet Mail Service.
	
	
	Additional query words: tracked
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
