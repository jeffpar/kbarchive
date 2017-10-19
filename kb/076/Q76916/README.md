---
layout: page
title: "Q76916: Size of Expanded Memory Pool Adjusted"
permalink: /kb/076/Q76916/
---

## Q76916: Size of Expanded Memory Pool Adjusted

	Article: Q76916
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Upon booting your machine, EMM386 may display the following message:
	
	  Size of Expanded memory pool adjusted
	
	This message indicates that EMM386 has adjusted the amount of expanded memory it
	will emulate from the machine's XMS memory.
	
	The above message indicates one of two situations:
	
	- The amount of XMS memory specified by the RAM switch on the EMM386 device
	  line is not a multiple of 16, so EMM386 adjusted the number to be a multiple
	  of 16.
	
	-or-
	
	- The amount of XMS memory specified by the RAM switch on the EMM386 device
	  line is not available, so EMM386 adjusted the amount of XMS memory to reflect
	  what is available.
	
	MORE INFORMATION
	================
	
	When the RAM switch is included, EMM386 sets aside the indicated amount of XMS
	memory and uses it to emulate expanded memory. The amount of XMS memory EMM386
	sets aside is determined by the number (or lack thereof) placed before the RAM
	switch in the EMM386 device line in the CONFIG.SYS file. This number should be
	referred to in kilobytes (K). Because EMM386 sets aside memory in 16K blocks,
	the number should also be referred to in multiples of 16. For example, the
	following line sets aside 1024K (1 MB) of XMS memory to be emulated as
	expanded:
	
	  device=c:\dos\emm386.exe 1024 ram
	
	Note: EMM386 will also set aside an additional 108K of memory above and beyond
	the amount specified before the RAM switch. When specifying the RAM switch (or
	with no switch at all), EMM386 creates a 64K page frame in the upper memory area
	(UMA). The actual amount of extended memory used will be 64K plus overhead. The
	overhead represents tables that EMM386 sets up to emulate expanded memory. The
	size of these tables depends on the amount of expanded memory EMM386 has been
	asked to emulate. An approximate range of the overhead memory is between 44K and
	100K.
	
	If no number is included before the RAM switch, EMM386 will by default emulate
	256K of expanded memory.
	
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
