---
layout: page
title: "Q82570: Text Is Clipped in Micrografx Designer 3.1"
permalink: /kb/082/Q82570/
---

## Q82570: Text Is Clipped in Micrografx Designer 3.1

	Article: Q82570
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	TrueType fonts in Microsoft Windows operating system version 3.1 are clipped in
	Micrografx Designer 3.1.
	
	The problem is caused by Designer using the printer width, rather than the screen
	width. TrueType is not scaling well from the printer to screen with certain
	drivers. The HPPCL4 driver works correctly.
	
	Two solutions are:
	
	- Use the fonts that ship with Designer 3.1 and not the TrueType fonts.
	
	  -or-
	
	- Choose a different printer for output.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3.11 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
