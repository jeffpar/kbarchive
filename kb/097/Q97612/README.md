---
layout: page
title: "Q97612: NCR Laptop Driver FD82365.SYS Causes &quot;Invalid Disk...&quot; Error"
permalink: kb/097/Q97612/
---

## Q97612: NCR Laptop Driver FD82365.SYS Causes &quot;Invalid Disk...&quot; Error

	Article: Q97612
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your NCR or AT&T 3170 386 laptop displays the following error message:
	
	  INVALID DISK CHANGE READING DRIVE A:
	
	CAUSE
	=====
	
	FD82365.SYS is a driver for PCMCIA cards; if this driver is loaded, or the
	PCMCIAPower=ON in the system CMOS settings, the above error occurs after you
	install MS-DOS 6.0 or later.
	
	WORKAROUND
	==========
	
	Remove the FD82365.SYS driver from the CONFIG.SYS file and change the system
	CMOS setting to the following:
	
	  PCMCIAPower=OFF
	
	NCR has an updated driver available that corrects this problem. For more
	information, contact NCR Technical Support.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.22 at t pcmciapower fd82365 6.00 Safari 3rdparty hardware
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
