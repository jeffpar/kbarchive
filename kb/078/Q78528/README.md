---
layout: page
title: "Q78528: Shadow RAM Basics"
permalink: kb/078/Q78528/
---

## Q78528: Shadow RAM Basics

	Article: Q78528
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Shadow RAM is included on most recent computers. It improves system performance
	by copying code in ROM to faster RAM. Usually, a computer with shadow RAM has a
	built-in setup program that can be used to configure, or even disable, RAM
	shadowing. However, on some computers shadow RAM cannot be disabled.
	
	
	MORE INFORMATION
	================
	
	What Is Shadow RAM and Why Do Machines Use It?
	----------------------------------------------
	
	Every MS-DOS computer has hardware code that is built into ROM. Such code
	includes the instructions in the BIOS, as well as code for specific hardware
	adapters, such as video adapters. For example, EGA and VGA adapters usually
	include ROM that contains code for manipulating the display.
	
	In general, ROM operates much more slowly than RAM. Because hardware code is
	typically stored in ROM, performance can suffer each time hardware code is
	executed. Performance can be improved by copying code in the slow ROMs into RAM,
	and executing the code from RAM instead. The RAM that contains the copied code
	is called "shadow RAM." Although RAM shadowing can dramatically improve
	performance, it uses some additional RAM, which is then no longer available to
	applications.
	
	How Does Shadow RAM Work?
	-------------------------
	
	80386 machines, and 80286 machines using the NEAT or LEAP chip sets (from Chips
	& Technologies), can remap memory addresses. On such systems, the BIOS
	copies itself into extended memory and then remaps that piece of extended memory
	to occupy the address that was used by the original ROM. Some BIOSes will do
	this for video adapter ROMs as well. The net result is that the user's available
	extended memory drops by 64K-128K, and hardware code runs from RAM. The original
	ROM is no longer used during that session.
	
	Example
	-------
	
	In machine X, the BIOS resides in the segment from F000-FFFFh. On bootup, the
	BIOS copies itself into a piece of extended memory, and then remaps that memory
	to respond to addresses in the F000-FFFFh range. Therefore, any attempts by the
	system to call program code in those addresses will be answered by the "shadow"
	code in RAM, rather than by the original ROM.
	
	The 80386 (and 80286 with NEAT or LEAP chip sets) also have the capability to
	protect RAM from being overwritten. So, once the shadow RAM is created, that
	memory is usually protected so that it behaves like the original ROM. That is,
	any accidental attempts to overwrite the code in those areas will fail, and the
	memory will be unchanged.
	
	Why Disable Shadow RAM?
	-----------------------
	
	Many BIOSes allow RAM shadowing to be disabled. (The method for doing this varies
	from machine to machine; the customer should refer to his or her user's manual
	for their machine, or contact their OEM.) The usual reason for disabling shadow
	RAM is to reclaim extended memory for use by other programs. It should only be
	done as a last resort, because disabling shadow RAM usually slows down a machine
	noticeably. (Some lower-quality computers may slow down so much that they become
	nearly unusable.) Because of the cost in performance, in most cases, shadow RAM
	should be left enabled.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
