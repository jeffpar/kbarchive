---
layout: page
title: "Q73608: Disk Manager 3.x Requires MS-DOS 3.x Bootable Disk"
permalink: /kb/073/Q73608/
---

## Q73608: Disk Manager 3.x Requires MS-DOS 3.x Bootable Disk

	Article: Q73608
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.2,3.21,3.3,3.3a,4.0,4.01,4.01a,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 4.01a, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Ontrack Disk Manager requires a bootable floppy disk to copy system files from.
	Disk Manager version 3.x will properly copy only MS-DOS version 3.x system
	files.
	
	MORE INFORMATION
	================
	
	Disk Manager versions 3.x will attempt to copy system files to the boot
	partition of a hard drive after a low-level format of that partition. This
	process is unsuccessful if an MS-DOS version 4.0x or 5.0 bootable disk is
	provided to Disk Manager. Upon completion, Disk Manager will reboot the system
	and attempt to start from the hard drive, which yields the following error:
	
	  Non-System disk or disk error
	  Replace and press any key when ready
	
	To avoid this problem, provide Disk Manager with an MS-DOS 3.x bootable floppy
	disk.
	
	To work around this problem, you must have a bootable floppy disk with SYS.COM.
	To make the partition bootable, do the following:
	
	1. Obtain a bootable floppy disk.
	
	2. Copy SYS.COM to the bootable floppy disk.
	
	3. Boot from the bootable floppy disk.
	
	4. At the A> prompt, type "SYS <drive letter>:" (without the quotation
	  marks) where <drive letter> is the partition marked as bootable.
	
	Updated versions of Disk Manager (4.x) are compatible with later versions of
	MS-DOS. They will properly transfer MS-DOS 4.0x and 5.0 system files if the Disk
	Manager is invoked with the /4 command line parameter.
	
	The current version of Disk Manager, version 4.21, will work with MS-DOS 5.0.
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: third-party partitioning software 3rdparty device driver 3.20 3.21 3.30 3.30a 4.00 4.01 4.01a 5.00 noupd DMDRVR.BIN
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.2,3.21,3.3,3.3a,4.0,4.01,4.01a,5.0
	
	=============================================================================
	
