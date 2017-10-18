---
layout: page
title: "Q110712: ScanDisk Err Msg on System with Hard Card: ScanDisk Found..."
permalink: kb/110/Q110712/
---

## Q110712: ScanDisk Err Msg on System with Hard Card: ScanDisk Found...

	Article: Q110712
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	SYMPTOMS
	========
	
	You receive the following error message when you run ScanDisk on a hard card:
	
	  ScanDisk found physical damage on drive C: that it can not correct.
	  ScanDisk cannot repair damaged cluster 2, because other damage to drive C:
	  prevents it.
	
	This error can occur immediately after you attempt to compress a hard card with
	DoubleSpace. In this scenario, the compressed drive doesn't mount after
	DoubleSpace reboots your system. When you try to manually mount the compressed
	volume file (CVF), you receive an error message stating that DBLSPACE.000 is not
	a valid CVF, and that you should run ScanDisk.
	
	CAUSE
	=====
	
	This problem can occur when you run ScanDisk on a hard card and the hard card
	device driver is not loaded in memory. You can read data from many hard cards,
	even when the device driver is not loaded; however, you cannot write data to the
	hard cards.
	
	NOTE: Under these circumstances, problems similar to those noted above also occur
	if you run a third-party surface-scan program.
	
	RESOLUTION
	==========
	
	To correct this problem, load the hard card drivers prior to running ScanDisk.
	
	If you have a DoubleSpace-compressed drive, the hard card drivers are probably
	stored within the unmounted CVF. You can correct this problem by copying the
	hard card device drivers from the hard card installation disks. For more
	information, query on the following words in the Microsoft Knowledge Base:
	
	  " hard card and startup and compressed and dblspace " (without the quotation
	  marks)
	
	Additional query words: 6.20 disk read write F5 clean boot hardcard double space
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
