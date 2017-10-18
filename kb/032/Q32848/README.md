---
layout: page
title: "Q32848: Switch Settings For Gateway G/NET Adapters"
permalink: kb/032/Q32848/
---

## Q32848: Switch Settings For Gateway G/NET Adapters

	Article: Q32848
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:1.x,2.x,3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	1.x 2.x 3.00 3.00a
	WINDOWS
	kbnetwork kbdisplay kbhw
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 1.1, 2.03, 2.1, 2.11, 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses switch settings for the Gateway G/NET Network Adapter.
	
	MORE INFORMATION
	================
	
	The following are switch-configurable parameters for the Gateway G/NET adapter
	and the conflicts that may occur:
	
	- The Interrupt Line address may conflict with devices such as the Microsoft
	  Bus Mouse, hard drive controllers, serial and parallelports.
	
	- The Base I/O address may conflict with expanded memory boards.
	
	- The Memory Map Address may conflict with the memory addresses used by
	  expanded memory board drivers, 3270 cards, ESDI hard drive controllers, and
	  display adapters.
	
	You may have to change switch settings on the Gateway G/NET Adapter and/or other
	cards in the system to avoid such conflicts.
	
	The following are Interrupt Line Address switch settings:
	
	  (Switch SW2)
	  Address A000 - Switches 1 & 3 on, 2 & 4 off
	  Address C000 - Switches 1 & 2 on, 3 & 4 off
	  Address D000 - Switches 1, 3 & 4 off, 2 on
	  Address E000 - Switches 2, 3 & 4 off, 1 on
	
	The following are Base I/O Address switch settings:
	
	  (Switch S2)
	     Address 280h - Switches 5 through 8 on
	     Address 2A0h - Switches 4, 7 & 8 on, 6 off
	     Address 2E0h - Switches 5 & 8 on, 6 & 7 off
	     Address 300h - Switches 5, 6 & 7 on, 8 off
	
	The following are Interrupt Line jumper settings:
	
	  (Jumper STR2)
	  Interrupt 2 - Jumper pins "I2" and "SR"
	  Interrupt 3 - Jumper pins "I3" and "SR"
	  Interrupt 4 - Jumper pins "I4" and "SR"
	  Interrupt 5 - Jumper pins "I5" and "SR"
	
	Additional query words: 1.x 2.03 2.10 2.11 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin110 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a
	Version           : WINDOWS:1.x,2.x,3.0,3.0a
	
	=============================================================================
	
