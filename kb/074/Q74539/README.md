---
layout: page
title: "Q74539: HOWTO: Draw the Icon for a Minimized Application"
permalink: /kb/074/Q74539/
---

## Q74539: HOWTO: Draw the Icon for a Minimized Application

{% raw %}

	Article: Q74539
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbIcon kbGrpDSUser kbOSWin310 kbWndwProp
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The text below describes how an application developed for the Microsoft Windows
	graphical environment can draw its own icon when it is minimized. An application
	can use these techniques to draw different icons to indicate its state.
	
	In Windows version 3.1, an application can initiate a dynamic data exchange (DDE)
	conversation with the Windows Program Manager to determine which icon the user
	has associated with an application and can then draw that icon using the
	following techniques.
	
	MORE INFORMATION
	================
	
	To draw its own icon when minimized, a Windows-based application performs the
	following five steps:
	
	1. When the application registers its main window's window class, specify NULL
	  as the value of the hIcon member of the WNDCLASS data structure.
	
	2. Create a static variable to store the icon the application will use, as
	  follows:
	
	        HICON hIcon;
	
	  Initialize this variable to the value returned from the CreateIcon or LoadIcon
	  function.
	
	3. To draw the icon, process the WM_PAINT message in the main window's window
	  procedure as follows:
	
	        case WM_PAINT:
	           {
	           PAINTSTRUCT ps;
	
	           if (IsIconic(hWnd))
	              {
	              BeginPaint(hWnd, (LPPAINTSTRUCT)&ps);
	
	              // Paint the desktop window background.
	              DefWindowProc(hWnd, WM_ICONERASEBKGND, (WORD)ps.hdc, 0L);
	
	              // Draw the icon on top of it.
	              DrawIcon(ps.hdc, 0,0, hIcon);
	
	              EndPaint(hWnd, (LPPAINTSTRUCT)&ps);
	              }
	           else
	              return DefWindowProc(hWnd, message, wParam, lParam);
	           }
	
	4. To prevent a screen flash when the application draws the icon, process the
	  WM_ERASEBKGND message in the main window's window procedure, as follows:
	
	        case WM_ERASEBKGND:
	           if (IsIconic(hWnd))
	
	              // Do not erase the background now. When the application
	              // paints its icon, it will erase the background.
	              return TRUE;
	           else
	              return DefWindowProc(hWnd, message, wParam, lParam);
	
	5. Process the WM_QUERYDRAGICON message in the main window's window procedure.
	  When the user is about to drag a window that has no icon defined for its
	  window class, Windows sends it a WM_QUERYDRAGICON message. The code below
	  causes Windows to create a dragging cursor based on the specified icon.
	  Windows automatically converts a color icon to a monochrome cursor.
	
	        case WM_QUERYDRAGICON:
	           return (LONG)(WORD)hIcon;
	           break;
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbIcon kbGrpDSUser kbOSWin310 kbWndwProp 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
