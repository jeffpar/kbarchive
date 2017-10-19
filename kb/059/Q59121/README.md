---
layout: page
title: "Q59121: How to Change the Way MS-DOS Allocates Memory"
permalink: /kb/059/Q59121/
---

## Q59121: How to Change the Way MS-DOS Allocates Memory

	Article: Q59121
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When MS-DOS allocates memory for your program, it uses a first-fit allocation
	strategy by default. You can change MS-DOS's default strategy to a best fit,
	last fit, or back to first fit with a call to INT 21h Function 58h.
	
	MORE INFORMATION
	================
	
	A first-fit strategy forces MS-DOS to search from low addresses in memory to
	high addresses, and allocate the first available block of memory large enough
	for the requested allocation.
	
	A best-fit strategy forces MS-DOS to search all addresses in memory and allocate
	the smallest block still large enough to fill the requested allocation.
	
	A last-fit strategy forces MS-DOS to search from high addresses in memory to low
	addresses, and allocate the first available block of memory large enough for the
	requested allocation.
	
	The best-fit algorithm is the slowest to execute since all free memory is
	searched, but results in the least memory fragmentation during multiple
	allocations and frees. Conversely, the first-fit and last-fit strategies are
	fastest to execute but result in a higher degree of memory fragmentation.
	
	Additional query words: 3.00 3.10 3.20 3.21 3.22 3.30 3.30a 4.00 4.00a 4.01 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x,5.0
	
	=============================================================================
	
