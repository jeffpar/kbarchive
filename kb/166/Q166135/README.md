---
layout: page
title: "Q166135: FIX: Print Preview Behavior Changes Since VC 4.2"
permalink: kb/166/Q166135/
---

## Q166135: FIX: Print Preview Behavior Changes Since VC 4.2

	Article: Q166135
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbprint kbDocView kbMFC kbPrinting KbUIDesign kbVC420bug kbVC500bug kbVC600fix k
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 4.2b, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 4.2b, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you display Print Preview for a Multiple Document Interface (MDI)
	application, depending on the version of Microsoft Foundations Classes (MFC) you
	are using, it may appear either in the MDI child frame or in the MDI main frame.
	For Visual C++ 4.2b, it is further dependent on whether you have a splitter
	window or not.
	
	CAUSE
	=====
	
	The preview window was moved to the MDI child window to support ActiveX
	documents. However, it was later decided that keeping it in the MDI main frame
	window was the better design choice.
	
	
	RESOLUTION
	==========
	
	Statically link to the MFC libraries (modified or unmodified) or design your
	preview function using the latest behavior in Visual C++ 6.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug only in the MFC libraries in Visual C++
	4.2b and 5.0.
	
	This problem was corrected in Visual C++ 6.0.
	
	MORE INFORMATION
	================
	
	When MFC's Print Preview is invoked, it searches for the frame window of the
	current view using GetParentFrame to display the preview view. This is done in
	CView::DoPrintPreview. The code below reflects some of the changes that
	DoPrintPreview went through between Visual C++ versions 4.2 and 6.0:
	
	Visual C++ 4.2
	--------------
	
	In Visual C++ 4.2, Print Previews always appear in the MDI frame window. This was
	the original behavior.
	
	  // VC 4.2
	  BOOL CView::DoPrintPreview(UINT nIDResource, CView* pPrintView,
	  CRuntimeClass* pPreviewViewClass, CPrintPreviewState* pState)
	  {
	      ...
	      CFrameWnd* pParent = (CFrameWnd*)AfxGetThread()->m_pMainWnd;
	      ASSERT_VALID(pParent);
	      ASSERT_KINDOF(CFrameWnd, pParent);
	
	Visual C++ 4.2b
	---------------
	
	In Visual C++ 4.2b, Print Preview was moved to the MDI child frame to support
	Active Documents. However, it appears in the MDI frame window only when the
	parent of the view is not a CFrameWnd-derived object (such as a splitter
	window). This inconsistency was considered a bug and was fixed in Visual C++
	5.0.
	
	  // VC 4.2b
	  BOOL CView::DoPrintPreview(UINT nIDResource, CView* pPrintView,
	      CRuntimeClass* pPreviewViewClass, CPrintPreviewState* pState)
	  {
	      ...
	      CFrameWnd* pParent;
	      CWnd* pNaturalParent = pPrintView->GetParent();
	      pParent = DYNAMIC_DOWNCAST(CFrameWnd, pNaturalParent);
	      if (pParent == NULL)
	          pParent = (CFrameWnd*)AfxGetThread()->m_pMainWnd;
	
	Visual C++ 5.0
	--------------
	
	In VC 5.0, Print Preview always appears within the MDI child window. (This was
	the intended "feature" in Visual C++ 4.2b.)
	
	  // VC 5.0
	  BOOL CView::DoPrintPreview(UINT nIDResource, CView* pPrintView,
	     CRuntimeClass* pPreviewViewClass, CPrintPreviewState* pState)
	  {
	     ...
	     CFrameWnd* pParent;
	     CWnd* pNaturalParent = pPrintView->GetParentFrame();
	     pParent = DYNAMIC_DOWNCAST(CFrameWnd, pNaturalParent);
	     if (pParent == NULL || pParent->IsIconic())
	        pParent = (CFrameWnd*)AfxGetThread()->m_pMainWnd;
	
	Visual C++ 6.0
	--------------
	
	For Visual C++ 6.0, Microsoft decided that Print Preview belongs in the MDI main
	frame window, so its behavior was changed back. (The Visual C++ 5.0 "feature"
	was considered a bug.)
	
	  BOOL CView::DoPrintPreview(UINT nIDResource, CView* pPrintView,
	      CRuntimeClass* pPreviewViewClass, CPrintPreviewState* pState)
	  {
	      ...
	      CFrameWnd* pParent = STATIC_DOWNCAST(CFrameWnd, AfxGetMainWnd());
	      ASSERT_VALID(pParent);
	
	To change the behavior of Print Preview in any of the versions, you have to
	modify the MFC sources and rebuild the MFC libraries. It is not possible to
	override DoPrintPreview in your CView-derived class because it requires the use
	of protected members of friend classes.
	
	The best design approach is to write your application using the behavior where
	Print Preview appears within the MDI main frame window. This is the current
	behavior of MFC.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Adam Kim, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbprint kbDocView kbMFC kbPrinting KbUIDesign kbVC420bug kbVC500bug kbVC600fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC420b kbVC500Search
	Version           : winnt:4.2,4.2b,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
