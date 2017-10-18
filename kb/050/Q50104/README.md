---
layout: page
title: "Q50104: Comparison between DRIVPARM and DRIVER.SYS"
permalink: kb/050/Q50104/
---

## Q50104: Comparison between DRIVPARM and DRIVER.SYS

	Article: Q50104
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The files DRIVPARM and DRIVER.SYS offer you two different methods of supporting
	disk drives that either are not present or are not supported by the computer's
	own ROM BIOS.
	
	MORE INFORMATION
	================
	
	The following chart shows the differences and the similarities between the two
	methods:
	
	   -------------------------------------------------------
	  |          DRIVPARM                DRIVER.SYS           |
	   -------------------------------------------------------
	  |                          |                            |
	 *|  Modifies the parameters |  Adds a new logical drive  |*
	  |  of an existing floppy   |  that points to an         |
	  |  disk drive.             |  existing physical drive,  |
	  |                          |  optionally modifying the  |
	  |                          |  parameters of the new     |
	  |                          |  logical drive.            |
	   -------------------------------------------------------
	  |                          |                            |
	  |  A new /i switch in      |  Allows the addition of    |
	  |  version 4.00 of MS-DOS  |  a new physical drive      |
	  |  offers better support   |  that is not normally      |
	  |  for 3.5 inch disk       |  supported by the ROM      |
	  |  drives.                 |  BIOS. This allows         |
	  |                          |  external disk drives and  |
	  |                          |  drive-controlling         |
	  |                          |  software to be installed. |
	   -------------------------------------------------------
	
	  * This feature is useful in situations where the ROM BIOS of the machine does
	  not support the hardware being installed/modified.
	
	
	Additional query words: 6.22 3.30a 4.00 4.01 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
