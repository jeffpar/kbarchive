---
layout: page
title: "Q63921: Western Digital WDM2, WDM20 Motherboards, and PS/2 Mouse Port"
permalink: kb/063/Q63921/
---

## Q63921: Western Digital WDM2, WDM20 Motherboards, and PS/2 Mouse Port

	Article: Q63921
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mouse does not function properly on a Western Digital WDM2 or
	WDM20 motherboard if it is connected to the PS/2 mouse port. The keyboard ROM on
	this motherboard causes erratic mouse movement when Windows is in standard or
	enhanced mode.
	
	MORE INFORMATION
	================
	
	There are four possible corrections to the problem, as follows:
	
	- Connect the mouse to one of the serial ports.
	
	- Use a bus mouse such as the Microsoft or Logitech bus mouse.
	
	- Send the motherboard to a Western Digital Service center to have the keyboard
	  ROM chip replaced.
	
	- Modify the HIMEM.SYS line in the CONFIG.SYS file to read HIMEM.SYS /M:2.
	
	The PS/2 mouse port on a non-PS/2 computer is a special adapter port on the
	machine. You use a serial mouse with a special adapter on one end to connect to
	this adapter port. The PS/2 mouse port uses a hardware specific interrupt
	(usually IRQ12) to communicate with the mouse instead of the normal serial ports
	that are on IRQ3 and IRQ4.
	
	Additional query words: 3.00 3.0 3.0a 3.00a KBHW win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
