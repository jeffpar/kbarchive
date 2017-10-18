---
layout: page
title: "Q75078: Installing MS-DOS 5.0 on a Tandy 1000HX"
permalink: kb/075/Q75078/
---

## Q75078: Installing MS-DOS 5.0 on a Tandy 1000HX

	Article: Q75078
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Before installing Microsoft MS-DOS version 5.0 on a Tandy 1000HX, you must
	follow the procedure outlined below to disable the ROM DOS functionality of the
	Tandy.
	
	MORE INFORMATION
	================
	
	1. Insert the original Tandy MS-DOS 2.11 floppy disk into drive A.
	
	2. At the A prompt, type "SETUPHX" (without the quotation marks) and press
	  ENTER.
	
	3. The BIOS/ROM DOS Setup program loads, displaying a menu of options. Use the
	  UP and DOWN ARROW keys to select options. Use the LEFT and RIGHT ARROW keys
	  to select settings. (The current settings are highlighted.
	
	4. Use the DOWN ARROW key to select the PRIMARY START-UP DEVICE option. The
	  choices are MEMORY and DISK, with MEMORY being the default.
	
	5. Use the RIGHT ARROW key to highlight DISK.
	
	6. Press the DOWN ARROW key to select the INITIAL START-UP PROGRAM option. The
	  choices are MENU, MS-DOS, and DESKMATE, with MENU as the default.
	
	7. Use the RIGHT ARROW key to highlight MS-DOS.
	
	8. Press F1 to update the EEPROM.
	
	9. Restart the computer and proceed to install MS-DOS 5.0.
	
	The Tandy products included here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 5.00 hardware
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x
	
	=============================================================================
	
