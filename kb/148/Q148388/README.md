---
layout: page
title: "Q148388: HOWTO: How to Change Default Control Focus on CPropertyPage"
permalink: /kb/148/Q148388/
---

## Q148388: HOWTO: How to Change Default Control Focus on CPropertyPage

	Article: Q148388
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbcode kbCtrl kbMFC KbUIDesign kbVC kbVC400 kbGrpDSMFCATL kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a CPropertyPage is activated, the first control in the page's tab order
	will get the focus by default. To change the default to a different control,
	derive a class from CPropertyPage, override OnSetActive(), and post a user
	message to a member function that will actually set the focus to the desired
	control.
	
	MORE INFORMATION
	================
	
	CPropertySheet's member function OnSetActive() is called when a PSN_SETACTIVE
	message is sent to that page. Attempting to set the focus to a control while in
	this handler won't produce the expected results because after this notification
	is handled, the tab control will get the focus.
	
	Therefore, you need to post a message to the property sheet's message queue with
	a user message in order to set the focus to the desired control once the page is
	active.
	
	Sample Code
	-----------
	
	  // this is the user-defined message
	  #define WM_SETPAGEFOCUS WM_APP+2
	  BEGIN_MESSAGE_MAP(CMyPage, CPropertyPage)
	    ON_MESSAGE(WM_SETPAGEFOCUS, OnSetPageFocus)
	  END_MESSAGE_MAP()
	
	  BOOL CMyPage::OnSetActive()
	  {
	    BOOL fRet = CPropertyPage::OnSetActive();
	
	    PostMessage(WM_SETPAGEFOCUS, 0, 0L);
	
	    return fRet;
	  }
	
	  LONG CMyPage::OnSetPageFocus(UINT wParam, LONG lParam)
	  {
	    // IDC_BUTTON2 is the button on this property page
	    // that you want to give the default focus.
	
	    CButton* pBtn = (CButton*)GetDlgItem(IDC_BUTTON2);
	    ASSERT(pBtn);
	    pBtn->SetFocus();
	    return 0;
	  }
	
	Additional query words: kbinf 4.00 CPropertySheet
	
	======================================================================
	Keywords          : kbcode kbCtrl kbMFC KbUIDesign kbVC kbVC400 kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
