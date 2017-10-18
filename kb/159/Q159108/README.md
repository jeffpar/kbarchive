---
layout: page
title: "Q159108: SMP Full Duplex Adapter Configuration May Cause a Blue Screen"
permalink: kb/159/Q159108/
---

## Q159108: SMP Full Duplex Adapter Configuration May Cause a Blue Screen

	Article: Q159108
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbnetwork kbusage kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT system with two network adapters installed may cause a blue screen
	when one card is set to SMP Full Duplex and the second card is set to half
	duplex.
	
	CAUSE
	=====
	
	When the system is stressed by multiple clients, the NDIS layer will go into a
	continuous reset mode, which causes all connections in that segment to drop off
	and result in the blue screen.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 0xA
	
	======================================================================
	Keywords          : kbhw kbnetwork kbusage kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
