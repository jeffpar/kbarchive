---
layout: page
title: "Q141758: HOWTO: How to Add Tooltips for Controls to an MFC Modal Dialog B"
permalink: /kb/141/Q141758/
---

## Q141758: HOWTO: How to Add Tooltips for Controls to an MFC Modal Dialog B

{% raw %}

	Article: Q141758
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.1,2.2,4.0
	Operating System(s): 
	Keyword(s): kbcode kbDlg kbMFC kbToolTip KbUIDesign kbVC210 kbVC220 kbVC400 kbGrpDSMFCATL kbDialog
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To make the CToolTipCtrl class work correctly, you must call the
	CToolTipCtrl::RelayEvent() function. This makes it possible for the mouse
	messages to be passed to the tooltip control.
	
	For a non-modal dialog box window in an MFC application, use the window's
	CWnd::PreTranslateMessage() function to call CToolTipsCtrl::RelayEvent().
	However, for a modal dialog box in MFC versions prior to 4.0, the
	CDialog::PreTranslateMessage() function is not called because modal dialog boxes
	have their own message loops.
	
	In versions of MFC 4.0 and later, this is not a problem because of changes to the
	implementation of DoModal. Therefore, to use CToolTipCtrl in a modal dialog box,
	you need a different approach for versions prior to 4.0. This article gives you
	step-by-step example that shows how to use the CToolTipCtrl class in a MFC modal
	dialog box for 4.0 and prior versions.
	
	MORE INFORMATION
	================
	
	Step-by-Step Examples
	---------------------
	
	The following procedures generate a default MFC skeleton application and add
	tooltips to the OK button on the About dialog box and the dialog box itself.
	
	For Versions of MFC 4.0 or Later Use These Steps:
	
	1. Use the Appwizard in Visual C++ to generate an MFC application. Call it
	  Tooltips, and use all the Appwizard default settings.
	
	2. Use ClassWizard to add a PreTranslateMessage override to CAboutDialog as
	  follows:
	
	     CAboutDialog::PreTranslateMessage(MSG* pMsg)
	     {
	          if (NULL != m_pToolTip)
	              m_pToolTip->RelayEvent(pMsg);
	
	          return CDialog::PreTranslateMessage(pMsg);
	     }
	
	3. Use ClassWizard to add a member variable for the OK button in the CAboutDlg
	  class, and call it m_btOK. Also, add a m_pToolTip pointer to a CToolTipCtrl
	  object:
	
	     class CAboutDlg : public CDialog
	     {
	     public:
	         CAboutDlg();
	
	         // Dialog Data
	         //{{AFX_DATA(CAboutDlg)
	         enum { IDD = IDD_ABOUTBOX };
	         CButton   m_btOK;
	         //}}AFX_DATA
	
	         CToolTipCtrl* m_pToolTip;
	
	         //...
	     };
	
	4. Add code to the CAboutDlg class constructor and destructor to initialize and
	  release the tooltip object. You might also need to add a default destructor
	  first:
	
	     CAboutDlg::CAboutDlg() : CDialog(CAboutDlg::IDD)
	     {
	         m_pToolTip = NULL;
	     }
	
	     CAboutDlg::~CAboutDlg()
	     {
	         delete m_pToolTip;
	     }
	
	5. Override the OnInitDialog() function of the CAboutDlg class to set up the
	  tooltip control.
	
	     BOOL CAboutDlg::OnInitDialog()
	     {
	        CDialog::OnInitDialog();
	
	         //Set up the tooltip
	         m_pToolTip = new CToolTipCtrl;
	         if(!m_pToolTip->Create(this))
	         {
	             TRACE("Unable To create ToolTip\n");
	             return TRUE;
	         }
	
	         if(m_pToolTip->AddTool(this, "About Box"))
	         {
	             TRACE("Unable to add Dialog to the tooltip\n");
	         }
	
	         if (m_pToolTip->AddTool(&m_btOK,"OK Button"))
	         {
	             TRACE("Unable to add OK button to the tooltip\n");
	         }
	
	         m_pToolTip->Activate(TRUE);
	
	         return TRUE;
	     }
	
	6. Rebuild the application, and bring up the About dialog box, you will see the
	  tooltips.
	
	For Versions of MFC Prior to 4.0 Use These Steps:
	
	1. Use the Appwizard in Visual C++ to generate an MFC application. Call it
	  Tooltips, and use all the Appwizard default settings.
	
	2. Include the <Afxcmn.h> header file in the Stdafx.h file.
	
	3. Add the following member variables to the CTooktipsApp class in the
	  Tooltips.h file:
	
	     class CTooltipsApp : public CWinApp
	     {
	         //...
	     public:
	         HWND    m_hwndDialog;
	         CToolTipCtrl*   m_gpToolTip;
	
	         //...
	     };
	
	4. Initialize the two variables in the application's constructor to NULL:
	
	     CTooltipsApp::CTooltipsApp()
	     {
	         m_hwndDialog = NULL;
	         m_gpToolTip = NULL;
	     }
	
	5. Override the CTooltipsApp::ProcessMessageFilter() function as follows:
	
	     BOOL CTooltipsApp::ProcessMessageFilter(int code, LPMSG lpMsg)
	     {
	         if (m_hwndDialog != NULL)
	             if (lpMsg->hwnd == m_hwndDialog ||
	                 ::IsChild(m_hwndDialog, lpMsg->hwnd))
	             {
	                 if (NULL != m_gpToolTip)
	                     m_gpToolTip->RelayEvent(lpMsg);
	             }
	             return CWinApp::ProcessMessageFilter(code, lpMsg);
	     }
	
	6. Use ClassWizard to add a member variable for the OK button in the CAboutDlg
	  class, and call it m_btOK. Also, add a m_pToolTip pointer to a CToolTipCtrl
	  object:
	
	     class CAboutDlg : public CDialog
	     {
	     public:
	         CAboutDlg();
	
	         // Dialog Data
	         //{{AFX_DATA(CAboutDlg)
	         enum { IDD = IDD_ABOUTBOX };
	         CButton   m_btOK;
	         //}}AFX_DATA
	
	         CToolTipCtrl* m_pToolTip;
	
	         //...
	     };
	
	7. Add code to the CAboutDlg class constructor and destructor to initialize and
	  release the tooltip object. You might also need to add a default destructor
	  first:
	
	     CAboutDlg::CAboutDlg() : CDialog(CAboutDlg::IDD)
	     {
	         m_pToolTip = NULL;
	     }
	
	     CAboutDlg::~CAboutDlg()
	     {
	         delete m_pToolTip;
	     }
	
	8. Override the OnInitDialog() function of the CAboutDlg class to pass the
	  dialog's handle to the application:
	
	     BOOL CAboutDlg::OnInitDialog()
	     {
	         CDialog::OnInitDialog();
	
	         ((CTooltipsApp*)AfxGetApp())->m_hwndDialog=m_hWnd;
	
	         if (!m_pToolTip)
	         {
	             m_pToolTip = new CToolTipCtrl;
	             if(!m_pToolTip->Create(this))
	            {
	                 TRACE("Unable To create ToolTip\n");
	                 return TRUE;
	           }
	
	             ((CTooltipsApp*)AfxGetApp())->m_gpToolTip = m_pToolTip;
	
	             if(m_pToolTip->AddTool(this, "About Box"))
	             {
	                 TRACE("Unable to add Dialog to the tooltip\n");
	             }
	
	             if (m_pToolTip->AddTool(&m_btOK,"OK Button"))
	             {
	                 TRACE("Unable to add OK button to the tooltip\n");
	             }
	
	             m_pToolTip->Activate(TRUE);
	         }
	
	        return TRUE;//return TRUE unless you set the focus to a control
	                    //EXCEPTION: OCX Property Pages should return FALSE
	      }
	
	9. Override the PostNcDestroy() function of the CAboutDlg class to reset the
	  variables in the application class:
	
	     void CAboutDlg::PostNcDestroy( )
	     {
	         CDialog::PostNcDestroy();
	
	         ((CToolTipsApp*)AfxGetApp())->m_hwndDialog= NULL;
	         ((CToolTipsApp*)AfxGetApp())->m_gpToolTip= NULL;
	     }
	
	10. Rebuild the application, and bring up the About dialog box, you will see the
	  tooltips.
	
	Additional query words: 2.10 2.20 3.10 3.20 4.00
	
	======================================================================
	Keywords          : kbcode kbDlg kbMFC kbToolTip KbUIDesign kbVC210 kbVC220 kbVC400 kbGrpDSMFCATL kbDialog 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.1,2.2,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
