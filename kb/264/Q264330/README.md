---
layout: page
title: "Q264330: XFOR: Internet Mail Service Relays Messages Despite Restrictions"
permalink: kb/264/Q264330/
---

## Q264330: XFOR: Internet Mail Service Relays Messages Despite Restrictions

	Article: Q264330
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server 5.5 Internet Mail Service may relay messages if the messages
	are sent to a specific encapsulated addressing format.
	
	CAUSE
	=====
	
	This issue can occur if the message is sent to a server that is using one domain
	(for example, domain1) that is set to "forward all messages" to another domain
	(for example, domain2). The "forward all messages" option is set on the
	Connections tab. The server is also configured to reroute inbound SMTP mail (set
	on the Routing tab), has the routing restriction for "Hosts and clients that
	successfully authenticate" selected, and is configured to accept mail from
	"localdomain.com". The message is in the following format:
	
	  "IMCEA user@domain2.com" @localdomain1.com
	
	This format implies that this user does exist on domain2 and that domain1 has
	site addressing set to localdomain1.com.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
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
	
