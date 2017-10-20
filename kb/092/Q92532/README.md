---
layout: page
title: "Q92532: PRB: Display Monitor Goes Blank After the Logo Display"
permalink: /kb/092/Q92532/
---

## Q92532: PRB: Display Monitor Goes Blank After the Logo Display

{% raw %}

	Article: Q92532
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under the debugging version of Windows, you may see something like "GlobalAlloc
	failed" or some other messages indicating problems, after the logo is displayed.
	Under non-debug Windows, the logo will display, then the screen will clear, then
	nothing else seems to happen. You must press CTRL+ALT+DEL to reset the system.
	
	Note: This should happen only while developing a display driver that implements
	device bitmaps.
	
	CAUSE
	=====
	
	The display driver device returned 0 (zero) to fail a RealizeObject() function
	call after setting the RC_DEVBITS value in the dpRaster member of the GDIINFO
	structure.
	
	RESOLUTION
	==========
	
	Modify the device driver to prevent it from failing the RealizeObject() function
	call. A device driver cannot fail this call under Microsoft Windows 3.1. See
	section 2.1.14 of the 3.1 Device Driver Kit (DDK) "Device Driver Adaptation
	Guide" (DDAG) for more information.
	
	Additional query words: 3.10 DDK DeviceBitmap display
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK310 kbWinDDK311
	Version           : :3.1,3.11
	
	=============================================================================
	

{% endraw %}
