---
layout: page
title: "Q78434: Comparison of BUFFERS=, STACKS=, and SMARTDRV.SYS"
permalink: kb/078/Q78434/
---

## Q78434: Comparison of BUFFERS=, STACKS=, and SMARTDRV.SYS

	Article: Q78434
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article summarizes the similarities and differences between BUFFERS=,
	STACKS=, and SMARTDRV.SYS.
	
	MORE INFORMATION
	================
	
	STACKS vs. BUFFERS and SMARTDRV
	-------------------------------
	
	STACKS= has nothing in common with BUFFERS and SMARTDRV other than it is a
	CONFIG.SYS command and it reserves memory like BUFFERS.
	
	STACKS= is used so that MS-DOS does not use the application stack space for
	handling hardware interrupts. Instead, MS-DOS reserves memory at boot time for
	stack space for hardware interrupt processing (unless you specify STACKS=0,0).
	
	Similarities Between BUFFERS and SMARTDRV
	-----------------------------------------
	
	Both are used for DISK caching purposes.
	
	Differences Between BUFFERS and SMARTDRV
	----------------------------------------
	
	- BUFFERS is built into DOS and is not a device driver. SMARTDRV.SYS is an
	  external device driver.
	
	- BUFFERS caches only partial sector reads/writes and does not cache an
	  integral number of sector transfers. SMARTDRV caches all types of transfers.
	
	- BUFFERS reserves memory either in low memory or in the HMA. SMARTDRV can use
	  extended memory or expanded memory. This also means that an XMS or EMS driver
	  has to be loaded before SMARTDRV.
	
	- BUFFERS is efficient only for caching a small number of sectors (for example,
	  30 to 50). SMARTDRV is efficient even caching huge number of sectors (for
	  example, 2048 to 8192).
	
	- BUFFERS' caching strategy is built into MS-DOS. SMARTDRV looks at INT 13h
	  activity to cache disk data.
	
	- BUFFERS works on all hard disks and floppy disks. SMARTDRV works only on hard
	  disks, and does not work with some third party disk managers.
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
