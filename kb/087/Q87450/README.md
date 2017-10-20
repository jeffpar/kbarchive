---
layout: page
title: "Q87450: MSD Utility Incorrectly Identifies UART Chip"
permalink: /kb/087/Q87450/
---

## Q87450: MSD Utility Incorrectly Identifies UART Chip

{% raw %}

	Article: Q87450
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Microsoft Diagnostic Utility (MSD) shipped with Windows 3.1 to
	identify local COM ports on a personal computer, MSD will erroneously report a
	16550AF under "UART Chip Used" when in fact there is no UART (universal
	asynchronous receiver transmitter) chip or COM port installed at that address.
	This occurs when a utility, such as SETCOM.COM, or a debug script has been used
	to create a COM port address in the BIOS data segment for a non-existing COM
	port.
	
	Other defaults reported by MSD for the non-existing COM port are:
	
	  Baud Rate: 1
	  Parity: Space
	  Data Bits: 8
	  Stop Bits: 2
	  Carrier Detect (CD): Yes
	  Ring Indicator: (RI): Yes
	  Clear To Send (CTS): Yes
	
	MORE INFORMATION
	================
	
	The 16550AF chip is a UART chip with a 16-byte character buffer to reduce
	interrupt overhead and errors during high-speed serial transmissions.
	
	Additional query words: 3.10 3.11 communications comm serial modem
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
