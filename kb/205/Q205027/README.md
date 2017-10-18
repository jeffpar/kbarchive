---
layout: page
title: "Q205027: Dead Gateway Detection with RRAS and Demand Dial Connections"
permalink: kb/205/Q205027/
---

## Q205027: Dead Gateway Detection with RRAS and Demand Dial Connections

	Article: Q205027
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 12-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes in detail the operation of Dead Gateway Detection (DGD)
	and its interaction with the Routing and Remote Access Service (RRAS) Update.
	
	The following list includes the 3 primary scenarios where fail-over may be
	expected, but does not occur:
	
	Scenario 1
	----------
	
	        DOD    -    -    -    -     DOD
	       /                                \ 
	 RRAS-A                                  RRAS-B --- LAN 30.30.30.30
	       \                                / 
	        LAN - - - - - - - - - - - - LAN  
	10.10.10.1                                10.10.10.10
	
	In this scenario, it may be expected that if the local-area network (LAN)
	connection does not work for some reason, the Dial-On-Demand (DOD) connection
	will start. This is based on the idea that DGD should start once the first
	default gateway does not work. There are 2 static routes on RRAS-A:
	
	destination   net mask   gateway       interface   metric	
	0.0.0.0       0.0.0.0    1.1.1.1       dod-test    4
	0.0.0.0       0.0.0.0    10.10.10.10   NIC         2
	
	If a program on RRAS-A is running and is accessing 30.30.30.30, the path it takes
	is across 10.10.10.10 over the local area network (LAN) connection. With the
	preceding static routes, there is no problem as long as the LAN connection
	exists. However, if the LAN connection does not work, any further communication
	also does not work. Because of this, DGD is not activated and the DOD connection
	never dials.
	
	Scenario 2
	----------
	
	                    DOD -   -    -    -   - RAS    
	                   /                           \                    
	LAN - - - RRAS/Proxy                             ISP - - Internet                     
	non-valid           \                           /                    
	IP address           LAN - - -T1/other - - - LAN                      
	
	In this scenario, it may be expected that if the dedicated Internet Service
	Provider (ISP) connection for some reason does not work on the external side of
	the proxy server, the DOD connection starts. This is also based on the idea that
	DGD should start once the first default gateway does not work. The static routes
	that might be attempted may look like the following table:
	
	destination   net mask     gateway       interface    metric	
	0.0.0.0       0.0.0.0      1.1.1.1       dod-isp      4
	0.0.0.0       0.0.0.0      40.40.40.40   NIC          2
	
	When multiple default gateways are specified on the external side of a Microsoft
	Proxy 2.0-based server, it might be expected to provide redundant connections to
	the Internet through the dialup device or devices. But if the LAN based ISP
	connection does not work, any further communication also does not work. Because
	of this, DGD is not activated and the DOD never dials.
	
	Scenario 3
	----------
	
	              DOD -   -    -    -   - RAS    
	             /                           \                    
	LAN - - - RRAS                             ISP - - Internet                     
	valid         \                           /                    
	IP address      LAN - - -T1/other - - - LAN                                      
	
	This scenario is very similar to scenario 2, but it does not work for a different
	reason. In this scenario, the LAN behind the RRAS server is using Internet-valid
	IP addresses. When clients are trying to pass outward through the RRAS server,
	if the LAN-based ISP connection does not work, the RRAS server never activates
	DGD and does not dial the DOD connection to the ISP. Note that this occurs even
	with the static routes in the following table:
	
	destination     net mask        gateway         interface     metric
	0.0.0.0         0.0.0.0         1.1.1.1         dod-isp b     4
	0.0.0.0         0.0.0.0         40.40.40.40     NIC           2
	
	The reason for this inability to fail-over is that DGD relies on TCP transmission
	in order to activate it. When an RRAS server is behaving as a router, as it is
	in this case, it never parses the IP packet beyond the IP layer. Instead, it
	determines if the packet should be routed, and then either routes the packet or
	drops the packet.
	
	Dead Gateway Detection only is activated by a server when it is the "initiator"
	of the TCP connection. In the preceding case, RRAS is not the source or
	initiator of the TCP session, and so is "unaware" that TCP sessions are not
	working correctly. Again, because the RRAS server does not "look" above the IP
	header when acting as a router, it never "sees" whether a packet is a UDP or TCP
	packet. That is why (in this scenario) RRAS will never fail-over to the second
	default gateway.
	
	MORE INFORMATION
	================
	
	In all three of these scenarios, the behavior expected will not occur. Default
	gateway static routes added to RRAS that point to a DOD are not added to the
	list of available default gateways available to the router unless one of the 2
	following conditions exists:
	
	1. The DOD default gateway has the lowest metric.
	
	2. The DOD default gateway is the only default gateway.
	
	If neither of these 2 conditions exists, then the default gateway route pointing
	to a DOD connection is ignored for DGD purposes. This is because RRAS only
	supports one default gateway and because Microsoft Windows NT is a single-route
	router.
	
	
	It is expected that a router will learn about dead gateways through a routing
	protocol, such as RIP or OSPF. RFCs generally support this position and
	Microsoft has implemented the routing behavior in Windows NT along these lines.
	
	
	While it is true that a Windows NT-based server can be both a router and a
	server, in the case of DGD, it will behave as a router. This is "by design"
	behavior, and means that DGD will not dial DOD connections.
	
	If you want to see the routes that the kernel of the OS is using at any one time,
	you can use "kernrout print" command at a command prompt. This is the routing
	table at the kernel level. This shows you the single best route that will be
	used by the operating system when making routing decisions.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
