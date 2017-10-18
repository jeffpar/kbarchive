---
layout: page
title: "Q153427: PRB: Controls Not Initialized in CPropertyPage::OnInitDialog()"
permalink: kb/153/Q153427/
---

## Q153427: PRB: Controls Not Initialized in CPropertyPage::OnInitDialog()

	Article: Q153427
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2
	Operating System(s): 
	Keyword(s): kbnokeyword kbCtrlCreate kbMFC kbPropSheet KbUIDesign kbVC420 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Initializing controls in a CPropertyPage in CPropertyPage:: OnInitDialog() by
	way of their associated member variables doesn't work. For example, to
	initialize an edit control that is associated with a CString member variable
	called "m_strData", you could do the following:
	
	  BOOL CMyPage::OnInitDialog()
	  {
	      CPropertyPage::OnInitDialog();
	      m_strData = _T("Hello");
	      return TRUE;
	  }
	
	The edit control will not be set to "Hello" at run time. This used to work in MFC
	4.0 and 4.1.
	
	CAUSE
	=====
	
	Data is transferred from member variables to their associated controls when
	UpdateData() is called (UpdateData() calls DoDataExchange() which calls DDX
	functions). UpdateData() is called by OnInitDialog() and OnSetActive(). This
	caused UpdateData() to be called twice when a CPropertyPage is first created.
	This was a problem in MFC 4.0 and MFC 4.1. It was fixed in MFC 4.2.
	OnSetActive() now checks a flag (m_bFirstSetActive) to see if this is the first
	time it is being called. If it is the first time, then UpdateData() is not
	called.
	
	As a consequence, UpdateData() will not be called again right after
	OnInitDialog() when OnSetActive() is called during the creation of the property
	page.
	
	RESOLUTION
	==========
	
	You can initialize member variables in the CPropertyPage's constructor or right
	before the call to CPropertyPage::OnInitDialog().
	
	  CMyPage::CMyPage() : CPropertyPage(CMyPage::IDD)
	  {
	      //{ {AFX_DATA_INIT(CMyPage)
	      m_strData = _T("Hello");
	      //} }AFX_DATA_INIT
	  }
	
	or
	
	  BOOL CMyPage::OnInitDialog()
	  {
	      m_strData = _T("Hello");
	      // OnInitDialog() will call UpdateData()
	      CPropertyPage::OnInitDialog();
	      return TRUE;
	  }
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 4.20 4.10 4.00
	
	======================================================================
	Keywords          : kbnokeyword kbCtrlCreate kbMFC kbPropSheet KbUIDesign kbVC420 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.2
	Issue type        : kbprb
	
	=============================================================================
	
