---
layout: page
title: "Q81482: Windows: Tandy 2102 Prints Sixes or Random Characters"
permalink: /kb/081/Q81482/
---

## Q81482: Windows: Tandy 2102 Prints Sixes or Random Characters

	Article: Q81482
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you print with a Tandy 2102 dot-matrix printer with the IBM ProPrinter XL24
	emulation in Microsoft Windows 3.0, the resulting output may appear as lines of
	sixes (66666, etc.) or other random characters.
	
	Output from the MS-DOS level appears normal.
	
	CAUSE
	=====
	
	You are using a generic or an IBM parallel printing cable. This occurs because
	the cable, by design or modification, has pin 33 disabled. Windows uses this pin
	to help control printing.
	
	RESOLUTION
	==========
	
	To correct this problem, obtain a new Tandy Parallel Printer cable (catalog
	#26-0227). A possible workaround is to use the LPT1.OS2 port.
	
	MORE INFORMATION
	================
	
	For additional information, contact Tandy technical support.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	
	Additional query words: 3.00 3.00a sixes 6's 6s 66
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
