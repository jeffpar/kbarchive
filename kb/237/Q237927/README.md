---
layout: page
title: "Q237927: XIMS: Messages Sent to Encapsulated SMTP Address Are Rerouted"
permalink: kb/237/Q237927/
---

## Q237927: XIMS: Messages Sent to Encapsulated SMTP Address Are Rerouted

	Article: Q237927
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a message is sent to an encapsulated Simple Mail Transfer Protocol (SMTP)
	one-off address through an Internet Mail Service that is configured so it does
	not reroute SMTP messages, the message may still be rerouted. Encapsulated SMTP
	one-off addresses contain the IMCEASMTP prefix.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Internet Mail Service
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Msexcimc.exe | 5.5.2650.1 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	After you apply the fix, if rerouting is disabled, the Internet Mail Service
	returns all messages that are sent to an encapsulated SMTP one-off address. If
	rerouting is enabled, but one or more routing restrictions have been defined,
	the messages are rerouted or returned based on these restrictions.
	
	
	If you are using the Internet Mail Service as a site connector, rerouting must be
	enabled after the fix is applied. The Internet Mail Service must be able to
	reroute messages addressed to recipients that are homed on the bridgehead server
	in the other site.
	
	In addition, you should check the list of IP addresses that are allowed to relay
	through your server and make sure that it's updated. This is because one side
	effect of this problem is that it could allow incorrectly-configured sites to
	operate correctly in some situations where the Internet Mail Service is used as
	a site connector.
	
	For example, suppose you intended to allow a server whose IP address is
	192.168.0.1 to relay mail through your server using the Internet Mail Service as
	a site connector. This problem would allow the server to relay mail through your
	server even if you had not added 192.168.0.1 to the list of IP addresses that
	are authorized to do so. If you then apply the fix, you would find that mail
	relaying from 192.168.0.1 no longer works. However, you could restore proper
	functionality by adding 192.168.0.1 to the list of approved servers. To do so,
	view the properties for the Internet Mail Service, click the Routing tab, click
	Routing Restrictions, and then add the server's IP address or subnet address.
	
	To configure the Internet Mail Service so it does not reroute SMTP messages:
	
	1. Start the Microsoft Exchange Server Administrator program. To do so, click
	  Start, point to Programs, point to Microsoft Exchange, and then click
	  Microsoft Exchange Administrator.
	
	2. In the left pane, click the Connections object under the appropriate site. In
	  the right pane, click the Internet Mail Service, and then on the File menu,
	  click Properties. Note that the Connections object appears under the
	  Configuration object.
	
	3. Click the Routing tab, select "Do not reroute incoming SMTP mail", and then
	  click OK.
	
	When the Internet Mail Service is configured in this manner, messages addressed
	to recipients that are listed in the global address list are delivered, but all
	other messages are normally returned with a non-delivery report (NDR).
	
	Additional query words: relay relayed
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
