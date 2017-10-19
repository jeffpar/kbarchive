---
layout: page
title: "Q130232: WINS Response to Group Name Query is Limited Broadcast Address"
permalink: /kb/130/Q130232/
---

## Q130232: WINS Response to Group Name Query is Limited Broadcast Address

	Article: Q130232
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a NetBIOS application registers a group name with Windows Internet Naming
	Service (WINS), it receives a positive response. However, WINS does not store a
	list of addresses registering a group name. It responds to a name query on a
	group name with the limited broadcast address (255.255.255.255). This may make
	it impossible for a client application to discover a server application on the
	network if it uses group names and is separated by a router.
	
	CAUSE
	=====
	
	WINS was designed to perform this way, with one exception; NetBIOS names ending
	in [1C]. Windows NT Domain Controllers register the <domain>[1C] name with
	WINS, and a list of addresses is returned if a name query on a domain name is
	sent.
	
	
	Additional query words: 3.50 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	Issue type        : kbprb
	
	=============================================================================
	
