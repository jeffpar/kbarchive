---
layout: page
title: "Q31075: PRB: Window Dragged Close to Screen Edge Becomes Invisible"
permalink: /kb/031/Q31075/
---

## Q31075: PRB: Window Dragged Close to Screen Edge Becomes Invisible

	Article: Q31075
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatform kbWndw kbWndwProp
	Last Modified: 09-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the user uses the mouse to drag the left edge of a window (or dialog box)
	within a few pixels of the right edge of the display and releases the mouse
	button, the window moves completely off the display. The user can't use the
	mouse to bring the window back into the display.
	
	CAUSE
	=====
	
	The window is created with the CS_BYTEALIGNCLIENT or CS_BYTEALIGNWINDOW class
	style bit set. When the user releases the mouse button, the window moves right
	to byte-align itself. However, because the byte boundary is off the screen, the
	entire window becomes invisible.
	
	RESOLUTION
	==========
	
	There are two methods to work around this problem:
	
	- Give the window a system menu. This will prevent it from disappearing off the
	  right edge of the screen.
	
	  -or-
	
	- Calculate the size of any window that has a caption bar to conform to the
	  following formula:
	
	     horizontal_size modulo 8 <= 4
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbWndw kbWndwProp 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	
