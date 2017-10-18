---
layout: page
title: "Q81708: HOWTO: Create Applications that Task Manager Does Not Tile"
permalink: kb/081/Q81708/
---

## Q81708: HOWTO: Create Applications that Task Manager Does Not Tile

	Article: Q81708
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatform kbGrpDSUser kbWndw
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A variety of applications that provide various types of information have been
	developed for the Windows graphical environment. Depending on the amount of
	information that the application presents, an application icon may provide
	enough screen space to show the information. The FREEMEM program in Chapter 5 of
	Charles Petzold's book "Programming Windows 3" (Microsoft Press) demonstrates
	presenting status data on an icon.
	
	When an application has more data than can be readily represented on an icon, the
	user will often size the application to provide just the information necessary,
	and place the application's window in a convenient place on the screen. However,
	in this situation, if the user selects Cascade or Tile from the Task Manager
	window to arrange the active applications, the status window will probably
	change size and position on the screen.
	
	This article presents a technique that an application can use to prevent itself
	from being cascaded or tiled by the Task Manager.
	
	MORE INFORMATION
	================
	
	To prevent an application from changing position when the Task Manager
	rearranges windows, perform the following four steps:
	
	1. Create a minimum window procedure, called DummyWndProc, with the following
	  code:
	
	        long FAR PASCAL DummyWndProc(HWND hwnd, WORD message,
	                                     WORD wParam, LONG lParam)
	        {
	           return DefWindowProc(hwnd, message, wParam, lParam);
	        }
	
	2. Register a minimum window class, DummyClass, that uses DummyWndProc as the
	  class procedure. Specify the application's icon as the class icon.
	
	3. Create an invisible pop-up window of class DummyClass. Specify the
	  application's name for the window caption text. Optionally, the coordinates
	  for this invisible window can specify a location off the screen.
	
	4. In the CreateWindow call for the top-level visible window, specify the window
	  from step 3 as the hwndParent parameter.
	
	There is one caveat to using this method. If an application uses PostMessage with
	the hwnd parameter set to -1 to post a message to all applications, the
	invisible pop-up window will receive the message. If the application depends on
	any globally posted message, it is necessary to modify the DummyWndProc code
	above.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbGrpDSUser kbWndw 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbhowto
	
	=============================================================================
	
