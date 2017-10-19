---
layout: page
title: "Q251318: XCON: MTA Uses Node IP Address Instead of Cluster IP Address"
permalink: /kb/251/Q251318/
---

## Q251318: XCON: MTA Uses Node IP Address Instead of Cluster IP Address

	Article: Q251318
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 12-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you have two Exchange Server computers in two sites that are connected with
	a site connector through a firewall as follows:
	
	  Exchange Server in Site 1 <--> [firewall] <--> Exchange Server
	  (on a Cluster Server) in Site 2
	
	If the firewall between the sites opens only to the Cluster Server IP address, no
	mail can be sent or received.
	
	CAUSE
	=====
	
	This issue can occur if the message transfer agent (MTA) uses the active node IP
	address instead of the Exchange Server Cluster Server group IP address to
	initiate a connection.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this issue:
	
	- Move to an X.400 Connector and fix the address.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q197378 XCON: MTA Generates 9301 Events on Incoming Connections
	
	- Open the IP addresses of the nodes in the firewall.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
