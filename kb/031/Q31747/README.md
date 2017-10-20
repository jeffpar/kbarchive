---
layout: page
title: "Q31747: INFO: Changing the Mouse Cursor for a Window"
permalink: /kb/031/Q31747/
---

## Q31747: INFO: Changing the Mouse Cursor for a Window

{% raw %}

	Article: Q31747
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbInput kbMouse kbSDKPlatform kbWndw
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
	
	There are two different methods that an application can use to change the mouse
	cursor in a window:
	
	- The application can use the SetCursor function, which will change the mouse
	  cursor immediately.
	
	- The application can use the SetClassWord function to change the mouse cursor
	  for all windows of a particular window class. This method affects the mouse
	  cursor only while it resides within the client area of a window of that
	  class.
	
	This article provides additional details regarding these two methods.
	
	MORE INFORMATION
	================
	
	A number of factors should be considered during the design of an application
	that changes the mouse cursor. The major consideration is that Windows sends the
	WM_SETCURSOR message any time the mouse cursor moves on the screen. Normally,
	Windows sends the message to the window "under" the mouse cursor. However, if a
	window sets the mouse capture, using the SetCapture function, that window
	receives all mouse messages, without regard to the position of the mouse
	cursor.
	
	When an application calls SetCursor, the mouse cursor changes to reflect the
	cursor specified in the call. The cursor retains that shape until SetCursor is
	called again, either explicitly by the application, by the DefWindowProc
	function, or by another application.
	
	Because Windows is a nonpreemptive multitasking environment, no other application
	will gain control of the processor until the application that has the processor
	releases it. If the application calls one of a number of Windows functions, it
	can potentially lose control of the processor. For a list of Windows functions
	that can cause control of the processor to pass between applications, search on
	the following words in the Microsoft Knowledge Base:
	
	  prod(winsdk) and nonpreemptive and multitasking
	
	When the DefWindowProc or DefDlgProc function processes a WM_SETCURSOR message,
	it calls SetCursor to change the cursor to the default cursor for the
	application's window.
	
	The application can prevent the cursor from changing by processing the
	WM_SETCURSOR message. A typical application that processes WM_SETCURSOR will
	have a global variable for the handle to the current cursor. When the
	application receives a WM_SETCURSOR message, it checks the global variable. If
	the variable is NULL, the application passes the WM_SETCURSOR message to
	DefWindowProc. Otherwise, the application calls SetCursor with the value in the
	global variable. To return the cursor to the window default cursor, set the
	global variable to NULL.
	
	When Windows sends a WM_SETCURSOR message, it places the hit-test area code into
	the low-order word of the lParam parameter. The application can use the hit-test
	area code to determine what particular portion of the window is "under" the
	mouse cursor. For more information on the hit-test area codes, see the
	documentation for the WM_NCHITTEST message in the "Microsoft Windows Software
	Development Kit Reference Volume 1."
	
	Additional query words: 3.00 3.10 RegisterClass
	
	======================================================================
	Keywords          : kb16bitonly kbInput kbMouse kbSDKPlatform kbWndw 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
