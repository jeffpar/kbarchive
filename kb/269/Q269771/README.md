---
layout: page
title: "Q269771: XIMS: Configuring the Internet Mail Service to Send an ETRN"
permalink: kb/269/Q269771/
---

## Q269771: XIMS: Configuring the Internet Mail Service to Send an ETRN

	Article: Q269771
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you configure the AlwaysUseETRN registry key, the domain that the Enhanced
	TURN (ETRN) command is sent for varies depending on the configuration of the
	Internet Mail Service.
	
	MORE INFORMATION
	================
	
	When you select the "Do not reroute incoming SMTP mail" option on the Routing
	property page of the Internet Mail Service, an ETRN command is sent for the SMTP
	domain specified on the Site Addressing page in Site Addressing Properties for
	the local site.
	
	When you select the "Reroute incoming SMTP mail" option on the Routing property
	page of the Internet Mail Service, an ETRN command is sent for all the domains
	specified in the routing table on the Routing property page of the Internet Mail
	Service.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q175494 XFOR: Dequeing SMTP Mail Outside of Dialup Connections
	
	Additional query words: ETRN
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
