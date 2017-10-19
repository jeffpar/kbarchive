---
layout: page
title: "Q85091: Missing Drive Letters in File Manager with Syquest Driver"
permalink: /kb/085/Q85091/
---

## Q85091: Missing Drive Letters in File Manager with Syquest Driver

	Article: Q85091
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are running Microsoft Windows version 3.1 on a computer with a Syquest
	removable hard drive, you may notice a missing drive letter in Windows File
	Manager if you are using the SYQ55.SYS driver version 7.33 or earlier.
	
	CAUSE
	=====
	
	This problem is caused by the Syquest driver.
	
	RESOLUTION
	==========
	
	To correct this problem, contact Syquest for version 7.40 of the SQDRIVER.SYS
	driver.
	
	
	MORE INFORMATION
	================
	
	When you start File Manager, it detects the Syquest removable hard drive. If you
	run an application on this drive from File Manager, and then exit the
	application, the drive letter for the Syquest drive is missing from File
	Manager. If you close File Manager and then restart it, the drive letter for the
	Syquest drive is not shown.
	
	This problem does not occur in Windows 3.0 or in Windows 3.1 running in standard
	mode.
	
	The products included here are manufactured by Syquest, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: zyquest siquest 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
