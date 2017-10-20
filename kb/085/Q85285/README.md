---
layout: page
title: "Q85285: PRB: Petzold's COLORS1 Sample Application Consumes Resources"
permalink: /kb/085/Q85285/
---

## Q85285: PRB: Petzold's COLORS1 Sample Application Consumes Resources

{% raw %}

	Article: Q85285
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the COLORS1 sample application on pages 227-232 of the book "Programming
	Windows 3" by Charles Petzold (Microsoft Press) is run under Windows 3.1, the
	amount of free system resources available after the program is complete is less
	than the amount available before running the program.
	
	CAUSE
	=====
	
	The program allocates system resources and does not free them.
	
	RESOLUTION
	==========
	
	Make the following modifications to the WndProc function in the COLORS1 sample:
	
	1. In the code that processes the WM_VSCROLL message, find the following:
	
	        DeleteObject (GetClassWord (hwnd, GCW_HBRBACKGROUND));
	        SetClassWord (hwnd, GCW_HBRBACKGROUND,
	             CreateSolidBrush (RGB (color[0], color[1], color[2])));
	
	  Insert the following code in its place:
	
	        DeleteObject (SetClassWord (hwnd, GCW_HBRBACKGROUND,
	             CreateSolidBrush (RGB (color[0], color[1], color[2]))));
	
	2. In the code that processes the WM_DESTROY message, find the following:
	
	        DeleteObject (GetClassWord (hwnd, GCW_HBRBACKGROUND));
	
	  Insert the following code in its place:
	
	        DeleteObject (SetClassWord (hwnd, GCW_HBRBACKGROUND,
	             GetStockObject (WHITE_BRUSH)));
	
	MORE INFORMATION
	================
	
	In both cases above, the call to DeleteObject fails because the brush is
	selected into a device context (DC). Each time the user moves one of the scroll
	bars, the program creates a new brush from the GDI module's heap space. Once the
	GDI heap reaches its limit of 64 kilobytes, none of the applications running in
	the system can create GDI objects.
	
	Under the debugging version of Windows 3.1, the following error message is
	displayed on the debugging terminal each time the erroneous code is executed:
	
	  err COLORS1 GDI: GDI:Attempt to delete object owned by system
	
	The resolution to this situation is to select a different brush into the DC, and
	then to delete the old brush. Because the SetClassWord function returns the
	previous value for the specified class word, it is very straightforward to pass
	the return value from SetClassWord to DeleteObject.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
