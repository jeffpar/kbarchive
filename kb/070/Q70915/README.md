---
layout: page
title: "Q70915: UMB Support, Floppy-Based Programs, and Compaqs"
permalink: /kb/070/Q70915/
---

## Q70915: UMB Support, Floppy-Based Programs, and Compaqs

	Article: Q70915
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
	
	On some Compaq computers, using the DEVICEHIGH or LOADHIGH command to load a
	program or device driver located on a floppy disk into an upper memory block
	(UMB) in the E000-EFFF region may cause the machine to stop responding (hang).
	
	CAUSE
	=====
	
	This problem is caused by a faulty ROM BIOS belonging to the 386GROM family,
	revision number H.5 through J.4. To identify a machine with one of these ROMs,
	look at memory location F000:FFE4 for G5H through G4J.
	
	WORKAROUND
	==========
	
	The workaround for this is to exclude the E000-EFFF region of upper memory using
	the X=E000-EFFF parameter on the device=EMM386.EXE line in your CONFIG.SYS file.
	
	MORE INFORMATION
	================
	
	With these faulty ROMs, it is impossible to use direct memory addressing (DMA)
	to access the 64K region starting at E000. When attempting to load a program or
	device driver from a floppy drive into this region using DMA, the ROM BIOS disk
	access handler (interrupt 13) for the floppy controller changes the disk read
	operation into a verify option. The ROM BIOS does not return an error to MS-DOS
	in this case.
	
	The products included here are manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
