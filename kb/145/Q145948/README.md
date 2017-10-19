---
layout: page
title: "Q145948: Intermittent Logons To NetWare and FPNW Servers"
permalink: /kb/145/Q145948/
---

## Q145948: Intermittent Logons To NetWare and FPNW Servers

	Article: Q145948
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	NetWare client computers (using NCP) on one side (Side A) of a bridge are able
	to log on to NetWare servers and File and Print Services for NetWare (FPNW)
	servers on both sides of the bridge. However, NetWare client computers (using
	NCP) on the other side (Side B) of the bridge are able to log on to NetWare
	servers and FPNW servers on Side B only.
	
	CAUSE
	=====
	
	This problem occurs if the bridge is configured to forward RIP broadcasts one
	way only - Side A to Side B. When a NetWare client attempts to log on to a
	server, a RIP broadcast for the internal IPX network number of the server is
	sent. The server then sends a direct response to the client, and the logon
	process continues. If the bridge is configured to only forward RIP broadcasts
	from Side A to Side B, the request from a client on side B does not reach the
	servers on Side A. The client may re-try sending the RIP broadcasts several
	times, which eventually returns an error.
	
	If the server on Side A sends periodic RIP broadcasts (possibly once a minute) to
	Side B during the re-try period, the client on Side B will detect the broadcast
	because all packets sent or received after the initial broadcast are direct. In
	this case, the client on Side B is able to log on to servers on Side A.
	
	RESOLUTION
	==========
	
	To correct this problem, configure the bridge to send RIP broadcasts in both
	directions.
	
	Additional query words: fpnw
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351
	Version           : 3.51 4.0
	
	=============================================================================
	
