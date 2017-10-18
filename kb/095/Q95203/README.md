---
layout: page
title: "Q95203: Err Msg: SmartMon Unable to Save the New Cache Settings"
permalink: kb/095/Q95203/
---

## Q95203: Err Msg: SmartMon Unable to Save the New Cache Settings

	Article: Q95203
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
	
	If you used SMARTDrive Monitor (SmartMon) to change SMARTDrive's cache settings,
	you may receive the following error message after exiting SmartMon:
	
	  SmartMon is unable to save the new cache settings in the specified batch
	  file.
	
	CAUSE
	=====
	
	This error message is displayed when SmartMon is unable to find the SMARTDrive
	command line in the AUTOEXEC.BAT file. This may be due to the fact that SmartMon
	does not recognize the LH command and /L switch when they are used together. For
	example, SmartMon cannot modify the following line:
	
	  lh c:\dos\smartdrv.exe /l
	
	WORKAROUND
	==========
	
	To work around this problem, change the cache settings by manually editing the
	AUTOEXEC.BAT file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SmartMon version 3.1. We are
	researching this problem and will post new information here as it becomes
	available.
	
	Additional query words: 6.22 6.00 smartdrive smartdrv monitor 6.20 WRK windows resource kit 3.1 win31
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
