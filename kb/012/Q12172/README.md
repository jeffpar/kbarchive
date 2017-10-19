---
layout: page
title: "Q12172: HOWTO: How to Change a Window's Parent"
permalink: /kb/012/Q12172/
---

## Q12172: HOWTO: How to Change a Window's Parent

	Article: Q12172
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatform kbWndw kbWndwProp
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
	
	The following information describes how to change a window's parent in Windows
	versions 2.x and 3.x.
	
	The correct way to do this in Windows versions 2.x is to destroy the child and
	then re-create the child with the proper handle to the parent. The following
	steps can be used to do this:
	
	1. Perform a ShowWindow(hWnd, HIDE_WINDOW) call.
	
	2. Change the handle to the child using the SetWindowWord function.
	
	3. Perform a ShowWindow(hWnd, SHOW_WINDOW) call.
	
	NOTE: Microsoft does not recommend that this method and does not guarantee it to
	work in future releases of Windows.
	
	In Windows versions 3.x, the SetParent function should be used to set the parent
	of a window.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbWndw kbWndwProp 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbhowto
	
	=============================================================================
	
