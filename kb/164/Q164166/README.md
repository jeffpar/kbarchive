---
layout: page
title: "Q164166: PRB: Assert in Wincore.cpp with MFC in a Windows NT Service"
permalink: /kb/164/Q164166/
---

## Q164166: PRB: Assert in Wincore.cpp with MFC in a Windows NT Service

	Article: Q164166
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbDocView kbMFC kbService KbUIDesign kbVC kbVC420 kbGrpDSMFCATL
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Visual C++ 4.x MFC application spawned from a Windows NT service
	or as a Windows NT service, an assertion may occur in Wincore.cpp. Specifically,
	it occurs on the following line in _AfxActivationWndProc():
	
	    LRESULT CALLBACK
	   _AfxActivationWndProc(HWND hWnd, UINT nMsg, WPARAM wParam, LPARAM lParam)
	   {
	
	      WNDPROC oldWndProc = (WNDPROC)::GetProp(hWnd, szAfxOldWndProc);
	      ASSERT(oldWndProc != NULL);  // <----- assert occurs here
	      .
	      .
	      .
	   }
	
	The assertion occurs on line 385 with Visual C++ versions 4.2 and 4.2b, on line
	384 with Visual C++ version 4.1, line 392with Visual C++ version 5.0, and on
	line 389 with Visual C++ 6.0.
	
	CAUSE
	=====
	
	MFC subclasses all non-MFC created windows to handle specific activation issues.
	While subclassing a non-MFC created window, the old window procedure is stored
	in the properties of the window. Logging off of an Windows NT session causes the
	atoms used to identify the properties to be destroyed and the property cannot be
	retrieved. This causes the assertion to occur.
	
	MFC was not designed for Windows NT services. As a result, if an MFC application
	is spawned from a Windows NT service, minimized, and then a user logs-off, then
	the assertion will occur.
	
	Also keep in mind that there are other problems to consider when spawning an MFC
	application from a service or as a service. The OnEndSession() message handler
	for the main frame window closes out the CDocument object. So the WM_ENDSESSION
	message must be handled to prevent this from happening.
	
	RESOLUTION
	==========
	
	You can do one of the following things:
	
	- Unsubclass all of the non-MFC windows at some time before logoff or during
	  logoff such as in the WM_ENDSESSION handler.
	
	  -or-
	
	- Modify the MFC code and rebuild the MFC libraries. In this case, you can
	  modify the MFC code to prevent it from subclassing any non-MFC windows or
	  modify the code so that you can store the old window procedure in a list
	  rather than in properties for the window. As each window is destroyed
	  (WM_NCDESTROY is received), look up the window handle in your list and
	  unsubclass it like MFC does in the _AfxActivationWndProc() function.
	
	  -or-
	
	- Separate the GUI part of the application from the service part. In other
	  words, have a GUI client startup every time the user logs on. Then, have the
	  GUI client talk to the service through some form of interprocess
	  communication, such as named pipes or sockets. The service should maintain
	  the data and the GUI starts up each time when you log on.
	
	MFC subclasses non-MFC windows to generally handle obscure window activation
	issues. For example, it ensures proper activation of toplevel windows when doing
	in-place OLE activation. It also ensures that the last active popup is activated
	when a user clicks on a disabled window that is part of the application.
	Normally, if you have a main window that owns a modal dialog box and some other
	popup window like a floating toolbar, and you switch activation to another
	application, and click on the toolbar that was disabled by the modal dialog box,
	Windows beeps and does not activate the application. MFC ensures that the modal
	dialog box is brought to the top when you click on the toolbar. Note that MFC
	handles all of these activation issues for MFC-created windows and non-MFC
	created Windows. The old window procedure is stored as a property associated
	with the window only for non-MFC windows. If you unsubclass the non-MFC windows
	(as the first technique suggests above), you still get these activation features
	for any windows that were created as MFC CWnd-derived objects.
	
	Unsubclassing the non-MFC Windows
	---------------------------------
	
	The first technique listed above may be an easy workaround for developers who
	have already written an application and don't want to rework their design,
	rebuild the MFC libraries, or don't need to handle the activation issues MFC
	handles.
	
	You can unsubclass non-MFC Windows in the WM_ENDSESSION handler of your main
	frame window. The following sample code demonstrates how to enumerate all of the
	windows for your process and unsubclass them: For Visual C++ 4.x and Visual C++
	5.0:
	
	      static const TCHAR szAfxOldWndProc[] = _T("AfxOldWndProc");  
	
	For Visual C++ 6.0:
	
	      static const TCHAR szAfxOldWndProc[] = _T("AfxOldWndProc423");  // Visual C++ 6.0
	
	And add the functions:
	
	      BOOL CALLBACK EnumProc( HWND hWnd, LPARAM lParam)
	   {
	      //check for property and unsubclass if necessary
	      WNDPROC oldWndProc = (WNDPROC)::GetProp(hWnd, szAfxOldWndProc);
	      if (oldWndProc!=NULL)
	      {
	         SetWindowLong(hWnd, GWL_WNDPROC, (DWORD)oldWndProc);
	         RemoveProp(hWnd, szAfxOldWndProc);
	      }
	
	      return TRUE;
	
	   }
	
	   void CMainFrame::OnEndSession(BOOL bEnding)
	   {
	      // unsubclass the non-MFC windows which MFC has subclassed
	      DWORD dwProcessId;
	
	      DWORD dwThreadId= GetWindowThreadProcessId(m_hWnd,&dwProcessId);
	      EnumThreadWindows(dwThreadId, EnumProc,(LPARAM) dwThreadId);
	
	   }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbDocView kbMFC kbService KbUIDesign kbVC kbVC420 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
