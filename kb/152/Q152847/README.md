---
layout: page
title: "Q152847: Error 736 When Connecting to a Windows NT Server Via TCP/IP"
permalink: kb/152/Q152847/
---

## Q152847: Error 736 When Connecting to a Windows NT Server Via TCP/IP

	Article: Q152847
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect from one Windows NT computer to another Windows NT computer
	using TCP/IP over Point to Point Protocol (PPP), the following error may occur:
	
	  Error: Checking network protocol connection TCPIP reported error 736:
	  The remote computer terminated the control protocol.
	
	When you press F1 for more information on error 736, you find that a PPP network
	control protocol conversation was started, but was terminated at the request of
	the remote computer.
	
	CAUSE
	=====
	
	The Windows NT PPP server is configured to allocate TCP/IP addresses using
	dynamic host configuration protocol (DHCP), but there is no DHCP server on the
	network.
	
	RESOLUTION
	==========
	
	To correct this error, perform one of the following steps:
	
	- Install a DHCP server on the network.
	
	  NOTE: Verify that the DHCP server has a scope that includes IP addresses on
	  the same subnet as that of the network adapter in the Remote Access Service
	  (RAS) server.
	
	  -or-
	
	- Configure the RAS server to use a pool of IP addresses for PPP instead of
	  DHCP for PPP clients.
	
	  -or-
	
	- Remove TCP/IP from the RAS server.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
