---
layout: page
title: "Q76098: MS-DOS Err Msg: SMARTDrive: Not Enough Memory to Load Driver"
permalink: /kb/076/Q76098/
---

## Q76098: MS-DOS Err Msg: SMARTDrive: Not Enough Memory to Load Driver

	Article: Q76098
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under some memory configurations, loading SMARTDrive with a DEVICEHIGH statement
	in the CONFIG.SYS file may result in the following error message upon startup:
	
	  Microsoft SMARTDrive Disk Cache version 3.13
	  SMARTDrive: Not enough memory to load driver
	
	MORE INFORMATION
	================
	
	Generally, device drivers and terminate-and-stay-resident (TSR) programs will
	load in conventional memory if they are loaded with DEVICEHIGH or LOADHIGH
	statements and there is not enough upper memory space available to initialize.
	However, if SMARTDrive is loaded with a DEVICEHIGH statement and there is
	approximately 10K of upper memory available but not enough memory for SMARTDrive
	to initialize, SMARTDrive will return the above error message during startup.
	
	WORKAROUND
	==========
	
	If SMARTDrive will not load with the DEVICEHIGH statement when EMM386 is being
	used to access the upper memory blocks, do one of the following:
	
	- Use an include switch with EMM386 to include an upper memory block large
	  enough to load SMARTDrive (approximately 22K or larger.) If the computer is
	  NOT a Micro Channel Architecture machine (for example, PS/2) you can include
	  the range E000-EFFF. If the monitor is not monochrome and you do not intend
	  to run in monochrome mode, you can include the range B000-B7FF. Make sure a
	  bootable disk is available before making any changes to the CONFIG.SYS file.
	
	-or-
	
	- Load SMARTDrive in the CONFIG.SYS file before any other drivers with a
	  DEVICEHIGH statement.
	
	-or-
	
	- Load SMARTDrive with DEVICE instead of DEVICEHIGH to load the driver into
	  conventional memory.
	
	-or-
	
	- Add the SIZE parameter to the DEVICEHIGH statement to define the minimum
	  amount of memory that must be available before DEVICEHIGH will attempt to
	  load SMARTDrive into the upper memory area (UMA). For example:
	
	  devicehigh size=5C00 [drive]:\[dir]\smartdrv.sys xxxx xxxx
	
	  (Where size=5C00 specifies 23K of memory required to load the driver, [drive]
	  is the drive containing SMARTDrive, [dir] is the directory containing
	  SMARTDrive, and xxxx are the size parameters for SMARTDrive.)
	
	
	Additional query words: 5.00 smartdrv
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
