---
layout: page
title: "Q235051: XADM: Disabling POP3 Clear Text Authentication Disables SSL CTA"
permalink: /kb/235/Q235051/
---

## Q235051: XADM: Disabling POP3 Clear Text Authentication Disables SSL CTA

	Article: Q235051
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
	
	Administrators are given the option to choose what type of authentication
	mechanism is allowed for POP3 users. If an administrator chooses to disable
	clear text authentication (CTA), this also disables clear text authentication
	over Secure Sockets Layer (SSL).
	
	CAUSE
	=====
	
	If the request to authenticate comes in through SSL, the Exchange Server
	information store authenticates the user, but an error message is returned to
	the client because when the store begins processing the commands, it only checks
	to see if clear text is disabled. If clear text is disabled, the store returns
	an error. The store does not check to see if the command arrives through SSL.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+----------------------+
	| File name  | Version | 
	+----------------------+
	| Gapi32.dll | 2638.0  | 
	+----------------------+
	| Mdbmsg.dll | 2638.0  | 
	+----------------------+
	| Netif.dll  | 2638.0  | 
	+----------------------+
	| Store.exe  | 2638.0  | 
	+----------------------+
	
	NOTE: This fix requires the Directory fix from the following Microsoft Knowledge
	Base article:
	
	  Q230285 XADM:'Denial of service' Vulnerability in Store with IMAP or POP3
	
	
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
	
