---
layout: page
title: "Q75789: Setup Hangs on Uninstall Disk with JRAM Board Installed"
permalink: kb/075/Q75789/
---

## Q75789: Setup Hangs on Uninstall Disk with JRAM Board Installed

	Article: Q75789
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to Tall Tree Systems, which can be reached by calling (415) 424-8324,
	if a customer is having a problem installing MS-DOS 5.0 with a JRAM board
	installed in the computer, try the following steps:
	
	1. Create a bootable disk from the previous DOS version.
	
	2. On the bootable disk, create a CONFIG.SYS file that contains only the device
	  driver for the JRAM board, and set the device statement to allow for 640K on
	  the JRAM board:
	
	     DEVICE=C:\JBOOT.BIN 640 /FQ -C
	
	3. Save the CONFIG.SYS file and reboot the system with the floppy in drive A.
	
	4. Run the setup for MS-DOS 5.0 from the A prompt.
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 5.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
