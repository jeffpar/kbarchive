---
layout: page
title: "Q131700: Gateway P5 100XL IDE Drive Settings Using LBA"
permalink: /kb/131/Q131700/
---

## Q131700: Gateway P5 100XL IDE Drive Settings Using LBA

{% raw %}

	Article: Q131700
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	If two connectors of the IDE controller (configured for logical block
	addressing - LBA) on a Gateway 2000 P5 100XL computer are sharing Interrupt
	Request (IRQ) lines, I/O port addresses or Direct Memory Access (DMA)
	channels in Windows NT 3.5, ensure the following configurations are set in
	the Advanced CMOS of the computer:
	
	  Drive Type: Auto-detection
	  IDE Translation mode: LBA
	  Multiple Sector mode: Disabled
	  Fast Programmed I/O: Disabled
	  PIO: Disabled
	
	
	The Gateway 2000 P5 100XL computer is manufactured by Gateway 2000, Inc., a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: prodnt fixed hard disk bios standard
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
