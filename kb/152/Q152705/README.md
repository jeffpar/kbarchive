---
layout: page
title: "Q152705: Multihomed WINS Servers Send Name Query Responses"
permalink: /kb/152/Q152705/
---

## Q152705: Multihomed WINS Servers Send Name Query Responses

	Article: Q152705
	Product(s): Microsoft Windows NT
	Version(s): 3.51 SP4
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	WINS clients connect to non-local interfaces on multihomed servers.
	
	Unexpected WINS name resolution fails with multihomed WINS servers when IP
	routers fail.
	
	CAUSE
	=====
	
	Physically multihomed WINS servers are supported under Windows NT 3.51 service
	pack 4, which allows the WINS server to bind to each instance of NetBT (the
	first IP address on each network interface card (NIC)).
	
	Although the WINS server will accept name registrations and queries on each of
	these IP addresses, it will respond using the first NIC bound to NetBT. This NIC
	is the interface with the lowest binding number in the Installed Adapter Cards
	list in the Control Panel Network application.
	
	If a successful name query response is sent from an IP address that the client
	does not recognize as a WINS server (that is, it is not configured as the
	client's primary or secondary WINS server), it will only use the first address
	in the response list rather than passing all the record entries received through
	a ChooseBestIPAddress routine. The ChooseBestIPAddress routine selects the best
	target IP address based on the following criteria:
	
	- An address on the same subnet as the calling instance of NetBT
	
	- An address on the same subnet as any NIC in the local machine
	
	- An address chosen at random from the list
	
	Although the target system may have a connection on the client's local subnet,
	the client may connect to an address in another subnet, depending on the order
	in which the server registered its IP addresses with WINS.
	
	
	WORKAROUND
	==========
	
	To allow the client to recognize a WINS name query response when dual-homed WINS
	servers are deployed, set WINS client's primary and secondary WINS server
	addresses to the first and second IP addresses of the WINS server.
	
	This workaround does not address the operational issues that arise if the network
	path from the client to the WINS server's primary interface fails.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 Service
	Pack 4. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt tcpip
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351search kbWinNTS351sp4
	Version           : :3.51 SP4
	
	=============================================================================
	
