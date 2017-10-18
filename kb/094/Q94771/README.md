---
layout: page
title: "Q94771: Use Epson FX-80 Driver with Star SG-10 Printer"
permalink: kb/094/Q94771/
---

## Q94771: Use Epson FX-80 Driver with Star SG-10 Printer

	Article: Q94771
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Although the Star Micronics model SG-10 printer is not a supported printer in
	Windows 3.1, it is possible to configure this printer so it prints correctly.
	Setting the printer to use the IBM character set and using the Epson FX-80
	printer driver allows this printer to print correctly in Windows.
	
	MORE INFORMATION
	================
	
	Setting the IBM Character Set
	-----------------------------
	
	The print modes of the SG-10 are changed, with DIP switches located on the right
	side of the printer. There are two banks of switches. The rear bank contains
	eight switches, designated 1-1 through 1-8, from back to front. The forward bank
	contains four switches, designated 2-1 through 2-4, from back to front.
	
	The SG-10 prints correctly when all switches excluding switch 2-2 are in the up
	position. Switch 2-2 must be down. White horizontal bands will appear through
	text and graphics if switch 2-2 is left in the up position.
	
	The Star Micronics products included here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words: 3rdparty 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
