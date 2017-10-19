---
layout: page
title: "Q57642: SYSTEM.INI Entries Required for Everex Step 386/25"
permalink: /kb/057/Q57642/
---

## Q57642: SYSTEM.INI Entries Required for Everex Step 386/25

	Article: Q57642
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To run Microsoft Windows version 3.0 386 enhanced mode properly on the Everex
	Step 386/25 machine, you need to add the following entries to the [386Enh]
	section of the SYSTEM.INI file:
	
	     8042ReadCmd=A2,1,F
	     8042ReadCmd=A3,1,F
	     8042WriteCmd=B3,8,F
	
	MORE INFORMATION
	================
	
	These entries are needed so that the LED front panel display works properly.
	These computers have a blinking lights display which usually displays
	information about which cylinder on the hard disk is being accessed. The display
	is driven by a set of non-standard commands to the 8042 keyboard controller.
	Normally the Enhanced mode VKD (Virtual Keyboard Device) just ignores
	non-standard commands such as the ones that drive this display. The result is
	that when you start Enhanced mode the display suddenly stops working and ceases
	to indicate hard disk cylinder access. These SYSTEM.INI entires cause the
	display to start working again.
	
	The Everex product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
