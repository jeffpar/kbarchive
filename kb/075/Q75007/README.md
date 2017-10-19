---
layout: page
title: "Q75007: Installing MS-DOS 5.x or 6.x on Tandy 2500XL/1000TL3/1000TL"
permalink: /kb/075/Q75007/
---

## Q75007: Installing MS-DOS 5.x or 6.x on Tandy 2500XL/1000TL3/1000TL

	Article: Q75007
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
	
	Before installing Microsoft MS-DOS version 5.0 or later on a Tandy 2500XL or
	1000TL3, you must follow the procedure outlined below to disable the ROM DOS
	functionality of the machine.
	
	MORE INFORMATION
	================
	
	To disable the ROM DOS functionality of the machine, do the following:
	
	1. Insert the floppy disk labeled MS-DOS/GW-BASIC into drive A.
	
	2. At the A prompt, type "SETUPXL" (without the quotation marks) if your
	  computer is a Tandy 2500XL or "SETUPTL3" if your computer is a Tandy 1000TL3.
	  If you're using a Tandy 1000TL, type "SETUPTL" (without the quotation marks).
	
	3. The BIOS/ROM DOS Setup program loads and displays a menu of options. Use the
	  ARROW keys to change from option to option. Press the SPACEBAR to change the
	  settings. The current settings are the only ones displayed.
	
	4. Use the DOWN ARROW key to select the BOOT SOURCE option. The choices are ROM
	  and DISK, with ROM being the default.
	
	  NOTE: On a Tandy 1000TL, select the PRIMARY STARTUP option. On a Tandy
	  1000TL3, select the STARTUP DEVICE option. (The choices are the same.)
	
	5. Press the SPACEBAR once to change the setting to DISK.
	
	6. Press the RIGHT ARROW key to select AUTO-DESKMATE. The choices are ENABLE and
	  DISABLE, with ENABLE being the default.
	
	7. Press the SPACEBAR once to change the setting to DISABLE.
	
	8. Press F2 to restart the computer and update the EEPROM.
	
	You can now proceed with the MS-DOS 5.0 or 6.0 installation.
	
	The products included here are manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
