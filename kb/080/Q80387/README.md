---
layout: page
title: "Q80387: Deleting Partitions Can Reduce Usable Hard Disk Space"
permalink: /kb/080/Q80387/
---

## Q80387: Deleting Partitions Can Reduce Usable Hard Disk Space

{% raw %}

	Article: Q80387
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
	
	Removing a partition created by a third-party disk-partitioning utility can
	reduce the total usable space available on the hard disk drive. This problem is
	most commonly experienced with, but is not limited to, the following systems:
	
	- XT systems with hard disks that are larger than 20 megabytes (MB)
	
	- Systems with hard disks that have more than 1024 cylinders
	
	IMPORTANT: Microsoft cannot guarantee whether or not it is safe to remove a
	third-party disk partition. If in doubt, contact the manufacturer of your
	partitioning utility.
	
	MORE INFORMATION
	================
	
	Some hard disk drives are not fully supported by the system BIOS. This problem
	most commonly occurs when the disk uses more heads, cylinders, or sectors per
	track than is supported by the standard IBM ROM BIOS protocol. The IBM ROM BIOS
	protocol is limited to 1024 cylinders by 256 heads by 63 sectors per track.
	Using the standard of 512 bytes per sector, the drive size is limited to 8064 MB
	(where 1 MB = 1024 x 1024 = 1,048,576 bytes) or 7.875 gigabytes (GB) (where 1 GB
	= 1024 MB).
	
	This problem also occurs when the system doesn't support the exact combination of
	heads, cylinders, and sectors per track that the disk uses. As a result, special
	disk-partitioning utilities have been created that will fully use the hard disks
	on such systems. Examples of these utilities include the following:
	
	- Disk Manager by OnTrack Software (DMDRVR.BIN, XBIOS.OVL)
	
	- SpeedStor by Storage Dimensions (SSTOR.SYS, HARDRIVE.SYS)
	
	- VFeature Deluxe by Golden Bow Systems (FIXT_DRV.SYS)
	
	- InnerSpace by Priam Systems (EDVR.SYS)
	
	- Everex by Everex Systems (EVDISK.SYS)
	
	Once the partitioning utility has been used to recognize the entire drive,
	removing the non-MS-DOS partition may result in the hard disk size "shrinking"
	to what is actually supported by the system ROM BIOS. Returning to full use of
	the drive usually requires reinstalling the partitioning software. Contact your
	partitioning software manufacturer for more assistance.
	
	The full hard disk drive can be used without the third-party partitioning
	software if the system fully supports the hard disk drive. A hard disk drive is
	generally considered fully supported if it has 1024 or fewer cylinders and the
	system ROM BIOS was written to correctly recognize it. Even if the hard disk
	drive has more then 1024 cylinders, the third-party software may not be required
	if the drive has a translating controller card to translate the real drive
	parameters to parameters that the ROM BIOS can use.
	
	To determine whether the hard disk drive requires the third-party partitioning
	utility, refer to the utility's documentation or manufacturer, or possibly the
	hard disk drive's documentation or manufacturer.
	
	The partitioning utilities included here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	product's performance or reliability.
	
	Additional query words: 3.0 3.00 3.1 3.10 3.2 3.20 3.21 3.22 3.3 3.3a 3.30 3.30a 4.0 4.00 4.01 4.01a 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x,5.0
	
	=============================================================================
	

{% endraw %}
