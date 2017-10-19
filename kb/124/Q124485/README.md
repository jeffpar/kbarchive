---
layout: page
title: "Q124485: Pathworks 5.0 Prevents Domain Name Registration on TCP/IP"
permalink: /kb/124/Q124485/
---

## Q124485: Pathworks 5.0 Prevents Domain Name Registration on TCP/IP

	Article: Q124485
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11,3.11a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups 
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Computers running the Microsoft TCP/IP dynamic host configuration protocol
	(DHCP) and Windows Internet Naming Service (WINS) compatible protocols, fail to
	register domain names when a DEC Pathworks 5.0 server has already registered
	that name. This problem occurs when the Pathworks server is part of the domain,
	or if the name is specified with the OTHDOMAINS parameter.
	
	CAUSE
	=====
	
	Computers using DHCP and WINS use the NetBIOS over TCP/IP h-node implementation
	by default. DEC Pathworks servers use b-node implementations. Following the RFC
	1001/1002 specs, only 3 node types are standardized, b-node (broadcast), p-node
	(point-to-point), and m-node (mixed) implementation. The h-node (hybrid) used by
	Microsoft uses the reserved field and follows the recommendation made in a new,
	draft RFC.
	
	Traces show that in response to the NetBIOS NAME_QUERY_REQUEST frame sent by the
	booting computer, the Pathworks server responses correctly, indicating that it
	has the domain name registered as a group name. The next step performed by the
	workstation is registering the domain name. The Pathworks server sends a
	NAME_IN_CONFLICT frame indicating that it has the domain name registered as a
	unique name. This prevents the booting machine from registering the domain name,
	and keeps the redirector and server from binding correctly to TCP/IP.
	
	The problem does not to occur using b-node implementations on computers running
	the Microsoft TCP/IP DHCP and WINS compatible protocol.
	
	
	RESOLUTION
	==========
	
	Contact your local Digital representative to obtain a newer version of Pathworks
	version 5.0C for OpenVMS, to solve the problem.
	
	
	Additional query words: prodtcp32 3.11 3.11a nttcp v5.0c v5
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbTCPIP311 kbTCPIP311a
	Version           : :3.11,3.11a,3.5
	
	=============================================================================
	
