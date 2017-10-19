---
layout: page
title: "Q131013: FIX: Fatal Error C1001 'd:&#92;b_bld&#92;c2.m2&#92;P2&#92;main.c', line 374"
permalink: /kb/131/Q131013/
---

## Q131013: FIX: Fatal Error C1001 'd:&#92;b_bld&#92;c2.m2&#92;P2&#92;main.c', line 374

	Article: Q131013
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to compile code that defines the exception handling mechanism in a
	function that takes a class argument by value, causes the compiler to generate
	the following error message:
	
	  bug.cxx(19) : fatal error C1001: INTERNAL COMPILER ERROR (compiler file
	  'd:\b_bld\c2.m2\P2\main.c', line 374)
	
	RESOLUTION
	==========
	
	Pass class A by reference instead of by value in the Func call in the sample
	code in this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	  /* Compile options needed: -GX
	      bug.cpp
	  */ 
	
	  class  A
	  {
	  public:
	      A();
	     ~A();
	  };
	
	  int Func(A)
	  //To work around the problem, replace the previous with the line below.
	  //int Func (A&)   // Change this line from a comment to executed code
	  {
	      try
	      {
	          return (1);
	      }
	      catch   (int i)
	      {
	          return (i);
	      }
	      ;
	  }
	
	Additional query words: 2.00 2.10 9.0 9.00 9.1 9.10
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :2.0,2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
