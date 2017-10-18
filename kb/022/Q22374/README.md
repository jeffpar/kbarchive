---
layout: page
title: "Q22374: How a DLL Can Display a Message Using MessageBox()"
permalink: kb/022/Q22374/
---

## Q22374: How a DLL Can Display a Message Using MessageBox()

	Article: Q22374
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Windows graphical environment, it may be necessary for a
	function in a dynamic-link library (DLL) to communicate some information to the
	user. The MessageBox() API is available for this purpose.
	
	MORE INFORMATION
	================
	
	If a function exported from a DLL displays a message box, one of the parameters
	to the function should be the handle to a window in the application that acts as
	the parent window for the message box. While the message box is displayed, if
	Task Manager closes the parent application for the message box, the message box
	is destroyed.
	
	When a function in a DLL displays a message only in response to an error
	condition, specify NULL as the value of the hWndParent parameter, as follows:
	
	     MessageBox(NULL, "Hi there!", "DEMO", MB_OK);
	
	After the user dismisses the dialog box, the focus returns to the window that
	previously had the focus, as above. However, because the message box has no
	parent window, closing one or more applications with the Task Manager does not
	destroy the message box.
	
	Note that the hWndParent parameter must not specify a child window, such as a
	control in a dialog box. If an appropriate window handle is not readily
	available, specify NULL for the value of hWndParent and specify the MB_TASKMODAL
	flag in the wType (fourth) parameter. This prevents the user from interacting
	with any windows of the current application without suspending other
	applications.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
