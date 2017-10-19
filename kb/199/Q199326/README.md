---
layout: page
title: "Q199326: XCON: Configuring X.400 Connectors to Communicate via a Firewall"
permalink: /kb/199/Q199326/
---

## Q199326: XCON: Configuring X.400 Connectors to Communicate via a Firewall

	Article: Q199326
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 10-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is intended to provide background information that is helpful in
	configuring the Exchange Server X.400 Connector to communicate through a
	firewall.
	
	MORE INFORMATION
	================
	
	The following diagram and list of Internet protocol (IP) addresses is an example
	of the relationship between Exchange Server computers and a firewall:
	
	  Server A <--------> Firewall <--------> Server B
	
	  Server A's IP address:          172.16.1.10
	  Firewall's internal IP address: 172.16.1.11
	  Firewall's external IP address: 192.168.1.1
	  Server B's IP address:          192.168.1.2
	
	For the Exchange Server computers to communicate through the firewall using X.400
	Connectors, the firewall must allow traffic in both directions over Transmission
	Control Protocol (TCP) port 102. Firewalls accomplish this using one of two
	methods, which are described below.
	
	Proxy
	-----
	
	The firewall accepts a packet from an Exchange Server computer, encapsulates the
	packet into a new TCP/IP packet, and then sends this new packet to the
	destination Exchange Server computer. This new packet appears to have been sent
	by the firewall instead of the sending Exchange Server computer. The firewall
	behaves in this manner because of the rules that the system administrator has
	configured within the firewall.
	
	In an environment where the firewall is configured to behave in this manner, the
	Exchange Server computers' X.400 Connectors must be configured to connect to the
	firewall instead of the destination Exchange Server computer. From the above
	example, the X.400 Connector installed on the first Exchange Server computer
	connects to the internal network interface of the firewall. This is accomplished
	by typing the IP address or fully qualified domain name (FQDN) of the firewall's
	internal network interface on the Stack tab in the properties for the X.400
	Connector. Similarly, the X.400 Connector installed on the second Exchange
	Server computer connects to the external network interface of the firewall. In
	the above example, the IP address of 172.16.1.11 is typed on the Stack tab in
	the properties for the first X.400 Connector and the IP address of 192.168.1.1
	is typed on the Stack tab in the properties for the second X.400 Connector.
	
	Pass-Through
	------------
	
	The firewall accepts a packet from an Exchange Server computer and forwards it to
	the destination Exchange Server computer without making any changes. In other
	words, the firewall routes the packet to the destination Exchange Server
	computer untouched. Therefore, the packet retains the source IP address of the
	sending Exchange Server computer.
	
	In an environment where the firewall is configured to behave in this manner, the
	IP address or FQDN of the destination Exchange Server computer is typed on the
	Stack tab in the properties for the X.400 Connector. In the above example, the
	IP address of 192.168.1.2 or the FQDN of the second Exchange Server computer is
	typed on the Stack tab in the properties for the first X.400 Connector.
	Similarly, the IP address of 172.16.1.10 or the FQDN of the first Exchange
	Server computer is typed on the Stack tab in the properties for the second X.400
	Connector.
	
	The pass-through method is the preferred method of configuring the Exchange
	Server X.400 Connector to communicate through a firewall.
	
	
	Additional query words: x400
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
