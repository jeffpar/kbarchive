---
layout: page
title: "Q72049: Windows Causes Reboot on Everex 386/25 AGI 3900A"
permalink: kb/072/Q72049/
---

## Q72049: Windows Causes Reboot on Everex 386/25 AGI 3900A

	Article: Q72049
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Windows 3.0 on an Everex 386/25 AGI 3900A, the system
	reboots. This happens at 25 megahertz (MHz), but not at the slower speed of 12
	MHz.
	
	RESOLUTION
	==========
	
	For Windows to run at 25 MHz, the caching on the motherboard needs to be
	disabled:
	
	1. Press the DEL key when you turn on the Everex 386/25 AGI 3900A computer.
	
	2. You are given a choice of going to the CMOS setup or to the EEPROM setup.
	  Choose the EEPROM setup.
	
	3. Move down through the selections until you come to the Caching option. Using
	  the LEFT or RIGHT ARROW key, choose Disable.
	
	4. Press the ESC key to save and reboot.
	
	MORE INFORMATION
	================
	
	For more information, contact Everex technical support.
	
	The Everex product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding the product's
	performance or reliability.
	
	Additional query words: 3.00 win30 3.00a 3rdparty KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
