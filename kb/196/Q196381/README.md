---
layout: page
title: "Q196381: XCON: Messages Queue Over X.400 Connectors Through Firewall"
permalink: kb/196/Q196381/
---

## Q196381: XCON: Messages Queue Over X.400 Connectors Through Firewall

	Article: Q196381
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Mail flow may be slow and seemingly sporadic over X.400 connectors through a
	Raptor Firewall (version 5.x or greater). Messages may accumulate on the Message
	Transfer Agent (MTA) on the Exchange Server computer that is outside the Raptor
	firewall. However, the external Exchange Server computer's queued up messages
	are delivered after the internal Exchange Server computer contacts the external
	Exchange Server computer to deliver a mail message.
	
	The external Exchange Server computer attempts to initiate the connection with
	the internal Exchange Server computer, then typically fails. Failure of the
	attempted connection, results in one or more of the following events being
	logged in the Windows NT Application Event log:
	
	  MSExchangeMTA Event ID: 1290
	  Type: Warning
	  Category: X.400 Service
	  A locally initiated association to
	  /O=OrganizationName/OU=SiteName/CN=Configuration/CN=Connections
	  /CN=ConnectorName was refused. The failure reason provider was 0 and the
	  reason was 0. Control block index 202. Type 1. [PLATFORM KERNEL 20 130]
	  (12)
	
	  MSExchangeMTA Event ID: 289
	  Type: Warning
	  Category: X.400 Service
	  A connection to   /O=OrganizationName/OU=SiteName/CN=Configuration
	  /CN=Connections/CN=ConnectorName could not be opened. [MTA XFER-IN 17
	  26] (12)
	
	  MSExchangeMTA Event ID: 1294
	  Type: Warning
	  Category: X.400 Service
	  An association with entity
	  /O=OrganizationName/OU=SiteName/CN=Configuration
	  /CN=Connections/CN=ConnectorName ended abnormally. [198 1 0 1 PLATFORM
	  KERNEL 20 130] (10)
	
	The internal Exchange Server computer will log the following Event:
	
	  MSExchangeMTA Event ID: 1293
	  Type: Warning
	  Category: X.400 Service
	  A remotely-initiated association from
	  /O=OrganizationName/OU=SiteName/CN=Configuration/CN=Connections
	  /CN=ConnectorName was refused. The failure reason provider is 0 and the
	  reason is 0. Control block index 1. Type 1. [PLATFORM KERNEL 26 128]
	  (12)
	
	CAUSE
	=====
	
	Event ID 1290 indicates that the MTA on the external Exchange Server computer
	attempted to communicate with the MTA on the internal Exchange Server computer
	and was refused by the internal Exchange Server computer's MTA.
	
	The internal Exchange Server computer will log Event ID 1293 when the external
	Exchange Server computer attempts to communicate with it. This event indicates
	that the MTA on the internal Exchange Server was contacted by the external
	Exchange Server computer's MTA and the internal Exchange Server computer's MTA
	had refused the connection.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the three methods below:
	
	- The best option is to remove the Generic Service Passer from the firewall
	  that is listening on TCP port 102. Then enable a local tunnel on the Raptor
	  firewall so that connections between the two Exchange Server computers over
	  TCP port 102 are simply routed through the firewall. In this scenario, the
	  X.400 connectors will need to be configured to point directly to either the
	  IP address or to fully qualified domain name (FQDN) of the remote Exchange
	  Server computer.
	
	- Create a second X.400 connector on the internal Exchange Server computer that
	  matches the pre-existing X.400 connector in every property page except the
	  Schedule and Stack property pages. The Schedule should be set to
	  remote-initiated, and the Stack property page should be configured to point
	  to either the IP address or to the FQDN of the external Exchange Server
	  computer. Also, the cost of this connector should set to 99. By doing this,
	  the internal Exchange Server computer will not reject the connection requests
	  of the external Exchange Server computer. Therefore, mail flow should become
	  consistent and steady.
	
	- Disable the client-side transparency feature on the firewall. This may
	  present a problem for customers that want other internal servers, such as
	  http servers, to be able to log the actual IP address of the external client.
	
	MORE INFORMATION
	================
	
	It is required that both of the internal Exchange Server computer's and the
	external Exchange Server computer's X.400 connector be scheduled for always.
	This is can be configured on the Schedule Property Page of the X.400 Connector.
	
	Because the firewall is configured to proxy communications that come in on TCP
	port 102, both the internal Exchange Server computer's and the external Exchange
	Server computer's X.400 connectors are configured to communicate with the
	firewall and not directly to each other. This can be done by placing either the
	FQDN or the IP address of the firewall on the X.400 connector's Stack Property
	page.
	
	Both the internal Exchange Server computer's and the external Exchange Server
	computer's X.400 connectors are configured to allow two-way alternate on the
	Advanced Property Page of the X.400 connector.
	
	The problem stems from a feature or option available in Raptor Eagle firewall,
	version 5.x and later. The feature is called Client-side Transparency. It allows
	the inbound IP packets to not be re-written with the firewall's internal IP
	address. Therefore the source IP address is the IP address of the external
	client that is making the connection. This feature is not enabled by default.
	The default behavior of the Raptor Eagle firewall is to re-write the inbound IP
	packet so that the packet appears to be coming from the firewall's internal
	network interface.
	
	What this means to the Exchange Server X.400 connectors:
	
	The Raptor firewall must be configured to proxy connections over TCP port 102.
	This requires that both the internal Exchange Server computer's and the external
	Exchange Server computer's X.400 connectors are configured to communicate with
	the firewall's internal and external network interfaces, respectively, and not
	directly to each other. This is done by placing either the FQDN the IP address
	of the firewall on the X.400 connector's Stack Property page. The problem arises
	when the external Exchange Server computer attempts to connect to the internal
	Exchange Server computer. With the Client-transparency feature enabled, the
	firewall leaves the source IP address in the inbound packet untouched. Because
	the internal Exchange Server computer's X.400 connector is configured to accept
	connections from the firewall's internal IP address, it rejects the connection
	request from the external Exchange Server computer. However, when the internal
	Exchange Server computer initiates the conversation, the firewall does re-write
	the outbound packet with the firewall's external IP address. Because the
	external Exchange Server computer's X.400 connector is configured to communicate
	with the external interface of the firewall, the connection is allowed and mail
	is delivered. Because the X.400 connectors on both servers are set to two-way
	alternate, the internal Exchange Server computer also "picks" up the messages
	that the external Exchange Server computer has queued up for it.
	
	Additional query words: firewall Raptor Eagle 1290 1293
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
