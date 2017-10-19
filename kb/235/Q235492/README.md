---
layout: page
title: "Q235492: RIP and OSPF Do Not Start Dial On Demand Connections"
permalink: /kb/235/Q235492/
---

## Q235492: RIP and OSPF Do Not Start Dial On Demand Connections

	Article: Q235492
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbtool
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Routing Information Protocol (RIP) and Open Shortest Path First (OSPF) are
	protocols designed to detect unsuccessful network connections and report these
	network problems to neighboring routers through time-out mechanisms. This means
	that these protocols are designed to believe that network connections are
	permanent unless they are actually down.
	
	When you are using Dial On Demand (DOD) interfaces within RRAS, it is understood
	that these connections are up only when needed, and are disconnected when no
	traffic is being routed.
	
	MORE INFORMATION
	================
	
	It is necessary to add static routes in the route table to trigger a DOD
	interface to make a connection. This is the opposite of how RIP and OSPF
	operate, because RIP and OSPF do not require static routes to operate. In fact,
	RIP and OSPF are designed to prevent an administrator from having to add static
	routes to a route table. RIP and OSPF simply listen for dynamic route updates
	and add new routes to the route table as appropriate.
	
	Therefore, RRAS dynamic routing protocols such as RIP and OSPF do not dial a DOD
	connection when a normal networking path does not succeed. Neither RIP nor OSPF
	in Windows NT 4.0 RRAS has the capability to force the dialing of a DOD
	connection if another route does not work. When a route or network path does not
	succeed, you must still have static routes available to force the dialing of a
	DOD connection. To keep the static routes from interfering with normal RIP and
	OSPF operation, simply add static routes with higher associated costs than the
	normal network connection.
	
	You can identify the priority order for routes learned by the RRAS server. In the
	RRAS Administration tool, under IP Routing, right-click Summary, and then click
	Properties. On the Preference Level tab, make sure that static routes are listed
	as less preferred than RIP or OSPF. The lower the number, the higher the
	preference. This way, when a network route does not work and times out, the RRAS
	server sees the higher-metric static route and forces a dial-up connection to
	the other network. Once the connection is up and authenticated, both RIP and
	OSPF operate as if the DOD connection was a permanent LAN connection.
	
	A drawback to this strategy is that when the original network route becomes
	available again, the DOD connection may stay up indefinitely. Traffic is routed
	across the original network interface as it is supposed to be, but the DOD
	connection does not drop because of the idle time-out properties. This occurs
	because RIP and OSPF believe that the DOD connection is permanent and continue
	to send packets along these paths to keep themselves updated. This can prevent
	idle time-out events from occurring and can result in the connections staying up
	indefinitely.
	
	Unless they are carefully configured, RIP and OSPF packets do not allow an idle
	time-out mechanism to occur on these DOD connections. This can result in
	additional expense if you are dialing long distance or using ISDN lines.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbAudDeveloper kbWinAdvServSearch kbWinDataServSearch kbRRASNTSearch kbRRASNT400
	Version           : :2000,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
