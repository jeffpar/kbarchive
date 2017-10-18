---
layout: page
title: "Q134567: HP2577A 10/100VG EISA PC LAN Card Not Detected Correctly"
permalink: kb/134/Q134567/
---

## Q134567: HP2577A 10/100VG EISA PC LAN Card Not Detected Correctly

	Article: Q134567
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Hewlett-Packard HP2577A 10/100VG EISA PC LAN Adapter card is not detected
	correctly in Windows 95. Device Manager shows a yellow exclamation point (!) in
	front of the device that is installed incorrectly and shows a Code 10 message.
	This message occurs when a device is not present or is not working properly.
	
	CAUSE
	=====
	
	The HP2577A 10/100VG EISA PC LAN Adapter card is preconfigured to use IRQ 3. The
	HP2577A cannot change the IRQ from the default setting of IRQ 3 without running
	the OEM configuration program, HPVGSET.
	
	RESOLUTION
	==========
	
	To work around this behavior, follow these steps:
	
	1. Restart the computer and press the F8 key when you see the prompt, "Starting
	  Windows 95...." Select the Command Prompt Only option from the Startup menu
	  that appears.
	
	2. Run the EISA configuration program for the system.
	
	3. Run the HPVGSET configuration program and select an IRQ setting other than
	  IRQ 3, such as IRQ 5, 10, 11, or 15, for the HP2577A 10/100VG EISA PC LAN
	  Adapter card.
	
	4. Restart the computer.
	
	MORE INFORMATION
	================
	
	To change the IRQ setting, most EISA network cards require only the EISA
	configuration program for the system. If the IRQ setting is changed using the
	EISA configuration program only, the HP2577A PC LAN adapter card does not work
	correctly.
	
	The HP2577A 10/100VG EISA PC LAN Adapter card is manufactured by the
	Hewlett-Packard Company, a vendor independent of Microsoft; we make no warranty,
	implied or otherwise, regarding this product's performance or reliability.
	
	Additional query words: eisa detection
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
