---
layout: page
title: "Q49326: Determining Number of Partitions Per Hard Disk"
permalink: /kb/049/Q49326/
---

## Q49326: Determining Number of Partitions Per Hard Disk

	Article: Q49326
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article covers how MS-DOS decides how many partitions there are for each
	hard disk.
	
	MORE INFORMATION
	================
	
	MS-DOS looks through all of the hard drives supported by the ROM BIOS and the
	resident disk device driver to find all of the drives. It understands extended
	partitions and how to find logical drives in them and reserves a letter for each
	drive defined.
	
	In the main partition table, only two MS-DOS partitions are allowed: the primary
	partition and the extended partition. With MS-DOS Version 3.30, the values for
	the primary partition structure are 01 and 04. With MS-DOS Versions 4.00 and
	4.01, the numbers are 01, 04, and 06 (greater than 32 MB). The extended
	partition is marked with a 05 system byte.
	
	The first sector of an extended partition is the first sector of the first
	logical drive in that partition (usually Drive D). This sector contains the
	three jump bytes, followed by a BPB, followed by code. The code is similar to
	the boot code in the main boot sector, but since extended partition volumes
	cannot be booted, this code generally displays a message stating that an
	extended volume cannot be booted.
	
	Following the code at the same offset as the master partition table is the
	extended logical drive table. This table has the same structure as the master
	partition table, but can only have two nonzero entries. The first kind of entry
	(not necessarily the first entry, most likely it is the fourth) is either a 01,
	04, or 06 type drive, and defines the current drive.
	
	If you only had Drives C and D, the logical drive table would have an entry for
	Drive D, and then contain three entries of 0's (zeros).
	
	If more than one logical drive is defined within the extended partition, a second
	entry must be made in the logical drive table that points to the next entry.
	
	If you had a Drive C with an extended partition that included Drives D and E, the
	first sector in Drive D would have a logical drive table that included a 01, 04,
	or 06 drive type for D with its starting and ending head/cylinder/sector
	numbers, and it would have a 05 entry for Drive E and its starting and ending
	head/cylinder/sector numbers. Drive E would have an entry in its logical drive
	table for itself, and three entries filled with 0's (zeros).
	
	The first sectors in extended drives are analogous to boot sectors in the main
	partitions. The only difference is that they have drive tables and cannot be
	booted. They have BPBs and the ending 55AAH bytes that signify that the sector
	is valid.
	
	Additional query words: 3.30 4.00 4.01 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x,5.0
	
	=============================================================================
	
