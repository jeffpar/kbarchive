---
layout: page
title: "Q256590: XFOR: Configuring Port Assignment for Internet Mail Service"
permalink: kb/256/Q256590/
---

## Q256590: XFOR: Configuring Port Assignment for Internet Mail Service

	Article: Q256590
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbenv exc55
	Last Modified: 22-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You cannot configure Internet Mail Service to listen to multiple TCP/IP ports.
	However, you can configure the service to listen to a different TCP port for
	incoming Simple Mail Transfer Protocol (SMTP) connections. By default, Internet
	Mail Service responds to port 25 connections.
	
	This is a function of the TCP/IP protocol and is controlled by an entry in the
	Services file located in the Winnt\System32\Drivers\Etc folder.
	
	Additional query words: multiple ims
	
	======================================================================
	Keywords          : kbenv exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
