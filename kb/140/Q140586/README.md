---
layout: page
title: "Q140586: HOWTO: How to Add Buttons to a Modeless CPropertySheet"
permalink: kb/140/Q140586/
---

## Q140586: HOWTO: How to Add Buttons to a Modeless CPropertySheet

	Article: Q140586
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbcode kbMFC kbPropSheet KbUIDesign kbVC400 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, a modeless CPropertySheet doesn't have any buttons. To add buttons,
	derive a class from CPropertySheet and override OnInitDialog(). In
	OnInitDialog(), you'll have to resize the CPropertySheet and add your buttons.
	You can also add additional buttons to a modal CPropertySheet using this method.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  // This code shows how to resize a modeless CPropertySheet to add a button.
	  // CMySheet is derived from CPropertySheet
	
	  BEGIN_MESSAGE_MAP(CMySheet, CPropertySheet)
	            //{ {AFX_MSG_MAP(CMySheet)
	            //} }AFX_MSG_MAP
	            ON_COMMAND(IDC_MYBUTTON, OnMyButton)
	  END_MESSAGE_MAP()
	
	  BOOL CMySheet::OnInitDialog()
	  {
	            CPropertySheet::OnInitDialog();
	
	            RECT rc;
	            GetWindowRect (&rc);
	            // Increase the height of the CPropertySheet by 30
	            rc.bottom += 30;
	            // Resize the CPropertySheet
	            MoveWindow (rc.left, rc.top, rc.right-rc.left, rc.bottom-rc.top);
	            // Convert to client coordinates
	            ScreenToClient (&rc);
	            // m_Button is of type CButton and is a member of CMySheet
	            m_Button.Create ("&MyButton", WS_CHILD | WS_VISIBLE | WS_TABSTOP,
	                                CRect (5, rc.bottom-30, 80, rc.bottom-5),
	                                this, IDC_MYBUTTON);
	
	            return TRUE;
	  }
	
	  // Handler for button click of IDC_MYBUTTON
	  void CMySheet::OnMyButton ()
	  {
	            AfxMessageBox ("MyButton was clicked!");
	  }
	
	Additional query words: kbinf 4.00
	
	======================================================================
	Keywords          : kbcode kbMFC kbPropSheet KbUIDesign kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
