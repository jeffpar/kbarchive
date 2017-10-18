---
layout: page
title: "Q123145: Changing the Keyboard in Arabic, Hebrew, &amp; Greek Windows"
permalink: kb/123/Q123145/
---

## Q123145: Changing the Keyboard in Arabic, Hebrew, &amp; Greek Windows

	Article: Q123145
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Arabic, Hebrew, and Greek versions of Windows version 3.1, you can can
	change the keyboard language dynamically.
	
	The WM_KEYBOARD_CHANGE and WM_LANGUAGE_CHANGE messages are sent to applications
	to inform them of the language change.
	
	WM_LANGUAGE_CHANGE is sent prior to changing the keyboard language. It is not
	sent it to the topmost window of the active application. It should be ignored by
	the application, unless for some reason the application wishes to stop the
	change of language. wParam holds either KEYB_LATIN or KEYB_BIDI. lParam is
	undefined.
	
	WM_KEYBOARD_CHANGE is sent to the window with the focus whenever the keyboard
	language changes. It is sent to the active window. wParam holds either
	KEYB_LATIN or KEYB_BIDI. lParam is undefined.
	
	Additional query words: 3.10 BIDI MESDK Middle East
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
