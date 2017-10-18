---
layout: page
title: "Q231307: XADM: Server Issues V1 Certificate When Configured for V3 Only"
permalink: kb/231/Q231307/
---

## Q231307: XADM: Server Issues V1 Certificate When Configured for V3 Only

	Article: Q231307
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you configure a Key Management (KM) server to issue X.509 V3 certificates
	only, the server may still issue V1 certificates when e-mail clients request
	them. This problem is known to occur with the Microsoft Exchange client versions
	4.0 and 5.0, and Microsoft Outlook 97, but the problem can occur with any e-mail
	client that only uses V1 certificates.
	
	CAUSE
	=====
	
	When an e-mail client requests a certificate from a KM server, the server does
	not verify that the request is compatible with its current configuration.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	Component: Key Management
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Kmserver.exe | 5.5.2606.0 | 
	+---------------------------+
	| Kmsmsg.dll   | 5.5.2606.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
