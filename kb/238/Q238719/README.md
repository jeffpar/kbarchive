---
layout: page
title: "Q238719: XIMS: MTA Queues Mail for &quot;Inbound Only&quot; Internet Mail Service"
permalink: /kb/238/Q238719/
---

## Q238719: XIMS: MTA Queues Mail for &quot;Inbound Only&quot; Internet Mail Service

	Article: Q238719
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the transfer mode on the Connections tab of the Internet Mail Service
	Properties page is configured as "Inbound Only," the message transfer agent
	(MTA) may still queue outbound mail for that Internet Mail Service even though
	the Internet Mail Service does not pick up and deliver the mail.
	
	CAUSE
	=====
	
	The Internet Mail Service has an SMTP address space defined on the Address Space
	tab of the Internet Mail Service Properties page. This address space causes an
	SMTP route for this Internet Mail Service to appear in the routing table. The
	MTA sees that as a valid route for outbound SMTP mail. As a result, the MTA
	queues mail for that Internet Mail Service.
	
	RESOLUTION
	==========
	
	This problem can be resolved by removing the Address Space from the Internet
	Mail Service entirely. To do so, on the Internet Mail Service Properties page,
	click the Address Space tab, and remove any address spaces that are defined
	there.
	
	After routing has been recalculated, the SMTP route for that Internet Mail
	Service should disappear from the routing table. After this occurs, the MTA will
	no longer queue outbound mail for that Internet Mail Service because it will not
	see a route for it.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
