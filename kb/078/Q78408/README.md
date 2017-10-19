---
layout: page
title: "Q78408: Erratic Behavior with MS-DOS 5.0 and Phillips BIOS"
permalink: /kb/078/Q78408/
---

## Q78408: Erratic Behavior with MS-DOS 5.0 and Phillips BIOS

	Article: Q78408
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
	
	Phillips has confirmed that after installing MS-DOS 5.0 on a Magnavox 300 or 500
	series computer with Phillips BIOS, erratic behavior may occur. This behavior
	will appear as random error messages at boot-up, or an inability to format
	disks.
	
	To resolve this problem, ensure that the CMOS settings match the devices
	installed on the computer. If they match, save the settings; otherwise, make
	appropriate changes and save the settings.
	
	MORE INFORMATION
	================
	
	Some of the error messages that may occur at boot-up when MS-DOS 5.0 is
	installed on the above machines are:
	
	  Bad or Missing Command Interpreter
	
	  Bad or Missing SHARE.EXE
	
	  Error in CONFIG.SYS line 4 4
	
	To check CMOS settings, do the following:
	
	1. Press CTRL+ALT+INSERT when the machine is booting.
	
	2. Verify the current settings (type of drive and so on).
	
	3. Press F3 to save the settings.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	REFERENCES
	==========
	
	Phillips technical support: (900) 454-5554
	
	Additional query words: 5.00 err msg 3rdparty IMAGE setup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
