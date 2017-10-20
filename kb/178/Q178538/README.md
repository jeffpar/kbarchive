---
layout: page
title: "Q178538: Configuring DRAS with Reserved IP Address for Private Networks"
permalink: /kb/178/Q178538/
---

## Q178538: Configuring DRAS with Reserved IP Address for Private Networks

{% raw %}

	Article: Q178538
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Per RFC 1597: Section 3: Private Address Space, The Internet Assigned Numbers
	Authority (IANA) has reserved the following three blocks of the IP address space
	for private networks: 10.0.0.0 - 10.255.255.255 , 172.16.0.0 - 172.31.255.255,
	and 192.168.0.0 - 192.168.255.254.
	
	These network IDs and the associated IP addresses may be used freely in any
	internal network scheme and will not affect interoperability with the Internet
	as a whole. In particular, the class C range is the preferred range to use when
	configuring the async connectors of Microsoft Exchange Server.
	
	MORE INFORMATION
	================
	
	Each async interface on a Windows NT Server computer requires two (2) ip
	address; one for the server and one for the client of the particular session.
	The network ID of the async interface should be such that the async interface is
	on a different subnet than the network interface of the server; as such the unit
	is multihomed. Using a subnet mask of 255 in the third octet of the class C
	address allows 255 networks with 254 hosts on each network; this facilitates
	ease of planning and configuration.
	
	For example, connect 3 Exchange sites through the Dynamic Remote Access Service
	(RAS) connector. Each Exchange Server computer has a single modem.
	
	1. In the RAS configuration, select a static pool of addresses.
	
	2. Configure the pools on each server as follows.
	
	     Server_1 192.168.1.1 and 198.168.1.2;
	     Server_2 192.168.2.1 and 192.168.2.2
	     Server_3 192.168.3.1 and 192.168.3.2.
	
	Thus the RAS server session on each server will get the .1 address and the client
	session will be assigned the .2 address.
	
	Additional query words: IP XFOR XCON TCP NT STACK ADDRESS TSHOOT
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
