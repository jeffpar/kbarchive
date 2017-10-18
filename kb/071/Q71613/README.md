---
layout: page
title: "Q71613: Epson LQ Series Internal ANSI and Windows' ANSI Mismatch"
permalink: kb/071/Q71613/
---

## Q71613: Epson LQ Series Internal ANSI and Windows' ANSI Mismatch

	Article: Q71613
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Epson LQ-500, 850, 1050, and 2500 have internal font capability to print
	extended ANSI characters (character values 128 through 255), but their extended
	character values are not the same as the Windows 3.0 internal fonts character
	values.
	
	MORE INFORMATION
	================
	
	For example:
	
	Using the Epson's Roman 10 cpi font and pressing ALT+0248 from Windows shows
	Windows ANSI 248 on the screen but prints as ANSI 111.
	
	Using the Windows font TMS RMN 10 point and pressing ALT+0248 from Windows shows
	Windows ANSI 248 on the screen and prints the same.
	
	There are two possible solutions to this problem:
	
	- Use Windows' fonts instead of internal printer fonts when you need these
	  characters.
	
	- Instead of using Windows' extended ANSI characters, use the OEM character set
	  built into the printer, as follows:
	
	  a. In the printer's manual, look up the extended ANSI code for the character
	     desired.
	
	  b. Instead of pressing the Windows code (for example, ALT+0248), press the
	     printer OEM code (for example, ALT+216). The character displayed may or
	     may not look correct on the screen, but it will print correctly.
	
	The Epson products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	REFERENCES
	==========
	
	"Microsoft Windows User's Guide." version 3.0, page 567-8.
	
	Additional query words: 3.00 win30 3.00a winfont
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
