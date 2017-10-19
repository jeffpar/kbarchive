---
layout: page
title: "Q77625: XIOS Corporation Software Conflicts with MS-DOS 5.0"
permalink: /kb/077/Q77625/
---

## Q77625: XIOS Corporation Software Conflicts with MS-DOS 5.0

	Article: Q77625
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
	
	XIOS has confirmed that starting General Business Series or Professional Series
	versions 3.3, 3.5.0, or 3.5.1 with MS-DOS version 5.0 may cause your system to
	stop responding (hang or lock up).
	
	CAUSE
	=====
	
	XIOS has stated that the file ISAM.EXE, which is executed upon starting these
	applications, may conflict with MS-DOS 5.0 and cause the system to halt.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the SETVER command to update the SETVER table as
	follows:
	
	1. Make sure the computer is booted with the SETVER.EXE utility. To confirm
	  this, look for the following line in the CONFIG.SYS file:
	
	  device=c:\dos\setver.exe
	
	2. After the computer is booted, execute the following command at the hard drive
	  (for example, drive C) command prompt:
	
	  " setver isam.exe 3.30" (without the quotation marks)
	
	A message regarding the program you are adding to the MS-DOS 5.0 version table
	will be displayed. If the table is updated successfully, reboot the computer to
	allow the change to take effect.
	
	MORE INFORMATION
	================
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	
	Additional query words: 5.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x
	
	=============================================================================
	
