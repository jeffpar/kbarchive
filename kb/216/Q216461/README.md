---
layout: page
title: "Q216461: BUG: Toolbar Covers Document in MFC ActiveX Document Container"
permalink: kb/216/Q216461/
---

## Q216461: BUG: Toolbar Covers Document in MFC ActiveX Document Container

	Article: Q216461
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveDocs kbActiveX kbAppToolBar kbCOMt kbContainer kbMFC kbToolbar KbUIDesign
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create an MFC AppWizard-generated ActiveX document container, insert a
	Microsoft Word document or Excel Spreadsheet, and move a toolbar from the top to
	the left side of the window, without dragging the toolbar through the main
	window, the toolbar will cover part of the document.
	
	CAUSE
	=====
	
	This problem is caused by CFrameWnd::RecalcLayout() not being called when the
	toolbar is docked on the left side of the frame window.
	
	RESOLUTION
	==========
	
	Force CFrameWnd::RecalcLayout() to be called from the OnShowControlBars()
	function of the COleDocObjectItem-derived class. Perform the following steps to
	do this:
	
	1. Add the declaration of OnShowControlBars() to the COleDocObjectItem-derived
	  class, which is declared in the Cntritem.h file:
	
	  	virtual BOOL OnShowControlBars(CFrameWnd*, BOOL);
	
	2. Implement OnShowControlBars() of the COleDocObjectItem-derived class in
	  theCntritem.cpp file:
	
	  BOOL CAXContainerCntrItem::OnShowControlBars(CFrameWnd* pFrameWnd, BOOL bShow)
	  {
	  	BOOL bResult = COleDocObjectItem::OnShowControlBars(pFrameWnd, bShow);
	  	
	  	if(pFrameWnd->m_nIdleFlags & CFrameWnd::idleLayout)
	  		pFrameWnd->RecalcLayout();
	
	  	return bResult;
	
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new SDI or MDI AppWizard project and select ActiveX document
	  container support.
	
	2. On the Build menu, click Run.
	
	3. On the Edit menu, click Insert Object.
	
	4. Select Microsoft Word Document.
	
	5. Maximize the MDI Child window (only for MDI applications).
	
	6. On the View menu, click Normal.
	
	7. Grab the toolbar right above the document, and drag it to the left docking
	  position without dragging the cursor into the main window.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Bret
	Bentzinger, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbActiveDocs kbActiveX kbAppToolBar kbCOMt kbContainer kbMFC kbToolbar KbUIDesign kbVC600bug kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
