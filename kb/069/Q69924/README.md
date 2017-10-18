---
layout: page
title: "Q69924: MS-DOS 3.3x Extended Partitions Keep Windows from Formatting"
permalink: kb/069/Q69924/
---

## Q69924: MS-DOS 3.3x Extended Partitions Keep Windows from Formatting

	Article: Q69924
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to format or copy a floppy disk from Microsoft Windows File Manager,
	you receive one of the following error messages:
	
	  Unable to Format
	
	  -or-
	
	  Unable to Copy
	
	  -or-
	
	  MS-DOS startup disk has an invalid sector size.
	
	CAUSE
	=====
	
	Your hard drive may have been formatted with a nonstandard sector size.
	
	This often occurs when a hard drive partitioned larger than 32 MB exists under
	MS-DOS 3.3x. This can also happen when a third-party disk partitioning program
	is used.
	
	The standard size for a hard drive sector under MS-DOS is 512K. If the sector
	size is larger (for example, 1024K), then Windows cannot format a floppy disk
	from File Manager. This may also affect copying because the destination disk
	must be formatted.
	
	Under MS-DOS 3.3x, disk partitioning programs like Disk Manager and Speedstor may
	use larger sectors to allow for larger partitions. This is also prevalent in
	some original equipment manufacturer (OEM) versions of DOS. OEMs known to have
	done this are NEC, Zenith, and Wyse. These versions of DOS have an altered FDISK
	that allows this feature. If there is a partition over 32 MB on an MS-DOS 3.3x
	system, this is the likely cause of not being able to format or copy disks from
	File Manager.
	
	NOTE: COMPAQ DOS 3.31 does not have this problem. COMPAQ DOS 3.31 allows larger
	partitions by allowing for more sectors instead of making larger sectors. This
	is the same method used in MS-DOS 4.x and later.
	
	WORKAROUND
	==========
	
	To work around the problem, try one of the following:
	
	- Repartition the drive using FDISK and keeping the partitions to a size less
	  than 33MB.
	
	- Format and copy disks from the MS-DOS command prompt.
	
	- Upgrade from your OEM's version of MS-DOS to 4.01 or later.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.10 win30 win31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
