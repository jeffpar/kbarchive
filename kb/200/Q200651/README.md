---
layout: page
title: "Q200651: XIMS: Exchange Server and POP3: Top 10 Issues and Solutions"
permalink: /kb/200/Q200651/
---

## Q200651: XIMS: Exchange Server and POP3: Top 10 Issues and Solutions

{% raw %}

	Article: Q200651
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article references the top 10 call generators for the Microsoft Post Office
	Protocol version 3 (POP3) technology. The "More Information" section contains
	references to existing Knowledge Base articles as well as a brief summary of
	each.
	
	MORE INFORMATION
	================
	
	1. When a user sends a message that uses a POP3 client (for example, Eudora
	  3.0), and includes an attachment with a filename longer than 25 characters,
	  the attachment is not decoded.
	
	  Q166546: POP3 Attachments Do Not Decode
	
	2. This article contains information relevant to general protection faults
	  (GPFs) within the Microsoft Exchange Server information store service
	  (Store.exe).
	
	  Q166562: Store.exe GPFs When POP3 Client Submits Bad Message Header
	
	3. This article gives an overview of the POP3 functionality as well as how it
	  relates to SMTP and IMAP4 protocols.
	
	  Q169462: Configuring POP3 Client for Remote Mail Configuration
	
	4. This article gives you step-by-step instructions on how to resolve the Event
	  ID 11202 error.
	
	  Q171435: POP3 Logon Attempt Fails with Event 11202
	
	5. If you have applied the POP3 hotfix mentioned in Q166562, the following
	  article will help you to resolve POP3 clients unable to download all
	  messages.
	
	  Q168245: POP3 Clients Unable to Download All Msgs
	
	6. This article explains all the POP3 commands along with the functionality that
	  each command provides.
	
	  Q161116: POP3 Supported Command Set for Exchange Server 5.0
	
	7. This article will help you troubleshoot why either IMAP4 or POP3 clients are
	  unable to access Custom Recipients.
	
	  Q173776: Custom Recipients Cannot Be Accessed via IMAP or POP3
	
	8. This article discusses the changes that were made to the download order of
	  messages to a POP3 client.
	
	  Q186172: POP3 RETR and LIST Command Behavior Reversed
	
	9. This article explains that a Microsoft Exchange Server computer may accept a
	  corrupted incoming mail message from an outside source.
	
	  Q168109: POP3 Clients and Mail Conversion Failures
	
	10. This article addresses how to enable the Exchange Server to accept Secure
	  Socket Layer (SSL) authentication.
	
	  Q175439: Enabling SSL For Exchange Server
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
