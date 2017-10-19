---
layout: page
title: "Q89723: Zenith 8086/8088 720K Floppy Drive with MS-DOS"
permalink: /kb/089/Q89723/
---

## Q89723: Zenith 8086/8088 720K Floppy Drive with MS-DOS

	Article: Q89723
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
	
	After you install MS-DOS any Zenith 8086- or 8088-based computer, the 3.5- inch
	disk drive formats as a 360K drive only.
	
	MORE INFORMATION
	================
	
	Neither the DRIVPARM command nor the DRIVER.SYS device driver work on Zenith
	8086- and 8088-based computers. If the following DRIVPARM or DRIVER.SYS
	statements are added to the CONFIG.SYS file:
	
	  device=[drive:]\[path]\DRIVER.SYS /d:[disk drive number] /f:7
	
	-or-
	
	  drivparm=/d:[disk drive number] /f:7
	
	the following error message is displayed:
	
	  Invalid parameter. This mode not supported, formatting 360K.
	
	If you place a 720K 3.5-inch disk in the drive and attempt to read from the
	drive, the following error is displayed:
	
	  Invalid media, non-DOS diskette.
	
	According to Zenith technical support, there is no way to force MS-DOS 5.0, 6.0,
	or 6.2 (either retail or OEM versions) to recognize the drive as a 720K disk
	drive.
	
	The products included here are manufactured by Zenith, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 6.22 msdos dos 5.00 5.00a high low density 6.00 3rdparty 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
