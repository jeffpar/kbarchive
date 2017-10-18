---
layout: page
title: "Q183902: Dead Gateway Detection Is Not Triggered During Logon"
permalink: kb/183/Q183902/
---

## Q183902: Dead Gateway Detection Is Not Triggered During Logon

	Article: Q183902
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows 95-based or Windows NT-based computer that is configured with multiple
	default gateways may be unable to connect to its logon server when the computer
	starts.
	
	CAUSE
	=====
	
	If the first default gateway is unavailable, the logon process does not trigger
	dead gateway detection. Without a domain controller on the local network
	segment, you are unable to log on to the domain.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	- Install and configure a domain controller on the local network segment.
	
	- Install a routing protocol on your Windows NT-based computer, such as Routing
	  Information Protocol (RIP) for Transmission Control Protocol/Internet
	  Protocol (TCP/IP) on Windows NT Server or Silent RIP for Windows NT
	  Workstation. For more information, please see the following articles in the
	  Microsoft Knowledge Base:
	
	  Q172514 Silent RIP for IP Available for Windows NT Workstation
	
	  Q169161 Registry Parameters for RIP for IP version 1
	
	  NOTE: Silent RIP is not available for Windows 95.
	
	
	- For Windows NT, Windows 95, and Windows 98-based computers, you can enable
	  the Internet Control Message Protocol (ICMP) Internet Router Discovery
	  Protocol (IRDP) packets on all of your routers. The following text is an
	  excerpt from Request for Comments (RFC) 1256:
	
	     The ICMP router discovery messages are called "Router
	     Advertisements" and "Router Solicitations. " Each router
	     periodically multicasts a Router Advertisement from each of its
	     multicast interfaces, announcing the IP address(es) of that
	     interface. Hosts discover the addresses of their neighboring
	     routers simply by listening for advertisements.
	
	  This is one way of testing for dead gateways. This solution requires that
	  routers be configured to send IRDP packets, but currently has not been
	  implemented in Windows NT 4.0. Windows 95 requires a Windows Socket update 2,
	  while Windows 98 natively supports IRDP.
	
	
	  For additional information, please see the following article(s) in the
	  Microsoft Knowledge Base:
	
	  Q182108 Availability of Windows Sockets 2.0 for Windows 95
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q223756 IRDP Client Support Added to Windows NT 4.0
	
	MORE INFORMATION
	================
	
	Switching to the second gateway occurs only if there is already an existing
	connection-oriented TCP session over the route to the first configured gateway.
	Connectionless datagram-based traffic such as an ICMP or Network Basic
	Input/Output System (NetBIOS) packet does not trigger the change to a secondary
	gateway.
	
	For more information, please see the following articles in the Microsoft
	Knowledge base:
	
	  Q128978 Dead Gateway Detection in TCP/IP for Windows NT
	
	  Q171564 TCP/IP Dead Gateway Detection Algorithm Updated for Windows NT
	
	You can obtain additional information from RFC 816, "Fault Isolation and
	Recovery."
	
	For information about obtaining RFCs, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q185262 How to Obtain Request for Comments Documents from the Internet
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
