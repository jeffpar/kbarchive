---
layout: page
title: "Q110971: Using MemMaker with EMM386.EXE Frame=None Parameter"
permalink: kb/110/Q110971/
---

## Q110971: Using MemMaker with EMM386.EXE Frame=None Parameter

	Article: Q110971
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the FRAME=NONE parameter is present on the EMM386.EXE device line in the
	CONFIG.SYS file and you run MemMaker and answer "yes" to the question "Do you
	use any programs that need expanded memory (EMS)?", MemMaker removes the RAM
	parameter (if present) and adds the NOEMS parameter.
	
	CAUSE
	=====
	
	The FRAME=NONE parameter is designed to provide Lotus-Intel-Microsoft version
	4.0 Expanded Memory Specification (LIM 4.0 EMS) and to disable the 64-kilobyte
	(K) page frame necessary for LIM 3.2 EMS. MemMaker is not aware of LIM 4.0 EMS
	memory; therefore, if FRAME=NONE is specified, MemMaker assumes there is no page
	frame, as with the NOEMS switch.
	
	RESOLUTION
	==========
	
	Since MemMaker does not provide LIM 4.0 EMS, remove the FRAME=NONE parameter
	from the EMM386.EXE device line in the CONFIG.SYS file prior to running
	MemMaker. As MemMaker begins, answer "no" to the question "Do you use any
	programs that need expanded memory (EMS)?" After MemMaker has finished, edit the
	EMM386.EXE device line in CONFIG.SYS by replacing the NOEMS parameter with the
	RAM parameter and adding FRAME=NONE. After rebooting, LIM 4.0 EMS should be
	available.
	
	Additional query words: 6.22 6.20 EMS
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
