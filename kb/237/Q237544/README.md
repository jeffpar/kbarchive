---
layout: page
title: "Q237544: XADM: Unable to Connect Using IMAP/SSL"
permalink: /kb/237/Q237544/
---

## Q237544: XADM: Unable to Connect Using IMAP/SSL

	Article: Q237544
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
	
	IMAP clients logging on using Secure Sockets Layer (SSL) may not be able to
	connect to the Microsoft Exchange Server computer. The event log on the server
	indicates only that the connection to the client is lost. The client logs record
	that the server has closed the connection unexpectedly. After it is terminated,
	subsequent connection attempts by any client to the IMAP/SSL port (port 993) are
	refused.
	
	CAUSE
	=====
	
	A fetch command with certain parameters on a larger message (occurs more
	frequently on bigger messages) causes the connection to the requesting client to
	be unexpectedly closed. The listening thread for port 993 also ends, thus, any
	subsequent connection attempts do not succeed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-----------------------+
	| File name  | Version  | 
	+-----------------------+
	| Store.exe  | 5.5.2650 | 
	+-----------------------+
	| Netif.dll  | 5.5.2650 | 
	+-----------------------+
	| Gapi32.dll | 5.5.2650 | 
	+-----------------------+
	| Mdbmsg.dll | 5.5.2650 | 
	+-----------------------+
	
	
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
	Solution Type     : kbfix
	
	=============================================================================
	
