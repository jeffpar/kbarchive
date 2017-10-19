---
layout: page
title: "Q74730: Erratic Keyboard Behavior Using HIMEM.SYS"
permalink: /kb/074/Q74730/
---

## Q74730: Erratic Keyboard Behavior Using HIMEM.SYS

	Article: Q74730
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
	
	You may encounter erratic keyboard behavior when using HIMEM.SYS driver on
	certain systems. Symptoms may include a variety of problems interpreting the
	state of the SHIFT, CAPS LOCK, NUM LOCK, ALT, and CTRL keys.
	
	If you encounter this kind of problem, setting the /CPUCLOCK: switch to ON may
	alleviate the problem. If not, use the HIMEM /machine:xxxx switch to specify an
	alternative value for the A20 handler. Switches which have been found to be most
	likely are 11, 12, and 13 (in that order). These switches represent
	progressively longer delays in the switch state of the A20 line compared to the
	default handler 1.
	
	MORE INFORMATION
	================
	
	Another workaround is to include the following line in your AUTOEXEC.BAT file.
	
	  c:\dos\keyb us,,c:\dos\keyboard.sys
	
	KEYB replaces the ROM BIOS INT 09h keyboard interrupt handler with its own
	routine. This may allow handling of the keyboard in a manner that does not
	conflict with A20 handling.
	
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 101 key extended enhanced
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
