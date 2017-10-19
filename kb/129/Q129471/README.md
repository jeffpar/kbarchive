---
layout: page
title: "Q129471: HOWTO: SubClass the MDIClient by Using MFC"
permalink: /kb/129/Q129471/
---

## Q129471: HOWTO: SubClass the MDIClient by Using MFC

	Article: Q129471
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbProgramming kbtool kbnokeyword kbMDI kbMFC kbVC kbVC100 kbVC150 kbVC152 kbVC200 kbVC4
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	
	SUMMARY
	=======
	
	In MFC, the MDICLIENT window is stored in a public HWND member variable
	(m_hwndMDIClient) within the CMDIFrameWnd class. CMDIFrameWnd is the base class
	of the CMainFrame class in an AppWizard-generated MDI application.
	
	There are three steps required to subclass the MDICLIENT window:
	
	1. Use ClassWizard to derive a class from CWnd called CMDIClientWnd.
	
	2. Add the function, GetSuperWndProcAddr(), to CMDIClientWnd.
	
	3. Use CMDIClientWnd to subclass the MDICLIENT window.
	
	Once the MDICLIENT window has been subclassed with CMDIClientWnd, message
	handlers and other functions can be placed in the CMDIClientWnd class.
	
	MORE INFORMATION
	================
	
	Here is more detailed information about each of the steps:
	
	1. Use ClassWizard to derive a class from CWnd called CMDIClientWnd.
	
	  For details on how to derive a class using ClassWizard, please see the User's
	  Guide documentation on ClassWizard, specifically the "Adding a New Class"
	  section.
	
	  NOTE: Visual Studio .NET does not have ClassWizard. Instead, use the Add Class
	  dialog box to access the MFC Class Wizard. For more information see the MSDN
	  topic "Where Are ClassWizard and WizardBar in Visual C++ .NET?"
	
	2. Add the function GetSuperWndProcAddr() to CMDIClientWnd.
	
	  NOTE: This step need only be performed if you are using 16-bit versions of
	  Visual C++, not 32-bit. The 32-bit versions of Visual C++ implement this
	  functionality for you.
	
	  Once the class has been created, add the following prototype to the header
	  file:
	
	        public:
	            WNDPROC* GetSuperWndProcAddr();
	
	  And add the following function to the .CPP file:
	
	        WNDPROC* CMDIClientWnd::GetSuperWndProcAddr() {
	
	            static WNDPROC NEAR pfnSuper = NULL;
	            return &pfnSuper;
	        }
	
	3. Use CMDIClientWnd to subclass the MDICLIENT window in the CMDIFrameWnd class
	  (usually CMainFrame).
	
	  To the CMainFrame class, add a public variable of type CMDIClientWnd called
	  m_wndMDIClient. Then modify OnCreate for CMainFrame as follows:
	
	        int CMainFrame::OnCreate(LPCREATESTRUCT lpCreateStruct)
	        {
	            if (CMDIFrameWnd::OnCreate(lpCreateStruct) == -1)
	            return -1;
	
	            if (!m_wndMDIClient.SubclassWindow (m_hWndMDIClient)) { // Add
	                TRACE ("Failed to subclass MDI client window\n");   // Add
	                return (-1);                                        // Add
	            }                                                       // Add
	        ...
	        }
	
	After completing these three steps, you can use ClassWizard to add message
	handlers to CMDIClientWnd similar to the one below, which changes the
	MDICLIENT's background color.
	
	  BOOL CMDIClientWnd::OnEraseBkgnd(CDC* pDC)
	  {
	    // Set brush to desired background color
	    CBrush backBrush(RGB(255, 128, 128));
	
	    // Save old brush
	    CBrush* pOldBrush = pDC->SelectObject(&backBrush);
	
	    CRect rect;
	    pDC->GetClipBox(&rect);     // Erase the area needed
	    pDC->PatBlt(rect.left, rect.top, rect.Width(), rect.Height(),
	        PATCOPY);
	    pDC->SelectObject(pOldBrush);
	    return TRUE;
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming kbtool kbnokeyword kbMDI kbMFC kbVC kbVC100 kbVC150 kbVC152 kbVC200 kbVC410 kbVC420 kbVC500 kbVC600 kbVS600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
