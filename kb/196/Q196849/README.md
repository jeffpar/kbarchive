---
layout: page
title: "Q196849: XFOR: Internet Mail Service Attachment Formatting Fails"
permalink: kb/196/Q196849/
---

## Q196849: XFOR: Internet Mail Service Attachment Formatting Fails

	Article: Q196849
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under certain circumstances, when you send messages containing multiple
	attachments using the Exchange Server 5.5 Service Pack 1 Internet Mail Service,
	the messages may not arrive correctly formatted for an Microsoft Mail for PC
	Networks recipient. This can occur when the e-mail is received by the Microsoft
	Mail (PC) postoffice by means of third-party gateways that lack the ability to
	handle Content-Location data correctly (RFC 2110).
	
	When viewing the message, using the Exchange, Microsoft Mail (PC), or Outlook
	client, the attachments are displayed as raw MIME in the body text, and cannot
	be launched or accessed.
	
	A message containing a single attachment arrives correctly formatted.
	
	CAUSE
	=====
	
	The problem is attributable to new functionality, added to Exchange Server 5.5
	Service Pack 1, to support Content-Location in the message body.
	Content-Location is a proposed SMTP standard defined in RFC 2110.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Information Store
	
	  File Name    Version
	  -----------------------
	  Gapi32.dll   5.5.2444.0
	  Mdbmsg.dll   5.5.2444.0
	  Store.exe    5.5.2444.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
