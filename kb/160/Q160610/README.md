---
layout: page
title: "Q160610: READ_REGISTER_ULONG Doesn't Preserve ULONG Semantics on Alpha"
permalink: /kb/160/Q160610/
---

## Q160610: READ_REGISTER_ULONG Doesn't Preserve ULONG Semantics on Alpha

	Article: Q160610
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The READ_REGISTER_ULONG routine in the HAL for Alpha platform computers does not
	preserve the ULONG semantics, which may cause the computer to stop responding or
	bugcheck.
	
	CAUSE
	=====
	
	Currently, the READ_REGISTER_ULONG routing explicitly zeros out the upper four
	bytes of the return value. This will destroy ULONG semantics, where bit 31 is
	sign extended through to bit 63. This will potentially cause drivers that poke
	memory mapped I/O for expected signatures to fail when comparing the return
	value of READ_REGISTER_ULONG to a static constant when bit 31 of the constant is
	set.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0.
	This problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt alpha
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
