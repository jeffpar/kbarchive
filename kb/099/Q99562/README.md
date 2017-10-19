---
layout: page
title: "Q99562: INFO: Switching Views in a Single Document Interface Program"
permalink: /kb/099/Q99562/
---

## Q99562: INFO: Switching Views in a Single Document Interface Program

	Article: Q99562
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDocView kbMFC KbUIDesign kbVC kbVC100 kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 15-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In a single document interface (SDI) application, created with the Microsoft
	Foundation Class Library, to create an alternate CView and use both the CView
	specified in the CDocumentTemplate and the alternate view in the application,
	perform the steps listed below.
	
	NOTE: These steps assume that the name of the CWinApp-derived object is
	CMyWinApp; that CMyWinApp is declared and defined in MYWINAPP.H and
	MYWINAPP.CPP, respectively; that CNewView is the name of the new, CView- derived
	object; and that CNewView is declared and defined in NEWVIEW.H and NEWVIEW.CPP,
	respectively. Substitute these with your own class and file names as needed.
	
	1. Add the following members to the declaration of CMyWinApp in MYWINAPP.H:
	
	        CView* m_pOldView;
	        CView* m_pNewView;
	        CView* SwitchView(CView* pNewView);
	
	2. If CNewView was created with ClassWizard, modify the CNEWVIEW.H to change the
	  access specifier for the constructor, destructor, and OnInitialUpdate()
	  function from protected to public.
	
	3. Add "#include <AFXPRIV.H>" (without the quotation marks) to the include
	  section of MYWINAPP.CPP. This is required to define the WM_INITIALUPDATE
	  message to be added in step 4.
	
	4. Create a new view and attach it to the document. The following code fragment
	  creates a new view in the InitInstance() member of the CMyWinApp object. In
	  this way, both new and existing views persist for the lifetime of the
	  application; however, the application could just as easily create the new
	  view dynamically.
	
	  This code requires the main frame window, document, and default view to exist
	  already. In Visual C++ for Windows and Visual C++ 32-bit Edition, versions
	  1.0 through 2.x, insert the following code into CMyWinApp::InitInstance()
	  after the call to OnFileNew(), as OnFileNew() creates each of these elements.
	  In Visual C++ 32-bit Edition, versions 4.0 or later, insert this code after
	  the call to ProcessShellCommand():
	
	        ...
	        CView* pActiveView = ((CFrameWnd*) m_pMainWnd)->GetActiveView();
	        m_pOldView = pActiveView;
	        m_pNewView = (CView*) new CNewView;
	
	        CDocument* pCurrentDoc =
	           ((CFrameWnd*) m_pMainWnd)->GetActiveDocument();
	
	        // Initialize a CCreateContext to point to the active document.
	        // With this context, the new view is added to the document
	        // when the view is created in CView::OnCreate().
	        CCreateContext newContext;
	        newContext.m_pNewViewClass = NULL;
	        newContext.m_pNewDocTemplate = NULL;
	        newContext.m_pLastView = NULL;
	        newContext.m_pCurrentFrame = NULL;
	        newContext.m_pCurrentDoc = pCurrentDoc;
	
	        // The ID of the initial active view is AFX_IDW_PANE_FIRST.
	        // Incrementing this value by one for additional views works
	        // in the standard document/view case but the technique cannot
	        // be extended for the CSplitterWnd case.
	        UINT viewID = AFX_IDW_PANE_FIRST + 1;
	        CRect rect(0, 0, 0, 0); // gets resized later
	
	        // Create the new view. In this example, the view persists for
	        // the life of the application. The application automatically
	        // deletes the view when the application is closed.
	        m_pNewView->Create(NULL, "AnyWindowName", WS_CHILD, rect,
	                                m_pMainWnd, viewID, &newContext);
	
	        // When a document template creates a view, the WM_INITIALUPDATE
	        // message is sent automatically. However, this code must
	        // explicitly send the message, as follows.
	        m_pNewView->SendMessage(WM_INITIALUPDATE, 0, 0);
	        ...
	
	5. Define the CMyApp::SwitchView() function. (Alternatively, SwitchView() could
	  be declared and defined as a member of the main frame class.)
	
	        CView* CMyWinApp::SwitchView(CView* pNewView)
	        {
	           CView* pActiveView =
	              ((CFrameWnd*) m_pMainWnd)->GetActiveView();
	
	           // Exchange view window ID's so RecalcLayout() works.
	           #ifndef _WIN32
	           UINT temp = ::GetWindowWord(pActiveView->m_hWnd, GWW_ID);
	           ::SetWindowWord(pActiveView->m_hWnd, GWW_ID,
	                           ::GetWindowWord(pNewView->m_hWnd, GWW_ID));
	           ::SetWindowWord(pNewView->m_hWnd, GWW_ID, temp);
	           #else
	           UINT temp = ::GetWindowLong(pActiveView->m_hWnd, GWL_ID);
	           ::SetWindowLong(pActiveView->m_hWnd, GWL_ID,
	                           ::GetWindowLong(pNewView->m_hWnd, GWL_ID));
	           ::SetWindowLong(pNewView->m_hWnd, GWL_ID, temp);
	           #endif
	
	           pActiveView->ShowWindow(SW_HIDE);
	           pNewView->ShowWindow(SW_SHOW);
	           ((CFrameWnd*) m_pMainWnd)->SetActiveView(pNewView);
	           ((CFrameWnd*) m_pMainWnd)->RecalcLayout();
	           pNewView->Invalidate();
	           return pActiveView;
	        }
	
	  NOTE: This function returns a pointer to the old view so that the old view can
	  be destroyed if desired. Before destroying the view though,
	  CDocument::RemoveView() should be called so the association between the view
	  and the document is removed.
	
	6. Add command handlers or other code to call the SwitchView() function when the
	  application needs to switch between views.
	
	Additional query words: destructor multiple
	
	======================================================================
	Keywords          : kbDocView kbMFC KbUIDesign kbVC kbVC100 kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
