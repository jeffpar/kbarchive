---
layout: page
title: "Q264035: XADM: Can't Configure Port for UDP New Mail Notification Packets"
permalink: kb/264/Q264035/
---

## Q264035: XADM: Can't Configure Port for UDP New Mail Notification Packets

	Article: Q264035
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can configure an Exchange Server computer to use specific Transmission
	Control Protocol (TCP) ports for the information store, directory, and System
	Attendant to enable access to it through a firewall, router, or other device
	that blocks certain TCP or User Datagram Protocol (UDP) ports. You cannot
	configure the ports that will be used when the server sends a client a new mail
	notification packet. In a situation where UDP traffic from the server to the
	client is blocked, clients may not receive new mail notification.
	
	For additional information about configuring TCP/IP access to an Exchange Server
	computer through a firewall for Exchange Server version 5.5, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q148732 XADM: Setting TCP/IP Port Numbers for Internet Firewalls
	
	For additional information about configuring TCP/IP access to an Exchange Server
	computer through a firewall for Exchange 2000 Server, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q270836 XCLN: Exchange 2000 Static Port Mappings
	
	MORE INFORMATION
	================
	
	New mail notification messages are sent by means of UDP packets from the server
	to the client. The ports used for this notification are set by the client when
	the client logs on to the information store.
	
	As part of the log on process to the information store, the client tells the
	server the IP address and port where it expects to receive new mail notification
	messages. This will be a UDP port in the 1024-65535 range.
	
	When the server receives a mail message for a mailbox that a client is logged on
	to, it opens a UDP port dynamically, and sends a packet to the IP address and
	port registered by the client logged on to that mailbox.
	
	Because the client picks a port at startup and the server does not always use the
	same port when sending the notification, there is no way to predict either the
	source or destination ports that this traffic will use.
	
	For clients to reliably receive new mail notification packets, you must enable
	traffic as follows:
	
	  
	
	  Setting          Value
	  ------------------------------------------
	  Protocol ID      UDP
	  Direction        Exchange Server --> Client
	  Local Port       >1024
	  Remote Port      >1024
	
	The "Client" in this table can be specifying either specific client IP addresses
	or the networks where the clients reside. Your filtering device documentation
	will have information on how to actually implement the filter.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
