---
layout: page
title: "Q78524: SMARTDRV.SYS Incompatible with Some Disk Managing Programs"
permalink: /kb/078/Q78524/
---

## Q78524: SMARTDRV.SYS Incompatible with Some Disk Managing Programs

	Article: Q78524
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SMARTDRV.SYS does not work with third-party disk managers that alter the disk
	geometry.
	
	MORE INFORMATION
	================
	
	SMARTDRV.SYS disk caching works at the INT 13h level. To work at that level,
	SMARTDRV.SYS needs to know the disk's geometry (the number of heads, sectors per
	track, number of cylinders, and so on). SMARTDRV.SYS determines these parameters
	at boot time when SMARTDRV.SYS is loaded from the CONFIG.SYS file.
	
	Some third-party disk managers alter the disk geometry to better use the hard
	disk. The altered geometry conflicts with SMARTDRV.SYS, which expects the
	original disk geometry. In addition, third-party disk managers usually assign a
	normal disk geometry to one portion of the hard disk and a different geometry to
	another portion.
	
	SMARTDRV.SYS attempts to detect third-party disk managers. If one is detected,
	SMARTDRV.SYS does not run. SMARTDRV.SYS looks at the partition table in the
	master boot record (MBR) and looks for a known set of partition identifiers to
	scan for the incompatible third party disk managers.
	
	SMARTDRV.SYS works with third-party disk managers that do not alter the geometry
	of the disk.
	
	
	Additional query words: 3rdparty 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
