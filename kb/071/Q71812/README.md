---
layout: page
title: "Q71812: UNFORMAT Does Not Work on Disk Manager Partition"
permalink: kb/071/Q71812/
---

## Q71812: UNFORMAT Does Not Work on Disk Manager Partition

	Article: Q71812
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Because MS-DOS recognizes only up to 1024 cylinders on a physical hard drive,
	the MS-DOS 5.0 UNFORMAT command restores only partitions at or under the 1024
	cylinder limit. It does not restore a partition created using Ontrack Computer
	Systems' Disk Manager if that partition spans the 1024 cylinder boundary on a
	physical hard drive.
	
	MORE INFORMATION
	================
	
	If a partition created using third-party partitioning software spans the 1024
	cylinder boundary, it will not be restorable using the MS-DOS UNFORMAT command
	unless the device driver accompanying the software is first loaded. For example,
	it is possible to restore such a partition created using SpeedStor because its
	drivers, HARDRIVE.SYS or SSTOR.SYS, can be loaded whether or not a SpeedStor
	partition is present.
	
	However, Disk Manager's driver, DMDRVR.BIN, does not load unless there is a Disk
	Manager partition detected. Because DMDRVR.BIN does not load, UNFORMAT cannot
	look beyond the 1024 cylinder boundary; therefore, you cannot use UNFORMAT to
	restore the partition.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
