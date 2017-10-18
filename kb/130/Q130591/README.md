---
layout: page
title: "Q130591: INFO: CPropertyPage::CancelToClose() Documented Incorrectly"
permalink: kb/130/Q130591/
---

## Q130591: INFO: CPropertyPage::CancelToClose() Documented Incorrectly

	Article: Q130591
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbMFC KbUIDesign kbVC152bug kbVC200bug kbVC210bug kbVC400fix kbGrpDSM
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, version 1.52 
	   - Microsoft Visual C++ 32-bit Edition, versions 2.0, 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for the CancelToClose member function of the CPropertyPage
	class states that this function changes the text of the Cancel button to read
	Close. This is incorrect.
	
	The implementation of the CPropertyPage::CancelToClose() function actually does
	the following two things:
	
	- Disables the property sheet's Cancel button.
	
	- Changes the text of the property sheet's OK button to read Close.
	
	This problem was fixed in Microsoft Visual C++, 32-bit Edition, version 4.0.
	
	Additional query words: 1.52 2.00 2.10 2.52 3.00 3.10 4.00
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbMFC KbUIDesign kbVC152bug kbVC200bug kbVC210bug kbVC400fix kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	
	=============================================================================
	
