---
layout: page
title: "Q250260: Windows 95 Clients Cannot Use Resources from Windows NT Server"
permalink: kb/250/Q250260/
---

## Q250260: Windows 95 Clients Cannot Use Resources from Windows NT Server

	Article: Q250260
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have Microsoft Windows 95-based clients on a Microsoft Windows NT
	Server 4.0-based network, the clients may not be able to log on or use resources
	from the server.
	
	CAUSE
	=====
	
	This behavior can occur when either the cable, the local area network (LAN)
	adapter on the server, or the port on the hub is defective. The network adapter
	can receive and process traffic, but cannot transmit.
	
	RESOLUTION
	==========
	
	To resolve this behavior, check the condition of the cable, the LAN network
	adapter on the server, and the port on the hub.
	
	MORE INFORMATION
	================
	
	The Windows NT server forces a browser election. The Windows 95 client computers
	do not receive the message when the server initiates the election so they
	continue as if nothing happened and do not cast a vote. Because the Windows NT
	server assumes it won the election, having not received any other computer's
	reply, it starts collecting information based on the broadcasts it does not
	receive.
	
	Besides not being able to log on or access resources from the server, you may
	also identify several other symptoms, regardless of the type of protocol in
	use:
	
	- All the computers appear in the browse list on the Windows NT server, but the
	  server does not appear in the browse list on the Windows 95-based clients.
	
	- The server is unable to ping any of the Windows 95-based clients, the clients
	  can ping each other, but the clients cannot ping the server.
	
	- The Windows NT Server 4.0 Network Neighborhood shows the client computers but
	  cannot access them.
	
	- When you check the network adapter and the hub, the link lights are working
	  properly.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
