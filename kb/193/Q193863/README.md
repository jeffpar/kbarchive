---
layout: page
title: "Q193863: XIMS: No Inbound SMTP Mail Because of NAT to Exchange Server"
permalink: /kb/193/Q193863/
---

## Q193863: XIMS: No Inbound SMTP Mail Because of NAT to Exchange Server

	Article: Q193863
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Microsoft Exchange Server computer is set up behind a dial-up router
	connected to the Internet. The server can send SMTP messages out to the
	Internet, but cannot receive mail through the Internet Mail Service. Using
	Telnet to connect to the Exchange Server computer fails with a time out error
	message as well as pings to the Exchange Server computer. The Domain Name System
	(DNS) MX and A records appear to be correct.
	
	CAUSE
	=====
	
	Some routers are capable of doing Network Address Translation (NAT). In this
	scenario, the router is translating the Exchange Server computer's IP address to
	the router's IP address, thereby sending all mail on behalf of the Exchange
	Server computer, similar to the concept of our Microsoft Proxy Server. In
	addition, the router is accepting communication on behalf of the Exchange Server
	computer, but not allowing direct communication with Exchange Server. Neither
	trying to Telnet or ping the actual internal IP address of the Exchange Server
	computer, nor sending SMTP mail directly to Exchange Server, is possible.
	
	WORKAROUND
	==========
	
	To work around this problem, perform one of the following:
	
	Option 1
	--------
	
	1. Disable the NAT functionality on the router. This will allow direct
	  communication to the Exchange Server computer from the Internet.
	
	2. Update Internet Domain Name System (DNS) entries to reflect the actual IP
	  address of the Exchange Server computer.
	
	NOTE: The IP address referenced must be a valid InterNic assigned address.
	
	Option 2
	--------
	
	Change the Internet Domain Name System (DNS) entries to reflect the IP address of
	the router doing NAT.
	
	Additional query words: demand dial router can not can't receive SMTP mail
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
