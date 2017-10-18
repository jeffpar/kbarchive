---
layout: page
title: "Q76185: Erratic Floppy Drive Behavior on Mitsubishi 286"
permalink: kb/076/Q76185/
---

## Q76185: Erratic Floppy Drive Behavior on Mitsubishi 286

	Article: Q76185
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
	
	On a Mitsubishi 286 machine, after upgrading to Microsoft MS-DOS version 5.0, a
	"Sector Not Found Error" message may be displayed when trying to write or
	execute a file on a floppy disk. Also, it may seem that MS-DOS is incorrectly
	perceiving the drive density. The CMOS settings may read 1.2 MB. However, if a
	disk utility is run, it may show the density as 360K.
	
	MORE INFORMATION
	================
	
	The above problem is due to the particular version of ROM BIOS on some
	Mitsubishi 286 motherboards. Version 1.52f does not directly support 1.2 MB disk
	drives; it initializes the disk base table to 9 sectors per track when it should
	be using 15 sectors per track for 1.2 MB disks.
	
	Using DRIVPARM will not alleviate this problem because BIOS version 1.52f will
	not support the calls DRIVPARM uses to change the drive type.
	
	A BIOS upgrade will solve the problem. To obtain an upgrade, call Mitsubishi
	technical support at (800) 344-6352.
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
