---
layout: page
title: "Q141346: FIX: ClassWizard Misspells CPropertyPage in OnFinalRelease()"
permalink: /kb/141/Q141346/
---

## Q141346: FIX: ClassWizard Misspells CPropertyPage in OnFinalRelease()

	Article: Q141346
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbwizard kbMFC kbVC kbVC410fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The ClassWizard, used with:
	   - Microsoft Visual C++ 32-bit Edition, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Adding a CPropertyPage-derived class via ClassWizard and selecting OLE
	Automation Support causes the CPropertyPage::OnFinalRelease() member function to
	be automatically overridden. The overridden version calls the base class
	OnFinalRelease(). However, ClassWizard incorrectly spells the base class call.
	Specifically, the 't' in CPropertyPage is missing.
	
	Attempting to compile this class results in the following error message:
	
	  error C2653: 'CProperyPage' : is not a class or namespace name
	
	RESOLUTION
	==========
	
	To work around this problem, add the missing 't' to the base class call of
	OnFinalRelease(), as in this example:
	
	  void CTestPage::OnFinalRelease()
	  {
	     // When the last reference for an automation object is released
	     // OnFinalRelease is called.  The base class automatically
	     // deletes the object. Add any additional cleanup required for your
	     // object before calling the base class.
	
	     CPropertyPage::OnFinalRelease();
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	Additional query words: kbVC400bug 4.00 4.10
	
	======================================================================
	Keywords          : kbwizard kbMFC kbVC kbVC410fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbClassWizard
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
