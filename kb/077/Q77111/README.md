---
layout: page
title: "Q77111: Running AutoResume with Toshiba T2000SX/T3100SX"
permalink: /kb/077/Q77111/
---

## Q77111: Running AutoResume with Toshiba T2000SX/T3100SX

	Article: Q77111
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Included with the First Time Package that comes with the Toshiba T2000SX,
	T2000SXe, and T3100SX computers is an addendum that details using the AutoResume
	feature of the computer with Windows 3.0. This feature only applies to enhanced
	mode.
	
	MORE INFORMATION
	================
	
	The file BIOSXLAT.386 is a virtual mode device driver for Windows 3.0. Using
	this device driver will allow the AutoResume feature of a Toshiba T3100SX or
	T2000SX to function correctly while running Windows 3.0 in 386 enhanced mode.
	
	This file does NOT support AutoResume in standard mode or real mode (that is
	invoking "win /s" or "win /r").
	
	Installation
	------------
	
	1. Copy the file BIOSXLAT.386 to the main Windows directory, (C:\WINDOWS by
	  default).
	
	2. Using a text editor, modify the Windows SYSTEM.INI file in the [386Enh]
	  section as follows: Locate:
	
	  device=*biosxlat
	
	  Replace with:
	
	  device=biosxlat.386
	
	  Add a .386 extension and remove the asterisk.
	
	NOTE: Windows now automatically loads the AutoResume driver. This allows the
	AutoResume feature to function correctly when a normal power-off occurs while
	you are in Windows and running in 386 enhanced mode.
	
	Additional query words: 3.00 3.00a auto resume start
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
