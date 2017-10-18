---
layout: page
title: "Q99240: Macintosh and Appletalk Stack Limits Imposed"
permalink: kb/099/Q99240/
---

## Q99240: Macintosh and Appletalk Stack Limits Imposed

	Article: Q99240
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 1.0,1.0a,2.0,2.1,2.1a,2.2,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft LAN Manager, versions 1.0, 1.0a, 2.0, 2.1, 2.1a, 2.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the Macintosh and AppleTalk stack limits imposed on
	Microsoft LAN Manager and Windows NT Services for Macintosh servers.
	
	MORE INFORMATION
	================
	
	LAN Manager
	-----------
	
	LAN Manager Services for Macintosh (SFM) versions 1.0 and 1.0a allow a maximum of
	50 Appleshare clients per server. This limit is imposed by SFP server
	architecture (which uses one thread per connected client) and by OS/2, which is
	limited to 53 threads per process.
	
	Adding network cards does not allow you to connect more clients because the limit
	is in the server process itself, not the protocol. The AppleTalk protocol is
	architecturally limited to 255 sessions. When the server has multiple adapters,
	AppleTalk can be bound to each one and can route between them. Each adapter
	board is registered as a different AppleTalk node, and the actual AFP server
	process registers on only one of them. Users on nets connected to other boards
	can connect to the server because LAN Manager Services for Macintosh routes
	packets to the network that the server appears on.
	
	Windows NT
	----------
	
	Windows NT Advanced Server 3.1 and Windows NT Server 3.5x and later no longer
	impose the 50 client connection or 255 session limitation. AppleTalk sessions
	are now limited only by system resources. Potentially, an unlimited number of
	clients can attach to a single SFM server.
	
	Additional query words: sfm LMSFM 1.0 1.00 1.0a 1.00a 2.0 2.00 2.1 2.10 2.1a 2.10a 2.2 2.20 3.10 macfile Apple Server share
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTS351search kbWinNTS350search kbAudDeveloper kbLanManSearch kbLanMan100 kbLanMan100a kbLanMan200 kbLanMan210 kbLanMan210a kbLanMan220
	Version           : :1.0,1.0a,2.0,2.1,2.1a,2.2,3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
