---
layout: page
title: "Q149842: NCP Clients Always Connect to FPNW Server on Startup"
permalink: kb/149/Q149842/
---

## Q149842: NCP Clients Always Connect to FPNW Server on Startup

	Article: Q149842
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start a NetWare Core Protocol (NCP) client in a routed environment
	where there is a router between the client and the servers, the router always
	selects the Windows NT File and Print Services for NetWare (FPNW) server as its
	default server. This will occur even if there is a NetWare server with Reply to
	Get Nearest Server enabled and the FPNW server has Respond to Find Nearest
	Server Requests disabled. This may result in very poor response times for the
	NCP clients because the FPNW server can be many hops away and still be selected
	as the default server.
	
	CAUSE
	=====
	
	If you have not specified an internal IPX network number on the FPNW server, it
	will advertise itself on the IPX network number of the physical segment it is
	on. Netware servers must have an internal IPX network number, so they will
	always advertise on it. A router will see the SAP broadcasts from the servers
	and add entries to its list of available servers. The FPNW server will be at the
	top of the list, since the router thinks that it is zero (0) hops away. The
	router thinks this, since FPNW uses the physical segment's IPX network number
	and, therefore, appears to the to be on the same network as the router. The
	Netware server will be put lower on the router's list because the router thinks
	that it is one (1) hop away. The router thinks this because the Netware server
	uses its internal IPX network number and must logically route packets from the
	physical segment. Because the NCP client is on a remote segment, it will not get
	a response to its Get Nearest Server request. It will then send a General
	Service request. The router will respond to this with the first server in its
	list. As stated above, this will be the FPNW server. The NCP client will,
	therefore, always attach to it.
	
	RESOLUTION
	==========
	
	Specify a unique Internal Network Number on the FPNW server. Under Control Panel
	Network, on the Protocols tab, select NWLink IPX/SPX Compatible Transport. The
	router will then prioritize the servers in its list in the order the SAP
	broadcasts were received.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
