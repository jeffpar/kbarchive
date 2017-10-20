---
layout: page
title: "Q171185: WAN Addressing Options with Routing and Remote Access"
permalink: /kb/171/Q171185/
---

## Q171185: WAN Addressing Options with Routing and Remote Access

{% raw %}

	Article: Q171185
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how the Routing and Remote Access (RRAS) IP address pool
	functions to provide WAN link addressing options. To access the configuration
	for the RAS IP address pool, use the following steps:
	
	1. From Control Panel, double-click Network and click Services.
	
	2. Click Routing and Remote Access and click Properties.
	
	3. Click Network and click Configure for the TCP/IP protocol.
	
	MORE INFORMATION
	================
	
	RRAS requires that a pool of addresses be configured even if no routers or RAS
	clients will be dialing in. The address pool is used when the router is dialing
	out or receiving calls. The default option is to use DHCP to assign remote
	TCP/IP client addresses. If you do not have a DHCP server available, be sure to
	configure a static pool of addresses. Addresses for demand-dial router links
	come from the same address pool as addresses for dial-in RAS clients. After the
	first router or RAS client dials in, the route for the static address pool is
	added to the router's route table.
	
	Using DHCP Assigned Addresses
	-----------------------------
	
	When DHCP is used to assign addresses to dial-in routers and RAS clients, the
	subnet route will be added to the server's route table unless it already exists.
	When using DHCP superscopes, the subnet route may not already exist because the
	server can be on a different segment from the RAS pool. This route is
	advertised, but is not used by the router itself.
	
	NOTE: Because the DHCP route might have the same subnet mask as the local LAN, it
	would not be correct to route packets for the entire subnet out the RAS
	interface. A route such as this would prevent RAS clients from reaching the
	local LAN.
	
	Using a Static Address Pool
	---------------------------
	
	A network address and a subnet mask define the static address pool. For
	configuration instructions, refer to the online help. The subnet used by one
	side of a demand-dial link must not match the subnet used on the other side. If
	both routers use the same address range and subnet mask for the RAS address
	pool, duplicate addresses will be assigned to clients from these RAS pools.
	
	"On Subnet" Address Pool
	------------------------
	
	An "on subnet" address pool uses an address pool that is a subset of a local LAN
	subnet. In this case, other routers and clients already know how to reach this
	LAN subnet. The Windows NT router will provide proxy ARP to get the packet to
	the final destination. Clients and other routers will not realize that these IP
	addresses are not actually on the LAN. This option is simple in that it does not
	require any additional routes to reach the connected dial-in RAS clients.
	However, this option may be limiting depending on your subnetting scheme and the
	number of dial-in clients you need to support.
	
	Using the "on subnet" address pool, the subnet mask of the LAN will not change or
	be affected. If you were using the class C address 192.168.1.0 with the mask
	255.255.255.0 on the LAN, you could reserve a pool in this same address range
	for the RAS pool. An address pool defined by the subnet address 192.168.1.248
	using a subnet mask 255.255.255.248 creates a pool from 248-255. The addresses
	248 and 255 are not used and 249 is used internally by the router. This leaves
	you with support for a combination of 5 RAS clients or demand-dial links. The
	proxy functionality of the router will allow this apparent over-lapping of
	subnet ranges. However, all addresses still need to be unique.
	
	NOTE: Using DHCP (without superscopes) for the address pool will always use "on
	subnet" addressing and the same subnet mask as the LAN.
	
	"Off Subnet" Address Pool
	-------------------------
	
	"Off subnet" addressing uses a unique subnet for the address pool. In this
	scenario, the other routers need to know how to reach this subnet. This can be
	done using static routes or a routing protocol such as Routing Information
	Protocol (RIP) or Open Shortest Path First (OSPF). An "off subnet" address pool
	could provide more addresses if the LAN subnet does not have enough addresses
	available.
	
	If your "off subnet" WAN addresses are from a different network ID, RIP will
	summarize routes into a single network route. Individual subnet routes will not
	be advertised out an interface that is not on the same network ID as the routes
	being advertised.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
