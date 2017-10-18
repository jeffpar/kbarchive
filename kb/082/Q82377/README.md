---
layout: page
title: "Q82377: Borland Applications May Appear to Hang When Installing"
permalink: kb/082/Q82377/
---

## Q82377: Borland Applications May Appear to Hang When Installing

	Article: Q82377
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes Borland's Turbo C++ may appear to stop (hang) when you install Turbo
	C++ from Microsoft Windows File Manager; however, Turbo C++ is not hung. Resize
	the open windows so that the Turbo C++ Setup application icon is visible. Setup
	continues normally.
	
	This also may apply to other Borland products using similar install engines.
	
	MORE INFORMATION
	================
	
	Some third-party products have a Setup program that looks for actions, in this
	case an unnecessary WM_PAINT (to repaint the icon), that tell Setup to continue.
	Under Windows, WM_PAINT is not sent if the application's icon does not need to
	be repainted, as when it is covered by other windows.
	
	Make sure the icon (created by double-clicking the Setup program in File Manager)
	is exposed. Move the icon, or resize any obscuring windows, and Setup continues
	as expected.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
