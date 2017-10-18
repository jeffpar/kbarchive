---
layout: page
title: "Q121003: WINS Behavior on a Multihomed System"
permalink: kb/121/Q121003/
---

## Q121003: WINS Behavior on a Multihomed System

	Article: Q121003
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbnetwork
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft NT Server version 3.5 allows multiple network cards to bind to the
	NetBT (NetBIOS over TCP/IP). However, the WINS service can only bind to one
	network card. By default, the Windows Internet Name Service (WINS) service will
	bind to the first adapter bound with NetBT. As a result, when you configure WINS
	client addresses, be sure to specify the IP address of the adapter and not
	another IP address such as that of an adapter that might be on the same subnet
	as the client.
	
	MORE INFORMATION
	================
	
	Microsoft does not recommend that the WINS service run on a computer with two or
	more network cards (multihomed) on disjoint networks. MS-DOS clients that query
	WINS may not be able to reach computers with multiple network cards that
	straddle disjoint networks due to the fact that MS-DOS clients always pick the
	first IP address supplied by the WINS server. The MS-DOS client may fail to
	connect to that computer because it may be using one of the "unreachable"
	addresses supplied by the WINS server. However, you can configure a multihomed
	computer to register with different WINS servers for each adapter card. If the
	multihomed computer straddles two disjoint networks, the computers on either
	side would use the WINS server on their network to resolve names. Then the WINS
	server would return only the IP address registered on the requesting clients'
	network.
	
	Additional query words: prodnt internet
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
