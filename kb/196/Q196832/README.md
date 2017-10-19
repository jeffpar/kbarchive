---
layout: page
title: "Q196832: HOWTO: Provide an Alternative View to Data Using Splitter Window"
permalink: /kb/196/Q196832/
---

## Q196832: HOWTO: Provide an Alternative View to Data Using Splitter Window

	Article: Q196832
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDocView kbMFC KbUIDesign kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to use a static splitter window in a traditional
	SDI document-view architecture. The article shows how to design an application
	that can switch between a single view and a splitter window that can embed as
	many panes as necessary.
	
	MORE INFORMATION
	================
	
	The solution consists of embedding a pointer to a CSplitterWnd in CMainFrame, as
	opposed to the recommended way of embedding the CSplitterWnd object. Later, when
	the application needs to switch from the regular view to the splitter window,
	this splitter window is created on the heap and initialized by using
	CreateStatic(), while the regular view is destroyed.
	
	NOTE: To avoid destruction of the CDocument-derived object when the view is
	destroyed, you need to set its m_bAutoDelete data member to FALSE.
	
	You can easily expand the code to support static splitter windows with different
	numbers of panes, depending on some run-time conditions.
	
	Steps to Create Sample
	----------------------
	
	1. Create a new SDI project.
	
	2. Add a SplitterWnd (ID_VIEW_SPLITTERWND) menu item to a View menu. This item
	  turns the splitter window on and off.
	
	3. To preserve the document when there is no view associated with it, add add
	  the following code in the CDocument-derived class constructor:
	
	        CMyDoc::CMyDoc()
	        {
	           m_bAutoDelete = FALSE;
	        }
	
	4. To avoid resource leaks, you also need to set the flag back to true before
	  the destruction of the last view associated with the document (for example,
	  in the CMainFrame handler of WM_CLOSE:
	
	CMainFrame::OnClose()):
	
	        CMainFrame::OnClose()
	        {
	           GetActiveDocument()->m_bAutoDelete = TRUE;
	           CFrameWnd::OnClose();
	        }
	
	5. Add a pointer to a CSplitterWnd in the CMainFrame definition:
	
	        class CMainFrame : public CFrameWnd
	        {
	        ...
	          protected:
	           CSplitterWnd *m_pSplitter;
	        ...
	        };
	
	6. Initialize this object in the CMainFrame constructor, and delete it in the
	  destructor:
	
	        CMainFrame::CMainFrame()
	        {
	           // TODO: add member initialization code here.
	           m_pSplitter = NULL;
	        }
	
	        CMainFrame::~CMainFrame()
	        {
	           if (m_pSplitter)
	              delete m_pSplitter;
	        }
	
	7. Add two new CView-derived classes to your project, representing views that
	  are the panes in your CSplitterWnd.
	
	8. Add the following #include statements in your MainFrm.cpp file:
	
	        #include "MyDoc.h"
	        #include "MyView.h"
	        #include "Pane1View.h"
	        #include "Pane2View.h"
	
	9. Use Class Wizard to create a command and an UpdateUI handler in CMainFrame
	  for the menu item you added:
	
	        void CMainFrame::OnUpdateViewSplitterWnd(CCmdUI* pCmdUI)
	        {
	           // TODO: Add your command update UI handler code here.
	           pCmdUI->SetCheck(m_pSplitter!=NULL);
	        }
	
	        void CMainFrame::OnViewSplitterWnd()
	        {
	           // TODO: Add your command handler code here.
	           CCreateContext ctx;
	           ctx.m_pNewViewClass = RUNTIME_CLASS(CMyView);
	           // GetActiveDocument() call before you destroy m_splitter.
	           ctx.m_pCurrentDoc = GetActiveDocument();
	           ASSERT(ctx.m_pCurrentDoc!=NULL);
	
	           // m_pSplitter !=NULL when there is a visible splitter.
	           if (m_pSplitter)
	           {
	              // Destroy splitter window.
	              delete m_pSplitter;
	              m_pSplitter = NULL;
	
	              // Create and initialize CMyView.
	              SetActiveView((CView*)CreateView(&ctx));
	              GetActiveView()->OnInitialUpdate();
	           }
	           else
	           {
	              // Destroy CMyView.
	              GetActiveView()->DestroyWindow();
	
	              // Create new splitter window.
	              m_pSplitter = new CSplitterWnd;
	              if (!m_pSplitter->CreateStatic(this, 1, 2))
	              {
	                 TRACE0("Can't create splitter window.\n");
	                 return;
	              }
	              else
	              {
	                 if ((!m_pSplitter->CreateView(0, 0,
	                                               RUNTIME_CLASS(CPane1View),
	                                               CSize(200, 0), &ctx))
	                   ||(!m_pSplitter->CreateView(0, 1,
	                                               RUNTIME_CLASS(CPane2View),
	                                               CSize(500, 0), &ctx)))
	                 {
	                    TRACE0("Can't create one of the splitter panes.\n");
	                    return;
	                 }
	
	                 // Initialize the two panes (each containing a view
	                 // associated with the current document).
	                 ((CView*)m_pSplitter->GetPane(0, 0))->OnInitialUpdate();
	                 ((CView*)m_pSplitter->GetPane(0, 1))->OnInitialUpdate();
	                 SetActiveView((CView*)m_pSplitter->GetPane(0, 0));
	              }
	           }
	
	           // Redisplay frame.
	           RecalcLayout();
	        }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDocView kbMFC KbUIDesign kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
