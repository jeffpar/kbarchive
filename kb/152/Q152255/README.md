---
layout: page
title: "Q152255: PRB: Custom AppWizard Doesn't Initialize Custom Step Dialogs"
permalink: kb/152/Q152255/
---

## Q152255: PRB: Custom AppWizard Doesn't Initialize Custom Step Dialogs

	Article: Q152255
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbMFC kbVC400 kbVC410 kbVC500 kbVC600 kbCustomWizard kbGrpDSTools
	Last Modified: 27-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Custom AppWizards with some custom steps do not pick up initialization values
	for the dialog's controls for these steps from the Resource Editor.
	
	For instance, if the custom step's dialog template contains a Combo Box, the
	strings for the Combo Box can be entered in the Resource Editor itself. When the
	Wizard is built and run, and when the custom step containing the Combo Box comes
	up, the strings don't show up in the Combo Box. The same also happens with a
	picture control with a bitmap associated with it.
	
	CAUSE
	=====
	
	For the custom step dialog boxes, Custom AppWizards ignore any initialization
	information setup in the Resource Editor.
	
	
	RESOLUTION
	==========
	
	Each custom step's dialog template has a corresponding CAppWizStepDlg- derived
	class. The necessary initialization should be done in this class's OnInitDialog
	member function. Because this function is called before the dialog is visible to
	the user, the effect is as if the initializations were done in the Resource
	Editor.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Custom AppWizards are of three types with only two of these types supporting
	custom dialog steps. The problem discussed in this article shows up in both
	these types.
	
	Sample Code
	-----------
	
	     BOOL CCustomDialog::OnInitDialog()
	     {
	         CAppWizStepDlg::OnInitDialog();
	         // Initialize the combo box
	         CComboBox* pCombo = (CComboBox* )GetDlgItem(IDC_COMBO);
	         pCombo->AddString("Hello");
	         pCombo->AddString("World");
	         // Initialize the picture control
	         m_Bitmap.LoadBitmap(IDB_MYBITMAP);
	         CStatic* pStatic = (CStatic* )GetDlgItem(IDC_PICSTATIC);
	         pStatic->SetBitmap(m_Bitmap);
	         return TRUE;
	     }
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbMFC kbVC400 kbVC410 kbVC500 kbVC600 kbCustomWizard kbGrpDSTools 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,5.0,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
