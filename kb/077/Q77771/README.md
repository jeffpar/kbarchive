---
layout: page
title: "Q77771: Err Msg: &quot;Error Reading/Writing Drive x&quot; with WD-1006V-SR2"
permalink: kb/077/Q77771/
---

## Q77771: Err Msg: &quot;Error Reading/Writing Drive x&quot; with WD-1006V-SR2

	Article: Q77771
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a Western Digital Controller card model WD-1006v-SR2, you may
	receive the following error when reading or writing to a floppy disk drive:
	
	  Error Reading/Writing Drive A (or Drive B)
	
	CAUSE
	=====
	
	Western Digital controller cards (WD-1006V-SR2) dated earlier than 1990 may
	conflict with the MS-DOS EMM386.EXE memory manager.
	
	WORKAROUND
	==========
	
	To eliminate this error, exclude the appropriate address range within the upper
	memory area (UMA) used by the controller card. To exclude the upper memory
	range, place the exclusion range on the EMM386.EXE line of the CONFIG.SYS file
	as follows
	
	  DEVICE=<drive>:\<dir>\emm386.exe X=CC00-CDFF
	
	where <drive> and <dir> are the drive and directory in which the
	EMM386.EXE file is located.
	
	NOTES:
	
	- If a range other than CC00-CDFF is specified for the controller card, that
	  range should be excluded.
	
	- If you run MS-DOS MemMaker after you exclude the memory range, choose Custom
	  Setup, and then choose to "Keep current EMM386 memory exclusions and
	  inclusions."
	
	MORE INFORMATION
	================
	
	To test for an upper memory address conflict, remove the EMM386.EXE device line
	from the CONFIG.SYS file or exclude the full upper memory address range,
	A000-EFFF.
	
	The Western Digital products included here are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
