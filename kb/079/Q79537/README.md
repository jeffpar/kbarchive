---
layout: page
title: "Q79537: VFeature Deluxe Partition Is Not Compatible with MS-DOS 5.0"
permalink: /kb/079/Q79537/
---

## Q79537: VFeature Deluxe Partition Is Not Compatible with MS-DOS 5.0

	Article: Q79537
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
	
	Golden Bow Systems, Inc. has confirmed that VFeature Deluxe partitioning
	software is not compatible with the Microsoft MS-DOS 5 or later Upgrade.
	
	MORE INFORMATION
	================
	
	VFeature Deluxe uses the following device driver in the CONFIG.SYS file:
	
	  device=c:\fixt_drv.sys
	
	VFeature Deluxe does not operate properly with MS-DOS 5.0 or later.
	
	
	To work around this incompatibility, do the following:
	
	1. Back up all necessary data on the hard drive.
	
	2. Repartition the hard drive with the MS-DOS 5.0 or later Fdisk command.
	
	3. Format the hard disk. For example, at the command prompt, type the following
	  command:
	
	  " format c: /s " (without the quotation marks)
	
	For more information on partitioning, query on the following words here in the
	Microsoft Knowledge Base:
	
	  " combine and fdisk " (without the quotation marks)
	
	The Golden Bow Systems product included here is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
