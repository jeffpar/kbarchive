---
layout: page
title: "Q273948: XFOR: SSL Issues w/Internet Mail Service on Windows 2000"
permalink: kb/273/Q273948/
---

## Q273948: XFOR: SSL Issues w/Internet Mail Service on Windows 2000

	Article: Q273948
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the Exchange Internet Mail Service is running on a Microsoft Windows
	2000-based server, it can not make a Secure Sockets Layer (SSL) connection when
	the remote side is another Exchange Internet Mail Service.
	
	CAUSE
	=====
	
	The Internet Mail Service is using the IP address of the remote computer instead
	of the Fully Qualified Domain Name (FQDN). The FQDN is typically the name on the
	certificate that must match to make a SSL connection.
	
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
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
