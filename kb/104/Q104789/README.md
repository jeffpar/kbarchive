---
layout: page
title: "Q104789: DOC: WM_TIMER Case on Page 94 of Guide to Programming"
permalink: /kb/104/Q104789/
---

## Q104789: DOC: WM_TIMER Case on Page 94 of Guide to Programming

	Article: Q104789
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbdocfix kb16bitonly kbSDKPlatform kbWndw kbWndwMsg
	Last Modified: 09-JUN-1999
	
	3.10
	WINDOWS
	kbprg kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Section 4.2.13, page 94, of the Windows SDK "Guide to Programming" manual shows
	how to add WM_TIMER processing to a window procedure. The code in the book is
	actually WM_LBUTTONDBLCLK. This is an error.
	
	Chapter 4 of the "Guide to Programming" manual builds a sample program called
	input. The correct WM_TIMER case is found within INPUT.C, which is in the
	\GUIDE\INPUT directory of the Windows SDK directory. If this is a Visual C++
	installation, INPUT.C will be in the \SAMPLES\INPUT directory.
	
	The correct code is listed below:
	
	     case WM_TIMER:
	
	        wsprintf(TimerText, "WM_TIMER: %d seconds", nTimerCount += 5);
	        InvalidateRect(hWnd, &rectTimer, TRUE);
	        break;
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kbdocfix kb16bitonly kbSDKPlatform kbWndw kbWndwMsg 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
