---
layout: page
title: "Q68176: Upgrading Pre-4.0 Systems with Logical Drive(s) &gt; 32 MB"
permalink: /kb/068/Q68176/
---

## Q68176: Upgrading Pre-4.0 Systems with Logical Drive(s) &gt; 32 MB

{% raw %}

	Article: Q68176
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some original equipment manufacturers (OEMs) modified their adaptations of
	MS-DOS to provide logical drives larger than 32 megabytes in versions of MS- DOS
	earlier than version 4.0. This was usually implemented by using a sector size
	larger than the standard value of 512 bytes. This is called "logical sectoring"
	because the sector size of the drive is a logical value; that is, it is
	dependent on the value in the BIOS parameter block of the drive for
	bytes_per_sector. Microsoft MS-DOS versions 4.0 and later do NOT support this
	logical sectoring on hard disk drives. A sector size of 512 bytes per sector is
	assumed on all hard disk drives.
	
	If you have used a version of MS-DOS that uses logical sectoring to create a
	logical drive larger than 32 MB and want to upgrade to MS-DOS 4.0 or later, you
	MUST either repartition the disk or use the Microsoft MS-DOS Upgrade SETUP.EXE
	to convert the hard disk drive.
	
	WARNING: After you upgrade the hard disk drive, booting the previous version of
	MS-DOS and writing information to the hard disk drive may result in data
	corruption. Returning to the previous version of MS-DOS requires either
	repartitioning or using the MS-DOS Upgrade Uninstall feature.
	
	NEC, Toshiba, Wyse, and Zenith are known to use logical sectoring, and other OEMs
	may have done this as well. Compaq MS-DOS 3.31 is known to have implemented
	large logical drives in the same way as Microsoft MS-DOS 4.0 and later (that is,
	without logical sectoring) and therefore is version 4.0 compatible.
	
	MORE INFORMATION
	================
	
	To test whether the new version of MS-DOS correctly accesses the disk, boot the
	new version and run CHKDSK (not CHKDSK /F). You should get the same output as
	the current MS-DOS.
	
	Repartitioning deletes all information stored on the disk. It may be necessary to
	delete the current partitions with the current version of MS- DOS Fdisk. The new
	partitions MUST be created with the new version of MS- DOS Fdisk.
	
	The Microsoft MS-DOS Upgrade SETUP.EXE converts all MS-DOS compatible partitions
	with logical sectors into standard 512-byte sectors. After you upgrade the hard
	disk drive, booting the previous version of MS-DOS and writing information to
	the hard disk drive may result in data corruption.
	
	The SETUP.EXE file that ships in Microsoft MS-DOS versions 5.0 and later (generic
	OEM or packaged product) does not convert partitions with logical sectoring into
	standard 512-byte sectors. Repartitioning can only be avoided by using the
	Microsoft MS-DOS Upgrade SETUP.EXE.
	
	To return to the previous version of MS-DOS after upgrading using Microsoft
	MS-DOS Upgrade SETUP.EXE, the best option is to use the Uninstall program.
	UNINSTAL.EXE replaces the previous MS-DOS version and converts the large
	partitions to their previous states. To use UNINSTAL.EXE to return to the
	previous MS-DOS version, boot from the Uninstall #1 disk created while upgrading
	to MS-DOS 5.0 or later.
	
	NOTE: If DELOLDOS has been run, Uninstall cannot return the drive to its
	pre-upgrade state. Returning to the previous version of MS-DOS requires
	repartitioning, which destroys all information stored on the drive.
	
	For more information on Uninstall, query on the following words here in the
	Microsoft Knowledge Base:
	
	  "ms-dos" (without the quotation marks) and "5" (without the quotation marks)
	  and "uninstall" (without the quotation marks)
	
	Additional query words: 6.22 4.00 4.01 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
