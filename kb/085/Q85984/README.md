---
layout: page
title: "Q85984: Epson LQ-950 Prints Jagged Characters or Vertical Lines"
permalink: /kb/085/Q85984/
---

## Q85984: Epson LQ-950 Prints Jagged Characters or Vertical Lines

	Article: Q85984
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print from Microsoft Windows 3.1 to an Epson LQ-950, jagged vertical
	lines or characters may result.
	
	CAUSE
	=====
	
	This problem may be caused by the bidirectional printing option within the Epson
	LQ-950 printer.
	
	RESOLUTION
	==========
	
	On the motherboard of the Epson LQ-950 printer, there are two banks of switches.
	To correct this problem, on bank 1, turn switch 5 to "On" to set the printer to
	unidirectional mode instead of bidirectional mode.
	
	MORE INFORMATION
	================
	
	The jagged lines and character problem usually occurs with specific characters
	or vertical lines within the document, not randomly. The problem is in the way
	the LQ-950 interfaces with different drivers used to emulate it, such as the
	Epson LQ-2500 or LQ-2550. It will print these graphics in a bidirectional
	pattern, that is, it is approaching the area from a different direction every
	other time. This creates the appearance of a jagged edge because graphical
	characters are printed out of alignment.
	
	
	Additional query words: 3rdparty 3.10 Setup Mode Directional 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
