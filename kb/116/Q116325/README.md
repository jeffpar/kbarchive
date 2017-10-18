---
layout: page
title: "Q116325: BUG: Browser Information Shows Incorrect Reference to Variable"
permalink: kb/116/Q116325/
---

## Q116325: BUG: Browser Information Shows Incorrect Reference to Variable

	Article: Q116325
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,4.0a,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVC500bug
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 4.0a, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When browsing for the definitions and references for a member variable of a
	class, one of the references refers to the last brace in the destructor of the
	class.
	
	CAUSE
	=====
	
	The compiler is emitting a reference for this variable in the class destructor.
	There is an implicit reference to the variable at this point, but not an
	explicit source-code reference. Therefore, the compiler should not be emitting
	the reference information.
	
	RESOLUTION
	==========
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Perform the following steps to reproduce this problem:
	
	1. Build a test application called "Test", using AppWizard (default settings).
	
	2. Edit TESTDOC.H and add a member variable to the CTestDoc class as follows:
	
	     // Attributes
	     public:
	         CString Hello; // add this line
	
	3. Edit TestDoc.cpp and initialize the member variable in the OnNewDocument
	  member function:
	
	     BOOL CTestDoc::OnNewDocument()
	     {
	         if (!CDocument::OnNewDocument())
	             return FALSE;
	
	         Hello = "Hello World"; // add this line
	         return TRUE;
	     }
	
	4. Build the program and open Microsoft Browser.
	
	5. Query the Definitions and References for "CTestDoc::Hello".
	
	The first reference to CTestDoc::Hello found in TESTDOC.CPP actually points to
	the ending brace of the CTestDoc destructor. Only the second reference is
	correct, pointing to the source code reference that was added in the
	CTestDoc::OnNewDocument() function.
	
	Additional query words: kbVC400bug kbvc100 kbvc150 kbvc110 kbvc200 kbvc210 kbvc410 kbvc420 kbvc500 kbvc600
	
	======================================================================
	Keywords          : kbVC500bug 
	Technology        : kbVCsearch kbAudDeveloper kbvc150 kbvc100 kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC400a kbVC500Search
	Version           : :1.0,1.5,4.0a,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
