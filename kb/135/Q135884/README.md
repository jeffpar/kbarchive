---
layout: page
title: "Q135884: HOWTO: How to Make the CMiniFrameWnd Window Paint Its Background"
permalink: kb/135/Q135884/
---

## Q135884: HOWTO: How to Make the CMiniFrameWnd Window Paint Its Background

	Article: Q135884
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1
	Operating System(s): 
	Keyword(s): kbcode kbDocView kbGDI kbMFC KbUIDesign kbVC200 kbVC400 kbVC410 kbGrpDSMFCATL kbMFCCtrl
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article gives you two ways to make the CMiniFrameWnd miniframe window paint
	its background area.
	
	A miniframe window (CMiniFrameWnd) doesn't paint its background area even though
	Windows sends a WM_ERASEBKGND message to prepare the invalidated portion of the
	window for painting. The default window procedure for this message erases the
	background by using the class background brush specified by the hbrBackground
	member of the WNDCLASS structure. As this background brush is NULL for a
	CMiniFrameWnd and MFC doesn't provide a handler for WM_ERASEBKGND to erase the
	background of a CMiniFrameWnd, the client area of a miniframe window is never
	erased.
	
	MORE INFORMATION
	================
	
	A CMiniFrameWnd is a half-height/half-caption frame window typically enclosing
	another child window that takes up the entire client area of the window. The
	default window class for a CMiniFrameWnd is pre-registered by MFC without a
	background brush; that is, the hbrBackground member of the WNDCLASS structure is
	NULL.
	
	The application sends a WM_ERASEBKGND message to prepare the invalidated portion
	of a window for painting. The window procedure of MFC (AfxWndProc) receives this
	message first and in turn calls the default window procedure (DefWindowProc),
	which erases the background by using the class background brush. Because there
	is no background brush for a CMiniFrameWnd, the background area is never
	painted.
	
	This default behavior is by design because there is no need for the miniframe
	window to repaint its background, as the child window typically enclosing the
	miniframe window will paint over its background area.
	
	Following are two ways to make the CMiniFrameWnd paint its background area.
	
	Method One
	----------
	
	This method registers a window class for CMiniFrameWnd with a background brush.
	To implement this, derive a class from CMiniFrameWnd and override the Create
	member function. The Create function would be similar to the default
	implementation of CMiniFrameWnd::Create (in WINMINI.CPP of ~/mfc/src directory),
	but with the addition of a background brush. The following code demonstrates
	this:
	
	  // Header file of CMiniFrameWnd derived class (mymini.h)
	  class CMyMiniFrameWnd : public CMiniFrameWnd
	  {
	      DECLARE_DYNCREATE(CMyMiniFrameWnd)
	  public:
	      CMyMiniFrameWnd();
	
	      // Add the declaration for the Create function
	      BOOL Create(LPCTSTR lpClassName, LPCTSTR lpszWindowName,
	           DWORD dwStyle, const RECT& rect,
	           CWnd *pParentWnd = NULL, UINT nID = 0);
	
	      // Rest of the class definition
	      ...
	  };
	
	  // Implementation file of CMiniFrameWnd derived class (mymini.cpp)
	  BOOL CMyMiniFrameWnd::Create(
	      LPCTSTR lpszClassName, LPCTSTR lpszWindowName,
	      DWORD dwStyle, const RECT& rect,
	      CWnd* pParentWnd, UINT nID)
	  {
	      // Window title
	      m_strCaption = lpszWindowName;
	
	      // Register your own window class
	      return CreateEx(0,
	          lpszClassName ?
	              lpszClassName :
	              AfxRegisterWndClass(
	                  CS_DBLCLKS,
	                  ::LoadCursor(NULL, IDC_ARROW),
	                  (HBRUSH) (COLOR_WINDOW + 1)), // Specify bkgnd brush
	          lpszWindowName,
	          dwStyle,
	          rect.left, rect.top,
	          rect.right - rect.left, rect.bottom - rect.top,
	          pParentWnd->GetSafeHwnd(),
	          (HMENU)nID);
	  }
	
	Method Two
	----------
	
	This method illustrates how to provide a handler for the WM_ERASEBKGND message
	for the miniframe window. By implementing this, the miniframe window paints its
	own background area in response to a WM_ERASEBKGND. Use ClassWizard to provide a
	handler for WM_ERASEBKGND for a CMiniFrameWnd derived class. Modify the handler
	as shown in this code:
	
	  BOOL CMyMiniFrameWnd::OnEraseBkgnd(CDC* pDC)
	  {
	      // Set brush to desired background color
	      CBrush backBrush(RGB(192, 192, 192));
	
	      // Save the old brush
	      CBrush* pOldBrush = pDC->SelectObject(&backBrush);
	
	      // Get the current clipping boundary
	      CRect rect;
	      pDC->GetClipBox(&rect);
	
	      // Erase the area needed
	      pDC->PatBlt(rect.left, rect.top, rect.Width(), rect.Height(),
	           PATCOPY);
	
	      pDC->SelectObject(pOldBrush); // Select the old brush back
	      return TRUE;  // message handled
	  }
	
	REFERENCES
	==========
	
	For more information, please see WM_ERASEBKGND in the Windows API documentation
	MFC source code.
	
	Additional query words: kbinf 3.00 3.10 3.20 2.00 2.10 2.20 3.1 3.2 3.0 4.00 4.10
	
	======================================================================
	Keywords          : kbcode kbDocView kbGDI kbMFC KbUIDesign kbVC200 kbVC400 kbVC410 kbGrpDSMFCATL kbMFCCtrlBar 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0,4.1
	Issue type        : kbhowto
	
	=============================================================================
	
