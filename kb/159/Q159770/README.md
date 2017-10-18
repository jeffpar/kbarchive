---
layout: page
title: "Q159770: Cannot Access Server Using NetBIOS Name or IP Address"
permalink: kb/159/Q159770/
---

## Q159770: Cannot Access Server Using NetBIOS Name or IP Address

	Article: Q159770
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use an IP address to establish a session with a server, and then use the
	server's NetBIOS name to attempt to access the server, you receive the following
	error message:
	
	  Access is denied.
	
	For example, if you use the following command to establish a session with a
	server:
	
	net use \\<###.###.###.###>\ipc$ /u:<domain name>\<user name>
	
	where <###.###.###.###> is the server's IP address, and then attempt to
	access the server using its NetBIOS name, you receive the error message.
	
	NOTE: This problem also occurs if you establish a session with a server using the
	server's NetBIOS name and then attempt to access the server using its IP
	address.
	
	CAUSE
	=====
	
	The redirector does not recognize that the IP address and the NetBIOS name
	denote the same computer.
	
	RESOLUTION
	==========
	
	Use either the IP address or the NetBIOS name to establish a session with and
	access the server.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
