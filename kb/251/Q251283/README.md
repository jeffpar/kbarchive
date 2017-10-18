---
layout: page
title: "Q251283: XIMS: Enabling FrontPage Server Extensions to Relay on Exchange"
permalink: kb/251/Q251283/
---

## Q251283: XIMS: Enabling FrontPage Server Extensions to Relay on Exchange

	Article: Q251283
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you install Microsoft FrontPage Server Extensions and configure them to send
	mail to an Exchange Server computer that has relay restrictions enabled for the
	Internet Mail Service, when you submit a form that is set to mail its results by
	means of Simple Mail Transfer Protocol (SMTP) you may receive the following
	error message:
	
	  FrontPage Error.
	  User: please report details to this site's webmaster.
	  Webmaster: please see the server's application event log for more details.
	
	The following event is logged in the application event log of the server that is
	running the FrontPage Extensions:
	
	  Event ID: 1000
	  Source: Frontpage 4.0
	  Type: Warning
	  Category: None
	
	  Description:
	  Microsoft FrontPage Server Extensions: http://frontpageserver - Error #160005
	  Message: Bad response from SMTP host'exchangeserver': 550 Relaying is
	  prohibited.
	
	To resolve this issue, you must allow the IP address of the server that is
	running the FrontPage Extensions to relay on the Internet Mail Service of the
	Exchange Server computer.
	
	To allow the IP address of the server that is running the FrontPage Extensions to
	relay on the Internet Mail Service of the Exchange Server computer:
	
	1. Click the Routing tab in the Internet Mail Service properties, and then make
	  sure that Reroute incoming SMTP mail is selected.
	
	2. On the Routing tab, click Routing Restrictions.
	
	3. Click to select the "Hosts and Clients with these IP addresses" check box,
	  and then click Add.
	
	4. Add the IP address for the server that is running the FrontPage Extensions,
	  and use 255.255.255.255 as the mask; this allows relay for this IP address
	  only.
	
	  NOTE: If FrontPage Extensions are running on the Exchange Server computer, add
	  127.0.0.1 and use a mask of 255.255.255.255.
	
	5. Restart the Internet Mail Service.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
