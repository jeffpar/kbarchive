---
layout: page
title: "Q74994: Display Drivers and Background Drawing to Memory Bitmaps"
permalink: kb/074/Q74994/
---

## Q74994: Display Drivers and Background Drawing to Memory Bitmaps

	Article: Q74994
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Windows graphical environment, a display driver must support
	all of its declared capabilities at all times, regardless of the current video
	mode of the adapter. For example, when Windows is running in enhanced mode, a
	display driver can be called to perform graphics operations on a memory bitmap
	while a full-screen MS-DOS (non-Windows) application is running in the
	foreground. This may occur if an application developed for Windows is printing
	in the background, and the graphics device interface (GDI) calls the display
	driver to perform some imaging for the current page.
	
	If the display driver relies on adapter hardware for certain graphics operations,
	but cannot access this hardware due to the current video mode of the adapter,
	then the driver must include "host side" drawing to handle this case.
	
	The 8514/A display driver provides an example of hardware operations emulated in
	host code when drawing to main memory bitmaps. This source code is available in
	the Windows Device Development Kit (DDK) versions 3.0 and 3.1.
	
	Additional query words: 3.00 3.10 DDKDISPLAY
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310 kbWinDDK311
	Version           : :3.0,3.1,3.11
	
	=============================================================================
	
