---
layout: page
title: "Q154589: XFOR: Error 2140 Starting the Internet Mail Connector Service"
permalink: /kb/154/Q154589/
---

## Q154589: XFOR: Error 2140 Starting the Internet Mail Connector Service

	Article: Q154589
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage exc4
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Exchange Administrator attempts to start the Microsoft Exchange
	Internet Mail Connector service in Control Panel Services, the following pop-up
	error may be encountered:
	
	  Stop "Could not start the Microsoft Exchange Internet Mail Connector service
	  on ..."
	
	  Error 2140: An internal Windows NT error occurred.
	
	The following event will be logged in the event viewer:
	
	  EventID 4058
	  Category: Intialization/Termination
	
	  The Internet Mail Connector cannot start because the name resolver cannot be
	  initialized. Check your network settings in the Control Panel to ensure that
	  you have set a domain name in the DNS dialog box of the TCP/IP configuration.
	
	CAUSE
	=====
	
	The TCP/IP protocol has been configured for domain name server (DNS), but the
	DNS is not currently configured properly. The DNS Domain Name box maybe blank.
	
	RESOLUTION
	==========
	
	1. Open Control Panel, click Network, and select the TCP/IP Protocol.
	
	2. Select Configure.
	
	3. Select DNS.
	
	4. At the DNS Configuration dialog box, enter some letters(it does not matter
	  what the letters are) in the "Domain Name" box.
	
	5. Click OK, OK, and OK.
	
	Now the Microsoft Exchange Internet Mail Connector service can be successfully
	started.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
