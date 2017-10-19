---
layout: page
title: "Q222553: XFOR: IMC Events 4020, 4007 with Error 10048"
permalink: /kb/222/Q222553/
---

## Q222553: XFOR: IMC Events 4020, 4007 with Error 10048

	Article: Q222553
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a network environment where Exchange Server is configured to use Microsoft
	Proxy Server 2.0, the Microsoft Exchange Internet Mail Service may fail to start
	and logs the following two Event IDs in the application event log:
	
	  4007: MSExchangeIMC
	  The following error occurred while trying to bind the TCP/IP listener socket.
	  10048
	
	  4020: MSExchangeIMC
	  Unable to start the service because WinSock could not be initialized.
	
	CAUSE
	=====
	
	For Exchange Server to use the proxy features of Proxy Server 2.0, it must bind
	and listen on port 25 of the proxy server. The Exchange Server Internet Mail
	Service is attempting to bind to the listener socket for port 25 on the proxy
	server, and is failing. This usually indicates another service is already bound
	to port 25.
	
	RESOLUTION
	==========
	
	Verify that the Windows NT SMTP service is not running on the proxy server. The
	SMTP service will grab and bind to port 25, preventing Exchange Server from
	using the port. Verify that no other service or application is using port 25 of
	the proxy server. NOTE: Some customers have found their anti-virus product a
	contributing factor. Disable the anti-virus product on the proxy server and
	attempt to start the service. If this works, please contact the anti-virus
	vendor for further assistance.
	
	
	Additional query words: IMC IMS bind fails to start
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
