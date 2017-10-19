---
layout: page
title: "Q74212: Search Algorithm of MS-DOS 5.0 EMM386.EXE"
permalink: /kb/074/Q74212/
---

## Q74212: Search Algorithm of MS-DOS 5.0 EMM386.EXE

	Article: Q74212
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When EMM386.EXE is installed, it searches through the upper memory area (UMA)
	(the area between 640K and 1024K) for "holes" (unused space) that it can use to
	load TSRs (terminate-and-stay-resident programs) and/or device drivers, and/or
	create a page frame to emulate expanded memory.
	
	MORE INFORMATION
	================
	
	The search algorithm follows these steps, starting at C000 through DFFF (on most
	machines), checking every 2K. C000 - C7FF is searched on EISA and ISA machines
	only. The E000 range will be checked on Compaq machines only.
	
	1. To check for RAM, EMM386.EXE will first write to the address and then read
	  the same address. If it reads what was written, the space is RAM, and is
	  excluded.
	
	2. To check for ROM, EMM386.EXE looks at the first two bytes of the address. If
	  the bytes are "55AA", then the space is occupied by ROM. The next two bytes
	  (after 55AA) indicate the size of the ROM, and this space is excluded.
	  Because some video ROMs incorrectly report their size, the search algorithm
	  starts at C000 instead of A000. B000-B7FF is free on most VGA monitors. If
	  so, it can be included with the I= switch.
	
	Note: The I= switch on EMM386.EXE has a higher order of precedence than the
	search algorithm, and it is possible to force the inclusion of address spaces
	that are being used by other hardware, which will cause the machine to hang or
	behave in an erratic fashion.
	
	Additional query words: 5.00 5.00a aemm386 served address space
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a
	
	=============================================================================
	
