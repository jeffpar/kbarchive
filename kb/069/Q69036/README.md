---
layout: page
title: "Q69036: dBASE IV's CACHEDB Disk Cache Incompatible with SMARTDRIVE"
permalink: kb/069/Q69036/
---

## Q69036: dBASE IV's CACHEDB Disk Cache Incompatible with SMARTDRIVE

	Article: Q69036
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): MS-DOS:5.x,6.0,6.2,6.21; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	3.00 3.00a 3.10 3.11 | 5.x 6.00 6.20 6.21
	WINDOWS              | MS-DOS
	kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Ashton-Tate (Borland) has noted that running the dBASE IV version 4.11
	CACHEDB.EXE disk cache with Windows SMARTDrive (SMARTDRIVE.SYS or SMARTDRV.EXE)
	causes dBASE and/or Windows to stop responding (hang).
	
	If you use the MS-DOS 5.0, 6.0, or 6.2 versions of SMARTDrive with CACHEDB.EXE,
	the following error message is displayed:
	
	  A serious disk error occurred while writing to drive <x>.
	
	where <x> is any hard disk drive letter.
	
	WORKAROUND
	==========
	
	To correct this problem, do not use both disk caches at the same time.
	
	To turn dBASE IV's CACHEDB.EXE disk cache utility off, type the following command
	in the dBASE directory:
	
	  CACHEDB OFF
	
	To turn the dBASE IV's disk cache ON, type one of the following commands in the
	dBASE directory:
	
	  CACHEDB EXT
	
	(To use extended memory)
	
	  CACHEDB LIM
	
	(To use expanded memory)
	
	Microsoft recommends disabling the dBASE cache because it only helps dBASE,
	whereas SMARTDrive helps all applications.
	
	MORE INFORMATION
	================
	
	For more information, contact Borland.
	
	The dBASE product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.00 3.00a 3.10 3.11 3rdparty 5.00 6.00 6.20 6.21
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbMSDOSSearch kbMSDOS621 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21; WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
