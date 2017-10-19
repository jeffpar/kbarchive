---
layout: page
title: "Q35767: HOWTO: Obtain an Application's Instance Handle"
permalink: /kb/035/Q35767/
---

## Q35767: HOWTO: Obtain an Application's Instance Handle

	Article: Q35767
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatform kbGrpDSUser kbWndw
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many Windows API functions require an application's instance handle as a
	parameter. This article describes three methods that an application can use to
	obtain its instance handle.
	
	MORE INFORMATION
	================
	
	Depending on the situation, an application might use any of the following three
	methods to obtain its instance handle:
	
	1. The hInstance parameter to the WinMain procedure is the application's
	  instance handle. The application can save this value in a global variable,
	  making it available throughout the application.
	
	2. The lParam parameter of the WM_CREATE message points to a CREATESTRUCT data
	  structure, and the hInstance field of this structure is the application's
	  instance handle. During the processing of the WM_CREATE message a window
	  procedure can save this value in a static variable, as follows:
	
	     hInst = ((LPCREATESTRUCT)lParam)->hInstance;
	
	  This variable would then be available during all subsequent calls to the
	  window procedure.
	
	3. Given a window handle for one of its windows, an application can obtain its
	  instance handle by calling the GetWindowWord function:
	
	     GetWindowWord(hWnd, GWW_HINSTANCE)
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbGrpDSUser kbWndw 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
