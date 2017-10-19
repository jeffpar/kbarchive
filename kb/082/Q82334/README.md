---
layout: page
title: "Q82334: WordPerfect 5.1 Mouse Problems in Window Mode"
permalink: /kb/082/Q82334/
---

## Q82334: WordPerfect 5.1 Mouse Problems in Window Mode

	Article: Q82334
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If WordPerfect is run in a window under the Microsoft Windows, the mouse pointer
	in the WordPerfect window may not match the mouse pointer in Windows.
	
	When WordPerfect is run in a window, a small black bar appears across the bottom
	of the window.
	
	CAUSE
	=====
	
	WordPerfect version 5.1 performs its own internal mouse acceleration.
	
	RESOLUTION
	==========
	
	To correct this problem, disable WordPerfect's mouse acceleration feature and
	then "trap" the mouse during each WordPerfect session.
	
	To disable WordPerfect mouse acceleration and "trap" the mouse, perform the
	following steps:
	
	1. In WordPerfect, press SHIFT+F1.
	
	2. Press M for Mouse.
	
	3. Press A for Acceleration Factor.
	
	4. Set the Acceleration Factor to 1.
	
	5. Press ENTER three times to return to your document.
	
	6. Enlarge the WordPerfect window to fill the entire screen.
	
	7. Move the Windows mouse pointer into the WordPerfect window, and then move it
	  to the far-right edge of the window.
	
	8. Move the mouse pointer to the far-left edge of the window.
	
	9. Move the pointer back to the center of the window, and then move it down to
	  the bottom edge.
	
	10. Move the pointer up to the upper-left corner of the window.
	
	The Windows mouse pointer and the WordPerfect mouse pointer should now be in the
	same location.
	
	WordPerfect is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	
	Additional query words: 3.10 3.11 word perfect word-perfect wp
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
