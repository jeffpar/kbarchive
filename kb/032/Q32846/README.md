---
layout: page
title: "Q32846: Switch Settings for AT&amp;T StarLAN Network Adapter"
permalink: /kb/032/Q32846/
---

## Q32846: Switch Settings for AT&amp;T StarLAN Network Adapter

{% raw %}

	Article: Q32846
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
	
	This article discusses jumper settings for the AT&T StarLAN network adapter
	and the following problems that may occur:
	
	- The interrupt line address may conflict with devices such as the Microsoft
	  Bus Mouse, hard disk drive controllers, and serial and parallel ports.
	
	- The base I/O address may conflict with expanded-memory boards.
	
	- The memory map address may conflict with the memory addresses used by
	  expanded-memory board drivers, 3270 cards, ESDI hard disk drive controllers,
	  and display adapters.
	
	You may need to change jumper settings on the StarLAN adapter and/or other cards
	in the system to avoid such conflicts.
	
	MORE INFORMATION
	================
	
	The following are interrupt line address jumper settings (jumper block labeled
	"IRQ" near connector end of board):
	
	  Interrupt 2 - Pins 5 and 6 jumpered
	  Interrupt 3 - Pins 4 and 5
	  Interrupt 4 - Pins 2 and 3
	  Interrupt 7 - Pins 1 and 2
	
	The following are memory buffer address jumper settings (jumper block labeled RAM
	MEMORY at top of board):
	
	  Address A000 - Jumper Pins labeled "A"
	  Address B000 - Jumper Pins "B"
	  Address C000 - Jumper Pins "C"
	  Address D000 - Jumper Pins "D"
	  Address E000 - Jumper Pins "E"
	  Address F000 - Jumper Pins "F"
	
	The following are base I/O address jumper settings (jumper block labeled "I/O
	ADD" at end of board):
	
	  Address 360h - Pins 2 & 3 and 4 & 5 jumpered
	  Address 368h - Pins 1 & 2 and 3 & 4 jumpered
	
	Additional query words: 1.0 1.00 2.0 2.03 2.10 3.00 3.10 win30 win31 att 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin110 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:1.x,2.x,3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
