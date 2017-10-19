---
layout: page
title: "Q165057: XCON: Can't Connect Exchange Server Sites w/ Proxy Server"
permalink: /kb/165/Q165057/
---

## Q165057: XCON: Can't Connect Exchange Server Sites w/ Proxy Server

	Article: Q165057
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:1.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	- Microsoft Proxy Server version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Proxy Server 1.0 will not allow you to connect two Microsoft Exchange
	Server sites with an X.400 Connector or the Internet Mail Service.
	
	MORE INFORMATION
	================
	
	Microsoft Proxy Server 1.0 relies on Winsock calls to access ports for outbound
	connections. Because the X.400 Connectors and the Internet Mail Service in
	Exchange Server are not Winsock-compliant, connecting Exchange Server sites
	through Proxy Server does not work and is not supported.
	
	The Readme.txt for Proxy Server 1.0 also states that Proxy Server 1.0 will not
	route TCP/IP packets.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbExchangeSearch kbExchange500 kbProxyServ100 kbZNotKeyword2 kbProxyServSearch
	Version           : winnt:1.0,5.0
	
	=============================================================================
	
