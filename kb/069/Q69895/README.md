---
layout: page
title: "Q69895: PRB: Activating Full-Screen DOS App from Icon in Enhanced Mode"
permalink: /kb/069/Q69895/
---

## Q69895: PRB: Activating Full-Screen DOS App from Icon in Enhanced Mode

	Article: Q69895
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Windows enhanced mode, when an application calls the OpenIcon or
	ShowWindows functions to activate a full-screen MS-DOS application from an icon,
	the activation fails. These functions perform as documented in real and standard
	mode.
	
	RESOLUTION
	==========
	
	To avoid this problem, simulate the result of an ALT+TAB key combination on the
	MS-DOS application icon: Send a WM_ACTIVATE message to the MS-DOS application,
	and then specify its handle in a call to ShowWindow function. For example:
	
	     SendMessage(hDOSApp, WM_ACTIVATE, 1, MAKELONG(hDOSApp, TRUE));
	     ShowWindow(hDOSApp, SW_SHOWNORMAL);
	
	When the application sends the WM_ACTIVATE message, wParam is set to 1 because
	the application is being invoked by simulating the keyboard. The high-order word
	of lParam is set to TRUE (non-zero) because the MS-DOS application is
	represented by an icon.
	
	The method works in all three Windows modes for windowed and full- screen MS-DOS
	applications.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
