---
layout: page
title: "Q243457: BUG: MFC-WinCE Property Page Disappears when Selected"
permalink: /kb/243/Q243457/
---

## Q243457: BUG: MFC-WinCE Property Page Disappears when Selected

	Article: Q243457
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:6.0; winnt:
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbContainer kbCtrlCreate kbMFC kbPropSheet kbVC600 kbOSWinCEsearch kbG
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++ 6.0 
	- The Resource Editor 
	- The Microsoft Foundation Classes (MFC) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Property page hosting registered CE ActiveX control disappears when the tab for
	that page is selected. If control is placed on the first page, the property
	sheet appears for a brief moment, and then disappears. These symptoms are seen
	on both device and emulator for Windows CE.
	
	CAUSE
	=====
	
	Microsoft is researching this problem and will post more information here in the
	Microsoft Knowledge Base when it becomes available.
	
	RESOLUTION
	==========
	
	At this time, there is no resolution to the problem. To work around the problem,
	the control can be created dynamically at run-time, rather than using the
	Resource Editor to drag and drop the control on the dialog resource. For
	example:
	
	Override the WM_INITDIALOG for the Property Page Class. The Class Wizard
	generates the following message map:
	
	  // Generated message map functions
	  //{ {AFX_MSG(CMyPropertyPage1)
	  virtual BOOL OnInitDialog();
	  //} }AFX_MSG
	
	Then from the menu item, select Project, Add to Project, Components and Control,
	and then Registered ActiveX Controls. Locate the control you want to add to the
	property page.
	
	You should assume, that you want to add the Microsoft CE Grid Control 6.0. Select
	Microsoft CE Grid Control 6.0 click Insert, OK, and then Close. Add a protected
	member variable to the Property Page class of type CGridCtrl using the Class
	View to add the member variable:
	
	  protected:
	       CGridCtrl m_myGridCtrl;
	
	In the handler for WM_INITDIALOG add the following code to create the control:
	
	  BOOL CMyPropertyPage1::OnInitDialog()
	  {
	     CPropertyPage::OnInitDialog();
	
	     // TODO: Add extra initialization here
	     m_myGridCtrl.Create(NULL,                   //LPCTSTR lpszClassName 
	                         NULL,                   //LPCTSTR lpszWindowName
	                         WS_CHILD|WS_VISIBLE,    //DWORD dwStyle
	                         CRect(20,20, 200, 200), //const RECT& rect
	                         this,                   //CWnd* pParentWnd
	                         500,                    //UINT nID
	                         NULL);                  //CCreateContext* pContext 
	        return TRUE;      // return TRUE unless you set the focus to a control
	        // EXCEPTION: OCX Property Pages should return FALSE
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a simple dialog based application, add a button to it, and in the
	  handler for the button shows a property page and control on it.
	
	2. Create a class CMyPropertySheet derived from CPropertySheet.
	
	3. Using Resource Editor, add two Property Pages IDD_PROPPAGE1, IDD_PROPPAGE2.
	
	4. Create two additional classes CMyPropertyPage1, CMyPropertyPage2 derived from
	  CPropertyPage and associate the two property page resources to it.
	
	5. Add a member variable of type CMyPropertyPage1 and CMyPropertyPage2 to the
	  CMyPropertySheet class, m_page1, m_page2.
	
	6. In the constructor for CMyPropertySheet add the two following pages:
	
	  CMyPropertySheet::CMyPropertySheet(LPCTSTR pszCaption, CWnd* pParentWnd, UINT iSelectPage)
	  	:CPropertySheet(pszCaption, pParentWnd, iSelectPage)
	  {
	      AddPage(&m_page1);
	      AddPage(&m_page2);
	  }
	
	7. In the button handler in the main dialog based application:
	
	  #include "MyPropertySheet.h"
	
	  void CSampleDlg::OnButton1() 
	  {
	      CMyPropertySheet m_PropSheet(TEXT("Sample"));
	      m_PropSheet.DoModal();	
	  }
	
	  Rebuild and run, to test that the property sheet works correctly.
	
	8. Using Control Manager make sure you have registered the CE ActiveX Control
	  you want to add to this property sheet (for example, Microsoft CE Grid
	  Control 6.0) for design and emulation.
	
	9. Add the control to the project:
	  From the menu item, select Project, Add to Project, Components and Control,
	  and then Registered ActiveX Controls. Locate the Microsoft CE Grid Control
	  6.0. Select Microsoft CE Grid Control 6.0 click Insert, OK, and then Close.
	  From the toolbar drag and drop it on the IDD_PROPPAGE2. (You can also
	  right-click the dialog box resource to insert the ActiveX control). Rebuild
	  and run, click on the button to invoke the property sheet, now click on the
	  second tab of the property sheet, the page disappears.
	
	10. If control is dropped on first page, the property sheet flashes for a
	  fraction of second and then disappears.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Vidyanand Rajpathak, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbContainer kbCtrlCreate kbMFC kbPropSheet kbVC600 kbOSWinCEsearch kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbMFC kbWinCETKVCSearch kbWinCESearch kbWinCETK600VC kbVC32bitSearch kbResourceEd
	Version           : WINDOWS:6.0; winnt:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
