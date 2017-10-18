---
layout: page
title: "Q141487: HOWTO: How to Change the Text in the Tabs of a CPropertySheet"
permalink: kb/141/Q141487/
---

## Q141487: HOWTO: How to Change the Text in the Tabs of a CPropertySheet

	Article: Q141487
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbMFC kbPropSheet KbUIDesign kbVC kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The text that appears in the tabs of a CPropertySheet are usually taken from the
	caption of each CPropertyPage in the dialog template resource. There are some
	other methods that can be used to select the caption for each page.
	
	MORE INFORMATION
	================
	
	Three Methods You Can Use to Select the Caption for Each Page
	-------------------------------------------------------------
	
	1. The CPropertyPage constructor has a UINT nIDCaption parameter that can be
	  used to specify a string resource ID. The default is 0 (indicates to use the
	  dialog template caption) but can be any valid string resource ID.
	
	2. The CPropertyPage has a member called m_psp that is a PROPSHEETPAGE
	  structure. You can set this structure's dwFlags element to PSP_USETITLE and
	  pszTitle to a string that will be used as the title. This method can only be
	  used before the call to Create() or DoModal().
	
	3. If you want to change the text in the tabs after the sheet has been created,
	  you can call PropertySheet::GetTabControl() to get a CTabCtrl pointer. You
	  can then fill in a TC_ITEM structure, and using the CTabCtrl pointer, call
	  CTabCtrl::SetItem() to set the text for each tab.
	
	Sample Code
	-----------
	
	  /* Compile options needed:  Default
	  */ 
	
	  // CMySheet is derived from CPropertySheet.
	  // CPage1 is derived from CPropertyPage.
	
	  // METHOD ONE ======================================================
	  // passing the string ID to the constructor. ClassWizard does not
	  // generate a constructor that takes the caption ID as a parameter,
	  // so it may be necessary to modify the CPage1's constructor
	  class CPage1 : public CPropertyPage
	  {
	  // ...
	
	  public:
	      CPage1(UINT nIDCaption = 0);
	
	  // ...
	  };
	
	  CPage1::CPage1(UINT nIDCaption) :
	                CPropertyPage(CMyPage::IDD, nIDCaption)
	  {
	      //{ {AFX_DATA_INIT(CMyPage)
	          // NOTE: the ClassWizard will add member initialization here
	      //} }AFX_DATA_INIT
	  }
	
	  // Use the class's constructor to pass the string ID
	  CMyView::ShowPropertySheet ()
	  {
	      m_pSheet = new CMySheet ("Sheet Title");
	      ASSERT (m_pSheet);
	      m_pPage1 = new CPage1(IDS_MYCAPTION); // id of string resource
	      ASSERT (m_pPage1);
	
	      m_pSheet->DoModal ();
	  }
	
	  // METHOD TWO ======================================================
	  // this shows how to change the title of a CPropertyPage before the
	  // call to DoModal()
	  CMyView::ShowPropertySheet ()
	  {
	      m_pSheet = new CMySheet ("Sheet Title");
	      ASSERT (m_pSheet);
	      m_pPage1 = new CPage1;
	      ASSERT (m_pPage1);
	
	      m_pPage1->m_psp.dwFlags |= PSP_USETITLE;
	      m_pPage1->m_psp.pszTitle = _T("My Caption");
	
	      m_pSheet->DoModal ();
	  }
	
	  // METHOD THREE ======================================================
	  // This function allows you to pass the index number of a
	  // CPropertyPage and a string to set the title to.
	  BOOL CMySheet::SetPageTitle (int nPage, LPTSTR pszText)
	  {
	      CTabCtrl* pTab = GetTabControl();
	      ASSERT (pTab);
	
	      TC_ITEM ti;
	      ti.mask = TCIF_TEXT;
	      ti.pszText = pszText;
	      VERIFY (pTab->SetItem (nPage, &ti));
	
	      return TRUE;
	  }
	
	Additional query words: kbinf 4.00
	
	======================================================================
	Keywords          : kbMFC kbPropSheet KbUIDesign kbVC kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
