---
layout: page
title: "Q74870: How EMM386.EXE Rounds Segment Addresses"
permalink: kb/074/Q74870/
---

## Q74870: How EMM386.EXE Rounds Segment Addresses

	Article: Q74870
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The version 5.0 "Microsoft MS-DOS User's Guide and Reference" states that when
	using the X= and I= parameters with EMM386.EXE, addresses are rounded down to
	the nearest 4K boundary. Specifically, the address range is rounded to the next
	even 4K address closest to the hexidecimal address FFFFF.
	
	MORE INFORMATION
	================
	
	Because of this rounding procedure, it is possible that pieces of memory 1 to 4K
	in size may not be correctly included or excluded by EMM386.EXE. The
	significance of this rounding procedure becomes important when attempting to
	arrange included and excluded memory blocks in a contiguous order. To ensure
	that all pieces of memory are used correctly, use hexidecimal ranges that border
	one place digit apart, rather than values that overlap.
	
	For example, an address range E000-E100 overlaps one complete 4K piece of memory
	by 16 bytes and is rounded upward toward FFFFF. This address range is actually
	recognized as E000-E1FF, which is approximately 8K in size. In this example, to
	specifically reference only the 4K piece of memory starting at E000, the correct
	range is E000-E0FF.
	
	The following chart demonstrates some examples of using include and exclude
	parameters with EMM386.EXE and the NOEMS parameter. Remember that X= parameter
	has priority over the I= parameter. The leftmost value in the chart is the total
	amount of UMB memory reported when booting up. The K value is the rounded
	kilobyte value given by the MEM/C command.
	
	Total UMB   X= and I= Parameters                    Result of MEM/C
	  Memory      Showing Available
	  on Boot Up                                          Bytes   (K value)
	  ----------  -------------------------------------   ------  ---------
	
	   3K         X=A000-DFFF  X=E100-FFFF  I=E000-E0FF    4,064    4.0K
	   7K         X=A000-DFFF  X=E200-FFFF  I=E000-E100    8,160    8.0K
	   3K         X=A000-DFFF  X=E100-FFFF  I=E000-E100    4,064    4.0K
	  63K         X=A000-DFFF  I=E000-EFFF                65,504   64.0K
	  67K         X=A000-DFFF  I=E000-F000                69,600   68.0K
	  55K         X=A000-DFFF  X=E400-E500  I=E000-EFFF   57,248   55.9K
	
	Key points from the above chart:
	
	- Line 2 was intended to include only a 4K piece of memory but resulted in an
	  8K size.
	
	- Line 3 is different from line 2 only by the second exclude parameter. Because
	  this exclusion range overlaps the inclusion range, it has priority and
	  restricts the size of the inclusion range.
	
	- Line 5 was intended to include only a 64K piece of memory but actually
	  included 68K.
	
	- Line 6 was intended to exclude only a 4K piece of memory but actually
	  excluded 8.1K.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
