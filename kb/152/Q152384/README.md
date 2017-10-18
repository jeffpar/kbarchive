---
layout: page
title: "Q152384: FIX: DDX for Short Causes Stack Corruption"
permalink: kb/152/Q152384/
---

## Q152384: FIX: DDX for Short Causes Stack Corruption

	Article: Q152384
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1; :
	Operating System(s): 
	Keyword(s): kbMFC KbUIDesign kbVC400bug kbVC410bug kbVC420fix kbClassWizard kbGrpDSMFCATL kbNoUpdat
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Foundation Classes (MFC) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Class Wizard to associate a short with a control on a dialog may
	result in the following behavior:
	
	- Access Violation when UpdateData(TRUE) is called.
	
	-or-
	
	- Other member variables of the dialog are corrupted after the call to
	  UpdateData(TRUE).
	
	CAUSE
	=====
	
	The overloaded DDX routine for short has a bug where it assumes that the
	variable is of type int instead of short. This may result in stack corruption
	because a short occupies less space than an int.
	
	RESOLUTION
	==========
	
	To resolve this problem, use an int instead of a short. If you want to limit the
	values to the range of values that can be represented by a short, set the
	appropriate limits for the int variable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 32- bit Edition
	version 4.2.
	
	Additional query words: kbVC400bug 4.00 4.10 4.20 vcfixlist420 DDX_Text short DDX_FieldText MfcUI
	
	======================================================================
	Keywords          : kbMFC KbUIDesign kbVC400bug kbVC410bug kbVC420fix kbClassWizard kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbMFC kbVC410
	Version           : winnt:4.0,4.1; :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
