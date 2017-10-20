---
layout: page
title: "Q244232: HOWTO:Add Context Help (? Button) to Title Bar of CPropertySheet"
permalink: /kb/244/Q244232/
---

## Q244232: HOWTO:Add Context Help (? Button) to Title Bar of CPropertySheet

{% raw %}

	Article: Q244232
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCSHelp kbDlg kbWinHelp kbMFC KbUIDesign kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL
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
	
	SUMMARY
	=======
	
	In order to add the Context Help Button(?) to the top right corner of a
	CPropertySheet so that it shows up on all the tabs of the sheet, you need to
	override the OnInitDialog method of the CPropertySheet and call the
	ModifyStyleEx() function with the first parameter of 0 and the second set to
	WS_EX_CONTEXTHELP.
	
	MORE INFORMATION
	================
	
	The following steps can be used to add the context help button to a MFC property
	sheet.
	
	1. Using AppWizard create a default dialog based application called "Sample" and
	  add a button resource to it. Using ClassWizard, add a BN_CLICKED handler for
	  this button.
	
	2. Insert a Property Sheet Resource, by choosing Project, Add to Project,
	  Components and Controls..., Visual C++ Components, now select Property Sheet
	  and click Insert
	
	3. Click OK on the dialog box that is displayed. This will bring up another
	  wizard to choose the type of the property sheet.
	
	4. Select the Property Sheet radio button and click Next. Take default setting
	  on the next screen and click Next.
	
	5. On the next screen where it says "What class would you like to give access to
	  this property sheet?", choose CSampleDlg. Take the default settings on the
	  next two screens and click Finish. Click Close in the Components and Controls
	  Gallery dialog box.
	
	6. Go to the Button Handler and add the following code:
	
	  void CSampleDlg::OnButton1() 
	  {
	      CMyPropertySheet pSheet;
	      pSheet.DoModal();
	  }
	
	7. Using ClassView, override the OnInitDialog virtual function by right-clicking
	  CMyPropertySheet and selecting Add Virtual Function.... Select OnInitDialog
	  on the left and click the Add and Edit button.
	
	8. Add the following code to the OnInitDialog virtual function:
	
	  BOOL CMyPropertySheet::OnInitDialog() 
	  {
	      BOOL bResult = CPropertySheet::OnInitDialog();
	      ModifyStyleEx(0, WS_EX_CONTEXTHELP); 
	      return bResult;
	  }
	
	Build the project and run it. If you click the the button on the dialog box, you
	should notice the property sheet gets displayed with the Context Help
	Button(?).
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Vidyanand Rajpathak, Microsoft Corporation
	
	
	Additional query words: Context Help, Question mark button
	
	======================================================================
	Keywords          : kbCSHelp kbDlg kbWinHelp kbMFC KbUIDesign kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
