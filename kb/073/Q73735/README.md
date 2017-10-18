---
layout: page
title: "Q73735: LDRIVE.SYS Incompatible with MS-DOS 5.0 or Later"
permalink: kb/073/Q73735/
---

## Q73735: LDRIVE.SYS Incompatible with MS-DOS 5.0 or Later

	Article: Q73735
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
	
	The device driver LDRIVE.SYS provided with some Future Domain hard drive
	controllers is incompatible with MS-DOS versions 5.0 and later. To install
	MS-DOS 5.0 and later onto the hard drive, it is necessary to back up the hard
	drive, repartition and reformat the drive under MS-DOS 5.0 or later, and restore
	backups. The device=LDRIVE.SYS line should be removed from CONFIG.SYS.
	
	LDRIVE.SYS is intended to provide greater than 32 MB logical drives under MS-DOS
	3.3 and earlier. It provides this service by using a technique called logical
	sectoring in which sector sizes greater than 512 bytes are used. Without a
	driver such as LDRIVE.SYS, MS-DOS is not capable of reading these disks. This
	necessitates reformatting the disk using MS-DOS FORMAT to make the disk usable
	without special drivers.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
