---
layout: page
title: "Q82386: Using Turbo Pascal with Windows"
permalink: /kb/082/Q82386/
---

## Q82386: Using Turbo Pascal with Windows

	Article: Q82386
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Borland Turbo Pascal Version 6.0 is compatible with Microsoft Windows when
	Windows runs under the conditions recommended by Borland.
	
	MORE INFORMATION
	================
	
	According to "Borland Language Express," a technical support journal for Borland
	products, the following procedures should be implemented for running Borland
	Turbo Pascal 6.0 under Microsoft Windows versions 3.0 and 3.1:
	
	1. Use a PIF file to start Turbo Pascal running in a full screen.
	
	2. If MS-DOS version 5.0 memory drivers are being used, add the RAM parameter to
	  the EMM386 device statement as follows:
	
	  device=emm386.exe ram
	
	3. Use the -x- option with the Turbo IDE (independent development environment)
	  if EMS memory is not available.
	
	4. For mouse support, load the mouse driver from MS-DOS in the AUTOEXEC.BAT or
	  CONFIG.SYS file.
	
	NOTE: The status bar in Turbo Pascal for Windows does not repaint properly when
	run under the Microsoft Windows operating system version 3.1.
	
	
	The Borland products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	REFERENCES
	==========
	
	"Borland Language Express," volume 2, no. 1, page 28
	
	Additional query words: 3.00 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
