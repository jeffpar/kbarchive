---
layout: page
title: "Q150349: FIX: Finish Button Fails Data Transfer from Page to Variables"
permalink: kb/150/Q150349/
---

## Q150349: FIX: Finish Button Fails Data Transfer from Page to Variables

	Article: Q150349
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbProgramming kbnokeyword kbDlg kbMFC kbPropSheet kbVC kbVC400bug kbVC410bug kbVC420bug
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a wizard style property sheet with Dialog Data Exchange (DDX)
	routines, data is not transferred from the current page to the corresponding
	variables when you click Finish.
	
	CAUSE
	=====
	
	MFC relies on the PSN_KILLACTIVE notification handler, OnKillActive(), to call
	UpdateData(TRUE). This notification is not sent when you click Finish, thus
	UpdateData(TRUE) is not called to allow data transfer by way of DDX.
	
	RESOLUTION
	==========
	
	When you click Finish, a PSN_WIZFINISH notification is sent. To allow the DDX
	routines to transfer data from the page to the corresponding variables, derive a
	class from CPropertyPage, and override the virtual function OnWizardFinish(). In
	OnWizardFinish(), place a call to UpdateData(TRUE).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	When a user clicks Back or Next on a wizard page, the page loses the focus and
	consequently receives a PSN_KILLACTIVE notification message. When it receives
	the PSN_KILLACTIVE notification, the virtual function of the wizard page,
	OnKillActive(), calls UpdateData(TRUE). This call allows the DDX routines to
	transfer data from the page to the corresponding variables. However, when you
	click Finish a PSN_KILLACTIVE notification is not sent, and thus
	UpdateData(TRUE) is not called. Following is an example of this in code:
	
	     /* Compile options needed: default
	     */ 
	     BOOL CMyPropertyPage::OnWizardFinish()
	     {
	         if (!UpdateData())  //note: parameter is TRUE by default
	         {
	             TRACE0("UpdateData failed during wizard finish\n");
	             return FALSE;
	         }
	         return CPropertyPage::OnWizardFinish();
	     }
	
	An additional problem surfaces when validation fails for one of the entries of
	this last page. Normally, focus should be set to the first control which
	contains an invalid entry. This does not occur for the wizard style property
	sheets. To work around this problem, send a WM_ACTIVATE message to the control.
	
	The MFC CDataExchange class manages the validation process, and stores the HWND
	in its m_hWndLastControl variable. When a control fails validation, the value is
	stored, and a CUserException is thrown, promptly escorting the pDX instance of
	CDataExchange out of scope from within the property page's DoDataExchange()
	override. The value can be retrieved, however, by catching the exception in
	DoDataExchange(). To test the following example code, add an HWND member to a
	derived property page class and call it m_hWndLastControl. The edit box
	IDC_EDIT1 accepts digits from 0 to 10, thus an entry greater than 10 fails
	validation.
	
	  void CMyPropertyPage::DoDataExchange(CDataExchange* pDX)
	  {
	  	try
	  	{
	  		CPropertyPage::DoDataExchange(pDX);
	  		//{ {AFX_DATA_MAP(CMyPropertyPage)
	  		DDX_Text(pDX, IDC_EDIT1, m_nDigit);
	  		DDV_MinMaxInt(pDX, m_nDigit, 0, 10);
	  		//} }AFX_DATA_MAP
	  	}
	  	catch(CUserException* e)
	  	{
	  		if (pDX->m_bSaveAndValidate &&
	                      (pDX->m_hWndLastControl != NULL))
	  		{
	  			m_hWndLastControl = pDX->m_hWndLastControl;
	  		}
	  		else
	  		{
	  			m_hWndLastControl = NULL;
	  		}
	  		throw(e); // Pass the exception on
	  	}
	  }
	
	Once HWND has been saved, a WM_ACTIVATE message can be posted in OnWizardFinish()
	as follows:
	
	  BOOL CMyPropertyPage::OnWizardFinish()
	  {
	  	if (!UpdateData())  //note: parameter is TRUE by default
	          {
	  		TRACE0("UpdateData failed during wizard finish\n");
	  		if (m_hWndLastControl != NULL)
	  		{
	  			::PostMessage(m_hWndLastControl, WM_ACTIVATE,
	                                       MAKEWPARAM(WA_ACTIVE, 0), 0L);
	  		}
	  		return FALSE;
	  	}
	  	return CPropertyPage::OnWizardFinish();
	  }
	
	Additional query words: CPropertySheet UpdateData DoDataExchange OnWizardFinish Wizard CPropertyPage
	
	======================================================================
	Keywords          : kbProgramming kbnokeyword kbDlg kbMFC kbPropSheet kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbGrpDSMFCATL kbDialog kbNoUpdate kbbuglist
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
