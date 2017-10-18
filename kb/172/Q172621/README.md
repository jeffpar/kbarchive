---
layout: page
title: "Q172621: Routing and Remote Access Event ID: 30030"
permalink: kb/172/Q172621/
---

## Q172621: Routing and Remote Access Event ID: 30030

	Article: Q172621
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your computer running both Windows NT 4.0 Server and the Routing and Remote
	Access Service (RRAS) may receive numerous Event Log messages similar to the
	following:
	
	  Event ID: 30030
	  Source: IPRIP2
	  Type: Warning
	  Description: IPRIPv2 is ignoring a route to the broadcast network
	  255.255.255.255 with the next hop <IP address> which was advertised by
	  a neighbor with IP the address <IP address>.
	
	where <IP address> is the IP address of a neighboring router.
	
	CAUSE
	=====
	
	Your RRAS server is receiving Routing Information Protocol (RIP) broadcasts from
	one or more adjacent routers that do not belong to the same IP network. If the
	IP network ID is not the same, the route being broadcast is considered invalid.
	The route is ignored and a warning event will be logged in the Event Viewer
	System Log.
	
	RESOLUTION
	==========
	
	This behavior does not present a problem other than the numerous messages in
	Event Viewer. To prevent the warning from appearing in Event Viewer, you may use
	one of the following methods:
	
	- Set event logging for RRAS to Log errors only:
	
	  1. In RRAS Admin, right-click RIP for Internet Protocol and click Configure
	     RIP.
	
	  2. Click either Log errors only or Disable event-logging.
	
	  3. Click OK and stop and restart RRAS.
	
	  -or-
	
	- Configure RRAS to ignore RIP announcements from the neighboring router:
	
	  1. In RRAS Admin, right-click RIP for Internet Protocol and click Configure
	     RIP.
	
	  2. Click Security and click Discard all announcements from the routers
	     listed.
	
	  3. Type the IP address of the neighboring router in the Router box and click
	     Add.
	
	  4. Click OK and stop and restart RRAS.
	
	  -or-
	
	- Configure RRAS to only accept announcements from specific routers:
	
	  1. In RRAS Admin, right-click RIP for Internet Protocol and click Configure
	     RIP.
	
	  2. Click Security and click Process only announcements from the routers
	     listed.
	
	  3. Type the IP address of a router that is on the same network ID as your
	     RRAS server and click Add.
	
	     NOTE: Repeat step 3 for each of the RRAS servers that you need in this
	     list.
	
	  4. Click OK and stop and restart RRAS.
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
