---
layout: page
title: "Q68898: Maximized MS-DOS Application Window Does Not Fill Screen"
permalink: kb/068/Q68898/
---

## Q68898: Maximized MS-DOS Application Window Does Not Fill Screen

	Article: Q68898
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A character-based MS-DOS application does not fill the entire screen when it is
	running in a window. To make the application fill the entire screen, run the
	application in the full-screen mode.
	
	MORE INFORMATION
	================
	
	An MS-DOS application running in a window fills the width of the screen when
	maximized; however, the application fills only a percentage of the height:
	
	Screen Resolution      Approximate Percentage of Screen
	-----------------      --------------------------------
	
	EGA (640 x 200)        85%
	VGA (640 x 480)        85%
	VGA (800 x 600)        50%
	VGA (1024 x 768)       40%
	
	This behavior occurs because a standard MS-DOS screen only displays 25 lines of
	characters at a time. When an MS-DOS application is running in a window, the
	regular MS-DOS screen font is replaced with a smaller Windows font. Unlike a
	Windows application, which displays more lines of text when the window it's in
	gets larger, the MS-DOS application only displays 25 lines at a time.
	
	Additional query words: 3.00 3.00a 3.10 3.11 dos
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
