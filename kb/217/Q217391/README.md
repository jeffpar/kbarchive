---
layout: page
title: "Q217391: PRB: Excel Does Not Repaint Highlighted Cells Correctly in MFC"
permalink: kb/217/Q217391/
---

## Q217391: PRB: Excel Does Not Repaint Highlighted Cells Correctly in MFC

	Article: Q217391
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveDocs kbActiveX kbContainer kbExcel kbMFC kbVC600 kbGrpDSMFCATL
	Last Modified: 18-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an AppWizard-generated MFC MDI Active Document Container has an Excel
	spreadsheet embedded in one of its views, and another view open at the same
	time, any highlighted cells in the Excel spreadsheet is not repainted correctly
	when the other view is dragged over the spreadsheet view.
	
	CAUSE
	=====
	
	This problem occurs because the Excel document server does not "unhighlight" the
	cells after the document has lost focus. The MFC Active Document Container calls
	the function IOleInPlaceActiveObject::OnDocWindowActivate(FALSE) from
	CMDIChildWnd::OnMDIActivate to notify the Active Document Server that it should
	deactivate the document. The implementation of the Excel document server
	deactivates the document, but does not unhighlight the cells. Excel unhighlights
	the cells when its view is redrawn after it has lost focus. Therefore, the Excel
	document server must be notified to redraw itself after it has lost focus.
	
	RESOLUTION
	==========
	
	To work around this problem, override CView::OnSetFocus() to redraw all views
	and their embedded servers.
	
	The following steps should be taken to work around this problem:
	
	1. Add the following function to the CView derived class's header file in the
	  protected section:
	
	  void DoRedraw();
	
	2. Implement this function as follows in the CView derived class's .cpp file:
	
	  void CMyAXDocContView::DoRedraw()
	  {
	    //  This function causes the embedded Active Document Server to be redrawn 
	    //  Iterate document templates...
	     POSITION posTmpl = AfxGetApp()->GetFirstDocTemplatePosition();
	     while(posTmpl != NULL){
	        CDocTemplate *pTmpl = AfxGetApp()->GetNextDocTemplate(posTmpl);
	        //  Iterate documents in this template.
	        POSITION posDoc = pTmpl->GetFirstDocPosition();
	        while(posDoc != NULL) {
	           COleDocument *pDoc = (COleDocument *)pTmpl->GetNextDoc(posDoc);
	
	           //  Iterate views of each document.
	           POSITION posView = pDoc->GetFirstViewPosition();
	           while(posView != NULL) {
	              CView *pView = pDoc->GetNextView(posView);
	              // Completely redraw.
	              pView->RedrawWindow(NULL, NULL, RDW_ERASE|RDW_INVALIDATE|RDW_UPDATENOW|RDW_FRAME|RDW_ALLCHILDREN);
	           }
	        }
	     }
	  }
	
	3. Override the OnSetFocus() function to call the DoRedraw() function in the
	  CView derived class as follows:
	
	  void CMyAXDocCont1View::OnSetFocus(CWnd* pOldWnd)
	  {
	  	COleClientItem* pActiveItem = GetDocument()->GetInPlaceActiveItem(this);
	  	if (pActiveItem != NULL &&
	  		pActiveItem->GetItemState() == COleClientItem::activeUIState)
	  	{
	  		// Need to set focus to this item if it is in the same view.
	  		CWnd* pWnd = pActiveItem->GetInPlaceWindow();
	  		if (pWnd != NULL)
	  		{
	  			pWnd->SetFocus();   // Don't call the base class.
	  			DoRedraw();         // Redraw Server
	  			return;
	  		}
	  	}
	  	DoRedraw();  //  Redraw Server.
	
	  	CView::OnSetFocus(pOldWnd);
	  }
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following steps reproduce this problem:
	
	1. Generate an MFC MDI Active Document Container with Visual C++ 6.0.
	
	2. On the Build menu, click Run.
	
	3. On the Edit menu, click Insert New Object, and insert a Microsoft Excel
	  Worksheet.
	
	4. On the File menu, click New to open a new view.
	
	5. Highlight some cells in the Excel view.
	
	6. Drag the second view over the highlighted cells and then drag it away.
	
	  Notice the highlighted cells are not repainted.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Bret Bentzinger, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbActiveDocs kbActiveX kbContainer kbExcel kbMFC kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
