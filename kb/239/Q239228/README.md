---
layout: page
title: "Q239228: XCON: Internet Mail Service Incorrectly Routes Mail If Address S"
permalink: kb/239/Q239228/
---

## Q239228: XCON: Internet Mail Service Incorrectly Routes Mail If Address S

	Article: Q239228
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 19-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are using an Internet Mail Service and have restrictions set to either
	This Site or This Location, you may find that mail is incorrectly routed. This
	occurs in the following circumstances:
	
	- You have an Exchange Server site that is geographically split with an
	  Internet Mail Service in each site. Each server has the Server Location
	  property set. The address space is "SMTP:*", but this has a restriction of
	  "location."
	
	- You have two or more Exchange Server sites linked together and fully
	  replicated. Each site has an Internet Mail Service and the address space is
	  "SMTP:*", but this has a restriction of "site."
	
	- The expected behavior is that a message sent by a user in either the same
	  site or that Internet Mail Service should send same location as the Internet
	  Mail Service. However, the message is routed to a different Internet Mail
	  Service in another site or location, and then sent out.
	
	
	CAUSE
	=====
	
	The routing logic in the Internet Mail Service is not honoring the site or
	location restrictions.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	A workaround to this issue is to set the restrictions to be organization-wide.
	However, this may not be suitable in every circumstance.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
