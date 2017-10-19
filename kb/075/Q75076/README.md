---
layout: page
title: "Q75076: Installing MS-DOS on a Tandy 1000SL, SL2, TL, TL2, or RL"
permalink: /kb/075/Q75076/
---

## Q75076: Installing MS-DOS on a Tandy 1000SL, SL2, TL, TL2, or RL

	Article: Q75076
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
	
	Before installing Microsoft MS-DOS version 5.0 or later on a Tandy 1000SL, SL2,
	TL, TL2, or RL, you must follow the procedure outlined below to disable the ROM
	DOS functionality of the machine.
	
	MORE INFORMATION
	================
	
	1. Insert the original MS-DOS 3.3 floppy disk into drive A.
	
	2. At the A prompt, type "SETUPxx" (without the quotation marks), where "xx" is
	  the computer's initials (for example, SETUPRL).
	
	3. The BIOS/ROM DOS SETUP program loads, displaying a menu of options. Press the
	  UP and DOWN ARROW keys to select options. Press the LEFT and RIGHT ARROW keys
	  to change settings. The current settings are highlighted.
	
	4. Use the DOWN ARROW key to select the PRIMARY START-UP DEVICE option. The
	  choices are ROM and DISK, with ROM being the default.
	
	5. Press the RIGHT ARROW key to highlight DISK.
	
	6. Using the DOWN ARROW key, select the INITIAL START-UP DEVICE option. The
	  choices are MS-DOS and DESKMATE, with DESKMATE as the default.
	
	7. Use the RIGHT ARROW key to highlight MS-DOS.
	
	8. Press F1 to update the EEPROM.
	
	9. Restart the computer and proceed to install MS-DOS.
	
	
	The products included here are manufactured by Tandy, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 6.22 3.30 5.00 5.00a 6.00 6.200 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
