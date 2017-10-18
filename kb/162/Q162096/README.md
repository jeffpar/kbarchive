---
layout: page
title: "Q162096: Drivers Fail to Load When I/O Address Is Above 0xFFF"
permalink: kb/162/Q162096/
---

## Q162096: Drivers Fail to Load When I/O Address Is Above 0xFFF

	Article: Q162096
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a driver is configured to use an input/output (I/O) base address greater
	than 0xFFF, the driver may fail to load when the system has a moon PCI-PCI
	bridge chipset.
	
	CAUSE
	=====
	
	The moon bridge has a read-only version of the I/O base and limit registers.
	Intel states that this means the bridge should get I/O ports ranging from 0 -
	0xFFFF. Windows NT version 4.0 expects the I/O base range to be from 0 - 0xFFF.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
