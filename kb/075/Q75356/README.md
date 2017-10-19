---
layout: page
title: "Q75356: AT Gigafile Disk Driver Does Not Work with MS-DOS 5.0"
permalink: /kb/075/Q75356/
---

## Q75356: AT Gigafile Disk Driver Does Not Work with MS-DOS 5.0

	Article: Q75356
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are using an AT Gigafile disk driver manufactured by Core Technology on your
	MS-DOS 5.0 system, and your system stops responding (hangs).
	
	CAUSE
	=====
	
	According to Core Technology, the AT Gigafile disk driver does not work with
	MS-DOS version 5.0.
	
	The AT Gigafile disk driver provides disk partitioning to manipulate the 32 MB
	partition limitation under versions of MS-DOS earlier than version 4.01. This
	utility is very similar to the Disk Manager and Speed Store disk-partitioning
	software.
	
	If the Gigafile disk driver is used, the following line is found in CONFIG.SYS:
	
	  device=[drive:][path]GIGAAT.SYS
	
	The system stops (hangs) if this line is present when MS-DOS 5.0 is used.
	
	WORKAROUND
	==========
	
	1. Back up your hard drive.
	
	2. Install MS-DOS 5.0 to floppy disks (that is, use "setup/f").
	
	3. Use FDISK from the MS-DOS 5.0 Support disk (created during setup to floppy).
	
	4. Delete old non-DOS partition information.
	
	5. Create a new MS-DOS partition.
	
	6. Format and Restore your hard drive.
	
	Additional query words: 5.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x
	
	=============================================================================
	
