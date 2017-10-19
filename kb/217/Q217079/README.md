---
layout: page
title: "Q217079: Recommended Default Gateway Setting for a Multihomed PPTP Server"
permalink: /kb/217/Q217079/
---

## Q217079: Recommended Default Gateway Setting for a Multihomed PPTP Server

	Article: Q217079
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes a virtual private networking (VPN) solution called
	Point-to-Point Tunneling Protocol (PPTP), which allow clients located on the
	Internet to connect to a private corporate network on a Remote Access Service
	(RAS) or a Routing and Remote Access Service (RRAS) server that is multihomed
	with two network adapters.
	
	MORE INFORMATION
	================
	
	In this configuration, one network adapter is attached to the private corporate
	network and the other is attached to an Internet service provider (ISP)
	network.
	
	The default gateway must point only to the Internet Protocol (IP) address of the
	router located on the Internet side. This ensures that all IP traffic sent to
	clients located on the Internet is properly routed.
	
	For IP traffic sent to clients located on the private corporate network, it may
	be necessary to add static routes or a routing protocol on a RAS or RRAS server
	to ensure traffic is properly routed.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q169790 How to Troubleshoot Basic TCP/IP Problems in Windows NT 4.0
	
	  Q140859 TCP/IP Routing Basics for Windows NT
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
