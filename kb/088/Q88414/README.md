---
layout: page
title: "Q88414: How to Maximize Setup Toolkit Window"
permalink: /kb/088/Q88414/
---

## Q88414: How to Maximize Setup Toolkit Window

	Article: Q88414
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Setup Toolkit for Windows does not provide any options or
	functions for maximizing the frame window. The frame window will always be
	initially displayed as an unmaximized window with a caption.
	
	However, you can call the Windows ShowWindow and SetWindowLong application
	programming interface (API) functions from a script to maximize the frame and
	remove the caption. If the calls are made at the beginning of the script, there
	will be only a quick flicker as the window size and border are changed. The
	following code can be used to do this:
	
	  ''following were taken from windows.h. &H means they're hex
	  CONST WS_VISIBLE=&H10000000
	  CONST WS_BORDER =&H00800000
	  CONST WS_CLIPCHILDREN =&H02000000
	  CONST GWL_STYLE =-16
	  CONST SW_SHOWMAXIMIZED=3
	
	  DECLARE FUNCTION ShowWindow  LIB "user.exe" (hWnd%,iShow%) AS INTEGER
	  DECLARE FUNCTION SetWindowLong LIB "user.exe" (hWnd%, offset%, style&)
	                  AS LONG     ''this declaration must all be on one line
	
	  .
	  .
	  .
	  hWnd%=HwndFrame()
	  i1&=SetWindowLong(hWnd%,GWL_STYLE,WS_VISIBLE+WS_BORDER+WS_CLIPCHILDREN)
	  j1%=ShowWindow(hWnd%,SW_SHOWMAXIMIZED)
	  .
	  .
	  .
	
	Additional query words: 3.10 MSSetup tool kit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
