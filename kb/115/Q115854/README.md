---
layout: page
title: "Q115854: FIX: Cannot Access Private Member from Friend Class"
permalink: /kb/115/Q115854/
---

## Q115854: FIX: Cannot Access Private Member from Friend Class

	Article: Q115854
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVCkbbuglist kbfixlist
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling the code below, the C/C++ compiler will incorrectly report the
	following error:
	
	  C2248: 'ptr' : cannot access private member declared in class 'X'
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was corrected in Visual C++ version 2.0.
	
	MORE INFORMATION
	================
	
	The following sample can be used to demonstrate this problem.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <iostream.h>
	  class C
	  {
	     class X;
	     class Y;
	
	     class X
	     {
	        X* ptr;
	        friend Y;
	     };
	
	     class Y
	     {
	        X* x;
	      public:
	        X* lookat() { return x->ptr; }           /* Error: C2248 */ 
	     };
	  };
	  void main( void )
	  {
	     cout << "PASSED" << endl;
	  }
	
	Additional query words: 1.00 1.50 7.00 8.00 8.00c
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
