---
layout: page
title: "Q58262: Location of Installed Windows 3.0 Drivers"
permalink: /kb/058/Q58262/
---

## Q58262: Location of Installed Windows 3.0 Drivers

	Article: Q58262
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information in this article is specific to Microsoft Windows version 3.0.
	
	The following is a list of the installed locations of drivers included with
	Windows 3.0:
	
	  Driver        Location
	  ------        --------
	
	  RAMDRIVE.SYS  Windows 3.00 directory
	  SMARTDRV.SYS  Windows 3.00 directory
	  EMM386.SYS    Windows 3.00 directory
	  EGA.SYS       Windows 3.00 directory
	  MOUSE.COM     Windows 3.00 directory (optional)
	  MOUSE.SYS     Windows 3.00 directory (optional)
	  MOUSEHP.COM   Windows 3.00 directory (optional)
	  MOUSEHP.SYS   Windows 3.00 directory (optional)
	  HIMEM.SYS     Root directory of Drive C
	
	MORE INFORMATION
	================
	
	Mouse drivers are copied to the hard drive only if they are needed to replace an
	existing older version of the same driver.
	
	HIMEM.SYS is copied to the root directory of Drive C because of potential
	problems with hard drive partitioning drivers.
	
	HIMEM.SYS is always placed first in the CONFIG.SYS file. If Windows is installed
	on a drive other than C:, and a hard drive partitioning driver is used,
	HIMEM.SYS will be listed before the partitioning driver and thus will not load
	because its drive is not present before the partitioning driver is loaded.
	Always placing HIMEM.SYS in the root directory of C: solves this problem.
	
	Additional query words: 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
