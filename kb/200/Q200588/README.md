---
layout: page
title: "Q200588: XCON: Multiple X.400 Connectors Between Two Exchange Computers"
permalink: /kb/200/Q200588/
---

## Q200588: XCON: Multiple X.400 Connectors Between Two Exchange Computers

{% raw %}

	Article: Q200588
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): exc4 exc5
	Last Modified: 12-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you install multiple X.400 Connectors between two Exchange Server computers
	(in different sites), using the TCP stack, each server requires multiple host
	names or multiple IP addresses. Each X.400 Connector needs a unique IP address
	or Host name entered under Address Attribute on the Stack tab of the X.400
	Connector properties page.
	
	MORE INFORMATION
	================
	
	If multiple X.400 Connectors are set up to the same host or IP address, the
	Event Log shows consistent socket errors and no connector works. The Exchange
	Server TCP stack has problems determining which connector is requesting a
	connection to the message transfer agent (MTA). By adding a second IP address to
	the server TCP/IP settings (each server), or a second host name to the LMHOSTS
	file, each connector then has its own TCP/IP connection to the remote server.
	
	The reason is that the local T,S,P Selector values are associated with the Stack,
	and not the connector. Each X.400 Connector on a single server that uses the TCP
	transport must use the same TCP stack, therefore, the same Stack values apply.
	The second IP address or Host name gives each connector a unique identifier to
	the remote stack.
	
	Note that the above applies to Exchange Server 4.0 and 5.0. Exchange 5.5 SP1 now
	accomodates creating multiple X.400 Connectors on the same IP address. For
	additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q198772 XFOR: Configuring Transport Selectors with Exchange 5.5 SP1
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
