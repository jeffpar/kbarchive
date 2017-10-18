---
layout: page
title: "Q131427: Windows NT 3.51 TCP/IP System Network Interface Hang"
permalink: kb/131/Q131427/
---

## Q131427: Windows NT 3.51 TCP/IP System Network Interface Hang

	Article: Q131427
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT computer running TCP/IP stops responding on the network. No frames
	are sent from the network interface card (NIC), and incoming frames are not
	seen. Local (non-network) processing continues to function normally.
	
	NOTE: This problem rarely occurs. It was seen only once on a busy Internet
	server.
	
	
	CAUSE
	-----
	
	A router on the network responded to the server with an ICMP destination
	unreachable (fragmentation requested, but with the DF bit set). It included an
	advisement that the next-hop MTU size was one byte. This is an illegal MTU
	value.
	
	RESOLUTION
	----------
	
	To correct this problem, install Windows NT 3.51 Service Pack 1.
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
