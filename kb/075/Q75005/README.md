---
layout: page
title: "Q75005: Handling NULL lpDrawMode in a Display Driver"
permalink: kb/075/Q75005/
---

## Q75005: Handling NULL lpDrawMode in a Display Driver

	Article: Q75005
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Windows graphical environment, the graphics device interface
	(GDI) should never pass a NULL lpDrawMode to a display driver. However, when a
	printer driver uses the brute interface to call the BitBlt routine in the
	display driver, the calling printer driver provides the parameters, including
	lpDrawMode, to the display driver. In this case, GDI cannot prevent the driver
	from sending incorrect parameters.
	
	For this reason, a display driver must be robust and must not crash when it
	receives incorrect arguments.
	
	The source code for the 8514/A display driver, included with the Microsoft
	Windows Device Development Kit (DDK), provides a good example of how to handle
	operations with a NULL lpDrawMode parameter.
	
	Additional query words: 3.00 3.10 3.11 DDKDISPLAY
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWFWSearch kbWinDDK300 kbWinDDK310 kbWFW311
	Version           : :3.0,3.1; WINDOWS:3.11
	
	=============================================================================
	
