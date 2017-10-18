---
layout: page
title: "Q95998: SmartMon Incorrectly Reports Cache Status on Compressed Drive"
permalink: kb/095/Q95998/
---

## Q95998: SmartMon Incorrectly Reports Cache Status on Compressed Drive

	Article: Q95998
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SMARTDrive Monitor (SMARTMON.EXE) provides an interface to the performance
	of MS-DOS 6.0 and 6.2 SMARTDrive 4.1 and MS-DOS 6.22 SMARTDrive 6.22 SMARTDrive
	5.01.
	
	SMARTDrive Monitor may not work correctly with disk-compression software such as
	DoubleSpace or Stacker.
	
	MORE INFORMATION
	================
	
	Using SMARTDrive Monitor with DoubleSpace
	-----------------------------------------
	
	If you try to turn on caching for a DoubleSpace-compressed drive by typing the
	SMARTDRV.EXE command at the MS-DOS command prompt, you receive an error message
	indicating that you must specify the host drive rather than the compressed
	drive.
	
	However, if you are using the SMARTDrive Monitor and you select the compressed
	drive and then select the Cache Reads And Writes button, this action is ignored
	and you do not receive an error message. When SMARTDrive Monitor is reloaded, it
	defaults to no read or write cache on the DoubleSpace-compressed drive.
	
	Using SMARTDrive Monitor with Stacker
	-------------------------------------
	
	SMARTDrive Monitor defaults to drive C. If you have installed Stacker and you are
	swapping drives, SMARTDrive Monitor reports zero cache hits on drive C. To use
	SMARTDrive Monitor with Stacker, select your host drive.
	
	Microsoft has confirmed this to be a problem in SMARTDrive Monitor version 3.1.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 6.00 6.20 dblspace SmartMon
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
