---
layout: page
title: "Q200834: How to Use OSPF with RRAS Demand-Dial and VPN Connections"
permalink: /kb/200/Q200834/
---

## Q200834: How to Use OSPF with RRAS Demand-Dial and VPN Connections

{% raw %}

	Article: Q200834
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 12-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to implement Open Shortest Path First (OSPF) over
	Routing and Remote Access Services (RRAS) Dial-on-Demand (DOD) connections. The
	implementation of this protocol is the same for both direct-dial modem
	connections and virtual private network (VPN) connections over the Internet.
	
	MORE INFORMATION
	================
	
	OSPF over a direct-dial connection used for LAN-to-LAN routing:
	
	  Lclient           L-RRAS === Modem() === R-RRAS           Rclient
	      |      IP      |                        |      IP      |
	       --------------                          --------------
	
	OSPF over a VPN connection used for LAN-to-LAN routing:
	
	  Lclient           L-RRAS ===== VPN ===== R-RRAS           Rclient
	      |      IP      |  |      Internet     |  |      IP      |
	       --------------    -------------------    --------------
	
	For the purposes of this article, a DOD connection refers to either a
	Dial-on-Demand connection between two RRAS servers using modems or a VPN
	tunnel.
	
	When you are configuring OSPF for LAN-to-LAN routing, as in the two scenarios
	above, verify the following items:
	
	- Make sure that the DOD connections dial and connect successfully. This is
	  true for both modem connections and VPN connections. You can put temporary
	  static routes on the RRAS servers to test the routing capabilities. OSPF does
	  not work if the DOD connections cannot connect.
	
	- In the RRAS Administration tool, under IP Routing, right-click Summary, and
	  then click Add Routing Protocol. Click "OSPF by Bay Networks", and then click
	  OK.
	
	Configuring the OSPF Protocol
	-----------------------------
	
	During the installation of the OSPF protocol, you are prompted to select options
	for event logging on the General tab and for security options on the Security
	tab. Leave these options at their default settings for now.
	
	After OSPF is installed, a new "OSPF by Bay Networks" icon appears under IP
	Routing. Add the adapters that OSPF will use in this section. Add both the DOD
	adapters and the LAN-side adapters. For VPN, it is not necessary to add the
	network adapter that connects to the Internet, unless there are other compelling
	reasons to do so.
	
	After determining the necessary adapters, right-click "OSPF by Bay Networks", and
	then click Add Adapter. Click the DOD adapter being used between your two RRAS
	servers. Do this on both RRAS servers.
	
	After you add an adapter, there are configuration options on the General,
	Neighbors, and Advanced tabs. Note that the "Enable OSPF on this adapter" check
	box is not selected by default. Click to select this check this box to enable
	OSPF on the adapter being added.
	
	Note that OSPF is a complex protocol and requires knowledge of how to use and
	configure it. This article points out a few caveats to using OSPF over DOD
	connections, but does not attempt to explain the OSPF protocol itself.
	
	In the Configuration dialog box, you may need to change the Area ID, Cost, and
	Password settings. There is also a Type section at the bottom of the General tab
	that has three choices.
	
	LAN network adapters (such as an Ethernet adapter) use the Broadcast type. This
	is a slight misnomer because OSPF primarily uses multicast traffic to
	communicate.
	
	If you are configuring a frame relay network that does not support broadcasts,
	click NBMA (which stands for Non-Broadcast-Multiple-Access network). If you are
	configuring NBMA, you must configure specific IP addresses for OSPF neighbors on
	the Neighbors tab.
	
	The "Point-to-Point" type is used for DOD connections because these connections
	are point-to-point by nature.
	
	You do not need to change anything on the Neighbors tab unless you are using OSPF
	on an NBMA network.
	
	Broadcast types are configured with a default cost of 2, whereas "Point-to-Point"
	types are configured with a default cost of 4.
	
	The Advanced tab contains options for configuring various OSPF parameters for the
	autonomous system of which these RRAS servers and LANs are a part.
	For more information about OSPF configuration, please see the RRAS Administration
	Guide in the C:\Program Files\Routing\Docs folder that is installed with RRAS.
	You can make changes or alterations to the behavior of OSPF after the initial
	configuration of the adapters.
	
	At this point, even though OSPF is installed and the adapters are configured to
	bind to OSPF, the DOD connections do not dial and are not forced to dial by
	OSPF. For additional information, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q235492 RIP and OSPF Do Not Start Dial-on-Demand Connections
	
	To force a DOD connection to dial, add a default gateway static route pointing to
	the DOD connection, or specify a network route pointing to the DOD connection.
	Do this on both RRAS servers for routing purposes. In this scenario, the
	administrator must add the static routes manually; OSPF learned routes are
	placed in the routing table after the DOD connection is connected. If you add
	static routes in this configuration, the following configuration option is
	available:
	
	OSPF learned routes can be configured to have a lower or preferred metric over
	static routes. You can configure this in the RRAS Administration tool on the IP
	Routing tab. Right-click Summary, and then click "Configure IP parameters".
	Click the Preference Levels tab. You can set preference levels for routes based
	on their type. You can modify "OSPF by Bay Networks" to have a preference level
	of 1 rather then the default level of 3. This causes OSPF learned routes to have
	preference over static routes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
