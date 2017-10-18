---
layout: page
title: "Q102923: STB WIND/X Video Card Interferes with COM4 Serial Port"
permalink: kb/102/Q102923/
---

## Q102923: STB WIND/X Video Card Interferes with COM4 Serial Port

	Article: Q102923
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to STB Systems, Inc., the STB WIND/X video card may conflict with the
	address of the COM4 serial port (2E8h). This article contains an excerpt from
	the "WIND/X Video Card" user's manual that describes the problem and
	workarounds.
	
	MORE INFORMATION
	================
	
	The following text is from page 1-4 of the STB "WIND/X Video Card" user's
	manual:
	
	  The WIND/X graphics controller chip uses the hex port address 46E8 for one of
	  its extended register sets. When only the first 8 bits of this 16 bit address
	  are decoded in any operation, the address appears as hex port address 2E8,
	  which is a popular hex port address for a COM 4 serial port. This may result
	  in an address conflict and prevent COM 4 from functioning or cause it to
	  operate in an unpredictable manner. (e.g., Windows losing text, COM 4 locking
	  up)
	
	  If you have a COM 4, or any other device in your system that you suspect uses
	  the 2E8h address, consult the device documentation for alternate address
	  selection/configuration.
	
	For more information about the WIND/X video card, contact STB Systems.
	
	The WIND/X products included here are manufactured by STB Systems, Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: hardware 3.10 Simply The Best
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
