---
layout: page
title: "Q246687: BUG: DDX_ and DDP_ Functions Don't Work for ComboBoxEx in COlePr"
permalink: /kb/246/Q246687/
---

## Q246687: BUG: DDX_ and DDP_ Functions Don't Work for ComboBoxEx in COlePr

{% raw %}

	Article: Q246687
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbComboBox kbCOMt kbDlg kbMFC kbPersistSt kbPropSheet kbVC500bug kbVC600bug kbDSupport
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the user has an extended combo box in a COlePropertyPage class, and uses the
	DDX_ functions and the DDP_ functions to set a control property with the
	extended combo box control, the property is not persisted when the selection is
	changed in the extended combo box.
	
	CAUSE
	=====
	
	The problem is in the COlePropertyPage::OnCommand function in the Ctlppg.cpp
	file. This function calls the SetControlStatus and SetModifiedFlag functions in
	response to a CBN_EDITCHANGE notification message, but only if the class name of
	the window is "COMBOBOX".
	
	The COlePropertyPage::OnCommand function also needs to call the SetControlStatus
	and SetModifiedFlag functions in response to a CBN_EDITCHANGE notification
	message for the class name "COMBOBOXEX32".
	
	RESOLUTION
	==========
	
	To work around this problem, you can handle the CBN_EDITCHANGE notification and
	call SetControlStatus and SetModifiedFlag. The code for the message map and the
	handler function should resemble the following:
	
	  BEGIN_MESSAGE_MAP(CTestPropPage, COlePropertyPage)
	  	//{{AFX_MSG_MAP(CTestPropPage)
	  	ON_CBN_EDITCHANGE(IDC_COMBOBOXEX1, OnEditchangeComboboxex1)
	  	//}}AFX_MSG_MAP
	  END_MESSAGE_MAP()
	
	  void CTestPropPage::OnEditchangeComboboxex1() 
	  {
	  	SetControlStatus(IDC_COMBOBOXEX1, TRUE);
	  	SetModifiedFlag ();
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use MFC ActiveX ControlWizard to generate an ActiveX control project called
	  Test.
	
	2. Add a custom property called MyProperty, the type is CString.
	
	3. Add an extended combo box to the control property page resource.
	
	4. Associate the string value of the combo box with MyProperty. The following
	  entries should be added to the DoDataExchange function if you define
	  m_strMyProperty as the variable name:
	
	  DDP_CBString(pDX, IDC_COMBOBOXEX1, m_strMyProperty, _T("MyProperty") );
	  DDX_CBString(pDX, IDC_COMBOBOXEX1, m_strMyProperty);
	
	5. Build the ActiveX control.
	
	6. Test the ActiveX control in the ActiveX Control Test Container. You should
	  find that the property is not being persisted.
	
	Additional query words: DDP_CBString DDX_CBString DoDataExchange SetControlStatus SetModifiedFlag
	
	======================================================================
	Keywords          : kbComboBox kbCOMt kbDlg kbMFC kbPersistSt kbPropSheet kbVC500bug kbVC600bug kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
