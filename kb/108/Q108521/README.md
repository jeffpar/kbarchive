---
layout: page
title: "Q108521: FIX: ClassWizard Parsing Error with Float Variables"
permalink: /kb/108/Q108521/
---

## Q108521: FIX: ClassWizard Parsing Error with Float Variables

	Article: Q108521
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbwizard kbMFC kbVCkbbuglist kbfixlist
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The ClassWizard, included with:
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After entering a maximum or minimum float variable value in the edit variable
	option of Class Wizard, a parsing error happens when starting up Class Wizard
	again with the same project. Any number entered that is greater than 999,999
	will cause this problem.
	
	RESOLUTION
	==========
	
	The minimum and maximum information for the float is written out to the dialog
	box's .CPP file (in the case above, CDDXPROP.CPP, in the DoDataExchange member
	function). In this case, it is written as:
	
	     DDV_MinMaxFloat(pDX, m_edit, 0., 1.e+008);
	
	Changing the scientific notation in the .CPP file from 1.e+008 to its original
	form as 99999999 will solve the parsing problem, and Class Wizard will open as
	expected without displaying the parsing error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 2.1.
	
	MORE INFORMATION
	================
	
	To reproduce this problem, do the following:
	
	1. Choose Open from the Project menu in the Visual Workbench and open the Trace
	  project in the \MSVC\MFC\SAMPLES\TRACER directory.
	
	2. From the Tools menu, choose AppStudio.
	
	3. Highlight the dialog box choice and choose New. Choose Dialog from the New
	  Resource dialog box.
	
	4. From the palette of controls, choose an edit control and drag it onto the
	  dialog box.
	
	5. From the Resource menu, choose Class Wizard.
	
	6. At this point you will be prompted to create a new class. Name the class
	  CDDXProp and then choose Create Class.
	
	7. Choose Member Variables tab, highlight IDC_EDIT1.
	
	8. Choose Add Variables and name the variable m_edit. Change the variable type
	  to float and choose OK.
	
	9. Set the minimum value to 0 (zero) and the maximum value to 99999999 and exit
	  Class Wizard.
	
	10. Restart the Class Wizard by choosing Class Wizard from the resource menu of
	  App Studio.
	
	  The following error appears:
	
	  Parsing error: Expected ")"
	  Input Line: "DDV_MinMaxFloat(pDX, m_edit, 0., 1.e+008);"
	
	The number 99999999 has been written out in scientific notation to the dialog's
	.CPP file.
	
	Additional query words: 1.00 1.50 2.00 DDX\DDV float parsing error
	
	======================================================================
	Keywords          : kbwizard kbMFC kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbClassWizard
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
