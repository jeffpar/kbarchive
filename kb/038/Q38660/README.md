---
layout: page
title: "Q38660: Softerm Disables Serial Mouse under Windows"
permalink: kb/038/Q38660/
---

## Q38660: Softerm Disables Serial Mouse under Windows

	Article: Q38660
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using the Softerm terminal emulation program and have a host
	connection that is on COM1 and a serial mouse on COM2, Softerm disables the
	serial mouse under Microsoft Windows.
	
	CAUSE
	=====
	
	This problem occurs because Softerm initializes both COM ports and Windows has
	no way of reinitializing them.
	
	WORKAROUND
	==========
	
	1. From the command line, start Softerm with a parameter of "/c" (without the
	  quotation marks). This returns a screen with I/O addresses/status.
	
	2. Fill the COM2 location (02F8) with zeros (zero it out).
	
	You then can run the serial mouse under Windows.
	
	MORE INFORMATION
	================
	
	Softerm by Softronics is a terminal emulation program that connects a PC to a
	larger host computer by causing the PC to emulate a terminal.
	
	For more information, contact Softronics.
	
	The product included here is manufactured by Softronics, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.00 3.00a 3.10 3.11 3rdparty win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:2.x,3.0,3.0a,3.1,3.11
	
	=============================================================================
	
