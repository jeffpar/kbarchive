---
layout: page
title: "Q78445: Using MS-DOS with Pacific Rim External Drives"
permalink: kb/078/Q78445/
---

## Q78445: Using MS-DOS with Pacific Rim External Drives

	Article: Q78445
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Pacific Rim Systems has confirmed that MS-DOS 5.0 and later may incorrectly
	attempt to format a 3.5-inch disk as a 5.25-inch disk on their external floppy
	disk drives for the IBM PS/2 series of computers.
	
	A possible solution to this problem is to use the MS-DOS DRIVPARM command and the
	DRIVER.SYS utility.
	
	MORE INFORMATION
	================
	
	To set the disk drive characteristics with the DRIVPARM command, add the
	following line to the CONFIG.SYS file:
	
	  drivparm= /d:x /f:y
	
	(where x is the physical drive number and y is the drive type).
	
	See page 455 of the version 5.0 "Microsoft MS-DOS User's Guide and Reference" for
	correct drive type information for your floppy disk drive. Information for
	version 6.0 and later is in online Help.
	
	If the DRIVPARM command does not solve the problem, install DRIVER.SYS in the
	CONFIG.SYS file, as follows:
	
	  device=<path>\driver.sys /d:1 /n /f:1
	
	where <path> is the location of the DRIVER.SYS file.
	
	See page 602 of the version 5.0 "Microsoft MS-DOS User's Guide and Reference" for
	more information about DRIVER.SYS. Information for version 6.0 and later is in
	online Help.
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranties, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 6.22 5.00 6.00 6.20 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
