---
layout: page
title: "Q37241: Older Versions of FDISK Do Not Remove Non-DOS Partitions"
permalink: /kb/037/Q37241/
---

## Q37241: Older Versions of FDISK Do Not Remove Non-DOS Partitions

	Article: Q37241
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:2.x,3.x,4.x,5.0,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 2.11, 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In MS-DOS versions 5.0 and later, FDISK.EXE allows non-DOS partitions to be
	deleted. For more information on this subject, query on the following words:
	
	  MS-DOS and 5.0 and FDISK and non-DOS and partition
	
	The remaining information in this article applies to Microsoft MS-DOS versions
	2.x, 3.x, and 4.x, but not 5.0 or later.
	
	MORE INFORMATION
	================
	
	As a security measure, the MS-DOS FDISK.EXE utility will not remove or modify a
	partition made by another non-DOS operating system (such as XENIX). If your
	system contains another operating system in another partition (in addition to
	MS-DOS), this implies that this operating system understands about disk
	partitions. Instead of trying to get the MS-DOS FDISK.EXE utility to work with
	this other operating system, you should instead rely on the partitioning tools
	available with the non-DOS operating system.
	
	For safety purposes, the MS-DOS FDISK.EXE utility prevents you from modifying
	non-DOS partitions; however, it is still possible to accidentally or
	intentionally modify the partition (or data) of this other operating system by
	using the ROM BIOS interrupt 13H (Disk I/O), or MS-DOS interrupt 25H/26H
	(Absolute Disk Read/Write).
	
	If you are using MS-DOS version 4.01 or earlier and the non-DOS operating system
	does not have the ability to modify its own partition, a program that uses the
	ROM BIOS interrupt 13H could be used to modify the partition.
	
	Another method of removing a non-DOS partition is to perform a low-level format
	of the disk, thus removing partition information from the disk.
	
	Additional query words: appnote 6.22 2.x 3.00 3.10 3.20 3.21 3.22 3.30 3.30a 4.00 4.00a 4.01 4.01a 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS211
	Version           : MS-DOS:2.x,3.x,4.x,5.0,6.0,6.2,6.21,6.22
	
	=============================================================================
	
