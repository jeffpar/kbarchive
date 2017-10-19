---
layout: page
title: "Q197511: UDP Broadcast Issues with Service Pack 4"
permalink: /kb/197/Q197511/
---

## Q197511: UDP Broadcast Issues with Service Pack 4

	Article: Q197511
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you apply Service Pack 4 for Windows NT version 4.0, TCP/IP, Windows
	Sockets, and Simple TCP/IP services are modified to be resistant to attack. This
	modification may cause a loss of functionality in programs that use User
	Datagram Protocol (UDP) broadcasts.
	
	
	MORE INFORMATION
	================
	
	Because of the security issues fixed in Service Pack 4, the default behavior of
	Winsock sockets has been changed. Sockets now receive broadcast datagrams such
	as UDP broadcasts only if they have been explicitly set to do so. Prior to these
	fixes, any program that issued a Recvfrom() call would receive broadcast
	datagrams.
	
	Programs affected by this change should be modified to operate as expected with
	Windows NT 4.0 Service Pack 4 or later.
	
	
	REFERENCES
	==========
	
	Winsock supports a socket option (SO_BROADCAST) that can be set to allow the
	Recvfrom() call to pass broadcast datagrams to the program. The default setting
	for this option is "Off." More information about the SO_BROADCAST option and the
	functions used to set socket options is documented in the Platform Software
	Development Kit (SDK), which is available online at the following Microsoft Web
	site:
	
	  http://msdn.microsoft.com.
	
	Additional query words: simptcp
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
