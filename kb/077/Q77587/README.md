---
layout: page
title: "Q77587: Scott 286 Model 2000-SC Must Disable ROM DOS"
permalink: /kb/077/Q77587/
---

## Q77587: Scott 286 Model 2000-SC Must Disable ROM DOS

	Article: Q77587
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you reboot a Scott 286 model 2000-SC after upgrading to MS-DOS 5 or later,
	the following message may be displayed:
	
	  Incorrect DOS Version
	  Bad or Missing Command Interpreter
	
	CAUSE
	=====
	
	This occurs when the read only memory (ROM) DOS has not been disabled.
	
	WORKAROUND
	==========
	
	To disable ROM DOS, do the following:
	
	1. Press CTRL+ALT+S to execute the system setup (CMOS) menu.
	
	2. From the CMOS menu, choose SETUP press ENTER.
	
	3. On the right side of the screen there will be a entry for the boot device.
	  Highlight ROM and press the F5 key for the next value or the F6 key for the
	  previous value to change this value to Disk.
	
	4. Press the F10 key to save the configuration.
	
	5. Reboot the system by pressing the ESC key three times.
	
	The computer will now reboot from disk.
	
	The product included here is manufactured by a vendor independent of Microsoft.
	We make no warranty, implied or otherwise, regarding this product's performance
	or reliability
	
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 3rdparty upgrade boot sequence rom
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
