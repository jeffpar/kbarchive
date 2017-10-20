---
layout: page
title: "Q254909: XCON: Connectors Stop with 9301 After Proxy Client Installed"
permalink: /kb/254/Q254909/
---

## Q254909: XCON: Connectors Stop with 9301 After Proxy Client Installed

{% raw %}

	Article: Q254909
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbFAQ exc4 exc5 exc55
	Last Modified: 11-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you install WinSock Proxy Client on an Exchange Server computer to send an
	Internet Mail Connector (Exchange Server version 4.0) or Internet Mail Service
	(Exchange Server version 5.0 and later) message out through a proxy server, and
	an X.400 Connector is also installed on the Exchange Server computer, the
	connector stops responding. The remote server generates events 9301 and 9202.
	
	CAUSE
	=====
	
	This problem can occur because WinSock Proxy Client redirects the packets to a
	proxy server. The proxy server then "proxies" the packet, which causes the proxy
	server to send the packet to the remote X.400 server, because the source IP
	address is the address of the proxy server. The remote message transfer agent
	(MTA) rejects the connection request and generates event 9301, followed by event
	9202.
	
	RESOLUTION
	==========
	
	To resolve this problem, modify the Mspclnt.ini file on the Exchange Server
	computer by adding the following entry:
	
	  [EMSMTA]
	  Disable=1
	
	This disables WinSock Proxy Client when the MTA makes any network connections.
	
	NOTE: This problem only affects Site Connectors, X.400 Connectors, and Dynamic
	RAS Connectors. Other connectors, such as the Internet Mail Connector (Exchange
	Server 4.0) or Internet Mail Service (Exchange Server 5.0 and later), are not
	affected.
	
	
	Additional query words: connection, failure
	
	======================================================================
	Keywords          : kbFAQ exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
