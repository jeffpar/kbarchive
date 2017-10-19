---
layout: page
title: "Q146000: FIX: C1001 Including Header File in Template Class Definition"
permalink: /kb/146/Q146000/
---

## Q146000: FIX: C1001 Including Header File in Template Class Definition

	Article: Q146000
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the #include preprocessor directive in a template class definition,
	the following internal compiler error may be generated:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'msc1.cpp', line 899)
	  Please choose the Technical Support command on the Visual C++
	  Help menu, or open the Technical Support help file for more information
	
	RESOLUTION
	==========
	
	Do not use #include directive in a template class definition.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.2.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  // Compile Options - none
	
	  //test.cpp
	
	  template <class T> class TestClass {
	  public:
	    #include "test.h" // this line generates the C1001 error
	
	  };
	
	  TestClass<char> ClassInst;
	
	  //end test.cpp
	
	  //test.h
	  #define TEST 1
	
	  //end test.h
	
	Additional query words: kbVC400bug 4.00 4.10 10.00 10.10 vcfixlist420
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :4.0,4.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
