---
layout: page
title: "Q110438: Data in Cache Not Written to Disk with VSafe and SMARTDrive"
permalink: /kb/110/Q110438/
---

## Q110438: Data in Cache Not Written to Disk with VSafe and SMARTDrive

	Article: Q110438
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
	
	When you press CTRL+ALT+DEL to reboot your computer, SMARTDrive may fail to
	write the data in its cache to disk.
	
	CAUSE
	=====
	
	This problem occurs when you load VSafe after SMARTDRV in the AUTOEXEC.BAT file.
	
	RESOLUTION
	==========
	
	To correct this problem, load VSafe before SMARTDRV.EXE in the AUTOEXEC.BAT
	file; if VSafe is loaded before SMARTDrive, data is successfully written to
	disk, even when you press CTRL+ALT+DEL.
	
	MORE INFORMATION
	================
	
	Under normal circumstances, SMARTDrive writes any data in the cache to disk
	before passing the reboot request to the operating system. However, if VSafe is
	installed after SMARTDrive in your AUTOEXEC.BAT file, SMARTDrive does not write
	the data to disk because VSafe intercepts the CTRL+ALT+DEL call and fails to
	pass it down the chain to SMARTDrive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS version 6.2. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 6.22 6.00 6.20 read write flush
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
