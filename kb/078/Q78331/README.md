---
layout: page
title: "Q78331: Enhanced Mode Floppy Problems on Micronics"
permalink: /kb/078/Q78331/
---

## Q78331: Enhanced Mode Floppy Problems on Micronics

	Article: Q78331
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While running Microsoft Windows 3.0 in enhanced mode, 486 Micronics ISA
	motherboards using the Micronics ASIC chipset and Phoenix 486 ROM BIOS Plus (all
	revisions) may drop to MS-DOS or stop responding (lock up or hang) up when
	accessing floppy drives.
	
	NOTE: This problem does not occur in later versions of Windows.
	
	WORKAROUND
	==========
	
	Setting the CPU speed in the CMOS to FAST, instead of SLOW, eliminates these
	problems. This BIOS switch allows you to select a CPU front panel switch to
	enable or disable the TURBO mode. With the BIOS set to FAST, you cannot select
	the TURBO mode from the CPU front panel. It is locked in FAST.
	
	You can access the CMOS setup as follows:
	
	1. Press CTRL+ALT+ESC.
	
	2. Press the DOWN ARROW key to move to CPU Speed.
	
	3. Use the RIGHT ARROW and LEFT ARROW keys to toggle speed mode to FAST.
	
	4. Press ESC to exit and save changes, the system will then reboot.
	
	MORE INFORMATION
	================
	
	For more information, contact Micronics technical support.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 3.00a 3.0a 3.0 3rdparty GATEWAY 2000 shelling hanging shell hang win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
