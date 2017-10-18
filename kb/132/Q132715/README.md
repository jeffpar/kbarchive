---
layout: page
title: "Q132715: HOWTO: How to Enable the Help Button on a Modal Property Sheet"
permalink: kb/132/Q132715/
---

## Q132715: HOWTO: How to Enable the Help Button on a Modal Property Sheet

	Article: Q132715
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbMFC kbPropSheet kbVC152 kbVC200 kbVC210 kbVC400 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, version 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The F1-key help functionality and the Help button on a Modal Property sheet can
	be enabled by choosing Context-Sensitive Help while generating an
	AppWizard-generated application. In a standard AppWizard-generated application,
	clicking the Help button on the property sheet has no effect because there is no
	default handler for the Help button. This article shows by example how to obtain
	F1-key functionality with the Help button.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	The default implementation of a modal property sheet has no handler for the Help
	button. To obtain F1-key functionality with the Help button, follow these
	steps:
	
	1. Derive a class from CPropertySheet.
	
	2. Add an OnHelp handler for ID_HELP to the property sheet. For more information
	  on how to add a handler, please see MFC Technical Note #6.
	
	3. In the OnHelp handler, send a WM_COMMANDHELP message to the property sheet
	  window by using SendMessage(WM_COMMANDHELP).
	
	4. Implement the following code to provide the Help button with
	  context-sensitive help functionality of the F1 function key:
	
	     // Derive a class CMyPropertySheet from CPropertySheet.
	     // Include the file afxpriv.h to obtain the id for
	     // WM_COMMANDHELP in the implementation file for CMyPropertySheet
	
	     #include "afxpriv.h"
	
	     // add this handler in the implementation file for CMyPropertySheet
	
	     void CMyPropertySheet::OnHelp( )
	     {
	          SendMessage(WM_COMMANDHELP);
	     }
	
	NOTE: The WM_COMMANDHELP message, when sent to the Property Sheet window, invokes
	the OnCommandHelp handler for the CPropertySheet class, which in turn sends a
	WM_COMMANDHELP message to the active page.
	
	REFERENCES
	==========
	
	Please see the DLGPROP.CPP file in the MFC\SRC subdirectory of the Visual C++
	installation or distribution CD directory. This source file includes source code
	for CPropertySheet and CPropertyPage.
	
	Additional query words: kbinf 2.00 2.10 2.52 3.00 3.10 4.00
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbMFC kbPropSheet kbVC152 kbVC200 kbVC210 kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
