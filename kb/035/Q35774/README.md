---
layout: page
title: "Q35774: INFO: Differences Between PostAppMessage and PostMessage Funcs"
permalink: kb/035/Q35774/
---

## Q35774: INFO: Differences Between PostAppMessage and PostMessage Funcs

	Article: Q35774
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatform kbGrpDSUser kbWndw kbWndwMsg
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information describes the differences between the PostAppMessage
	and PostMessage functions, and the circumstances under which each should be
	used.
	
	MORE INFORMATION
	================
	
	In most cases, the PostMessage function should be used. Essentially, both
	functions accomplish the same result, but PostMessage uses a window handle, and
	PostAppMessage uses a task handle to identify the destination window for the
	message.
	
	In the Windows environment, it is possible to create a task that does not have a
	window associated with it, but not vice versa. Under some circumstances an
	application must send a message to a windowless application; there is no window
	handle to use as a parameter to PostMessage. In this case, use the
	PostAppMessage function to send the message using the task handle.
	
	However, if an application will receive messages sent by PostAppMessage, its
	message loop must be modified. When a message is posted by PostAppMessage and
	retrieved by GetMessage, the hwnd field of the MSG structure is NULL because no
	window was specified as the target for the message. Therefore, it is important
	to process this special case and to perform whatever processing is appropriate.
	An application must not pass an MSG structure with a NULL hwnd field to the
	DispatchMessage function. Doing so will cause an error. Some possibilities for
	handling this special case are listed below:
	
	- Process the message within the message loop.
	
	- Pass the message to another procedure that is set up to process special
	  cases.
	
	- Set the hwnd field of the MSG structure to the window handle of the window
	  that should receive the message.
	
	- Change any of the other values in the MSG structure before passing the
	  message along.
	
	The following code demonstrates processing a message posted by the PostAppMessage
	function. After the window is drawn, pressing the left mouse button in the
	window generates a PostMessage call, and pressing the right mouse button
	generates an identical PostAppMessage call. When the application processes the
	message posted by PostAppMessage, it beeps the speaker and then passes the
	message to the main window.
	
	      //****************************************************************
	     // MinWin - PostMessage versus PostAppMessage example.
	
	     #include <windows.h>
	
	     char szAppName[] = "MinWin";
	     HWND hMainWnd;
	
	     long FAR PASCAL WndProc(HWND, unsigned, WORD, LONG);
	
	     int PASCAL WinMain(HANDLE hInstance, HANDLE hPrevInstance,
	                        LPSTR lpszCmdLine, int nCmdShow)
	     {
	        MSG msg;
	        WNDCLASS wndclass;
	
	        if (!hPrevInstance)
	           {
	           wndclass.style = CS_HREDRAW | CS_VREDRAW;
	           wndclass.lpfnWndProc = WndProc;
	           wndclass.cbClsExtra = 0;
	           wndclass.cbWndExtra = 0;
	           wndclass.hInstance = hInstance;
	           wndclass.hIcon = LoadIcon(NULL, IDI_APPLICATION);
	           wndclass.hCursor = LoadCursor(NULL, IDC_ARROW);
	           wndclass.hbrBackground = COLOR_WINDOW + 1;
	           wndclass.lpszMenuName = NULL;
	           wndclass.lpszClassName = szAppName;
	
	           if (!RegisterClass(&wndclass))
	              return FALSE;
	           }
	
	        hMainWnd = CreateWindow(szAppName, szAppName, WS_OVERLAPPEDWINDOW,
	             CW_USEDEFAULT, 0, CW_USEDEFAULT, 0,
	             NULL, NULL, hInstance, NULL);
	
	        ShowWindow(hMainWnd, nCmdShow);
	        UpdateWindow(hMainWnd);
	
	        while (GetMessage(&msg, NULL, 0, 0))
	           {
	           if (msg.hwnd == NULL) // Beep, then pass the message to
	              {                  //  the window
	              MessageBeep(0);
	              msg.hwnd = hMainWnd;
	              }
	
	           TranslateMessage(&msg);
	           DispatchMessage(&msg);
	           }
	
	        return msg.wParam;
	     }
	
	     long FAR PASCAL WndProc(HWND hWnd, unsigned iMessage,
	                             WORD wParam, LONG lParam)
	     {
	        HANDLE hInst;
	        HANDLE hTask;
	
	        hInst = GetWindowWord(hWnd, GWW_HINSTANCE);
	
	        switch (iMessage)
	           {
	        case WM_LBUTTONDOWN:
	           PostMessage(hWnd, WM_USER+0x1000, 0, 0L);
	           break;
	
	        case WM_RBUTTONDOWN:
	           PostAppMessage(GetWindowTask(hWnd), WM_USER+0x1000, 0, 0L);
	           break;
	
	        case WM_USER+0x1000:
	           MessageBox(NULL, "Message Received", "WM_USER", MB_OK);
	           break;
	
	        case WM_DESTROY:
	           if (hWnd == hMainWnd)
	              PostQuitMessage(0);
	           break;
	
	        default:
	           return DefWindowProc(hWnd, iMessage, wParam, lParam);
	           }
	
	        return 0L;
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbGrpDSUser kbWndw kbWndwMsg 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbinfo
	
	=============================================================================
	
