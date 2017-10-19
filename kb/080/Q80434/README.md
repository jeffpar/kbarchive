---
layout: page
title: "Q80434: DRIVPARM Must Be Used with Tandy 1000HX, 1000TX, 1400LT/HD"
permalink: /kb/080/Q80434/
---

## Q80434: DRIVPARM Must Be Used with Tandy 1000HX, 1000TX, 1400LT/HD

	Article: Q80434
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
	
	Tandy Corporation has confirmed that Tandy 1000HX, 1000TX, 1400HD, and 1400LT
	computers with 3.5-inch disk drives may not format disks properly after
	upgrading to MS-DOS 5.0 or later.
	
	For proper floppy drive use after installing MS-DOS 5.0 or later, the DRIVPARM
	statement must be used with the /I switch in the CONFIG.SYS file.
	
	MORE INFORMATION
	================
	
	After installing the MS-DOS 5 Upgrade on a Tandy 1000HX, 1000TX, or 1400LX
	computer, the computer attempts to format a 3.5-inch disk as a 360K disk.
	
	Using other size parameters results in the following error message:
	
	  Invalid Parameter, This Mode Not Supported, Formatting 360K
	
	According to Tandy Corp., this problem can be worked around by using the /I
	switch with a DRIVPARM statement in the CONFIG.SYS file. Using DRIVER.SYS or
	DRIVPARM alone will not eliminate the problem.
	
	The following statement should be placed in the CONFIG.SYS file:
	
	     drivparm=/d:[drive number] /f:[size of drive] /i
	
	The /I switch indicates an electronically compatible disk drive.
	
	The Tandy products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	REFERENCES
	==========
	
	"Microsoft MS-DOS User's Guide and Reference," version 5.0, pages 455-456
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 hd lx lt 1000 1400 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
