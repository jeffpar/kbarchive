---
layout: page
title: "Q80125: INFO: Terminating the Creation of an MDI Child Window"
permalink: kb/080/Q80125/
---

## Q80125: INFO: Terminating the Creation of an MDI Child Window

	Article: Q80125
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbMDI kbSDKPlatform kbWndw
	Last Modified: 11-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In an application designed with the Microsoft Windows Multiple Document
	Interface (MDI), there are situations in which it is desirable to destroy an MDI
	child window during the processing of its WM_CREATE message. For example, the
	design of the application may require terminating window creation if a memory
	allocation needed to hold data for an MDI child fails.
	
	Unfortunately, returning -1 to end processing of the WM_CREATE message will not
	cleanly destroy the child window. Similarly, posting a WM_CLOSE message will
	cause the display to flash as the child is drawn, made active, and destroyed.
	This article describes a technique to avoid this unacceptable visual effect.
	
	To avoid the flash, the application can clear the redraw flag for the MDI client
	window. This prevents the MDI client window and its children from painting. The
	remainder of this article contains code to implement this technique.
	
	Before the application processes the MDI child window's WM_CREATE message, it
	does not change its display to reflect the new child window. If the application
	determines that it must abort creating the MDI child window at this time, it
	should clear the MDI client window's redraw flag and post a WM_CLOSE message to
	the child window. When the application processes the WM_DESTROY message, turn
	the redraw flag back on. The following code demonstrates these steps:
	
	     case WM_CREATE:
	
	      ...
	
	         if (DestroyMePolitely)
	             {
	             SendMessage(hWndMDIClient, WM_SETREDRAW, FALSE, 0L);
	             PostMessage(hWnd, WM_CLOSE, 0, 0L);
	             }
	         break;
	
	     ...
	
	     case WM_DESTROY:
	         SendMessage(hWndMDIClient, WM_SETREDRAW, TRUE, 0L);
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbMDI kbSDKPlatform kbWndw 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
