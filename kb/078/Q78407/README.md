---
layout: page
title: "Q78407: Wyse DOS 3.3 Partitions Incompatible with MS-DOS 5.x and 6.x"
permalink: kb/078/Q78407/
---

## Q78407: Wyse DOS 3.3 Partitions Incompatible with MS-DOS 5.x and 6.x

	Article: Q78407
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When upgrading to MS-DOS 5.0 or later from Wyse DOS version 3.3 or earlier, the
	following message may be displayed:
	
	  Incompatible Drive or Device Driver
	
	CAUSE
	=====
	
	If this error occurs, the partitions created by Wyse DOS must be deleted from
	the hard disk and the MS-DOS 5 or later Upgrade must be installed manually.
	
	MORE INFORMATION
	================
	
	Partitions created by Wyse DOS 3.3 or earlier are not compatible with MS-DOS 5.0
	because of the logical sectoring. Some original equipment manufacturers (OEMs)
	modified their adaptations of MS-DOS to provide logical drives larger than 32 MB
	in versions of MS-DOS earlier than version 4.0. This was usually implemented by
	using a sector size larger than the standard value of 512 bytes. This is called
	"logical sectoring" because the sector size of the drive is a logical value;
	that is, it is dependent on the value in the BIOS parameter block of the drive
	for bytes per sector. Microsoft MS-DOS versions 4.0 and later do NOT support
	this logical sectoring on hard drives. A sector size of 512 bytes per sector is
	assumed on all hard drives.
	
	For more information on repartitioning the hard disk, see Chapter 4 of the
	version 5.0 "Microsoft MS-DOS Getting Started" guide, or query on the following
	words:
	
	  partition and format
	
	For more information on manual installation, query on the following words:
	
	  manual and install
	
	According to Wyse, Wyse DOS 5.0 is not different from MS-DOS 5.0; it also will
	not recognize partitions created by Wyse DOS 3.3.
	
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.22 3.30 5.00 5.00a 6.00 6.20 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
