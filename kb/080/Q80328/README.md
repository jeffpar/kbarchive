---
layout: page
title: "Q80328: Phoenix BIOS Screen Saver Requires a Mouse under Windows"
permalink: /kb/080/Q80328/
---

## Q80328: Phoenix BIOS Screen Saver Requires a Mouse under Windows

	Article: Q80328
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The built-in screen saver on the ULTIMA LSX notebook cannot detect keystrokes
	when Microsoft Windows is running. Therefore, the screen cannot be restored
	unless you have a mouse.
	
	MORE INFORMATION
	================
	
	The Phoenix BIOS (version A386 1.01) on an ULTIMA LSX notebook computer contains
	a screen saver routine that will blank the video display after a user-specified
	amount of time. Whenever the BIOS detects a keystroke or mouse movement, the
	screen control returns to the active application.
	
	Under Windows, keystrokes are not passed directly to the BIOS. Therefore, unless
	a mouse is connected to the system, there is no way to return to the active
	application, and the system simply stays locked in the screen saver. This
	happens in all modes of Windows (real, standard, and enhanced).
	
	The screen saver can be disabled through the CMOS setup. To disable the BIOS
	screen saver, follow the instructions beginning on page 5-1 of the "ULTIMA LSX
	User Manual." For additional information, see the diagram on page 5-7 of the
	"ULTIMA LSX User Manual."
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: blanker freeze 3.0 3.00 3.1 3.10 3.11 KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
