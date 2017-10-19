---
layout: page
title: "Q220890: XADM: Simple IMAP4 Fails if IMAP4 with SSL Fails"
permalink: /kb/220/Q220890/
---

## Q220890: XADM: Simple IMAP4 Fails if IMAP4 with SSL Fails

	Article: Q220890
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
	
	Simple IMAP4 will fail if IMAP4 with Secure Sockets Layer (SSL) fails. Logon to
	IMAP4 will succeed, but if the user tries to access their Inbox, the following
	error messaged may be displayed:
	
	  There is no replica of this mailbox on this server.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Gapi32.dll   | 5.5.2549.0 | 
	+---------------------------+
	| Imap4evt.dll | 5.5.2549.0 | 
	+---------------------------+
	| Mdbmsg.dll   | 5.5.2549.0 | 
	+---------------------------+
	| Store.exe    | 5.5.2549.0 | 
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
	Solution Type     : kbfix
	
	=============================================================================
	
