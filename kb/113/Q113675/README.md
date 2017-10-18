---
layout: page
title: "Q113675: FIX: App Studio for Windows GP Faults Under Windows NT"
permalink: kb/113/Q113675/
---

## Q113675: FIX: App Studio for Windows GP Faults Under Windows NT

	Article: Q113675
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC100bug kbVC150fix kbGrpDSToolskbbuglist kbfixlist
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The AppWizard, used with:
	   - Microsoft Visual C++, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using App Studio and running under Windows NT, if the property page for a
	resource has the focus and the user switches tasks to another running
	application, a General Protection fault will occur within App Studio.
	
	RESOLUTION
	==========
	
	Visual C++ version 1.0 for Windows was not developed for use under Windows NT.
	To workaround this particular problem, make certain the resource property page
	does not have the focus when switching to another application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This is not a problem in Visual C++, 32-bit Edition.
	This problem was corrected in Visual C++ version 1.5.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kbide kbVC kbVC100bug kbVC150fix kbGrpDSTools kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbAppWizard
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
