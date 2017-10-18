---
layout: page
title: "Q82596: Stacker 1.0's SCHECK Is Not Compatible with SMARTDrive"
permalink: kb/082/Q82596/
---

## Q82596: Stacker 1.0's SCHECK Is Not Compatible with SMARTDrive

	Article: Q82596
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SCHECK.COM from STAC Electronics's Stacker version 1.0 is not compatible with
	SMARTDRV.EXE version 4.0 that comes with Microsoft Windows operating system
	version 3.1.
	
	If SCHECK is used with SMARTDRV.EXE loaded, the following error message appears:
	
	  Error Summary
	
	  Unable to determine drive containing STACVOL.000 (This may be due to a disk
	  caching utility which is installed in CONFIG.SYS after STACKER.COM.
	
	There are three solutions for this error:
	
	- Upgrade to Stacker version 2.0 which SMARTDRV.EXE is "aware" of.
	
	- Run SCHECK before loading SMARTDRV.EXE.
	
	- Disable SMARTDRV.EXE.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3.11 smart drive
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
