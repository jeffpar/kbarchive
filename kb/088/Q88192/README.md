---
layout: page
title: "Q88192: INFO: WM_PAINTICON Message Removed from Windows SDK Docs"
permalink: /kb/088/Q88192/
---

## Q88192: INFO: WM_PAINTICON Message Removed from Windows SDK Docs

{% raw %}

	Article: Q88192
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatform kbWndw kbWndwMsg
	Last Modified: 11-JUN-1999
	
	3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The WM_PAINTICON message is not listed in the "Programmer's Reference, Volume 3:
	Messages, Structures, and Macros" for version 3.1 of the Microsoft Windows
	Software Development Kit (SDK). The text below explains this decision and
	provides source code that enables an application to paint its own icon.
	
	MORE INFORMATION
	================
	
	When an application for the Microsoft Windows operating system registers a
	window class, it specifies a handle to an appropriate icon in the hIcon member
	of the WNDCLASS data structure. This can be an application-specific icon loaded
	from the application's resources or the default application icon provided with
	Windows.
	
	If the application includes its own icon, Windows sends a WM_PAINTICON message
	when the user minimizes the application. If the application passes the
	WM_PAINTICON message to the DefWindowProc function, Windows paints the icon in
	the appropriate location.
	
	If the application specifies the default icon or no icon, Windows does not send a
	WM_PAINTICON message when the user minimizes the application; instead, it sends
	a WM_PAINT message. When the application receives the WM_PAINT message, it can
	either pass the message to DefWindowProc so that Windows will paint the default
	icon, or the application can paint the icon dynamically.
	
	Because the application cannot process the WM_PAINTICON message, except to pass
	it to DefWindowProc, it has been removed from the documentation for version 3.1
	of the Windows SDK.
	
	The following code demonstrates how to process the WM_PAINT message to paint the
	icon. Given a window handle, the IsIconic function indicates whether the window
	is an icon:
	
	     case WM_PAINT:
	
	     {
	     PAINTSTRUCT ps;
	
	     BeginPaint(hWnd, &ps);
	     if (IsIconic(hWnd))
	        {
	        SendMessage(hWnd, WM_ICONERASEBKGND, (WORD)ps.hdc, 0);
	        DrawIcon(ps.hdc, 0, 0, hIcon);
	        }
	        EndPaint(hWnd, &ps);
	      }
	      break;
	
	When the application processes the WM_QUERYDRAGICON message by returning the
	handle to its icon, Windows converts the icon to a cursor when the user drags
	the icon window with the mouse.
	
	     case WM_QUERYDRAGICON:
	
	     return hIcon;
	
	Because the application paints the icon background when it processes the WM_PAINT
	message, the following code prevents the screen from flashing:
	
	     case WM_ERASEBKGND:
	
	     if (IsIconic(hWnd))
	        return TRUE;
	     else
	        return DefWindowProc(...);
	     break;
	
	DefWindowProc erases the background.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbWndw kbWndwMsg 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
