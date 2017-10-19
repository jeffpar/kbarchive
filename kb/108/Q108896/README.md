---
layout: page
title: "Q108896: INFO: Dynamically Disabling/Enabling a Control in a Dialog Box"
permalink: /kb/108/Q108896/
---

## Q108896: INFO: Dynamically Disabling/Enabling a Control in a Dialog Box

	Article: Q108896
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbCtrl kbDlg kbMFC KbUIDesign kbVC kbDSupport kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	This article demonstrates one way to disable or enable a dialog box control
	during the execution of a program with the Microsoft Foundation Classes
	(MFC). The dialog box uses a dialog box template created by App Studio.
	
	To disable or enable a control in a dialog box, the following steps can be
	performed:
	
	1. Create a data member in the dialog box class that maps to a specific control
	  (you can use Class Wizard to do this). For example:
	
	        ...
	        public:
	        CButton     m_button;
	        ...
	
	2. Override CWnd::DoDataExchange(CDataExchange *pDX) in the dialog box class and
	  call the appropriate DDX routine to hook the Windows control to the dialog
	  class data member. For example:
	
	        ...
	        protected:
	        virtual void DoDataExchange(CDataExchange* pDX);
	        ...
	
	        void CMyDlg::DoDataExchange(CDataExchange* pDX)
	        {
	          CDialog::DoDataExchange(pDX);
	          DDX_Control(pDX, IDC_BUTTON1, m_button);
	        }
	
	  NOTE: If you use Class Wizard to add a member variable in your dialog box
	  class, it does this for you.
	
	3. Call CWnd::EnableWindow() to disable or enable the control when needed. For
	  example, you can disable a button when the dialog box is initialized. For
	  example:
	
	        CMyDlg::OnInitDialog()
	        {
	         ...
	         m_button.EnableWindow(FALSE);
	         ...
	        }
	
	  An alternative method is to use the CWnd::GetDlgItem() function to get a CWnd
	  * to the control and then call EnableWindow(). For example:
	
	        CMyDlg::OnInitDialog()
	         {
	          ...
	          GetDlgItem(IDC_BUTTON)->EnableWindow(FALSE);
	          ...
	         }
	
	SUMMARY
	=======
	
	
	
	Additional query words: kbSweptVC600 kbinf 1.00 1.50 2.00 2.10 2.50 2.51 2.52 3.00 3.10 4.00
	
	======================================================================
	Keywords          : kbCtrl kbDlg kbMFC KbUIDesign kbVC kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
