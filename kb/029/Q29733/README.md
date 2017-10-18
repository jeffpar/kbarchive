---
layout: page
title: "Q29733: HOWTO: Drawing a Different Icon for Each Application Instance"
permalink: kb/029/Q29733/
---

## Q29733: HOWTO: Drawing a Different Icon for Each Application Instance

	Article: Q29733
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKWin16
	Last Modified: 17-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An application can use the DrawIcon function in its paint procedure to display a
	different icon for each application instance. The method has the following five
	steps.
	
	MORE INFORMATION
	================
	
	1. In the WNDCLASS data structure used to register the application's main window
	  class, set the hIcon field to NULL. This prevents Windows from drawing an
	  icon when the application is minimized. The following code demonstrates this
	  step:
	
	     int index;  // global variable to count application instances
	
	     // This function initializes the first application instance
	     void InitFirst(HANDLE hInstance)
	     {
	        WNDCLASS rClass;            // window class structure
	
	        rClass.lpszClassName = "HELLO";
	        rClass.hInstance     = hInstance;
	        rClass.lpfnWndProc   = WindowProc;
	        rClass.hCursor       = LoadCursor(NULL, IDC_ARROW);
	
	        // If hIcon is NULL, Windows will not draw icon. Application
	        // paints its own icon as appropriate.
	        rClass.hIcon         = NULL;
	
	        rClass.lpszMenuName  = NULL;
	        rClass.hbrBackground = COLOR_WINDOW + 1;
	        rClass.style         = CS_HREDRAW | CS_VREDRAW;
	        rClass.cbClsExtra    = 0;
	        rClass.cbWndExtra    = 0;
	
	        RegisterClass(&rClass);     //  register the class
	
	        index = 1;  // set counter to indicate first instance
	     }
	
	2. The GetInstanceData function provides the value of the instance counter from
	  the previous instance. Adding one to this value provides the value for the
	  current instance, as follows:
	
	     void InitNext(HANDLE hInstance, HANDLE hPrevInstance)
	     {
	        GetInstanceData(hPrevInstance, (PSTR)&index, sizeof(int));
	        index++;
	     }
	
	3. During the instance initialization function, load the icon for the current
	  instance from the application's resources. In this case, Icon1, Icon2, Icon3,
	  and Icon4 are individual icons declared in the application's resources. The
	  following code demonstrates this procedure:
	
	     HICON hIcon; // icon handle for this instance
	
	     void InitEvery(HANDLE hInstance, int cmdShow)
	     {
	        HWND  hWnd;
	
	        hInst = hInstance; // store instance in global variable for
	                           // window procedures to use
	
	        switch (index)
	           {
	        case 1: hIcon = LoadIcon(hInstance, "Icon1");
	                break;
	
	        case 2: hIcon = LoadIcon(hInstance, "Icon2");
	                break;
	
	        case 3: hIcon = LoadIcon(hInstance, "Icon3");
	                break;
	
	        default:
	                hIcon = LoadIcon(hInstance, "Icon4");
	           }
	
	        CreateWindow( ... ); // and so forth
	     }
	
	4. When an application receives a WM_PAINT message while the window is
	  minimized, draw the icon in the application's client area. The IsIconic
	  function returns TRUE if the application is minimized. The following code
	  demonstrates this step:
	
	     // In the switch(message) statement of the main window procedure
	
	     case WM_PAINT:
	        {
	        PAINTSTRUCT ps;
	
	        if (IsIconic(hWnd))
	           {
	           BeginPaint(hWnd, (LPPAINTSTRUCT)&ps);
	
	           // Paint the desktop window background.
	           DefWindowProc(hWnd, WM_ICONERASEBKGND, (WORD)ps.hdc, 0L);
	
	           // Draw the icon in the cleared area
	           DrawIcon(ps.hdc, 0, 0, hIcon);
	
	           EndPaint(hWnd, (LPPAINTSTRUCT)&ps);
	           }
	        else
	           // Paint the window as usual
	        }
	
	5. When the user drags an application's icon with the mouse and the application
	  processes the WM_QUERYDRAGICON message as follows, Windows changes the mouse
	  cursor to a black-and-white representation of the application's icon.
	
	     // In the switch(message) statement of the main window procedure
	
	     case WM_QUERYDRAGICON:
	        return (LONG)(WORD)hIcon;
	        break;
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbhowto
	
	=============================================================================
	
