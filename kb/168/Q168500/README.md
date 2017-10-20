---
layout: page
title: "Q168500: Router Identification Designation in OSPF"
permalink: /kb/168/Q168500/
---

## Q168500: Router Identification Designation in OSPF

{% raw %}

	Article: Q168500
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
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
	
	Each router running Open Shortest Path First (OSPF) in an Autonomous System (AS)
	is assigned a 32-bit unique identifier called a router ID. Although it looks
	like an IP address, it is only used to identify the router and is not an IP
	address.
	
	MORE INFORMATION
	================
	
	The router ID is used to identify the router in an Autonomous System and is
	advertised in the OSPF Hello packets sent between routers. Some OSPF
	configuration information is determined by the highest router ID. In the case of
	a tie when determining the designated router in an AS, the highest router ID
	takes precedence.
	
	Although the router need not have any relationship to IP addresses on the router,
	it is generally accepted practice to make the router ID either the highest or
	lowest IP address on the router. If the router ID is changed the OSPF protocol
	should be reinitialized.
	
	Additional query words: RRAS
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	
	=============================================================================
	

{% endraw %}
