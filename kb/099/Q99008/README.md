---
layout: page
title: "Q99008: MS-DOS 6 MEM Command Reports 384K for Adapter RAM/ROM"
permalink: /kb/099/Q99008/
---

## Q99008: MS-DOS 6 MEM Command Reports 384K for Adapter RAM/ROM

	Article: Q99008
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MS-DOS 6 MEM command may display an incorrect value for Adapter RAM/ROM. On
	many machines, MEM displays a table similar to the following:
	
	  Memory Type        Total =  Used  +  Free
	  ------------------------------------------
	
	  Conventional        640K     126K     515K
	  Upper               139K     111K      28K
	  Adapter RAM/ROM     384K     384K       0K
	  Extended (XMS)     7029K    2781K    4248K
	  ------------------------------------------
	
	  Total memory       8192K    3401K    4791K
	
	It is not possible to have 384K Adapter RAM/ROM and a value greater than zero for
	upper memory.
	
	MORE INFORMATION
	================
	
	Adapter RAM/ROM
	---------------
	
	The value specified by Adapter RAM/ROM is calculated as follows:
	
	  1 MB (1024K) minus conventional memory, minus upper memory
	  block (UMB) space
	
	Therefore, Adapter RAM/ROM is the sum of the following:
	
	- Excluded UMB space
	
	- Memory used by BIOS and adapter cards
	
	- Expanded memory services (EMS) page frame(s)
	
	However, on machines in which the amount of reported extended memory is below the
	1 MB boundary (384K or less), MEM increases the value reported for Adapter
	RAM/ROM so that the total memory on the system is a multiple of 1 MB.
	
	NOTE: The amount of extended memory reported is correct.
	
	Definitions
	-----------
	
	The upper memory area (UMA) is a range of addresses between 640K and 1 MB
	(1024K). This area is also commonly called the reserved address space.
	
	Upper memory blocks (UMBs) are areas in the UMA that EMM386.EXE has reserved for
	loading device drivers and terminate-and-stay-resident (TSR) programs high.
	
	Additional query words: 6.00 XMS
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
