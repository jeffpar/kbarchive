---
layout: page
title: "Q115204: Err Msg Creating Uninstall Disk: Bad Uninstall Disk..."
permalink: kb/115/Q115204/
---

## Q115204: Err Msg Creating Uninstall Disk: Bad Uninstall Disk...

	Article: Q115204
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use 360-kilobyte (K) 5.25-inch floppy disks as your Uninstall disks
	during installation of MS-DOS 6.22, you run out of disk space on the second
	disk. As a result, you receive the following error message:
	
	  Bad Uninstall disk, press ENTER to exit
	
	After you receive the above error, the only option available is to exit Setup.
	
	NOTE: This problem occurs only when you install MS-DOS 6.22 over MS-DOS 6.22.
	
	CAUSE
	=====
	
	Since Uninstall now backs up the DRVSPACE.BIN and DRVSPACE.INI file in addition
	to DBLSPACE.BIN and DBLSPACE.INI, more disk space is required on the Uninstall
	disks. This problem occurs when you have both DoubleSpace and DriveSpace
	volumes, large CONFIG.SYS and AUTOEXEC.BAT files, and you use 360K floppy disks
	for your Uninstall disks.
	
	WORKAROUND
	==========
	
	To work around this problem, reduce the size of your CONFIG.SYS and AUTOEXEC.BAT
	files, or convert all DoubleSpace drives to DriveSpace drives.
	
	Additional query words: low density
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : MS-DOS:6.22
	
	=============================================================================
	
