---
layout: page
title: "Q79648: The Complete Scanner Does Not Work Properly in Enhanced Mode"
permalink: kb/079/Q79648/
---

## Q79648: The Complete Scanner Does Not Work Properly in Enhanced Mode

	Article: Q79648
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running Microsoft Windows in enhanced mode and you attempt to scan
	a document with the Complete Scanner, you can't see the image on the screen.
	
	CAUSE
	=====
	
	According to Complete technical support, the Complete Scanner does not work
	properly with Windows 3.0 in enhanced mode when the scanner is connected through
	a scanner port on the Complete Fax Card.
	
	NOTE: This applies only when the scanner is connected through a scanner port on
	the Complete Fax Card.
	
	WORKAROUND
	==========
	
	According to Complete technical support, you can work around this problem by
	adding the following line to the [386Enh] section of the SYSTEM.INI file:
	
	     COMXIRQ=false
	
	where X equals the COM port to which the card is assigned)
	
	This disables the modem when Windows runs in enhanced mode and allows the scanner
	to work correctly.
	
	MORE INFORMATION
	================
	
	The Complete Scanner is an MS-DOS application and should work correctly in real
	and standard modes, or outside of Windows.
	
	The Complete products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.00 3.00a KBHW winmem scanner 3rdParty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
