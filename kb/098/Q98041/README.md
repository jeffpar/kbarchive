---
layout: page
title: "Q98041: INFO: Using CBitmapButton in CDialogBar and CFormView"
permalink: kb/098/Q98041/
---

## Q98041: INFO: Using CBitmapButton in CDialogBar and CFormView

	Article: Q98041
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,2.2,4.0
	Operating System(s): 
	Keyword(s): kbDocView kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL kbMFCCtrlBar
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	To attach a CBitmapButton object to a button in a dialog box, call the
	CBitmapButton::AutoLoad() function in the OnInitDialog() function for the
	dialog box. Note, that the CDialogBar and CFormView classes are not
	derived from the CDialog class and do not have an OnInitDialog() function.
	
	To use a CBitmapButton with a CDialogBar, override the Create() function
	and call AutoLoad() after calling the base class version of Create(). In
	the following code, which demonstrates this process, the CMyDialogBar class
	is derived from CDialogBar and m_MyBitmapButton is a CBitmapButton member
	of CMyDialogBar:
	
	     BOOL CMyDialogBar::Create(CWnd* pParent, UINT nIDTemplate,
	                               UINT nStyle, UINT nID)
	     {
	        // Call base class create to create the dialog bar window.
	        BOOL bReturn = CDialogBar::Create(pParent, nIDTemplate,
	                                          nStyle, nID);
	        // Load bitmaps for the button and attach
	        // to the control in the dialog box.
	        if (bReturn)
	           m_MyBitmapButton.AutoLoad(IDC_MYBITMAPBUTTON, this);
	
	        return bReturn;
	     }
	
	To use a CBitmapButton with a CFormView, call AutoLoad() in the CFormView
	OnInitialUpdate() function. In the following code, which demonstrates this,
	the CMyFormView class is derived from CFormView and m_MyBitmapButton is a
	CBitmapButton member of CMyFormView:
	
	     void CMyFormView::OnInitialUpdate()
	     {
	        CFormView::OnInitialUpdate();
	        m_MyBitmapButton.AutoLoad(IDC_MYBITMAPBUTTON, this);
	     }
	
	SUMMARY
	=======
	
	
	
	Additional query words: kbinf 1.00 1.50 1.51 1.52 2.00 2.10 2.50 2.51 2.52 3.00 3.10 4.00
	
	======================================================================
	Keywords          : kbDocView kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL kbMFCCtrlBar 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,2.2,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
