---
layout: page
title: "Q154950: SPX Header Not Available for a Terminate Packet"
permalink: /kb/154/Q154950/
---

## Q154950: SPX Header Not Available for a Terminate Packet

	Article: Q154950
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a NetWare SPX Sockets application tries to read the SPX Header on a terminate
	packet while running Windows NT version 3.51, it will fail.
	
	CAUSE
	=====
	
	The Windows NT implementation of Sockets does not make the SPX Header available
	on a terminate packet.
	
	STATUS
	======
	
	This problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbWin98search kbWin98
	Version           : :3.51
	
	=============================================================================
	
