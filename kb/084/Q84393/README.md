---
layout: page
title: "Q84393: Error Messages When Installing Windows 3.1 on a Compudyne 286"
permalink: /kb/084/Q84393/
---

## Q84393: Error Messages When Installing Windows 3.1 on a Compudyne 286

	Article: Q84393
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you receive either of the following error messages when you attempt to
	install the Microsoft Windows operating system version 3.1 on a Compudyne
	286/16, you need to reconfigure your CMOS settings:
	
	  Incorrect DOS Version
	
	  -or-
	
	  Standard Mode Fault Outside of MS-DOS Extender
	
	MORE INFORMATION
	================
	
	On a Compudyne 286/16, you may need to turn off the Turbo mode to make Windows
	3.1 install correctly. The following steps allow you to change the Turbo mode in
	the CMOS settings:
	
	1. Press CTRL+ALT+DEL after the memory check.
	
	2. Choose Speed Select.
	
	3. Select Low. This lowers the clock speed from 16MHz to 12MHz.
	
	4. Press F10 to save changes.
	
	5. Press F5 to exit CMOS Setup.
	
	For additional information, please contact Compudyne.
	
	The Compudyne 286/16 is manufactured by Compudyne, vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 286/16 16Mhz
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
