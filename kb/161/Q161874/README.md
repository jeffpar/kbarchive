---
layout: page
title: "Q161874: FIX: Displaying CPropertySheet in COleControl Causes Assert"
permalink: kb/161/Q161874/
---

## Q161874: FIX: Displaying CPropertySheet in COleControl Causes Assert

	Article: Q161874
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbCOMt kbCtrl kbLocalSvr kbMFC KbUIDesign kbVC400bug kbVC500fix kbNoUpd
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling CPropertySheet::DoModal() from a method or message handler in a
	COleControl-derived class may cause an assert in WINOCC.CPP, line 325, when the
	property sheet is dismissed.
	
	CAUSE
	=====
	
	The assert is in CWnd::EnableWindow() where it is checking if the m_hWnd member
	of the CWnd object is valid.
	
	In CPropertySheet::DoModal(), MFC gets the parent window via:
	
	     CWnd* pParentWnd = CWnd::GetSafeOwner(m_pParentWnd,&hWndTop);
	
	This creates a temporary CWnd* called pParentWnd. RunModalLoop() is called next
	and returns after the property sheet is dismissed. When MFC tries to call
	EnableWindow() through the pParentWnd pointer, the m_hWnd is no longer valid.
	
	This behavior occurs because during RunModalLoop(), COleControl::OnPaint() will
	be called. COleControl::OnPaint(), in turn, calls AfxUnlockTempMaps(). This
	function deletes temporary objects that were previously created. In this case,
	the "pParentWnd" pointer is being destroyed.
	
	RESOLUTION
	==========
	
	You can prevent temporary objects from being destroyed by calling
	AfxLockTempMaps() before CPropertySheet::DoModal(). You will need to call
	AfxUnlockTempMaps() after CPropertySheet::DoModal() to allow temporary objects
	to be cleaned up.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual C++ version
	5.0.
	
	MORE INFORMATION
	================
	
	AfxLockTempMaps() and AfxUnlockTempMaps() are undocumented functions and may
	change in future versions of MFC.
	
	Sample Code
	-----------
	
	     /* Compile options needed: default
	     This code snippet displays a CPropertySheet in response to a right-mouse
	     click in the COleControl.
	     */ 
	     void CTestCtrl::OnRButtonDown(UINT nFlags, CPoint point)
	     {
	        CPropertySheet sheet;
	        CMyPage page;
	        sheet.AddPage (&page);
	
	             // Prevent temporary objects from being destroyed.
	        AfxLockTempMaps ();
	
	        sheet.DoModal ();
	
	             // Allow temporary objects to be cleaned up.
	        AfxUnlockTempMaps ();
	
	        COleControl::OnRButtonDown(nFlags, point);
	     }
	
	Additional query words: ocx
	
	======================================================================
	Keywords          : kbole kbActiveX kbCOMt kbCtrl kbLocalSvr kbMFC KbUIDesign kbVC400bug kbVC500fix kbNoUpdate 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC32bitSearch
	Version           : winnt:4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
