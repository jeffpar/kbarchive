---
layout: page
title: "Q74249: Gateway Ethernet Card I/O Address Settings with Windows"
permalink: kb/074/Q74249/
---

## Q74249: Gateway Ethernet Card I/O Address Settings with Windows

	Article: Q74249
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Configuring the Gateway Ethernet network card with certain I/O address settings
	may preclude the use of Microsoft Windows. Try setting the I/O address to 2A0h
	(default) or 360h.
	
	IRQ settings of 2, 3, 4, 5, 6, 7, 10, 11, 12, and 15 are available on the Gateway
	card (the default is IRQ 3). Some of the IRQ options are not valid Novell
	NetWare selections.
	
	MORE INFORMATION
	================
	
	The I/O base address can be changed according to the following switch setting
	chart for SW1:
	
	            SWITCH  SW1
	  I/O      1    2    3    4
	  280h     ON   ON   ON   ON
	  2A0h     ON   OFF  ON   ON   <-- DEFAULT
	  2C0h     ON   ON   OFF  ON
	  2E0h     ON   OFF  OFF  ON
	  300h     ON   ON   ON   OFF
	  320h     ON   OFF  ON   OFF
	  340h     ON   ON   OFF  OFF
	  360h     ON   OFF  OFF  OFF
	
	NOTE: If an autoboot PROM is installed, use device I/O address 2A0h.
	
	For further information on the Gateway Ethernet network card, contact Gateway
	Communications technical support.
	
	Additional query words: 3.00 3.0 3.0a 3.00a hang hangs lock io interrupt win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
