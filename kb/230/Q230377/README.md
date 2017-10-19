---
layout: page
title: "Q230377: BUG: Find/Replace ASSERT in MDI App w/ CRichEditView-based Views"
permalink: /kb/230/Q230377/
---

## Q230377: BUG: Find/Replace ASSERT in MDI App w/ CRichEditView-based Views

	Article: Q230377
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCmnDlg kbCmnDlgFind kbCmnDlgRepl kbMFC kbRichEdit kbDSupport kbGrpDSMFCATL
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Find/Replace dialog box in a multiple document interface (MDI)
	application with CRichEditView-based views, you may receive one of the following
	messages:
	
	  Debug Assertion Failed! Program: [Your.exe]. File: viewrich.cpp. Line: 1674.
	
	  User breakpoint called from code at [SomeAddress].
	  (CRichEditView::AssertValid() will be on the stack)
	
	CAUSE
	=====
	
	Dialog box ownership is established statically when the dialog box is created.
	The view that handles the initial ID_EDIT_FIND or ID_EDIT_REPLACE command
	becomes the owner of the dialog box. The owner is the window that receives
	FINDMSGSTRING notifications.
	
	When a Find/Replace dialog box survives its owner, all subsequent notifications
	are directed to a nonexistent window. The application is not aware that the
	dialog has been dismissed, which results in the assertions.
	
	RESOLUTION
	==========
	
	WARNING: This resolution uses undocumented implementation features of the
	Microsoft Foundation Classes (MFC). Future versions of MFC may break programs
	that use this resolution.
	
	To resolve this problem, you need to do two things:
	
	- Override the OnActivateView method to update the dialog box owner dynamically
	  whenever a CRichEditView view becomes active.
	
	- Provide a WM_DESTROY handler to dismiss the dialog box.
	
	See the sample code in the "More Information" section below for details.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce this problem, perform the following steps:
	
	1. In Visual C++, use AppWizard to create a default MDI application. In the last
	  AppWizard step, specify CRichEditView as the base class for the view.
	
	2. Compile and run the application.
	
	3. Open a Find/Replace dialog box, close the child frame that contains the
	  dialog box's owner, close the dialog box, and then create a new child frame.
	  You should receive an assertion.
	
	  -or-
	
	  Open a Find/Replace dialog box, close the child frame that contains the dialog
	  box's owner, create a new child frame, and then close the dialog box. You
	  should receive an assertion.
	
	  -or-
	
	  Open a Find/Replace dialog box, close the child frame that contains the dialog
	  box's owner, create a new child frame, and then attempt to execute a search
	  in the new frame. No search is executed.
	
	Steps to Resolve the Problem
	----------------------------
	
	The following sample code illustrates how to override the OnActivateView method
	for CRichEditView-derived classes, and replace the WM_DESTROY handler:
	
	  #include <..\Src\AfxImpl.h>
	
	  void CRefindView::OnActivateView(BOOL bActivate, CView* pActivateView,
	                                    CView* pDeactiveView)
	  {
	    // Set owner of Find/Replace dialog box.
	    _AFX_RICHEDIT_STATE* pEditState = _afxRichEditState;
	    if (pEditState && pEditState->pFindReplaceDlg && (pActivateView == this))
	       pEditState->pFindReplaceDlg->m_fr.hwndOwner = m_hWnd;
	
	    CRichEditView::OnActivateView(bActivate, pActivateView, pDeactiveView);
	  }
	
	  void CRefindView::OnDestroy()
	  {
	    // Deactivate the item on destruction;
	    // this is important when a splitter view is used.
	    // CRichEditView::OnDestroy();
	    COleClientItem* pActiveItem = GetDocument()->GetInPlaceActiveItem(this);
	    if (pActiveItem != NULL && pActiveItem->GetActiveView() == this)
	    {
	      pActiveItem->Deactivate();
	      ASSERT(GetDocument()->GetInPlaceActiveItem(this) == NULL);
	    }
	
	    // Close Find/Replace dialog box if this is the last CRichEditView.
	    _AFX_RICHEDIT_STATE* pEditState = _afxRichEditState;
	    if (pEditState && pEditState->pFindReplaceDlg)
	    {
	      CWinApp* pApp = AfxGetApp();
	      // If there is no doc manager, there are no templates.
	      if (pApp->m_pDocManager != NULL)
	      {
	        // Walk all templates.
	        CDocTemplate* pTemplate;
	        POSITION pos = pApp->m_pDocManager->GetFirstDocTemplatePosition();
	        while (pos != NULL)
	        {
	          pTemplate = pApp->m_pDocManager->GetNextDocTemplate(pos);
	          ASSERT(pTemplate);
	
	          // Walk all documents in the template.
	          POSITION pos2 = pTemplate->GetFirstDocPosition();
	          while (pos2)
	          {
	             CDocument* pDoc = pTemplate->GetNextDoc(pos2);
	             ASSERT(pDoc);
	
	             // Walk all views in the document.
	             POSITION pos3 = pDoc->GetFirstViewPosition();
	             while (pos3 != NULL)
	             {
	               CView* pView = pDoc->GetNextView(pos3);
	               ASSERT(pView);
	               // If we find another CRichEditView, 
	               // skip the code that closes the Find/Replace dialog box.
	               if (pView->IsKindOf(RUNTIME_CLASS(CRichEditView))
	                  && pView != this && ::IsWindow(pView->GetSafeHwnd()))
	               {
	                  pEditState->pFindReplaceDlg->m_fr.hwndOwner = pView->m_hWnd;
	                  goto FoundRichEditView;
	               }
	             }
	           }
	         }
	       }
	
	    if (::IsWindow(pEditState->pFindReplaceDlg->m_hWnd))
	       pEditState->pFindReplaceDlg->SendMessage(WM_CLOSE);
	    pEditState->pFindReplaceDlg = NULL;
	   }
	
	   FoundRichEditView:
	      CRichEditView::OnDestroy();
	  }
	
	Additional query words: CRichEditView AssertValid Find Replace Assert
	
	======================================================================
	Keywords          : kbCmnDlg kbCmnDlgFind kbCmnDlgRepl kbMFC kbRichEdit kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
