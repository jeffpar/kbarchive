---
layout: page
title: "Q195033: BUG: Assertion Failed When Opening a Second ActiveX Document"
permalink: /kb/195/Q195033/
---

## Q195033: BUG: Assertion Failed When Opening a Second ActiveX Document

{% raw %}

	Article: Q195033
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveDocs kbCOMt kbContainer kbVC600bug kbDSupport kbMFC600bug kbGrpDSMFCATL
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When opening a second ActiveX document from an AppWizard-generated Active
	Document Container, you get an assertion failed in Olecli2.cpp line 104 (Visual
	C++ 6.0) or line 112 (Visual C++ 5.0):
	
	     BOOL COleFrameHook::OnDocActivate(BOOL bActive)
	     {
	        ...
	        COleFrameHook* pNotifyHook = m_pActiveItem->m_pInPlaceFrame;
	        ...
	           // Unhook top-level frame if not needed.
	           if (pNotifyHook != this)
	           {
	              // Shouldn't be removing some other hook.
	              ASSERT(pNotifyHook->m_pFrameWnd->m_pNotifyHook == pNotifyHook);
	              pNotifyHook->m_pFrameWnd->m_pNotifyHook = NULL;
	           }
	        ...
	     }
	
	CAUSE
	=====
	
	This problem occurs because AppWizard generates code to activate the Active
	document object from OnInitialUpdate [through DoVerb(OLEIVERB_SHOW)]. For many
	Active Document servers (or DocObject servers), this may be too early when
	considering that WM_INITIALUPDATE is posted to the view of the second document
	before WM_MDIACTIVATE is posted to the frame window of the first document.
	
	RESOLUTION
	==========
	
	Move the code in OnInitialUpdate() to OnMDIActivate() to make the appropriate
	modifications. The code should be called only once (during activation) for each
	Active document and it should be called before calling the base class
	OnMDIActivate():
	
	     // CMyView is a CView-derived class.
	     void CMyView::OnInitialUpdate()
	     {
	        CView::OnInitialUpdate();
	        m_pSelection = NULL;  // Initialize selection.
	     }
	
	     // CChildFrame is a CMDIChildWnd-derived class.
	     CChildFrame::CChildFrame()
	     {
	        // TODO: add member initialization code here.
	        m_bFirstTime = TRUE;  // Add data member m_bFirstTime of BOOL type.
	     }
	
	     // Use ClassWizard to add this WM_MDIACTIVATE message handler to
	     // the CMDIChildWnd-derived class.
	     void CChildFrame::OnMDIActivate(
	        BOOL bActivate, CWnd* pActivateWnd, CWnd* pDeactivateWnd)
	     {
	        if (m_bFirstTime && bActivate)
	        {
	           CView* pView = GetActiveView();
	           ASSERT_VALID(pView);
	
	           //Active documents should always be activated.
	           COleDocument* pDoc = (COleDocument*) pView->GetDocument();;
	           if (pDoc != NULL)
	           {
	              // Activate the first one...
	              POSITION posItem = pDoc->GetStartPosition();
	              if (posItem != NULL)
	              {
	                 CDocItem* pItem = pDoc->GetNextItem(posItem);
	
	                 // only if it's an Active document.
	                 COleDocObjectItem *pDocObjectItem =
	                    DYNAMIC_DOWNCAST(COleDocObjectItem, pItem);
	
	                 if (pDocObjectItem != NULL)
	                 {
	                    pDocObjectItem->DoVerb(OLEIVERB_SHOW, pView);
	                 }
	              }
	           }
	
	           m_bFirstTime = FALSE;
	        }
	
	        CMDIChildWnd::OnMDIActivate(bActivate, pActivateWnd, pDeactivateWnd);
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	When DoVerb() is called, most Active Document servers end up calling
	COleClientItem::OnActivateUI(). This is responsible for setting the new value
	for m_pNotifyHook. The assertion check mentioned in this article occurs in
	COleFrameHook::OnDocActivate(), which is called from OnMDIActivate().
	
	When a new MDI child frame window is created, the WM_INITIALUPDATE message is
	posted to the view window of the new MDI child frame before any WM_MDIACTIVATE
	message is posted. Because the given AppWizard code calls DoVerb() from
	OnInitialUpdate(), the m_pNotifyHook may be changed before OnMDIActivate() is
	called for the MDI child window being deactivated.
	
	By forcing DoVerb() to be called from OnMDIActivate() only when being activated,
	we allow the deactivation of the first MDI child window to occur first.
	
	NOTE: This assertion may appear due to other causes, so the workaround in this
	article may not always apply.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Generate an MDI AppWizard Active Document Container application.
	
	2. Run the program and open two MDI child windows.
	
	3. Insert a Word Active document object to both MDI child windows. Save and
	  close the both documents.
	
	4. Open the first document created in the MDI container application.
	
	5. Open the second document created in the MDI container application. The
	  assertion will occur.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Adam Kim,
	Microsoft Corporation.
	
	Additional query words: docobject Word Excel PowerPoint
	
	======================================================================
	Keywords          : kbole kbActiveDocs kbCOMt kbContainer kbVC600bug kbDSupport kbMFC600bug kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
