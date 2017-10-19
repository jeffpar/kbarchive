---
layout: page
title: "Q72394: Mouse Is Not Supported on COM3 or COM4"
permalink: /kb/072/Q72394/
---

## Q72394: Mouse Is Not Supported on COM3 or COM4

	Article: Q72394
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11,95
	Operating System(s): 
	Keyword(s): win31 win95
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mouse driver for Windows supports only the following
	communications ports:
	
	- InPort
	
	- Bus
	
	- PS/2
	
	- COM2
	
	- COM1
	
	The Microsoft Mouse driver searches for a mouse in the order listed above.
	
	Currently, there are no known Windows pointing-device drivers that support more
	than one pointing device, or a pointing device on COM3 or COM4.
	
	MORE INFORMATION
	================
	
	COM3 and COM4 are not standardized across the industry. Industry Standard
	Architecture (ISA) machines do not support the sharing of IRQs. COM1 and COM3
	share IRQ4, and COM2 and COM4 share IRQ3.
	
	The following are the addresses for the Microsoft Mouse:
	
	  SERIAL MOUSE
	  ============
	
	  Port Assignments    Address Ranges
	  ----------------    --------------
	  COM1                3F8H-3FFH
	  COM2                2F8H-2FFH
	
	  BUS MOUSE (BUS INTERFACE BOARD SETTINGS)
	  ========================================
	
	  Primary InPort Range
	  --------------------
	  23CH-23FH
	
	  Secondary InPort Range
	  ----------------------
	  238H-23BH
	
	Additional query words: 3.0 3.0a 3.00 3.00a 3.1 3.10 3.11 pointing device
	
	======================================================================
	Keywords          : win31 win95 
	Technology        : kbAudDeveloper kbWin3xSearch kbWin95search kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11,95
	
	=============================================================================
	
