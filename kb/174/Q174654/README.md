---
layout: page
title: "Q174654: Running GSNW without a Preferred Server Statement"
permalink: kb/174/Q174654/
---

## Q174654: Running GSNW without a Preferred Server Statement

	Article: Q174654
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbinfo kbArtTypeINF
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You have a computer running Windows NT Server and Gateway Services for NetWare
	(GSNW). If no one has logged on to this server (the sign-on screen is showing on
	this server), the Preferred Server statement will be ignored. Instead, a primary
	server connection is established with the server that responds to
	GetNearestServer, and will remain so until the connection is lost. There is no
	way to specify a primary server.
	
	MORE INFORMATION
	================
	
	A primary server is whichever server is currently answering to your Service
	Advertising Protocol (SAP) request. The preferred server and primary server may
	be the same server.
	
	Whenever a Windows NT or NetWare client starts, the program issues the
	GetNearestServer request. Whichever server answers first becomes your primary
	server. All future SAP requests go to this Novell/File and Print Services for
	NetWare (FPNW) server unless a preferred server is specified. In this case, your
	preferred server becomes your primary server.
	
	If a computer running Windows NT Server has a preferred server specified in the
	GSNW icon, when the computer starts, it will send out a Routing Internet
	Protocol (RIP) request for the external address of that preferred server.
	
	If a preferred server is NOT specified, the server will send out a RIP request
	for the mapped drives of specified Novell servers that were created in the
	gateway enabled in GSNW. If the server that receives the RIP request does not
	know about the specified Novell server in its SAP table, the server will respond
	that it does not have that Novell server's information, and then the connection
	will fail.
	
	If there are external routers on the network, verify they are configured to
	support GetNearestServer. If these routers ARE configured to support
	GetNearestServer, then the Novell servers should have GetNearestServer turned
	off. Otherwise, there will be a conflict between the routers' SAP table and the
	servers' SAP table that may cause the computer running Windows NT Server to
	attach to a Novell server that is not at the top of either the router or the
	server's SAP table.
	
	WORKAROUND
	==========
	
	When the computer running Windows NT server starts, GSNW connections are
	established before the Server service starts. Consequently, establishing a
	gateway to a Novell server can be an alternative way of establishing a primary
	server.
	
	STATUS
	======
	
	This is by design and will not be changed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinfo kbArtTypeINF 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
