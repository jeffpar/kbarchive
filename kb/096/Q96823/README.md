---
layout: page
title: "Q96823: POWER Err Msg: Power Manager (POWER.EXE) Not Installed"
permalink: kb/096/Q96823/
---

## Q96823: POWER Err Msg: Power Manager (POWER.EXE) Not Installed

	Article: Q96823
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you attempt to access POWER:
	
	  Power Manager (POWER.EXE) Not Installed
	
	CAUSE
	=====
	
	POWER.EXE is not installed in your CONFIG.SYS file. To enable power management
	functions, POWER must be installed as a device driver.
	
	RESOLUTION
	==========
	
	To install POWER.EXE, add the following line to your CONFIG.SYS file:
	
	  " device=c:\dos\power.exe " (without the quotation marks)
	
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
