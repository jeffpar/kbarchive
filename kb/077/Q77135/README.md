---
layout: page
title: "Q77135: HOWTO: Different Ways to Close an Application Under Windows"
permalink: kb/077/Q77135/
---

## Q77135: HOWTO: Different Ways to Close an Application Under Windows

	Article: Q77135
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatform kbGrpDSUser kbWndw
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Windows graphical environment, an application can close in two
	different ways. The first method involves the user closing the application,
	which includes choosing a menu item, double- clicking the application's system
	menu, or choosing End Task in the Windows Task Manager. The second method
	involves the user ending the Windows session in the active shell program (either
	Program Manager or File Manager).
	
	In these two methods, the application receives different sets of messages. If an
	application must perform certain operations before it can exit properly, it must
	process the messages associated with each method. This article discusses these
	messages and how to process them.
	
	MORE INFORMATION
	================
	
	Method 1
	--------
	
	The three sets of actions below are facets of the first method above:
	
	1. When the user double-clicks the application's system menu or chooses Close
	  from the system menu, Windows sends a WM_SYSCOMMAND message to the
	  application with wParam set to SC_CLOSE. If the user enters the ALT+F4
	  accelerator for Close, Windows posts the WM_SYSCOMMAND message to the
	  application. If the application passes the WM_SYSCOMMAND message to
	  DefWindowProc, the application receives a WM_CLOSE message.
	
	2. If the user chooses End Task in the Windows Task Manager, the Task Manager
	  posts a WM_CLOSE message to the application's main window.
	
	3. If the application has an Exit option on its File menu, it should be coded to
	  generate a WM_CLOSE message.
	
	When an application receives a WM_CLOSE message, it must determine whether the
	user has modified any files without saving the changes. If so, the application
	must inform the user that changes have not been saved and provide an opportunity
	to save the files, to close the application without saving the files, or to
	cancel the application termination request.
	
	If the application is to close, it must call the DestroyWindow function to
	destroy the main window. If the user is not ready to close the application, the
	application must not pass the WM_CLOSE to DefWindowProc because it will call
	DestroyWindow.
	
	DestroyWindow recursively destroys all child windows of the main window and all
	windows owned by the main window. If the application has created windows that
	are neither children of nor owned by the main window, the application must
	explicitly destroy these windows.
	
	Method 2
	--------
	
	In the second method listed above, when the user ends the Windows session from
	the active shell program (Program Manager or File Manager), Windows sends a
	WM_QUERYENDSESSION message to all tasks in the system. An application can
	process this message to determine when the user terminates the Windows session.
	When an application receives a WM_QUERYENDSESSION message, if files have been
	changed and the changes have not been saved, the application must inform the
	user and confirm the request to close the application. If the application
	receives confirmation, it must return TRUE after processing the
	WM_QUERYENDSESSION message. If the user does not confirm closing the
	application, it must return FALSE to cancel closing Windows.
	
	If any application cancels closing Windows in response to a WM_QUERYENDSESSION
	message, Windows sends a WM_ENDSESSION message with wParam set to FALSE for all
	applications. This informs each application that the Windows session will
	continue.
	
	If all applications return TRUE after processing the WM_QUERYENDSESSION message,
	Windows sends each application a WM_ENDSESSION message with wParam set to TRUE.
	This informs the application that the current Windows session will end very
	shortly. After the WM_ENDSESSION message, an application receives neither a
	WM_CLOSE nor a WM_DESTROY message.
	
	In summary, if an application must perform operations before it can exit, such as
	saving files, the application must be prepared for both the application close
	and Windows shutdown cases.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbGrpDSUser kbWndw 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbhowto
	
	=============================================================================
	
