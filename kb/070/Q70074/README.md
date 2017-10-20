---
layout: page
title: "Q70074: HOWTO: Reactivating First (and Only) Instance of an Application"
permalink: /kb/070/Q70074/
---

## Q70074: HOWTO: Reactivating First (and Only) Instance of an Application

{% raw %}

	Article: Q70074
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatform kbWndw
	Last Modified: 10-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes restricting an application to a single instance is desirable. In that
	case, when the user starts a second instance of the application, a message box
	that says that the application is already running can be displayed. A more
	user-friendly approach is to bring the first instance to the front and activate
	it.
	
	To accomplish this, perform the following four steps:
	
	1. Obtain the main window handle of the first instance.
	
	2. If the first instance has an open dialog box, obtain the window handle of its
	  last active pop-up window.
	
	3. Bring the parent and pop-up window (if present) to the front.
	
	4. Do not run the second instance.
	
	MORE INFORMATION
	================
	
	To determine whether an instance of the application is already running, the
	first method below uses the FindWindow function to look for the an application
	with the same main window class name. The second method uses the hPrevInstance
	parameter to the WinMain function.
	
	The FindWindow method does not depend on any memory architecture or on the
	hPrevInstance parameter; therefore, it is the suggested method for future
	portability. The hPrevInstance assumes a memory architecture for the operating
	system that allows a task to access another application's data segments. In
	future versions of Windows, this may not be possible if applications do not
	share the same local descriptor table (LDT).
	
	Method 1: Use FindWindow Function
	---------------------------------
	
	     HWND FirsthWnd, FirstChildhWnd;
	
	     if (FirsthWnd = FindWindow("MyMainWindowClassName", NULL))
	
	     {
	     // Found another running application with the same class name.
	     // Therefore, one instance is already running.
	     // NOTE: "MyMainWindowClassName" must match the class name of the
	     // program's main window. In the GENERIC sample application,
	     // provided with the Microsoft Windows Software Development Kit,
	     // versions 3.0 and 3.1, the chass name is "GenericWClass", which
	     // is used in the InitApplication and InitInstance functions.
	
	     FirstChildhWnd = GetLastActivePopup(FirsthWnd);
	     BringWindowToTop(FirsthWnd);         // bring main window to top
	
	     if (FirsthWnd != FirstChildhWnd)
	
	        BringWindowToTop(FirstChildhWnd); // a pop-up window is active
	                                          // bring it to the top too
	
	     return FALSE;                        // do not run second instance
	     }
	
	Method 2: Use hPrevInstance Parameter
	-------------------------------------
	
	     // Declare a global variable to save the handle of the first instance
	     // of the main window.
	
	     HWND FirsthWnd;
	
	     // Make the following modifications to the WinMain function:
	
	     HWND FirstChildhWnd;    // handle of last active pop-up window of the
	                             // first application instance
	
	     if (!hPrevInstance)     // other instances of application running?
	
	     if (!InitApplication(hInstance))  // initialize shared things
	
	              return FALSE;  // exits if unable to initialize
	
	        else {}
	
	     else  // a previous instance exists;
	
	           // retrieve the main window handle from the first instance
	        {
	        GetInstanceData(hPrevInstance, (NPSTR)&FirsthWnd, 2);
	
	     FirstChildhWnd = GetLastActivePopup(FirsthWnd);
	     BringWindowToTop(FirsthWnd);         // bring main window to top
	
	     if (FirsthWnd != FirstChildhWnd)
	
	        BringWindowToTop(FirstChildhWnd); // a pop-up window is active
	                                          // bring it to the top too
	
	     return FALSE;                        // do not run second instance
	     }
	
	     // Add this line to the InitApplication function:
	
	      FirsthWnd = NULL;  // no previous window, so this is NULL
	
	      // Add these two lines to the InitInstance function after the
	      // "hWnd = CreateWindow(...);" call:
	
	     if (!FirsthWnd)       // If this is the first instance,
	
	        FirsthWnd = hWnd;  // save the window handle.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbWndw 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
