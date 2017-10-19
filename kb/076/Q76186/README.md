---
layout: page
title: "Q76186: Up to 48 Buffers Load in HMA with MS-DOS 5.0"
permalink: /kb/076/Q76186/
---

## Q76186: Up to 48 Buffers Load in HMA with MS-DOS 5.0

	Article: Q76186
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you load MS-DOS high, it is loaded into the high memory area (HMA), the
	first 64K block of extended memory at the A20 address line. If you have buffers
	set to 48 or fewer in the CONFIG.SYS file, most of the time the buffers are also
	loaded into the HMA.
	
	If all the buffers do not fit in the HMA because of other memory use (line code
	pages), all the buffers are loaded in conventional memory.
	
	MORE INFORMATION
	================
	
	To load MS-DOS and buffers into the HMA, you must have an 80286, 80386, or 80486
	microprocessor and extended memory. Your CONFIG.SYS file should include the
	following statements:
	
	  device=c:\dos\himem.sys
	  dos=high
	  buffers=48
	
	The buffers= statement in the above example is set to the maximum number of
	buffers that can usually be loaded into the HMA. Buffers= can be set to any
	value between 1 and 99.
	
	The amount of conventional memory being used for the disk buffers can be
	determined using the MEM /P[rogram] or MEM /D[ebug] commands. If the size value
	for buffers is 200 hexadecimal, the buffers are loaded into the HMA.
	
	Note: One buffer is always loaded into conventional memory; therefore, the number
	of buffers actually loaded into the HMA is one fewer than the number of buffers
	specified.
	
	For more information loading buffers in the HMA, query on the following words in
	the Microsoft Knowledge Base:
	
	  "BUFFERS" (without the quotation marks) and "HMA" (without the quotation
	  marks)
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: 5.00 akz
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
