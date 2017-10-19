---
layout: page
title: "Q121330: BUG: MCIWndClass Popup Window Palette Flashes"
permalink: /kb/121/Q121330/
---

## Q121330: BUG: MCIWndClass Popup Window Palette Flashes

	Article: Q121330
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:1.1,3.1
	Operating System(s): 
	Keyword(s): kbmmkbbuglist
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Video for Windows, version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An MCIWndClass popup window realizes its logical palette in the foreground
	instead of the background as requested in a call to MCIWndRealize() with the
	fBkgnd flag set to TRUE. The foreground palette realization is seen as a flash.
	
	The following code demonstrates the setting that results in the flash. The flash
	occurs when the popup window receives the input focus from another application
	using a different logical palette.
	
	  hwndPanel = MCIWndCreate(hwndParent, hInst,
	        MCIWNDF_NOAUTOSIZEMOVIE | MCIWNDF_NOMENU |
	        WS_OVERLAPPED | WS_BORDER | WS_CAPTION |
	        WS_SYSMENU | WS_POPUP, NULL);
	     MCIWndOpen(hwndPanel, fname, 0);
	     MCIWndRealize(hwndPanel, TRUE);
	     SetWindowPos(hwndPanel, HWND_TOP, X, Y, 0, 0,
	        SWP_NOSIZE | SWP_DRAWFRAME | SWP_SHOWWINDOW);
	     MCIWndPlay(hwndPanel);
	
	CAUSE
	=====
	
	When the MCIWndClass popup window receives the input focus from another
	application that uses a different logical palette, the popup window receives a
	WM_QUERYNEWPALETTE message that is processed for the popup window by the
	MCIWndProc() procedure. In the MCIWndProc() procedure, the "case
	WM_QUERYNEWPALETTE:" results in a call to MCIWndRealize() with the flag fBkgnd
	set to FALSE. This occurs even if the popup window's palette was originally
	realized in the background.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Microsoft Video for Windows Version
	1.1. We are researching this problem and will post new information as it becomes
	available in the Microsoft Knowledge Base.
	
	MORE INFORMATION
	================
	
	The problem described in the SYMPTOMS section occurs only with popup windows. It
	does not arise when the window style is WS_CHILD. When the window is a child
	window, the WM_QUERYNEWPALETTE messages are processed by the parent window's
	callback procedure instead of the MCIWndProc() procedure.
	
	When the window involved is a popup window, you can avoid the flash by
	subclassing the MCIWndProc() procedure and allowing the subclassing application
	to process the WM_QUERYNEWPALETTE message directly by calling MCIWndRealize()
	with the fBkgnd flag set to TRUE. The following code demonstrates this
	workaround:
	
	  // MakeProcInstance() is called once in a convenient place such
	  // as the application's InitInstance() procedure. RealizeProc()
	  // is the procedure that subclasses MCIWndProc(). RealizeProc()
	  // will process WM_QUERYNEWPALETTE messages on behalf of
	  // MCIWndProc(). In the Module Definition File, list the
	  // RealizeProc() procedure under EXPORTS.
	
	     lpfnRealizeProc = MakeProcInstance((FARPROC)
	        RealizeProc, hinstCurrent);
	
	  // In the application's MainWndProc() under "case WM_DESTROY:",
	  // call FreeProcInstance().
	
	     FreeProcInstance(lpfnRealizeProc);
	
	  // Add the next two function calls to the code shown in the
	  // Symptoms section just after the call to MCIWndCreate(). The
	  // GetWindowLong() call returns a pointer to the popup window's
	  // original window procedure, namely MCIWndProc(). The
	  // SetWindowLong() procedure specifies that the RealizeProc()
	  // procedure is the new window procedure for the popup window.
	
	     lpfnOldRealizeProc = (FARPROC)GetWindowLong(hwndPanel,
	
	        GWL_WNDPROC);
	
	     SetWindowLong(hwndPanel, GWL_WNDPROC, (LONG)
	        lpfnRealizeProc);
	
	  // The following procedure subclasses MCIWndProc(). It processes
	  // the WM_QUERYNEWPALETTE messages. All other messages
	  // are sent to MCIWndProc(), which is pointed to by the
	  // parameter lpfnOldRealizeProc.
	
	  long FAR PASCAL RealizeProc(HWND hwndPanel, UINT message, WPARAM
	                 wParam, LPARAM lParam)
	  {
	     switch (message)
	     {
	        case WM_QUERYNEWPALETTE:
	           return (MCIWndRealize(hwndPanel, TRUE));
	
	        default:
	            return (CallWindowProc((WNDPROC)lpfnOldRealizeProc,
	              hwndPanel, message, wParam, lParam));
	     }
	  }
	
	Additional query words: 3.10 1.10 mci buglist3.10 buglist1.10
	
	======================================================================
	Keywords          : kbmm kbbuglist
	Technology        : kbAudDeveloper kbWin3xSearch kbVideoSearch kbSDKSearch kbWinSDKSearch kbWinSDK310 kbVideo110
	Version           : WINDOWS:1.1,3.1
	
	=============================================================================
	
