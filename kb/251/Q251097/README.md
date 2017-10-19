---
layout: page
title: "Q251097: XIMS: Troubleshooting POP3/IMAP 13002 Errors w. SSL on Exchange"
permalink: /kb/251/Q251097/
---

## Q251097: XIMS: Troubleshooting POP3/IMAP 13002 Errors w. SSL on Exchange

	Article: Q251097
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 01-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to Exchange Server by using Post Office Protocol 3
	(POP3) or Internet Message Access Protocol (IMAP) over Secure Sockets Layer
	(SSL), the following event is logged in the application event log of the
	Exchange Server computer:
	
	  Event Type: Error
	  Event Source: MSExchange <Protocol> Interface
	  Event Category: Authentication
	  Event ID: 13002
	  Description:
	  An attempt to connect an SSL client failed because the server does not have a
	  valid certificate.
	
	If you are using Microsoft Outlook Express as a client, you may receive the
	following error message:
	
	  Your server has unexpectedly terminated the connection. Possible causes for
	  this include server problems, network problems, or a long period of
	  inactivity. Account: 'Server', Server: 'Server', Protocol: POP3, Port: 995,
	  Secure(SSL): Yes, Error Number: 0x800CCC0F
	
	CAUSE
	=====
	
	The SSL certificate is not installed on the protocol that you are using, or the
	certificate is improperly installed.
	
	RESOLUTION
	==========
	
	To resolve this problem, make sure that the certificate has been installed
	correctly. For additional information about how to install the certificate
	correctly, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q175439 XFOR: Enabling SSL For Exchange Server
	
	If you are using the version of Key Manager that is installed with the Microsoft
	Windows NT version 4.0 Option Pack or the Microsoft Internet Information
	Services (IIS) in Exchange Server 4.0 or later, make sure that that the key is
	installed for the default IP address, or the specific IP address of the server:
	
	1. In Microsoft Management Console (MMC) for IIS, click Key Manager to start Key
	  Manager.
	
	2. If the word "Default" is not displayed next to the keys for each protocol,
	  you need to add it:
	
	  a. Double-click each key to open the IP bindings.
	
	  b. Click Default for all of the unspecified IP addresses.
	
	After you perform these steps for the Exchange Server SMTP protocol, you must
	restart the Exchange Server Internet Mail Service.
	
	MORE INFORMATION
	================
	
	For additional information about how to enable SSL for Exchange Server with a
	certificate obtained from a third party authority, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q249029 XFOR: Using a Verisign Certificate with Exchange Server Secure
	  Sockets Layer
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Component         : IMC IMS
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
