---
layout: page
title: "Q84851: Windows 3.1 Not Compatible with TenTimes Partitioning Method"
permalink: kb/084/Q84851/
---

## Q84851: Windows 3.1 Not Compatible with TenTimes Partitioning Method

	Article: Q84851
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may not be able to set up Microsoft Windows version 3.1 on a hard drive that
	was partitioned with Konan TenTimes HD controller software. When running Windows
	3.1 Setup, the installation may fail or lock up when switching from
	character-based Setup to graphics-mode Setup.
	
	MORE INFORMATION
	================
	
	The Konan TenTimes HD controller Setup program (TENSETUP.EXE) will normally
	low-level format, partition, and high-level format the drive. The drive then
	requires the device driver TENTIME.SYS be loaded from the CONFIG.SYS file to
	properly access any drive higher than drive C (for example, drive D, E, and so
	on).
	
	Windows 3.1 Setup program will not be able to complete normally if the hard drive
	was formatted using the TenTimes partitioning method.
	
	TenTimes has confirmed this to be a problem with its partitioning software. For
	additional information, please contact TenTimes at (602) 940-9800.
	
	There is an option in the TenTimes Setup program to perform a standard MS-DOS
	partition and format of the hard drive. According to TenTimes, if the drive is
	partitioned and formatted this way, Windows 3.1 should install and function
	correctly. Note: This has not been tested yet by TenTimes or Microsoft.
	
	Additional information will be posted here as it becomes available.
	
	The TenTimes product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 hang hangs disk
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
