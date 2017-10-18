---
layout: page
title: "Q199288: H-Node Multihomed Host May Send Broadcasts Immediately"
permalink: kb/199/Q199288/
---

## Q199288: H-Node Multihomed Host May Send Broadcasts Immediately

	Article: Q199288
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 03-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure a network adapter on a multihomed h-node host to query
	Windows Internet Name Service (WINS), another network adapter without this
	configuration may appear to follow the h-node type name resolution method
	correctly.
	
	NetBT sends a name query to WINS from the network adapter that is configured to
	query WINS, but almost immediately sends a name query broadcast from the network
	adapter that is not configured to query WINS. The nonconfigured network adapter
	does not wait for WINS name resolution to be unsuccessful.
	
	CAUSE
	=====
	
	This behavior occurs because a multihomed computer places calls on all adapters
	to which NetBT is bound, and each adapter works independently to resolve the
	name and to make a connection.
	
	RESOLUTION
	==========
	
	To resolve this problem, use an Lmhosts file to preload entries in the NetBIOS
	cache table. This cache is checked first before the host queries WINS or sends a
	broadcast.
	
	You can also configure the host to use p-node so that it uses only WINS and never
	broadcasts.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The NetBT node type determines what method NetBT uses to register and resolve
	names. An h-node system queries the name server first, and then broadcasts.
	
	Typically, all adapters in an h-node type host are configured to use WINS.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q120642 TCP/IP and NBT Configuration Parameters for Windows 2000 or Windows
	  NT
	
	  Q119493 NetBIOS over TCP/IP Name Resolution and WINS
	
	  Q105997 Differences Between the HOSTS and LMHOSTS Files in Windows NT
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
