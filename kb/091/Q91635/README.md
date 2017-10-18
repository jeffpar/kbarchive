---
layout: page
title: "Q91635: ATM Version 2.02 Information"
permalink: kb/091/Q91635/
---

## Q91635: ATM Version 2.02 Information

	Article: Q91635
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the problems corrected in Adobe Type Manager (ATM)
	version 2.02.
	
	MORE INFORMATION
	================
	
	According to Adobe Systems, version 2.02 of ATM corrects the following
	problems:
	
	- When you type, occasionally the cursor moves but does not display the
	  character on the screen. This problem may be referred to as "invisible
	  fonts."
	
	- Random problems that cause your system to fail occur at address 0003:4E##
	  (where ## are any two characters).
	
	- Computers using the 386SLC chip fail in 386 enhanced mode.
	
	- When you print to a Lexmark 4029 in PPDS mode, the computer fails. (To
	  correct this problem, the you must upgrade the printer driver to version
	  3.03. This upgrade is available from Lexmark.)
	
	Version 2.02 of ATM includes the following functionality:
	
	- ATM now dithers text in the same manner as the Windows GDI.
	
	- ATM now has better support for third-party fonts, such as the More Fonts
	  package.
	
	- ATM now correctly defers PCL bitmaps to PCL4 printers, such as
	  Hewlett-Packard LaserJet II.
	
	Version 2.02 of ATM does not correct the following problem:
	
	- The generic text driver does not print when ATM is active. (In this case,
	  turn off ATM or use the Windows 3.0 generic text driver).
	
	For more information or to obtain the 2.02 ATM upgrade, contact Adobe Systems
	technical support.
	
	ATM is manufactured by Adobe Systems, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3rdparty 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
