---
layout: page
title: "Q148703: FIX: CWnd::SubclassDlgItem Returns FALSE for OLE Controls"
permalink: /kb/148/Q148703/
---

## Q148703: FIX: CWnd::SubclassDlgItem Returns FALSE for OLE Controls

	Article: Q148703
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbole kbCOMt kbCtrl kbMFC kbVC400bug kbVC410fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using CWnd::SubclassDlgItem to subclass an OLE Control returns FALSE, after
	failing on the check for m_pCtrlCont != NULL in line 301 of Winctrl1.cpp.
	
	CAUSE
	=====
	
	The MFC framework's implementation of CWnd::SubclassDlgItem checks and uses the
	CWnd::m_pCtrlCont member of the OLE control, instead of the control container,
	which is the parent of the control. The source code should use
	pParent->m_pCtrlCont in order to access the container.
	
	RESOLUTION
	==========
	
	As a workaround, use CWnd::SubclassWindow instead of CWnd::SubclassDlgItem,
	which is illustrated in the sample code section in this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.1.
	
	MORE INFORMATION
	================
	
	Steps to Help Reproduce Problem
	-------------------------------
	
	1. Generate a default SDI control container application using AppWizard.
	
	2. Insert the Grid OLE Control through the Component Gallery, which in turn
	  generates the CGridCtrl wrapper class.
	
	3. Place the Grid control in the Application's About dialog box.
	
	4. Declare an embedded member variable called "m_gridctrl" in CAboutDlg of type
	  CGridCtrl.
	
	5. Generate an OnInitDialog() handler for the CAboutDlg class and subclass the
	  Grid control inside it as illustrated by this code:
	
	     BOOL CAboutDlg::OnInitDialog()
	     {
	         // Call base class implementation
	         CDialog::OnInitDialog();
	
	         // Try to subclass the Grid control by calling SubclassDlgItem
	         m_gridctrl.SubclassDlgItem(IDC_GRID1, this);
	
	         return TRUE;  // set focus to first control of the dialog
	     }
	
	  NOTE: In this code, IDC_GRID1 is the ID of the Grid control.
	
	6. When running the container application through the debugger, notice that
	  CWnd::SubclassDlgItem returns FALSE after failing on the check for
	  m_pCtrlCont != NULL in line 301 of Winctrl1.cpp.
	
	Sample Code to Work Around Problem
	----------------------------------
	
	  BOOL CAboutDlg::OnInitDialog()
	  {
	      CDialog::OnInitDialog();
	
	      // Try to Subclass the Grid control by calling SubclassWindow
	      CWnd* pWnd = GetDlgItem(IDC_GRID1);
	      m_gridctrl.SubclassWindow(pWnd->m_hWnd);
	
	      return TRUE;  // set focus to first control of the dialog
	                    // Exception: OCX Property Pages should return FALSE
	  }
	
	Additional query words: 4.00 ocx ole control
	
	======================================================================
	Keywords          : kbole kbCOMt kbCtrl kbMFC kbVC400bug kbVC410fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
