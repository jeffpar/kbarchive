---
layout: page
title: "Q132675: PRB: Error C2039: OnInitDialog is Not a Member of CFormView"
permalink: /kb/132/Q132675/
---

## Q132675: PRB: Error C2039: OnInitDialog is Not a Member of CFormView

	Article: Q132675
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbwizard kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbGrpDSTools
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler generates the following error message when you try to define a
	handler for WM_INITDIALOG for your CFormView-derived class using ClassWizard:
	
	  Error C2039: 'OnInitDialog': is not a member of CFormView
	
	CAUSE
	=====
	
	This error is a result of the way ClassWizard views CFormView. ClassWizard, in
	most respects, treats the CFormView class as a CDialog class, and incorrectly
	allows users to define a handler for the WM_INITDIALOG message. If users choose
	to have their CFormView derived class handle the WM_INITDIALOG message,
	ClassWizard generates an OnInitDialog member function for their
	CFormView-derived class. The ClassWizard added OnInitDialog member function
	calls the parent OnInitDialog member function as follows:
	
	     CFormView::OnInitDialog();
	
	During compilation, the OnInitDialog member function generates the above
	mentioned error because CFormView is neither derived from CDialog nor does it
	have an OnInitDialog member function defined in its class.
	
	RESOLUTION
	==========
	
	To perform initialization of your CFormView, either override the OnInitialUpdate
	member function or define a handler for the WM_CREATE message in the
	CFormView-derived class.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbwizard kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbGrpDSTools 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
