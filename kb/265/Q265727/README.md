---
layout: page
title: "Q265727: XFOR: Internet Mail Service Stops while Obtaining Next Host"
permalink: /kb/265/Q265727/
---

## Q265727: XFOR: Internet Mail Service Stops while Obtaining Next Host

{% raw %}

	Article: Q265727
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
	
	While the Internet Mail Service tries to retrieve the next host address to
	deliver a message, the Internet Mail Service may generate a Dr. Watson error
	message. This behavior is most likely to occur after several unsuccessful
	attempts to deliver a message.
	
	CAUSE
	=====
	
	This issue can occur because under very specific circumstances, the Internet
	Mail Service continues to search for Internet protocol (IP) addresses to use to
	deliver the message, even though there are no more IP addresses to try for a
	given domain.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
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
	

{% endraw %}
