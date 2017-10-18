---
layout: page
title: "Q133716: HOWTO: How to Detect Mouse Clicks on Client Area of MDI Frame Wi"
permalink: kb/133/Q133716/
---

## Q133716: HOWTO: How to Detect Mouse Clicks on Client Area of MDI Frame Wi

	Article: Q133716
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,2.2,4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbcode kbMFC KbUIDesign kbVC100 kbVC200 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can detect when a user clicks the mouse while the pointer is over the client
	area of your main MDI frame window (the area of the client not covered by any
	open MDI child windows). To do so, you must first subclass the MDIClient so you
	can intercept the mouse messages being sent to it. This article shows by example
	how to do it using MFC. You can extend the method outlined here to handle any
	messages sent to the MDIClient.
	
	MORE INFORMATION
	================
	
	To manage its MDI child windows, the CMDIFrameWnd class creates a window of the
	class "mdiclient" to cover its entire client area (also referred to as the
	Application Workspace). MFC stores a handle to this MDIClient window in a public
	member variable, m_hWndMDIClient, of the CMDIFrameWnd class.
	
	The MDIClient is a standard Windows window, not an MFC object. However,
	subclassing it allows you to treat it just as you would any other CWnd, taking
	advantage of standard MFC features like message maps. For example, you could use
	this technique to provide a context menu when the user clicks the right mouse
	button. Or, as the Windows 95 desktop does, you could use it to provide an easy
	means of selecting a group of iconized MDI child windows, enclosing them within
	a tracker rectangle as the user drags with the left mouse button button held
	down.
	
	Steps to Subclass the MDIClient
	-------------------------------
	
	Subclassing the MDIClient is actually quite easy as summarized in the following
	three steps. For more detailed information about this process, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q129471 How to SubClass the MDIClient by Using MFC
	
	1. Derive a class from CWnd, called CMyMDIClient for example, and add it to your
	  project. You can use ClassWizard to help you do this.
	
	2. If you are creating a 16-bit application, you need to add a public function
	  called GetSuperWndProcAddr() to your new CMyMDIClient class. Do not do this
	  step when building applications with 32-bit versions of Visual C++.
	
	     WNDPROC* CMyMDIClient::GetSuperWndProcAddr()
	         {
	         static WNDPROC NEAR pfnSuper = NULL;
	         return &pfnSuper;
	         }
	
	3. Include your class header file in MAINFRM.H. Embed a public member object of
	  your new class in your CMainFrame class, for example CMyMDIClient
	  m_MyMDIClient. If you have not already done so, override
	  CMDIFrameWnd::OnCreate(). In your CMainFrame::OnCreate(), first call the base
	  class implementation, CMDIFrameWnd::OnCreate(), which creates the MDIClient
	  window itself and stores the handle in m_hWndMDIClient. Then subclass that
	  window to your embedded member object:
	
	     int CMainFrame::OnCreate(LPCREATESTRUCT lpCreateStruct)
	         {
	         // Call the base class implementation to create the MDIClient
	         // window.
	         if (CMDIFrameWnd::OnCreate(lpCreateStruct) == -1)
	           return -1;
	
	         // Subclass the MDIClient window.
	         if (!m_MyMDIClient.SubclassWindow(m_hWndMDIClient))
	             {
	             TRACE ("Failed to subclass MDI client window\n");
	             return (-1);
	             }
	
	         ...
	         }
	
	Code Sample
	-----------
	
	Once you subclass the MDIClient in this way, you can add any needed message
	handlers directly to your CMyMDIClient class. To illustrate, the following code
	displays your application's File menu as a context menu when the user clicks the
	MDIClient using the right mouse button.
	
	     void CMyMDIClient::OnRButtonDown(UINT nFlags, CPoint point)
	         {
	         POINT ScreenPoint = point;
	         CMenu* pMenuTrackPopup;
	
	         // Get a pointer to the app's File menu popup.
	         // AfxGetMainWnd() returns a pointer to the main frame window,
	         // GetMenu() returns a pointer to the main menu of the application,
	         // and GetSubMenu(0) retrieves the submenu at position 0 (here the
	         // File menu).
	         pMenuTrackPopup = ((AfxGetMainWnd())->GetMenu())->GetSubMenu(0);
	
	         // Convert the mouse point to screen coordinates since that is what
	         // TrackPopupMenu() expects.
	         ClientToScreen(&ScreenPoint);
	
	         // Draw and track the "floating" popup
	         pMenuTrackPopup->TrackPopupMenu(TPM_RIGHTBUTTON,
	            ScreenPoint.x, ScreenPoint.y,
	             AfxGetMainWnd(),    // Use the 'this' pointer if you want
	                                 // commands to be handled in your
	                                 // CMyMDIClient class instead
	             NULL);
	
	         // NOTE: Do not destroy this menu here!
	
	         // Call the base class
	         CWnd::OnRButtonDown(nFlags, point);
	         }
	
	Additional query words: kbinf 1.50 1.51 1.52 1.00 2.00 2.10 2.50 2.51 2.52 2.20 3.00 3.10 4.00 4.10 4.20
	
	======================================================================
	Keywords          : kbcode kbMFC KbUIDesign kbVC100 kbVC200 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,2.2,4.0,4.1,4.2
	Issue type        : kbhowto
	
	=============================================================================
	
