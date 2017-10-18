---
layout: page
title: "Q102829: How to Replace a View in a CMDIChildWnd Window"
permalink: kb/102/Q102829/
---

## Q102829: How to Replace a View in a CMDIChildWnd Window

	Article: Q102829
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.51,1.52,2.0,2.1,l.5
	Operating System(s): 
	Keyword(s): kbfile kbDocView kbMFC kbVC100 kbVC150 kbVC200 kbVC210 kbArchitecture
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, l.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	There is an equivalent VC4.0 (32-bit) sample available under the name of
	VWRPLC32.
	
	SUMMARY
	=======
	
	The VWRPLC sample demonstrates how a programmer might write a ReplaceView()
	member function for a CMDIChildWnd-derived class.
	
	Download VWRPLC.EXE, a self-extracting file, from the Microsoft Software Library
	(MSL) on the following services:
	
	The following file is available for download from the Microsoft Software
	Library:
	
	  Vwrplc.exe
	  (http://support.microsoft.com/download/support/mslfiles/Vwrplc.exe)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	NOTE: Use the -d option when running VWRPLC.EXE to decompress the file and
	re-create the proper directory structure.
	
	MORE INFORMATION
	================
	
	The core of the sample can be found in FRAME.CPP. You will see the following
	function:
	
	     BOOL CFrame::ReplaceView(CRuntimeClass * pViewClass)
	     {
	      CCreateContext context;
	      CView * pCurrentView;
	
	      // If no active view for the frame, return FALSE because this
	      // function retrieves the current document from the active view.
	      if ((pCurrentView=GetActiveView())==NULL)
	         return FALSE;
	
	      // If you're already displaying this kind of view, no need to go
	      // further.
	      if ((pCurrentView->IsKindOf(pViewClass))==TRUE)
	         return TRUE;
	
	       // Get pointer to CDocument object so that it can be used in the
	       // creation process of the new view.
	       CDocument * pDoc= pCurrentView->GetDocument();
	
	        // Set flag so that document will not be deleted when view is
	        // destroyed.
	        BOOL bAutoDelete=pDoc->m_bAutoDelete;
	         pDoc->m_bAutoDelete=FALSE;
	        // Delete existing view
	        pCurrentView->DestroyWindow();
	        // restore flag
	        pDoc->m_bAutoDelete=bAutoDelete;
	
	       // Create new view and redraw.
	       context.m_pNewViewClass=pViewClass;
	       context.m_pCurrentDoc=pDoc;
	       context.m_pNewDocTemplate=NULL;
	       context.m_pLastView=NULL;
	       context.m_pCurrentFrame=this;
	
	       CView * pNewView = (CView *) pViewClass->CreateObject();
	
	       if (pNewView == NULL)
	         {
	         TRACE1("Warning: Dynamic create of view type %Fs failed\n",
	                        pViewClass->m_lpszClassName);
	              return FALSE;
	         }
	
	        if (!pNewView->Create(NULL, NULL, AFX_WS_DEFAULT_VIEW,
	              CRect(0,0,0,0), this, AFX_IDW_PANE_FIRST, &context))
	              {
	              TRACE0("Warning: couldn't create view for frame\n");
	                 return FALSE; // Programmer can assume FALSE return value
	                              // from this function means that there
	                              // isn't a view.
	              }
	
	       // WM_INITIALUPDATE is define in AFXPRIV.H.
	       pNewView->SendMessage(WM_INITIALUPDATE, 0, 0);
	
	       RecalcLayout();
	
	       pNewView->UpdateWindow();
	
	       SetActiveView(pNewView);
	
	       return TRUE;
	     }
	
	The function receives a pointer to CRuntimeClass object for the new view that is
	desired. It destroys the old view and replaces it with a new view of the same
	CDocument. When DestroyWindow() is called for the old view, this causes a
	"delete this" in the CView::PostNcDestroy() function. Also, the CView::~CView
	destructor calls CView::RemoveView(), which removes the view from the document's
	view list.
	
	REFERENCES
	==========
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q141499 SAMPLE: VWRPLC32, Replacing a View in a CMDIChildWnd Window
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbDocView kbMFC kbVC100 kbVC150 kbVC200 kbVC210 kbArchitecture 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.0,1.51,1.52,2.0,2.1,l.5
	
	=============================================================================
	
