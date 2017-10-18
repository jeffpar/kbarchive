---
layout: page
title: "Q166170: Using Default Gateways with OSPF"
permalink: kb/166/Q166170/
---

## Q166170: Using Default Gateways with OSPF

	Article: Q166170
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbusage _IK12469
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You must be careful when configuring a default gateway on an Open Shortest Path
	First (OSPF) Autonomous System boundary router. Incorrect configuration can
	cause loss of network connectivity to some networks.
	
	MORE INFORMATION
	================
	
	An Autonomous System (AS) boundary router is used when external routes need to
	be advertised to other OSPF routers. External routes are routes learned from
	other routing protocols, static routes, or interfaces that are not running
	OSPF.
	
	When a router is configured to be an AS boundary router, it will advertise all
	external routes including its default gateway. This default gateway will need to
	be valid for all OSPF routers in your autonomous system. An example of a bad
	default route is one that points to another router within the OSPF AS. This AS
	boundary router will end up with a default route with a next-hop gateway of
	itself. If this occurs, the packets destined for the default route will be
	dropped. If the default route is not valid for all OSPF routers, it should not
	be advertised. A valid default route would have the next-hop gateway address
	external to your OSPF AS. This route would only be configured on the router that
	can directly reach the external network.
	
	One way to avoid a bad default gateway is to not use a default gateway. In many
	scenarios were you would be using another OSPF router as your default gateway,
	it is not needed. To remove the default gateway, go to Control Panel Network,
	click Protocols, click Properties, and remove the default gateway for each
	card.
	
	Another way to avoid a bad default gateway is to create an OSPF external route
	filter.
	
	1. Right-click on the OSPF icon and click Configure OSPF. If Enable Autonomous
	  System Boundary router is selected, the External Routing tab will be
	  displayed.
	
	2. Click the External Routing tab, and then click the Routes button.
	
	3. Click the Process All Routes Except Those Listed radio button. Type the
	  address 0.0.0.0, mask 0.0.0.0, and then click Add. This will prevent this
	  router from advertising its default gateway.
	
	Additional query words: prodnt 4.00 rras steelhead
	======================================================================
	Keywords          : kbnetwork kbusage _IK12469 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : 4.0
	Issue type        : kbinfo
	
	=============================================================================
	
