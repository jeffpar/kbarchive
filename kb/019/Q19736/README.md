---
layout: page
title: "Q19736: HOWTO: Split Scrolling Using Two Windows"
permalink: /kb/019/Q19736/
---

## Q19736: HOWTO: Split Scrolling Using Two Windows

	Article: Q19736
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbScrollBar kbSDKPlatform kbWndw
	Last Modified: 09-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Create a window that has the following characteristics:
	
	- a parent window that is a tiled window with both horizontal and vertical
	  scroll bars.
	
	- a child window that is a title, one line long, across the top of the parent
	  window, and is stationary (that is, it does not scroll off the screen when
	  the tiled window is scrolled vertically).
	
	Create two child windows:
	
	- the first child window should be one line.
	
	- the second child window should be the rest of the client area.
	
	Then, perform all of the scrolling in the second child window.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbScrollBar kbSDKPlatform kbWndw 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbhowto
	
	=============================================================================
	
