---
layout: page
title: "Q152482: FIX: Error: Undefined Symbol 'DOC' from Custom AppWizard"
permalink: /kb/152/Q152482/
---

## Q152482: FIX: Error: Undefined Symbol 'DOC' from Custom AppWizard

	Article: Q152482
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbwizard kbMFC kbVC400bug kbVC410bug kbVC420bug kbVC500fix kbGrpDSTools kbNoUpdate
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using a Custom AppWizard that uses the Standard AppWizard step defined by
	APWZDLG_APPTYPE (generating an EXE), it is possible to get this error message:
	
	  Undefined Symbol 'DOC'
	
	CAUSE
	=====
	
	This behavior occurs if the user did not explicitly select a language in the
	first step of the Custom AppWizard. Occasionally the language combo box will not
	initialize with a default language, and if the user does not select one, this
	error message can occur. If the user moves off the first step, and then back,
	the combo box will reset and select the first entry in the list as default.
	
	For more information on a related bug, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q152255 PRB: Custom AppWizard Doesn't Initialize Custom Step Dialogs
	
	RESOLUTION
	==========
	
	The selection of a language maps to the NUM_LANGS dictionary entry. You can add
	code to one of your custom dialog steps to ensure that this dictionary item is
	selected, and instruct the user to return to the first step. This forces the
	combo box to select a default language and ensures that it matches the user's
	expectations. This is only necessary for Custom AppWizards that use
	SetSupportedLanguages().
	
	Code to confirm the definition of NUM_LANGS is in the More Information section
	below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	version 5.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     BOOL CCustom1Dlg::OnDismiss()
	     {
	         ...
	
	         // Sanity check -- did the user select a language???
	         //              -- did the combo box select a default???
	         CString strTemp;
	         CUSTOM_APP.m_Dictionary.Lookup(_T("NUM_LANGS"), strTemp);
	
	         if ( strTemp == CString("0") )
	         {
	             AfxMessageBox(_T("Please return to Step 1 of the wizard and "
	                              "select a language. Otherwise the wizard will "
	                              "not be able to generate your project." );
	         }
	     }
	
	Additional query words: WizardIss
	
	======================================================================
	Keywords          : kbwizard kbMFC kbVC400bug kbVC410bug kbVC420bug kbVC500fix kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420
	Version           : :4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
