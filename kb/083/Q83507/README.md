---
layout: page
title: "Q83507: Using Dell Notebooks with External Monitors"
permalink: /kb/083/Q83507/
---

## Q83507: Using Dell Notebooks with External Monitors

	Article: Q83507
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Microsoft Windows version 3.1 or 3.11 VGA video driver on
	a Dell notebook, Windows may switch unexpectedly between the LCD screen and the
	external monitor when you are running MS-DOS-based applications in 386 enhanced
	mode.
	
	WORKAROUND
	==========
	
	To work around this problem, follow these steps:
	
	1. Quit Windows and change to the Windows directory.
	
	2. Type the following command at the MS-DOS command prompt and then press
	  ENTER:
	
	  setup
	
	3. In the Display field, select the VGA (Version 3.0) display driver.
	
	Note that this change may cause some features (such as the mouse pointer in
	MS-DOS windows) not to function correctly.
	
	MORE INFORMATION
	================
	
	This problem may occur when the you press a keyboard hot key to switch between
	the LCD screen and external monitor when Windows is running.
	
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3.11 dell notebook LCD external
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
