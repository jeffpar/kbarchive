---
layout: page
title: "Q104734: Setup Does Not Recognize Compaq XMS Device Driver"
permalink: kb/104/Q104734/
---

## Q104734: Setup Does Not Recognize Compaq XMS Device Driver

	Article: Q104734
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MS-DOS Upgrade Setup does not recognize the Compaq extended memory services
	(XMS) device driver (EXMEM.EXE). As a result, Setup adds a device command for
	HIMEM.SYS to the end of your CONFIG.SYS file. When the second XMS driver loads,
	you receive the following error message:
	
	  ERROR: An Extended Memory Manager is already installed.
	
	CAUSE
	=====
	
	Setup does not recognize EXMEM.SYS because EXMEM.SYS makes itself look like the
	MS-DOS HIMEM.SYS driver.
	
	
	Since Setup finds what it thinks is HIMEM.SYS in memory, it determines that it
	has to update an existing HIMEM.SYS line in the CONFIG.SYS file. When it doesn't
	find any reference to HIMEM.SYS, it adds a command for it.
	
	RESOLUTION
	==========
	
	To work around this problem, edit your CONFIG.SYS file with MS-DOS Editor and
	remove the device command for one of the XMS managers.
	
	Additional query words: 6.22 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	
