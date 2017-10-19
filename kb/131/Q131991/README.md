---
layout: page
title: "Q131991: HOWTO: Change the Mouse Pointer for a Window in MFC"
permalink: /kb/131/Q131991/
---

## Q131991: HOWTO: Change the Mouse Pointer for a Window in MFC

	Article: Q131991
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCursor kbMFC KbUIDesign kbVC100 kbVC200 kbVC400 kbVC500 kbVC600 kbWndw kbGrpDSMFCATL
	Last Modified: 15-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In a Windows-based application, a window is always created based on a window
	class. The window class identifies several characteristics of the windows based
	on it, including the default mouse pointer (cursor). In some cases, an
	application may want to change the pointer associated with certain windows that
	it creates. This article describes three methods an MFC application can use to
	display different pointers at different times.
	
	MORE INFORMATION
	================
	
	Here are some situations when you might want an MFC application to display
	different pointers at different times:
	
	- When the default pointer isn't a good user-interface object for a particular
	  application. For example, an I-beam pointer is more suitable than the arrow
	  for a text editor window in NotePad. This could involve changing the pointer
	  for the entire run of the application.
	
	- When an application performs a lengthy operation, such as disk I/O, an
	  hourglass pointer is more appropriate than the arrow. By changing the pointer
	  to an hourglass, you provide good visual feedback to the user. This could
	  involve changing the pointer for a limited period of time.
	
	Three Methods
	-------------
	
	Here are three ways an application can change the mouse pointer in a window:
	
	- Override the CWnd::OnSetCursor() function. Call Windows API SetCursor()
	  function to change the pointer.
	
	- Register your own window class with the desired mouse pointer, override the
	  CWnd::PreCreateWindow() function, and use the newly-registered window class
	  to create the window.
	
	- To show the standard hourglass pointer, an application can call the
	  CCmdTarget::BeginWaitCursor(), which displays the hourglass, and call
	  CmdTarget::EndWaitCursor() to revert back to the default pointer. This scheme
	  works only for the duration of a single message. If the mouse is moved before
	  a call to EndWaitCursor is made, Windows sends a WM_SETCURSOR message to the
	  window underneath the pointer. The default handling of this message resets
	  the pointer to the default type, the one registered with the class, so you
	  need to override CWnd::OnSetCursor() for that window, and reset the pointer
	  back to the hourglass.
	
	Code to Illustrate the Three Methods
	------------------------------------
	
	The following code shows by example how to change the mouse pointer of a CView
	derived class window by using the three methods. m_ChangeCursor is a member
	variable of CMyView class and is of type BOOL. It indicates whether a different
	pointer type needs to be displayed.
	
	Method One
	----------
	
	Change the mouse pointer for the CMyView object by overriding CWnd::OnSetCursor()
	function. Use ClassWizard to establish the message map function
	CMyView::OnSetCursor() for Windows message WM_SETCURSOR and supply the body of
	the function as follows:
	
	        BOOL CMyView::OnSetCursor(CWnd* pWnd, UINT nHitTest, UINT message)
	        {
	              if ( m_ChangeCursor )
	                {
	                    ::SetCursor(AfxGetApp()->LoadStandardCursor(IDC_WAIT));
	                    return TRUE;
	                }
	
	              return CView::OnSetCursor(pWnd, nHitTest, message);
	        }
	
	Method Two
	----------
	
	Register your own window class containing the desired mouse pointer using either
	the AfxRegisterClass() or AfxRegisterWndClass() function. Then create the view
	window based on the registered window class. For more information on registering
	window classes in MFC, please see MFC Tech Note 1, "Window Class Registration."
	
	        BOOL CMyView::PreCreateWindow(CREATESTRUCT& cs)
	        {
	            cs.lpszClass = AfxRegisterWndClass(
	              CS_DBLCLKS | CS_HREDRAW | CS_VREDRAW, // use any window styles
	              AfxGetApp()->LoadStandardCursor(IDC_WAIT),
	              (HBRUSH) (COLOR_WINDOW + 1));         // background brush
	
	            return CView::PreCreateWindow(cs)
	        }
	
	Method Three
	------------
	
	Call the BeginWaitCursor() and EndWaitCursor() functions to change the mouse
	pointer.
	
	NOTE: CWinApp::DoWaitCursor(1) and CWinApp::DoWaitCursor(-1) work similarly to
	BeginWaitCursor() and EndWaitCursor(), respectively.
	
	        void CMyView::PerformLengthyOperation()
	        {
	              BeginWaitCursor();  // or AfxGetApp()->DoWaitCursor(1)
	
	              //...
	
	              EndWaitCursor();    // or AfxGetApp()->DoWaitCursor(-1)
	        }
	
	NOTE: If calls to BeginWaitCursor() and EndWaitCursor() are not in the same
	handler, you must override OnSetCursor as follows:
	
	        BOOL CMyView::OnSetCursor(CWnd* pWnd, UINT nHitTest, UINT message)
	        {
	              if (m_ChangeCursor)
	                {
	                    RestoreWaitCursor();
	                    return TRUE;
	                }
	
	              return CView::OnSetCursor(pWnd, nHitTest, message);
	        }
	
	In this example, set m_ChangeCursor to TRUE just before the call to
	BeginWaitCursor(), and set it back to FALSE after the call to EndWaitCursor().
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCursor kbMFC KbUIDesign kbVC100 kbVC200 kbVC400 kbVC500 kbVC600 kbWndw kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC kbVCNET
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
