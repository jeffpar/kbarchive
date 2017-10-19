---
layout: page
title: "Q72161: MS-DOS 5 README.TXT: Notes on Memory Management"
permalink: /kb/072/Q72161/
---

## Q72161: MS-DOS 5 README.TXT: Notes on Memory Management

	Article: Q72161
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Microsoft MS-DOS 5 README.TXT file.
	This is the packaged product of MS-DOS version 5.0 that is licensed to OEMs
	(original equipment manufacturers).
	
	NOTES ON MEMORY MANAGEMENT
	--------------------------
	
	4.1 Problems Loading into the Upper Memory Area
	-----------------------------------------------
	
	Some computers with hard disk controllers, specifically bus master DMA
	controllers, may not be able to load device drivers or programs into the upper
	memory area. Try adding a "DEVICE=SMARTDRV.SYS" (without the quotation marks)
	command before any DEVICEHIGH commands in your CONFIG.SYS file.
	
	4.2 Intel Expanded-Memory Driver (EMM.SYS)
	------------------------------------------
	
	Use the Intel expanded-memory driver NE or E switch when installing the driver
	for Above Board. See your Above Board documentation for more information.
	
	4.3 Phoenix BIOS and HIMEM.SYS
	------------------------------
	
	If your system includes a Phoenix BIOS and MS-DOS 5.0 doesn't work correctly, try
	adding a "/machine:1" (without the quotation marks) or "/machine:8" (without the
	quotation marks) switch to the DEVICE=HIMEM.SYS command in your CONFIG.SYS file.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
