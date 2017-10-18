---
layout: page
title: "Q171032: XFOR: Configuring Internet Mail Service for POP3 Clients"
permalink: kb/171/Q171032/
---

## Q171032: XFOR: Configuring Internet Mail Service for POP3 Clients

	Article: Q171032
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using Microsoft Exchange Server version 5.0 or version 5.5, Post Office
	Protocol (POP3) protocol you can allow any POP e-mail client to connect to an
	Exchange Server computer and read messages from an Exchange Server Inbox. The
	POP3 protocol is designed to work in conjunction with the Internet Mail Service
	to support both sending and receiving mail.
	
	If mail from a POP3 client is to be routed to recipients outside the Microsoft
	Exchange Server organization, you must configure the Internet Mail Service to
	reroute mail.
	
	MORE INFORMATION
	================
	
	Use the following procedure to configure the Internet Mail Service for POP3
	clients.
	
	NOTE: If the Internet Mail Service was not configured to reroute incoming Simple
	Mail Transfer Protocol (SMTP) mail, you may receive a non-delivery report (NDR)
	for any messages submitted by POP3 clients to recipients outside the
	organization. To resolve the problem, configure the Internet Mail Service, and
	re-send the messages.
	
	1. In the Exchange Server Administrator window, double-click the Internet Mail
	  Service you want to configure.
	
	2. Click the Routing tab.
	
	3. Select Reroute Incoming SMTP Mail (required for POP3 support).
	
	4. Click Add.
	
	5. Type the SMTP domain name of your organization, and select Should Be Accepted
	  As "Inbound".
	
	6. Click OK.
	
	7. Stop and restart the Internet Mail Service.
	
	Additional query words: route
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
