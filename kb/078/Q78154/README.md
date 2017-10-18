---
layout: page
title: "Q78154: AST Research ASTDSK.DRV with MS-DOS Upgrade"
permalink: kb/078/Q78154/
---

## Q78154: AST Research ASTDSK.DRV with MS-DOS Upgrade

	Article: Q78154
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	AST Research has confirmed that the ASTDSK.DRV third floppy disk drive driver
	may not operate properly with 3.5-inch 1.44 MB disk drives. The 1.44 MB floppy
	drive only reads to or writes from 720K disks.
	
	Attempting to access a 1.44 MB floppy disk with the MS-DOS 5 Upgrade results in
	the following error message:
	
	  SECTOR NOT FOUND READING DRIVE x: Abort? Retry? Fail?
	
	(where x is the logical drive in question.)
	
	Upgrading to AST's OEM (original equipment manufacturer) version of MS-DOS allows
	you to use 1.44 MB disks.
	
	
	MORE INFORMATION
	================
	
	ASTDSK.DRV is the driver provided with AST Premium 80386 computers to support a
	third floppy disk drive.
	
	After installing the MS-DOS Upgrade, using the MS-DOS device driver DRIVER.SYS or
	adding the DRIVPARM command to the CONFIG.SYS file will not correct this
	problem.
	
	AST Research is aware of this problem and reports that AST DOS version 5.0
	corrects this problem.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 5.00 5.00a 6.00 6.20 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.22
	
	=============================================================================
	
