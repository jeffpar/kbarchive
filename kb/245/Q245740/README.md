---
layout: page
title: "Q245740: XIMS: Addresses Rerouted to IPv4 Literals Result in NDRs"
permalink: kb/245/Q245740/
---

## Q245740: XIMS: Addresses Rerouted to IPv4 Literals Result in NDRs

	Article: Q245740
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you configure the Routing tab in the properties for the Internet Mail Service
	so that messages addressed to a fully qualified domain name (FQDN) are rerouted
	to an Internet Protocol version 4 (IPv4) literal, and then messages are sent
	through the connector, the Internet Mail Service may randomly generate
	non-delivery reports (NDRs). This issue is most likely to occur when numerous
	e-mail clients generate heavy message traffic.
	
	CAUSE
	=====
	
	This issue occurs because the Internet Mail Service modifies an entry in the
	routing table.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
