---
layout: page
title: "Q113588: FIX: Assertion, VIEWSCRL.CPP, Line 455 with SetScaleToFitSize"
permalink: /kb/113/Q113588/
---

## Q113588: FIX: Assertion, VIEWSCRL.CPP, Line 455 with SetScaleToFitSize

	Article: Q113588
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbDocView kbMFC kbVC100bug kbVC150fix kbGrpDSMFCATLkbbuglist kbfixlist
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, version 1.0 
	   - Microsoft Visual C++ 32-bit Edition, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling SetScaleToFitSize in OnInitialUpdate of a CFormView derived class causes
	the following assertion to fail:
	
	  File viewscrl.cpp, Line 455, Assertion Failed!
	
	CAUSE
	=====
	
	Because the view window has not yet been displayed, SetScaleToFitSize() uses the
	size of the CFormView. Because the CFormView is created with size
	CRect(0,0,0,0), the view size is miscalculated.
	
	RESOLUTION
	==========
	
	To set the view window size before calling SetScaleToFitSize, call RecalcLayout
	on the parent frame. For example:
	
	     GetParentFrame()->RecalcLayout();
	
	See the sample code below for an example of this.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Foundation Classes
	(MFC) version 2.0. This problem was corrected in the Microsoft Foundation
	Classes version 2.5.
	
	MORE INFORMATION
	================
	
	The call to RecalcLayout in OnInitialUpdate is no longer needed with MFC version
	2.5 because the framework takes care of calling RecalcLayout in response to the
	WM_CREATE message before the call to OnInitialUpdate is made.
	
	Sample Code
	-----------
	
	  /*  Compile options needed: none
	  */ 
	
	  void CMyFormView::OnInitialUpdate()
	  {
	      CFormView::OnInitialUpdate();     // Base class initialization.
	
	      //GetParentFrame()->RecalcLayout  // Uncomment to fix. No need to
	                                        // call if this is version 2.5.
	      CSize mysize(100,100);
	
	      SetScaleToFitSize(mysize);        // This will ASSERT in version
	                                        // 2.0 unless RecalcLayout is
	                                        // called.
	  }
	
	Additional query words: 1.00 2.00 2.10 kbNoUpdate
	
	======================================================================
	Keywords          : kbDocView kbMFC kbVC100bug kbVC150fix kbGrpDSMFCATL kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
