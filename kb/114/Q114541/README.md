---
layout: page
title: "Q114541: TCP/IP-based Applications Hang on Multiprocessor Systems"
permalink: kb/114/Q114541/
---

## Q114541: TCP/IP-based Applications Hang on Multiprocessor Systems

	Article: Q114541
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.1; :3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	TCP/IP-based applications may hang on multiprocessor systems. A sniff of the
	problem shows the Windows NT machine receiving and ACKing a FIN, but never
	sending its corresponding FIN.
	
	CAUSE
	=====
	
	The TCP/IP stack does not send a disconnect indication to the application if the
	packet with the FIN bit set is being processed by one processor while a previous
	data packet is concurrently being processed on another processor. This can occur
	when two NDIS DPCs run concurrently on the same interface, which is possible
	only on multiprocessor systems.
	
	RESOLUTION
	==========
	
	None available at this time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in the latest U.S.
	Service Pack for Windows NT and Windows NT Advanced Server version 3.1. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : winnt:3.1; :3.1
	
	=============================================================================
	
