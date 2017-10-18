---
layout: page
title: "Q116256: Himem.sys Cannot Address More Than 64 MB of Memory"
permalink: kb/116/Q116256/
---

## Q116256: Himem.sys Cannot Address More Than 64 MB of Memory

	Article: Q116256
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11,95
	Operating System(s): 
	Keyword(s): kbhw kbtool win31 msdos win95 kbHardware
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Himem.sys does not report or use more than 64 megabytes (MB) of installed memory
	on computers with an Industry Standard Architecture (ISA) or Micro Channel
	Architecture (MCA) bus.
	
	CAUSE
	=====
	
	ISA Buses
	---------
	
	ISA buses lack a standard BIOS interrupt routine for reporting more than 64 MB of
	memory. Himem.sys depends on the INT 15 function 88 service to determine
	installed memory, and this function is limited to 65,535 kilobytes (64 MB).
	
	MCA Buses
	---------
	
	MCA-based computers add the INT 15 function C7 service to report installed
	memory. Although this function can report more than 64 MB of memory, Himem.sys
	has no code to support it. As a result, Himem.sys uses the standard INT 15
	function 88 call, which is limited to 64 MB of memory.
	
	MORE INFORMATION
	================
	
	This limitation does not apply to computers with an Extended Industry Standard
	Architecture (EISA) bus. On EISA-based computers, Himem.sys scans each slot for
	device information, which means that it can report up to 4 gigabytes (GB).
	
	NOTE: You may need to use the /EISA switch on the Himem.sys line in your
	Config.sys file.
	
	Note that although Himem.sys addresses only the first 64 MB of memory, the
	Windows 95 virtual memory manager (Vmm32.vxd) takes over memory management tasks
	from Himem.sys. Vmm32.vxd can address more than 64 MB of memory.
	
	Additional query words: 4.x 5.x 6.00 6.20 6.21 6.22 3.10 3.11 busses mem xms ram
	
	======================================================================
	Keywords          : kbhw kbtool win31 msdos win95 kbHardware 
	Technology        : kbWin3xSearch kbWin95search kbZNotKeyword3 kbWin310 kbWin311 kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11,95
	
	=============================================================================
	
