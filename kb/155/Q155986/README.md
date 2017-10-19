---
layout: page
title: "Q155986: NetBT Communication Slow on Multihomed Client"
permalink: /kb/155/Q155986/
---

## Q155986: NetBT Communication Slow on Multihomed Client

	Article: Q155986
	Product(s): Microsoft Windows NT
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you communicate using NetBIOS over TCP/IP (NetBT) to a device that uses the
	second interface of a multihomed Windows NT client, the initial session
	establishment is slow.
	
	CAUSE
	=====
	
	This problem will only be seen in environments in which the subnets on both
	sides of the Windows NT client are not configured to communicate with each
	other.
	
	RESOLUTION
	==========
	
	Define a route, either per client or on the routers, to allow accessibility to
	both adapters on the computer running Windows NT Server.
	
	MORE INFORMATION
	================
	
	NetBT first defines the IP address on the source packet of a three-way handshake
	using the IP address of the adapter that resolved the name. If this fails, NetBT
	uses the IP address of the second adapter. This can cause a delay of up to 50
	seconds in the establishment of the connection.
	
	NOTE: In Windows NT version 4.0 and Windows NT version 4.0 Service Pack 2,
	significant network connection enhancements have been added to improve
	connectivity for multi-homed computers. For detailed information, please see the
	following articles in the Microsoft Knowledge base:
	
	  ARTICLE ID: Q161425
	  TITLE: WinNT 4.0 SP2 Multihomed Computer Connection Enhancement
	
	  ARTICLE ID: Q166159
	  TITLE: NetBIOS Connections from a Multihomed Computer
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTSsearch
	Version           : winnt:
	
	=============================================================================
	
