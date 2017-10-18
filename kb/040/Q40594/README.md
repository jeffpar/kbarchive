---
layout: page
title: "Q40594: Accessing the COM3: or COM4: Port"
permalink: kb/040/Q40594/
---

## Q40594: Accessing the COM3: or COM4: Port

	Article: Q40594
	Product(s): Microsoft Programming Utilities
	Version(s): 1.0,1.5,6.0,6.0a,6.0ax; MS-DOS:7.0
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	- Microsoft C/C++ for MS-DOS, version 7.0 
	- Microsoft Visual C++, versions 1.0, 1.5 
	-------------------------------------------------------------------------------
	
	If MS-DOS, the ROM BIOS, and the hardware all support COM3: and COM4:
	as valid devices, then the MS-DOS MODE command may be used to redirect
	communication to access the ports from within Microsoft C. For
	example, to redirect COM3: to COM1:, give the following command:
	
	  mode COM3:=COM1:
	
	NOTE: This process has not been tested by Microsoft and is offered
	only as a suggestion.
	
	Versions of MS-DOS earlier than MS-DOS version 3.3 do not recognize
	the COM3: and COM4: ports. Versions beginning with MS-DOS version 3.3
	allow some systems to access the ports, but the ROM BIOS also must
	support the extra communications port hardware.
	
	The serial port hardware must also allow setting of IRQ and memory
	addresses to allow multiple serial ports. In some cases only two ports
	can actually be used, even though more are physically available.
	Frequently a choice has to be made between COM1: and COM3: and between
	COM2: and COM4: since control lines and addresses are shared. A
	manufacturer's hardware reference is usually needed to determine the
	exact settings for a given situation.
	
	Additional query words: kbinf 6.00 6.00a 6.00ax 7.00 1.00 1.50
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbPTProdChange kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbCComp600DOS kbCComp600aDOS kbCComp600axDOS kbCVC700DOS
	Version           : :1.0,1.5,6.0,6.0a,6.0ax; MS-DOS:7.0
	
	=============================================================================
	
