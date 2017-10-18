---
layout: page
title: "Q101561: Defrag Err: Memory Test Failed at Segment &lt;Address&gt;"
permalink: kb/101/Q101561/
---

## Q101561: Defrag Err: Memory Test Failed at Segment &lt;Address&gt;

	Article: Q101561
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Defragmenter (Defrag), you may receive the following
	error message:
	
	  Memory test failed at segment <address>
	
	where the valid address range is 0000H-A000H.
	
	CAUSE
	=====
	
	This error message may occur if you have defective memory.
	
	RESOLUTION
	==========
	
	To correct this situation, have your memory tested and replaced.
	
	MORE INFORMATION
	================
	
	Defrag performs a conventional memory test prior to defragmenting a drive by
	allocating all available conventional memory. The memory test consists of
	writing all (1) bits to memory and then all (0) bits. It verifies the write
	succeeded by reading back the value and doing a comparison. If the comparison
	fails, Defrag reports the failed segment number.
	
	Additional query words: 6.22 6.00 defrag 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
