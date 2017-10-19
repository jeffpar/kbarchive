---
layout: page
title: "Q98987: System Hangs (and Other Problems) with I82593.DOS Loaded High"
permalink: /kb/098/Q98987/
---

## Q98987: System Hangs (and Other Problems) with I82593.DOS Loaded High

	Article: Q98987
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Zenith Data System Z-Note portable computer Windows for Workgroups device
	driver, I82593.DOS, does not work correctly with MS-DOS 6.x if it is loaded in
	upper memory.
	
	The following problems may occur if you load I82593.DOS high:
	
	- You may receive a critical error from Novell NetWare. (Your system may stop
	  responding [hang].)
	
	- Your system may return to the MS-DOS command prompt when you try to start
	  Windows.
	
	- Your computer may reboot spontaneously.
	
	- Your computer may hang.
	
	WORKAROUND
	==========
	
	To work around this problem, add "*I82593" (without the quotation marks) to the
	MEMMAKER.INF file and then run MemMaker. This prevents MemMaker from loading
	I82593.DOS high.
	
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1
	
	=============================================================================
	
