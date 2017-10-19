---
layout: page
title: "Q40435: SMARTDrive Does Not Support Conventional Memory"
permalink: /kb/040/Q40435/
---

## Q40435: SMARTDrive Does Not Support Conventional Memory

	Article: Q40435
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SMARTDrive, the MS-DOS disk caching driver, supports the use of extended memory
	and expanded memory, but not conventional memory. SMARTDRV.SYS was designed as a
	disk caching program for environments with memory that MS-DOS does not use
	heavily: extended and expanded memory. The maximum 640K of conventional memory
	is so valuable that most people don't waste it with disk caching.
	
	Most people would rather use this precious conventional memory for running
	programs, and not for SMARTDrive to speed up their systems. However, if you do
	want to use SMARTDrive to speed up your system, there are two upgrade paths
	available, which are as follows:
	
	- Obtain an expanded memory board (or software to emulate an expanded memory
	  board, such as the MS-DOS version 4.0 driver EMM386.SYS).
	
	-or-
	
	- Obtain an extended memory board.
	
	SMARTDrive can be used in the extended or expanded memory areas. MS-DOS original
	equipment manufacturers (OEMs) may choose to modify SMARTDrive to support
	conventional memory if they decide that the memory choices SMARTDrive was
	designed with are not adequate.
	
	Additional query words: 6.22 4.00 4.01 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
