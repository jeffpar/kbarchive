---
layout: page
title: "Q94329: MS-DOS OEM Setup Doesn't Boot on Tandy 1000TX 286"
permalink: kb/094/Q94329/
---

## Q94329: MS-DOS OEM Setup Doesn't Boot on Tandy 1000TX 286

	Article: Q94329
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some Tandy 1000TX 286 computers have a 3.5-inch floppy disk drive that can be
	configured as a 360K drive. If the drive has been reconfigured, the MS-DOS 6.x
	OEM 720K Disk 1 will not start (boot) the computer.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Modify or create the CONFIG.SYS file on Disk 1, and add the following line:
	
	     DRIVPARM=/d:0 /f:2
	
	2. Boot the system using this disk.
	
	Setup should now run normally.
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
