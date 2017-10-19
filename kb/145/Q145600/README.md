---
layout: page
title: "Q145600: Creating Mirror Fails with Insufficient Disk Space"
permalink: /kb/145/Q145600/
---

## Q145600: Creating Mirror Fails with Insufficient Disk Space

	Article: Q145600
	Product(s): Microsoft Windows NT
	Version(s): beta99
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use duplexed SCSI controllers and a software mirror of either the
	operating system partition or a data partition, an "Insufficient space on drive
	X" appears where X is the target drive or partition.
	
	CAUSE
	=====
	
	This problem may occur even when you use identical SCSI controllers and drives
	but whose BIOS is disabled on the second SCSI controller. When two identical
	SCSI controllers are used, the drive geometry is calculated differently for the
	controller with the BIOS enabled and the controller with the BIOS disabled.
	
	For a controller that has BIOS enabled, the operating system can query the
	controller BIOS for drive geometry. The BIOS returns a generic drive geometry
	translation. This translation will have a cylinder count of less than 1024 to
	work with MS-DOS. The number of heads is normally increased to arrive at a
	correct overall size.
	
	When the second SCSI controller does not have its BIOS enabled, it provides the
	operating system with the size of a block (sector size) and the total number of
	blocks on the device. Windows NT uses a default translation of 32 tracks per
	cylinder, 64 heads and adjusts the number of cylinders for a correct approximate
	size. Due to the different translations, cylinder boundaries are located in
	different places on the drives. This often results in free space being one or
	two megabytes (MB) different on the two identical drives or whatever 1 cylinders
	worth of data is. Windows NT uses a LARGE_INTEGER (64-bit) number for the number
	of cylinders and is not constrained by MS-DOS or partition table limitations.
	
	
	RESOLUTION
	==========
	
	To work around this problem, do one of the following:
	
	- Set the translation mode on the primary controller to 32 sectors per track
	  and 64 heads (if the SCSI controller supports this translation mode).
	
	  -or-
	
	- Disable the BIOS on the primary SCSI controller and enable it on the
	  secondary controller. When you create a mirror, the master boot record is not
	  part of the mirror. Therefore, set the active partition byte on the new boot
	  drive with MS-DOS FDISK.EXE or a disk sector editor. Another method is to
	  boot the computer from a Windows NT boot floppy disk. For more information on
	  how to create this boot floppy disk, refer to the Windows NT Resource Guide
	  or the Windows NT Concepts and Planning Guide.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : beta99
	
	=============================================================================
	
