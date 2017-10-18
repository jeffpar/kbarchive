---
layout: page
title: "Q263714: XCON: MTA Doesn't Reroute Mail Queued for Internet Mail Service"
permalink: kb/263/Q263714/
---

## Q263714: XCON: MTA Doesn't Reroute Mail Queued for Internet Mail Service

	Article: Q263714
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Simple Mail Transfer Protocol (SMTP) mail is queued waiting to be delivered
	by the Internet Mail Service, and the Internet Mail Service becomes inactive,
	the message transfer agent (MTA) does not reroute the SMTP mail to a different
	server to make use of another Internet Mail Service.
	
	CAUSE
	=====
	
	Although the MTA reroutes mail, the MTA only reroutes mail for X.400 application
	programming interface (XAPI) connections, which include X.400, Site Connector,
	and remote procedure call (RPC) communications within a site. When e-mail
	messages are queued for an Exchange Development Kit (EDK) gateway, such as the
	Internet Mail Service, the MTA has already completed the routing algorithm
	process and queued the messages for outbound delivery. For the Internet Mail
	Service, this is the "Internet Mail Service local_machine_name" queue.
	
	When mail is in the "Internet Mail Service local_machine_name" queue, the mail
	waits to be placed in the Mts-out folder of the Internet Mail Service in the
	information store. The mail is not removed from this queue until the mail is
	placed in the information store Mts-out folder.
	
	Rerouting occurs when mail is transferred between MTAs by using the previously
	mentioned XAPI connectors. If the remote MTA is not available, the messages are
	rerouted to an alternate route through these connectors.
	
	Additional query words: IMS intra-site intrasite IS
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
