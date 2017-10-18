---
layout: page
title: "Q255753: XFOR: How to Determine If SSL Works on the Internet Mail Service"
permalink: kb/255/Q255753/
---

## Q255753: XFOR: How to Determine If SSL Works on the Internet Mail Service

	Article: Q255753
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to verify that Secure Sockets Layer is working on the
	Exchange Server Internet Mail Service.
	
	MORE INFORMATION
	================
	
	To verify that Secure Sockets Layer is working on the Exchange Server Internet
	Mail Service, telnet to port 25 of the Internet Mail Service and type the
	following:
	
	  EHLO <host>.<domain>.com
	
	The Internet Mail Service should return STARTTLS. If STARTTLS is not returned,
	Secure Sockets Layer is not configured.
	
	If the Internet Mail Service is set up to communicate through Secure Sockets
	Layer with a particular domain, you must enter the domain name after the first
	EHLO. If you omit the domain, the STARTTLS does not reply.
	
	For additional information about Secure Sockets Layer on the Internet Mail
	Service, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q175439 XFOR: Enabling Secure Sockets Layer For Exchange Server
	
	Additional query words: TLS test
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
