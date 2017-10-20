---
layout: page
title: "Q236788: XIMS: URL Not Formatted Properly in IMAP Referral Response"
permalink: /kb/236/Q236788/
---

## Q236788: XIMS: URL Not Formatted Properly in IMAP Referral Response

{% raw %}

	Article: Q236788
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you connect to Transmission Control Protocol (TCP) port 143 on an Internet
	Mail Access Protocol (IMAP) server, and then attempt to log on to a different
	server, the logon request may be authenticated by the second server instead of
	the first. You may be logged on successfully, but in the response you receive,
	the trailing slash mark (/) is missing from the second server's uniform resource
	locator (URL). For example, the response may appear similar to the following:
	
	  OK [REFERRAL imap://<server>;AUTH=*<domain>] LOGIN completed
	
	This URL is not compatible with Request for Comments (RFC) 2192, which indicates
	that the URL in an IMAP referral should be in the following format:
	
	  imap://<server>/
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, click the following article number to
	view the article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Gapi32.dll | 5.5.2639.0 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2639.0 | 
	+-------------------------+
	| Netif.dll  | 5.5.2639.0 | 
	+-------------------------+
	| Store.exe  | 5.5.2639.0 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: imap4
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
