---
layout: page
title: "Q75362: CMS Tape Software 2.46 Needed with MS-DOS 5.0 or Later"
permalink: /kb/075/Q75362/
---

## Q75362: CMS Tape Software 2.46 Needed with MS-DOS 5.0 or Later

	Article: Q75362
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Colorado Memory Systems (CMS) tape software must be version 2.46 (or later)
	to be compatible with MS-DOS version 5.0 or later. While earlier versions may
	appear to work, they may err intermittently and compromise data integrity.
	
	MORE INFORMATION
	================
	
	CMS produces tape drive subsystems that either use an adapter card or the floppy
	controller to control the tape drive (neither of which are seen as logical
	devices by DOS). The tape software (TAPE.EXE) versions prior to 2.46 are not
	compatible with MS-DOS 5.0 or later. While earlier versions may appear to run
	correctly, intermittent errors and/or data corruptions will occur.
	
	Owners of CMS drives should contact CMS to get the new version (2.46) of the tape
	software. As of 8/14/91, CMS is shipping the new version at no charge to owners
	of CMS tape drives. Owners of the CMS tape drives must provide the serial number
	of the tape drive to receive the new software.
	
	The products included here are manufactured CMS, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 3rdparty 6.20
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
