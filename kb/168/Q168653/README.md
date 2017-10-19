---
layout: page
title: "Q168653: Unable to Connect to NetWare Server Using RConsole"
permalink: /kb/168/Q168653/
---

## Q168653: Unable to Connect to NetWare Server Using RConsole

	Article: Q168653
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running RConsole to connect to a Novell NetWare server using the
	SPX connection type, you may be unable to obtain a list of servers or connect to
	a server. RConsole may report the following error messages:
	
	  SPXEstablishConnection failed to establish a connection to the desired
	  server.
	
	  The server connection was terminated by AllocateConnection.
	
	  A connection could not be established with the selected server.
	
	
	CAUSE
	=====
	
	When you are using locally administered network addresses on an Ethernet
	network, the hardware MAC address of the NetWare server's network adapter has
	eight or more trailing zeroes.
	
	RESOLUTION
	==========
	
	Modify the "NODE=xxxxxxxxxxxx" setting on the NetWare server so that the last
	eight numbers are not all zeroes.
	
	For information about how to change the "NODE=xxxxxxxxxxxx" setting on a NetWare
	server, see the software documentation or contact the manufacturer.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
