---
layout: page
title: "Q169417: RAS Clients Cannot Access All Networks in an OSPF Network"
permalink: /kb/169/Q169417/
---

## Q169417: RAS Clients Cannot Access All Networks in an OSPF Network

{% raw %}

	Article: Q169417
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If they are not configured properly, Remote Access Service (RAS) clients may not
	have full network access when the RAS server is also an OSPF router. This will
	only occur if OSPF is not properly configured and the RAS IP address pool does
	not match the IP subnet of a LAN interface. Loss of connectivity for LAN clients
	can also result if OSPF is not properly configured.
	
	MORE INFORMATION
	================
	
	On an OSPF router, OSPF must be running for that interface to be included in
	OSPF link state advertisements. In other words, if a particular interface is not
	running OSPF, it is considered external and the route to this network will not
	be advertised. RAS interfaces, as well as LAN interfaces, can be considered
	external to OSPF. If RAS is using a pool of IP addresses from a unique subnet,
	then a route to this subnet needs to be advertised.
	
	You will need to make this OSPF router an Autonomous System (AS) boundary router
	(ASBR). Enabling this feature tells the router to advertise external routes to
	the rest of the OSPF network. To enable this functionality, right-click OSPF,
	click Configure OSPF By Bay Networks, and then select the Enable Autonomous
	System Boundary Router check box.
	
	When a router is an ASBR, it will advertise all routes including the default
	gateway. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q166170 Using Default Gateways with OSPF
	
	If RAS is using a pool of addresses that are within the same subnet as one of the
	routers' OSPF interfaces, or you are using DHCP for the RAS address pool, you
	need not do anything. In this case, the subnet is already being advertised and
	RAS will use Proxy ARP to get packets to the RAS clients.
	
	Additional query words: rras
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
