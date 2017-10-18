---
layout: page
title: "Q75188: Installing MS-DOS over Emerson ROM DOS"
permalink: kb/075/Q75188/
---

## Q75188: Installing MS-DOS over Emerson ROM DOS

	Article: Q75188
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
	
	Some Emerson computer systems are equipped with ROM DOS (the operating system is
	contained in the computer's read-only memory). Installing the MS- DOS 5 or later
	upgrade on these systems could cause the system to stop responding (hang) after
	it is rebooted.
	
	WORKAROUND
	==========
	
	To work around this problem disable the system's ROM DOS.
	
	MORE INFORMATION
	================
	
	Emerson systems with model numbers ending in V have an added sound feature that
	uses voice simulation to speak out DOS errors. This feature is written into the
	ROM DOS. If the ROM DOS is disabled and MS-DOS 5.0 or later is installed, the
	sound feature does not work.
	
	The Emerson systems that use ROM DOS are as follows:
	
	XT Class Machines
	-----------------
	
	800ec
	
	AT Class Machines
	-----------------
	
	500ec V
	516ec
	4412ec
	80386ec V
	2000sc
	3000sc
	
	To work around this problem, you can disable the boot from ROM DOS and have the
	computer boot from disk. There is a different procedure for XT and or AT class
	machines. To disable the ROM DOS boot, do the following:
	
	1. If you have a XT class machine, press CTRL+ALT+ESC during startup.
	  If you have a AT class machine, press CTRL+ALT+S during startup.
	  This will bring you to the CMOS menu.
	
	2. Choose SETUP from the menu and press ENTER.
	
	3. On the right side of the screen there is an entry for the boot device.
	  Highlight ROM and press F5 for next value or F6 for previous value (there are
	  only two values so you can press either one to toggle to Disk).
	
	4. Press F10 to save the configuration.
	
	5. Reboot the system by pressing ESC three times.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 update 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
