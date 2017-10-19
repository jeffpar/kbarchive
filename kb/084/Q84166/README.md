---
layout: page
title: "Q84166: Incorrectly Detected Coprocessor May Cause Improper Display"
permalink: /kb/084/Q84166/
---

## Q84166: Incorrectly Detected Coprocessor May Cause Improper Display

	Article: Q84166
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a computer's BIOS incorrectly detects a math coprocessor when one is not
	present, improper information may be displayed in areas such as the title bar of
	the Microsoft Windows Calculator program and in other Windows-based programs.
	
	Phoenix technical support has confirmed that some system manufacturers might have
	incorrectly shipped BIOS that supports the Intel 80486DX only, not the BIOS that
	also supports the Intel 80486SX chip. This situation causes the erroneous
	reporting of a math coprocessor on the 80486SX when there is none, and may
	produce these errors.
	
	MORE INFORMATION
	================
	
	The incorrect detection of a math coprocessor can cause problems in Windows. The
	value "-1" may be displayed for the cursor position. Strings such as "sin:" or
	"sqrt:" may be displayed randomly in title bars and other places. The value
	"-1#.QNAN" might be displayed if the Clear button is chosen in Calculator.
	
	To resolve this problem, contact your computer manufacturer, not Phoenix for the
	correct BIOS for your computer system.
	
	The Intel and Phoenix products included here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: calc 3.00 3.00a 3.01 3.10 3.11 coprocessor 387 487 287 Phoenix ep486sx 0.96
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
