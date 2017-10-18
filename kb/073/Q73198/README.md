---
layout: page
title: "Q73198: Ontrack Disk Manager Support for MS-DOS Partitions"
permalink: kb/073/Q73198/
---

## Q73198: Ontrack Disk Manager Support for MS-DOS Partitions

	Article: Q73198
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Ontrack Disk Manager partitioning software supports a primary MS-DOS compatible
	boot partition. Disk Manager can create these partitions to be compatible with
	FDISK. The compatibility of this partition with various MS-DOS versions depends
	upon the version of Disk Manager used to create the partition.
	
	Do not delete Disk Manager partitions; doing so can reduce the usable size of the
	partition.
	
	MORE INFORMATION
	================
	
	Disk Manager versions 3.x are compatible with MS-DOS versions 3.x. Therefore,
	the same partitioning limitations apply--that is, Disk Manager versions 3.x
	support a maximum of 32 MB for an MS-DOS compatible partition.
	
	Disk Manager versions 4.x are compatible with MS-DOS versions 5.0 and earlier. If
	you use the /4 switch when invoking Disk Manager, it can create partitions up to
	the limitations of DOS 4.0x--that is, the BIOS limitation of 1024 cylinders by
	256 heads by 63 sectors per track maximum. This partitioning scheme is also
	compatible with MS-DOS 5.0.
	
	Disk Manager also creates non-DOS partitions for use in working around the 3.x 32
	MB logical drive limit. Disk Manager can also be used to to support a hard drive
	type that is not supported by the BIOS. This commonly occurs with the following
	configurations:
	
	- A hard drive with more than 1024 cylinders, 63 sectors per track, or 255
	  heads
	
	-or-
	
	- An XT system with a hard drive larger than 20 MB
	
	If Disk Manager is being used to support a drive not supported by the BIOS,
	deleting the partition will disable Disk Manager's support and reduce the usable
	hard drive space.
	
	The product included here, Disk Manager, is manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	For more information on installing MS-DOS on a Disk Manager partition, query on
	the following words here in the Microsoft Knowledge Base:
	
	  " ONTRACK and DISK and MANAGER and PARTITION and SETUP " (without the
	  quotation marks)
	
	Additional query words: 3.20 3.30 3.30a 4.00 5.00 DMDRVR.BIN device driver 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x
	
	=============================================================================
	
