---
layout: page
title: "Q77768: Leading Edge Memory Test Diagnostic May Cause System Hangs"
permalink: kb/077/Q77768/
---

## Q77768: Leading Edge Memory Test Diagnostic May Cause System Hangs

	Article: Q77768
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Leading Edge has confirmed that the memory test option contained on their
	Diagnostics Utility disk may cause the system to hang or lock up after upgrading
	to MS-DOS version 5.0. Only a cold boot will restart the machine.
	
	WORKAROUND
	==========
	
	To successfully run the Leading Edge memory test, HIMEM.SYS, EMM386.EXE, and any
	other memory managers must be disabled and MS-DOS must not be loaded into the
	high memory area (HMA).
	
	MORE INFORMATION
	================
	
	The Leading Edge Diagnostics Utility disk is included with each Leading Edge
	computer system. This disk offers several system, hardware, and memory tests.
	The memory test is executed by pressing the hot key (F2) from the main menu of
	the diagnostics utility. To use the diagnostics utility, follow the directions
	provided in the system documentation.
	
	The memory test may hang the computer if a memory manager (such as EMM386.EXE or
	HIMEM.SYS) is active or if MS-DOS is resident in the HMA. To allow the
	diagnostic utility to run, remove all references to memory management software
	(HIMEM.SYS, EMM386.EXE, and so on) and reboot the computer. Once the diagnostics
	have been completed, return the CONFIG.SYS and AUTOEXEC.BAT files to their
	original state.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	
	Additional query words: 5.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x
	
	=============================================================================
	
