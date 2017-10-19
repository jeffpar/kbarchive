---
layout: page
title: "Q119117: Video Hangs w/Gateway 2000 and ATI Mach32 Graphics Adapter"
permalink: /kb/119/Q119117/
---

## Q119117: Video Hangs w/Gateway 2000 and ATI Mach32 Graphics Adapter

	Article: Q119117
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbhw
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows NT Workstation or Windows NT Server version 3.5 on a
	Gateway 2000 P5-66 computer equipped with the ATI Mach32 PCI chip set, the
	computer stops responding (hangs) at various times. Generally, the screen
	partially redraws and then halts.
	
	CAUSE
	=====
	
	There is a known bug in the firmware of a small number of ATI Mach32 PCI graphic
	adapters that were shipped with the Gateway 2000 P5-66 computers.
	
	
	RESOLUTION
	==========
	
	Contact Gateway 2000 technical support.
	
	To identify the affected boards, from MS-DOS run the test application provided by
	ATI on Disk 1. In the product documentation there is an ASIC Rev. and a PCI Rev.
	The affected boards are ASIC Rev. 0 and PCI Rev. 1 Mach32 PCI 2M dram boards.
	Boards that have been tested and seem okay are ASIC Rev. 2 and PCI Rev. 2 Mach32
	PCI 2M dram boards.
	
	The ATI and Gateway 2000 products included here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodnt hardware mach
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
