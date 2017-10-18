---
layout: page
title: "Q32849: Switch Settings For Pure Data ARCNET Adapters"
permalink: kb/032/Q32849/
---

## Q32849: Switch Settings For Pure Data ARCNET Adapters

	Article: Q32849
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:1.x,2.x,3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 1.1, 2.03, 2.1, 2.11, 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses switch settings for the IBM Pure Data ARCNET Network
	Adapter.
	
	MORE INFORMATION
	================
	
	The following are switch-configurable parameters for the Pure Data ARCNET
	adapter and the conflicts that may result:
	
	1. The Interrupt Line address may conflict with devices such as the Microsoft
	  Bus Mouse, hard drive controllers, serial and parallel ports.
	
	2. The Base I/O address may conflict with expanded memory boards.
	
	3. The Memory Map Address may conflict with the memory addresses used by
	  expanded memory board drivers, 3270 cards, ESDI hard drive controllers, and
	  display adapters.
	
	You may have to change switch settings on the Pure Data ARCNET Adapter and/or
	other cards in the system to avoid such conflicts.
	
	The following are Interrupt Line Address switch settings:
	
	  (Switch SW2)
	     Interrupt 2 - Switch 3 off, 4 through 8 on
	     Interrupt 3 - Switch 3 on, 4 off, 5 through 8 on
	     Interrupt 4 - Switches 3 & 4 on, 5 off, 6 through 8 on
	     Interrupt 5 - Switches 3 through 5 on, 6 off, 7 & 8 on
	     Interrupt 7 - Switches 3 through 7 on, 8 off
	
	The following are Base I/O Address switch settings:
	
	  (Switches SW1 and SW2)
	     Address 2E0h - SW1 7 & 8 on, SW2 1 on, 2 off
	     Address 2F0h - SW1 7 & 8 on, SW2 1 & 2 on
	
	The following are Memory Address switch settings:
	
	  (Switch SW1)
	     Address C000 - Switches 1 & 2 on, 3 & 4 off
	     Address D000 - Switches 1 & 2 on, 3 off, 4 on
	     Address E000 - Switches 1, 2 & 3 on, 4 off
	
	Additional query words: 1.x 2.03 2.10 2.11 3.00 3.10 3.11 kbhw win30 win31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin110 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:1.x,2.x,3.0,3.0a,3.1,3.11
	
	=============================================================================
	
