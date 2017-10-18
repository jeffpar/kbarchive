---
layout: page
title: "Q34768: Differences between COMMAND /C and CALL"
permalink: kb/034/Q34768/
---

## Q34768: Differences between COMMAND /C and CALL

	Article: Q34768
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information details the differences between using COMMAND /C and
	CALL.
	
	MORE INFORMATION
	================
	
	COMMAND /C loads a new copy of COMMAND.COM into main system memory and passes it
	the command line. If a terminate-and-stay-resident (TSR) program is installed
	from this new copy of COMMAND.COM, it will be loaded above COMMAND.COM. When you
	exit from the command shell, the memory used by COMMAND.COM is freed, but the
	memory used for the TSR program is not. Hence, system memory becomes fragmented;
	there is memory allocated for TSR programs located in the middle of free
	memory.
	
	When you do a CALL command, MS-DOS does not load a new copy of COMMAND.COM; it
	just uses an internal stack to keep track of different batch files. Therefore,
	if a TSR program is loaded, it is loaded at the bottom of memory, just above the
	resident portion of COMMAND.COM; all free memory remains in a single, contiguous
	block, which makes it easier for MS-DOS to work.
	
	Additional query words: 6.22 3.30 3.30A 4.00 5.00 5.00a 6.00 6.20 6.21
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	
