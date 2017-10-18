---
layout: page
title: "Q146916: HOWTO: Create a Modeless CPropertySheet with Standard Buttons"
permalink: kb/146/Q146916/
---

## Q146916: HOWTO: Create a Modeless CPropertySheet with Standard Buttons

	Article: Q146916
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbDlg kbMFC KbUIDesign kbVC kbVC500 kbVC600 kbDSupport
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to implement the standard OK, Cancel, and Apply
	buttons in a modeless CPropertySheet object.
	
	MORE INFORMATION
	================
	
	For a modeless CPropertySheet, the Microsoft Foundation Classes (MFC) resize the
	sheet and hide the standard buttons in the CPropertySheet::OnInitDialog member
	function. To prevent MFC from doing this, perform the following steps:
	
	- Derive a class from CPropertySheet and override the OnInitDialog function.
	
	- Set "m_bModeless" to FALSE and remove the WF_CONTINUEMODAL style for
	  "m_nFlags".
	
	- Call CPropertySheet::OnInitDialog.
	
	- Set "m_bModeless" back to TRUE and add the style WF_CONTINUEMODAL to
	  "m_nFlags".
	
	The following sample code illustrates this technique:
	
	  // CMySheet is derived from CpropertySheet.
	  // Compile options needed: default.
	      
	  BOOL CMySheet::OnInitDialog()
	  {
	     m_bModeless = FALSE;   
	     m_nFlags |= WF_CONTINUEMODAL;
	
	     BOOL bResult = CPropertySheet::OnInitDialog();
	
	     m_bModeless = TRUE;
	     m_nFlags &= ~WF_CONTINUEMODAL;
	     return bResult;
	  }
	
	In a modeless CPropertySheet object, the OK and Cancel buttons do not close the
	property sheet when they are clicked. They do send a WM_COMMAND message with
	IDOK or IDCANCEL to the sheet, and the OnOK or OnCancel functions are called for
	the page. To close the sheet, you can implement ON_COMMAND handlers for IDOK and
	IDCANCEL in the CPropertySheet and call the EndDialog function to close the
	sheet.
	
	Additional query words: modeless CPropertySheet buttons property sheet propertysheet
	
	======================================================================
	Keywords          : kbcode kbDlg kbMFC KbUIDesign kbVC kbVC500 kbVC600 kbDSupport 
	Technology        : kbAudDeveloper kbMFC
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
