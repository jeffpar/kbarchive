---
layout: page
title: "Q83075: Running MEM /D Under Windows"
permalink: kb/083/Q83075/
---

## Q83075: Running MEM /D Under Windows

	Article: Q83075
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With the Microsoft Windows operating system version 3.1, the free memory
	reported by the MEM /D command is defined by the following items:
	
	1. The PIF file that was used for running the MS-DOS virtual machine.
	
	2. The free conventional memory available when Windows was started.
	
	3. The load location of the Windows applications programming interface (API)
	  translation buffers (in 386 enhanced mode only).
	
	MORE INFORMATION
	================
	
	The KB Required and KB Desired setting of the DOSPRMPT.PIF file is, by default,
	-1 for KB desired and -1 for KB required. This is a special setting that means
	the memory settings for the MS-DOS virtual machine must be set to a maximum.
	Settings must be as high as possible and cannot be smaller. If there is room for
	a 572K MS-DOS virtual machine on a system, then it will be 572K, and will not be
	less than 572K.
	
	Note: This maximum virtual machine size is not determined by available memory, it
	is determined by the amount of available address space. Available address space
	is determined by the amount of free conventional memory when Windows is
	started.
	
	In order to free a greater amount of available conventional memory before going
	into Windows, it may be necessary to limit the number of device drivers that
	load into conventional memory. This may be done by either not allowing those
	drivers to load, or if the drivers do load, loading them into the UMB (upper
	memory block) area.
	
	The API Translation buffers also affect the available memory in an MS-DOS virtual
	machine. The API Translation buffers allow protected mode and real mode to
	communicate. These buffers will load into the UMB area if space is available. If
	space is not available, then the API buffers will load into conventional memory
	and will use between 4K and 16K.
	
	Note: Due to memory rounding, the numbers reported by the MEM command may often
	differ slightly because the allocated settings are translated into KB Required
	and KB Desired PIF settings.
	
	Additional query words: 3.10 win386.exe Why the File Size Changes
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
