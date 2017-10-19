---
layout: page
title: "Q100724: DEVICE? and DEVICEHIGH? Statements Not Functioning"
permalink: /kb/100/Q100724/
---

## Q100724: DEVICE? and DEVICEHIGH? Statements Not Functioning

	Article: Q100724
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the timer for MENUDEFAULT reaches zero (0) in multiple configurations, the
	DEVICE? and DEVICEHIGH? statements do not interactively load the device drivers.
	This is by design.
	
	The function of the question mark (?) at the end of a DEVICE or DEVICEHIGH
	statement in the CONFIG.SYS file is to prompt you during startup with a [Y/N]
	option at the end of the statement. If you choose "Y," the driver is loaded; if
	you choose "N," the driver is not loaded. If the timer reaches zero, MS-DOS
	determines that the startup is "hands-off," meaning that no one is available or
	willing to interactively boot the system.
	
	Additional query words: 6.22 6.00 multi config counter 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
