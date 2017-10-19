---
layout: page
title: "Q76454: Leading Edge Model D Loses Date/Time with MS-DOS"
permalink: /kb/076/Q76454/
---

## Q76454: Leading Edge Model D Loses Date/Time with MS-DOS

	Article: Q76454
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After installing Microsoft MS-DOS Upgrade, the Leading Edge Model D may lose its
	date and time if the device driver CLKDVR.SYS file is missing from the
	CONFIG.SYS file. CLKDVR.SYS maintains the correct time and date on the Model D.
	
	MORE INFORMATION
	================
	
	CLKDVR.SYS can be found in the OLD_DOS.X directory, or on the original Leading
	Edge DOS disks. Place CLKDVR.SYS in the root directory of your hard drive. In
	your CONFIG.SYS file, create a device line pointing to that driver. For
	example:
	
	  device=c:\clkdvr.sys
	
	Next, reboot your computer.
	
	To obtain CLKDVR.SYS or for additional information, contact Leading Edge
	technical support at (900) 370-4800.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 3rdparty 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
