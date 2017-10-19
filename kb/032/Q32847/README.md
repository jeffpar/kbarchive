---
layout: page
title: "Q32847: Jumper Settings For PC Network/Baseband Adapters"
permalink: /kb/032/Q32847/
---

## Q32847: Jumper Settings For PC Network/Baseband Adapters

	Article: Q32847
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
	
	This article discusses jumper settings for the IBM PC Network Adapter and
	Baseband Adapter for both file servers and bridges.
	
	The following are jumper-configurable parameters for the PC Network
	Adapter/Baseband adapter and conflicts that may occur:
	
	- The Interrupt Line address may conflict with devices such as the Microsoft
	  Bus Mouse, hard drive controllers, serial and parallel ports.
	
	- The Base I/O address may conflict with expanded memory boards.
	
	- The Memory Map Address may conflict with the memory addresses used by
	  expanded memory board drivers, 3270 cards, ESDI hard-drive controllers, and
	  display adapters.
	
	It may be necessary to change jumper settings on the PC Network Adapter and/or
	other cards in the system to avoid such conflicts.
	
	MORE INFORMATION
	================
	
	The following are Interrupt Jumper Settings:
	
	  (Jumper W1)
	  Interrupt 2 - pins 1 & 2 jumpered
	  Interrupt 3 - pins 2 & 3
	
	The following are Base I/O Address Jumper Settings:
	
	  (Jumper W4)
	  Address 620-627 - pins 1 & 2 jumpered
	  Address 628-62F - pins 2 & 3
	
	The following are Memory Address Jumper Settings:
	
	  (Jumper W5)
	  Address CC00-CDFF - pins 1 & 2 jumpered
	  Address DC00-DDFF - pins 2 & 3 jumpered
	
	Additional query words: 1.x 2.03 2.10 2.11 3.00 3.00a 3.10 3.11 win30 win31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin110 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:1.x,2.x,3.0,3.0a,3.1,3.11
	
	=============================================================================
	
