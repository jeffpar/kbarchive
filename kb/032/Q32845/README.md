---
layout: page
title: "Q32845: Switch Settings For Non-PS/2 Token-Ring Adapters"
permalink: /kb/032/Q32845/
---

## Q32845: Switch Settings For Non-PS/2 Token-Ring Adapters

	Article: Q32845
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:1.x,3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 1.1, 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses switch settings for the IBM Token-Ring Network PC
	Adapter.
	
	The following are switch-configurable parameters for the Token Ring adapter and
	conflicts that may occur:
	
	1. The Interrupt Line address may conflict with devices such as the Microsoft
	  Bus Mouse, hard drive controllers, serial and parallel ports.
	
	2. The Base I/O address may conflict with expanded memory boards.
	
	3. The Memory Map Address may conflict with the memory addresses used by
	  expanded memory board drivers, 3270 cards, ESDI hard-drive controllers, and
	  display adapters.
	
	It may be necessary to change switch settings on the Token Ring Adapter and/or
	other cards in the system to avoid such conflicts.
	
	MORE INFORMATION
	================
	
	The following are Interrupt Line switch settings:
	
	  (Switch Block 1)
	     Interrupt 2 - Switches 7 and 8 on (cascade to IRQ 9)
	     Interrupt 3 - Switch 7 on, switch 8 off (normally COM2)
	     Interrupt 6 - Switch 7 off, switch 8 on (normally floppy
	                   controller)
	     Interrupt 7 - Switches 7 and 8 off (normally LPT1)
	
	The following are Base I/O Address switch settings:
	
	  (Switch Block 2)
	     Address A20h - switch 2 off
	     Address A24h - switch 2 on
	
	The following are Memory Map Address switch settings:
	
	  (Switch Block 1)
	     Address CC00 - Switches 1,4, and 5 off
	                    Switches 2,3, and 6 on
	     Address CC00 - Switches 1,4,5, and 6 off
	                    Switches 2 and 3 on
	     Address A400 - Switches 2 and 5 off
	                    Switches 1,3,4, and 6 on
	     Address C400 - Switches 1 and 5 off
	                    Switches 2,3,4, and 6 on
	
	Additional query words: 1.x 2.03 2.10 2.11 3.00 3.10 win30 win31 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin110 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:1.x,3.0,3.0a,3.1,3.11
	
	=============================================================================
	
