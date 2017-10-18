---
layout: page
title: "Q82378: 24-Bit DIBs Draw Very Slowly When Running on an 8514"
permalink: kb/082/Q82378/
---

## Q82378: 24-Bit DIBs Draw Very Slowly When Running on an 8514

	Article: Q82378
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the 8514 video driver included with the Microsoft Windows, a 24-bit
	DIB (device independent bitmap) draws slowly because of 24-bit to 8-bit color
	matching.
	
	MORE INFORMATION
	================
	
	24-Bit DIBs paint or appear slow on machines configured for the 8514 driver, and
	it may appear as though the machine has stopped. Actually, the machine is merely
	color-matching every pixel in the DIB. The video driver calls into the GDI
	(graphical device interface) for each pixel. This process causes the GDI to
	search the current system palette, containing 256 color elements, for the
	closest matching color. This color value is then returned to the driver. The
	slowdown occurs with any operation that converts a 24-bit DIB to an 8-bit DIB.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
