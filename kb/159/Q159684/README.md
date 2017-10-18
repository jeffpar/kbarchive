---
layout: page
title: "Q159684: Configuring Routing and Remote Access Dial-Up Interfaces"
permalink: kb/159/Q159684/
---

## Q159684: Configuring Routing and Remote Access Dial-Up Interfaces

	Article: Q159684
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
	
	This article will explain general configuration and usage of dial up links with
	Routing and Remote Access Service Update.
	
	MORE INFORMATION
	================
	
	When a Routing and Remote Access Service router connects to another Routing and
	Remote Access router as a demand-dial router, both routers will obtain an IP
	address for their local WAN interface from the distant router. To establish this
	two-way address assignment, the interfaces need to be configured correctly.
	
	When adding a demand-dial interface, the username, configured from the Interface
	Credentials screen, must match the name of the interface that you will be
	dialing into and be a valid RAS user account on that system or domain. If the
	username does not match the name of the interface, you will connect as a client
	and not as demand-dial. To verify the type of connection, click Active Ports and
	Connections in the tree view and look in the type column in the list view on
	both routers. The type will be client for normal PPP clients or demand-dial for
	Routing and Remote Access Service routers. The router's connections must show up
	as demand-dial for the routing protocols to run over the connection. The router
	being called also needs the appropriate interface credentials. The calling
	router will also try to validate the router being called. This mutual
	authentication can be turned on or off from the Security tab for the demand dial
	interface.
	
	For example, you have a router in Portland and a router in Seattle. Both sides
	want the ability to demand-dial the other location. You could make one interface
	named PORT_SEATTLE on both routers. The username would also be PORT_SEATTLE for
	both routers. The username could be PORT_SEATTLE of the Portland Domain and
	PORT_SEATTLE of the Seattle Domain, or it could be a valid dial-in account on
	the local routers. In other words, even though the username is the same, it is
	not actually the exact same account.
	
	Additional query words: prodnt 4.00 rras steelhead
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : 4.0
	
	=============================================================================
	
