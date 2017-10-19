---
layout: page
title: "Q177352: HOWTO: Work with Invalid Rectangle When Window Is Resized"
permalink: /kb/177/Q177352/
---

## Q177352: HOWTO: Work with Invalid Rectangle When Window Is Resized

	Article: Q177352
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbMFC kbResourceEd KbUIDesign kbVC kbVC152 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 17-JUL-2001
	
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
	   - Microsoft Visual C++ for Windows, 16-bit edition, version 1.52 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to work with the invalidated rectangle that is
	created when a window is resized.
	
	MORE INFORMATION
	================
	
	To optimize painting in an MFC program, you can usually call GetClipBox() in
	your view's OnDraw() function to get the invalid rectangle and paint only in
	this area. However, if the user resizes the window, GetClipBox() l always
	returns the whole client area. This happens because the "window class" used for
	CView and CFrameWnd has the styles CS_VREDRAW and CS_HREDRAW. These styles cause
	the whole window to be invalidated whenever the window is resized. To work
	around this problem, you have to register your own window class for the view and
	the frame which do not have the class styles of CS_VREDRAW and CS_HREDRAW. You
	can register the class name in InitApplication() and use the class name in
	PreCreateWindow().
	
	Sample Code
	-----------
	
	     class CTestApp : public CWinApp
	     {
	     public:
	        CString m_strMyClassName;
	     ...
	     }
	
	     BOOL CTestApp::InitApplication()
	     {
	     // Register our own class with the same attributes as AfxFrameOrView"
	     // refer to MFC Tech Note 1: Window Class Registration for more
	     // information.
	           m_strMyClassName = AfxRegisterWndClass (0, ::LoadCursor (NULL,
	                              IDC_ARROW), (HBRUSH)(COLOR_WINDOW+1),
	                              LoadIcon(AFX_IDI_STD_FRAME));
	
	           return CWinApp::InitApplication();
	     }
	
	     BOOL CMainFrame::PreCreateWindow(CREATESTRUCT& cs)
	     {
	           CTestApp* pApp = (CTestApp*)AfxGetApp ();
	           //  Change the class name to our own name.
	           cs.lpszClass = (const char *)(pApp->m_strMyClassName);
	
	           return CFrameWnd::PreCreateWindow(cs);
	     }
	
	     BOOL CTestView::PreCreateWindow(CREATESTRUCT& cs)
	     {
	           CTestApp* pApp = (CTestApp*)AfxGetApp ();
	           //  Change the class name to our own name.
	           cs.lpszClass = (const char *)(pApp->m_strMyClassName);
	
	           return CView::PreCreateWindow(cs);
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMFC kbResourceEd KbUIDesign kbVC kbVC152 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
