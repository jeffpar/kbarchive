---
layout: page
title: "Q104533: ScanDisk Sees Hard Drive as Network Drive"
permalink: kb/104/Q104533/
---

## Q104533: ScanDisk Sees Hard Drive as Network Drive

	Article: Q104533
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You cannot use ScanDisk on a LANtastic server because all local drives are seen
	as network drives. To use ScanDisk, disable the LANtastic server service by
	using the REM command to remark out the server command in your AUTOEXEC.BAT
	file, then restart the computer. After you run ScanDisk, remove the REM command
	from your AUTOEXEC.BAT file and restart your computer again.
	
	This situation occurs only when the machine is running the LANtastic server
	software.
	
	
	Additional query words: 6.20 scan disk
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
