---
layout: page
title: "Q75461: Sperry XDISK.SYS Is Incompatible with MS-DOS 5.0"
permalink: /kb/075/Q75461/
---

## Q75461: Sperry XDISK.SYS Is Incompatible with MS-DOS 5.0

	Article: Q75461
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to Unisys technical support, the Sperry XDISK.SYS driver does not work
	with MS-DOS 5.0.
	
	MORE INFORMATION
	================
	
	The XDISK.SYS disk driver, manufactured by Unisys, provides disk partitioning to
	manipulate the 32 MB partition limitation under versions of MS-DOS earlier than
	4.01. This utility is very similar to Disk Manager and SpeedStor disk
	partitioning software. If you are using this disk driver, the following line is
	in your CONFIG.SYS file:
	
	     device=[drive:][path]XDISK.SYS
	
	The Microsoft MS-DOS 5 Upgrade Setup detects this and stops the installation
	procedure.
	
	WORKAROUND
	==========
	
	1. Back up your hard drive.
	
	2. Install MS-DOS 5.0 to floppy disks (using SETUP /F).
	
	3. Use FDISK from the MS-DOS 5 Support disk created during the floppy
	  installation.
	
	4. Delete the NON-DOS partition information.
	
	5. Create new DOS partition.
	
	6. Format and restore your information to your hard drive.
	
	Additional query words: 5.00 3rdparty noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
