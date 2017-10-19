---
layout: page
title: "Q233196: RRAS VPN Demand Dial Router Connection May Be Delayed"
permalink: /kb/233/Q233196/
---

## Q233196: RRAS VPN Demand Dial Router Connection May Be Delayed

	Article: Q233196
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to a Routing and Remote Access Service (RRAS) server
	using a virtual private networking (VPN) port, the connection may be delayed or
	unsuccessful.
	
	CAUSE
	=====
	
	This behavior occurs because RRAS is unable to use VPN ports that are not
	configured to "Dial out and receive calls as a demand dial router."
	
	When this behavior occurs, RRAS searches sequentially for the next available VPN
	interface that is configured to accept a demand dial router connection. If RRAS
	finds this interface before a client timeout occurs, the demand dial connection
	is successful. When a VPN interface is unavailable (either because it is
	currently in use by another client or because it is configured only to "Receive
	Calls as a RAS server"), the RRAS server must move on to the next available
	port.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Determine the combined maximum number of VPN interfaces needed for Remote
	  Access Service (RAS) clients and RRAS demand dial connections.
	
	2. Configure all VPN interfaces to "Dial out and receive calls as a demand dial
	  router" and "Receive Calls as a RAS server" (RRAS determines what type of
	  connection is needed).
	
	MORE INFORMATION
	================
	
	The following example illustrates this problem. The server in this example has
	five VPN interfaces (VPN1-VPN5), and no connections are made to the RRAS
	server:
	
	- VPN1, VPN3, and VPN5 are configured to "Receive Calls as a RAS server" and
	  "Dial out and receive calls as a demand dial router."
	
	- VPN2 and VPN4 are configured to "Receive Calls as a RAS server."
	
	If all interfaces are available, the first demand dial router connection attempt
	from another RRAS server to the example server is successful and a connection is
	made to VPN1.
	
	If you disconnect and reconnect from the other RRAS server, RRAS attempts to
	connect to the next available VPN interface. There is a longer time delay in
	connecting because RRAS checks VPN2 to determine if the interface is configured
	for "Dial out and receive calls as a demand dial router." RRAS determines that
	VPN2 is not configured as a demand dial router and moves on to the next VPN
	interface.
	
	When the second connection attempt succeeds, the RRAS Administration tool of the
	example server shows a connection to VPN3.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
