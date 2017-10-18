---
layout: page
title: "Q81377: SMARTDrive /double_buffer Cannot Load into UMBs"
permalink: kb/081/Q81377/
---

## Q81377: SMARTDrive /double_buffer Cannot Load into UMBs

	Article: Q81377
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to load SMARTDrive version 4.0 (SMARTDRV.EXE) as a double-buffer
	driver into the upper memory area (UMA) generates the following error message:
	
	  Double buffering driver cannot be loaded into a UMB. Do not use the
	  devicehigh command or other load-high utilities to load Smartdrv.exe.
	
	CAUSE
	=====
	
	When loaded in the CONFIG.SYS file as a device driver to provide double
	buffering, SMARTDRV.EXE must be loaded in conventional or low memory. Even if a
	memory manager is present that allows programs to be loaded into the UMA,
	SMARTDRV.EXE must be loaded low if it is being used as a double-buffering device
	driver.
	
	NOTE: There is no workaround for this problem.
	
	MORE INFORMATION
	================
	
	The double buffering that SMARTDRV.EXE provides is required for certain Bus
	Master disk controllers when running in the Virtual 8086 mode of the 80386 and
	80486 processors.
	
	Improved compatibility between Virtual 8086 mode and these older controllers
	depends on the fact that the buffer (approximately 2K) that SMARTDrive uses for
	the purposes of double buffering loads into an address that is identical to its
	location in physical memory.
	
	386 memory managers, such as EMM386.EXE, allow you to load device drivers and
	terminate-and-stay-resident (TSR) programs into upper memory blocks (UMBs) by
	using the ability of 80386 and 80486 processors to remap addresses between 640K
	and 1024K into physical extended memory. Because this reassigning of addresses
	would prevent SMARTDRV.EXE's double buffer from residing at an address
	compatible with its location in physical memory, SMARTDRV.EXE must remain in
	conventional memory.
	
	NOTE: This information does not apply if you are using SMARTDRV.EXE version 4.0
	as a disk cache in the AUTOEXEC.BAT file. The ability to provide double
	buffering is independent of SMARTDRV.EXE's role as a disk cache. You can load
	SMARTDRV.EXE with the /double_buffer option low in the CONFIG.SYS file, and load
	SMARTDRV.EXE, the disk cache, high in the AUTOEXEC.BAT file.
	
	For more information on double buffering and SMARTDRV.EXE, query on the following
	words in the Microsoft Knowledge Base:
	
	  smartdrv.exe and double and buffer and bus and mastering
	
	KBCategory: kbother kbinterop
	KBSubcategory: win31
	
	Additional query words: 3.10 SCSI winmem 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
