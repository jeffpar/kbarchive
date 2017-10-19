---
layout: page
title: "Q131376: FIX: C2974 Error When Calling Templated Base Class Functions"
permalink: /kb/131/Q131376/
---

## Q131376: FIX: C2974 Error When Calling Templated Base Class Functions

	Article: Q131376
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVCkbbuglist kbfixlist
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling a member function of a templated base class through the 'this' pointer
	produces the following erroneous error:
	
	  error C2974: '<base templated class name>' : invalid template actual
	  argument '#1', type expected.
	
	RESOLUTION
	==========
	
	Call the function without using the 'this' pointer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	The Visual C++ compiler generates the following errors when the following sample
	program (TEST.CPP), is compiled with the /D"SHOW_TEMPLATE_ERROR" option:
	
	  test.cpp(20) : error C2974: 'A' : invalid template actual argument '#1',
	                 type expected
	  test.cpp(20) : error C2231: '.B<int,int>::A<int>::Afunc' : left operand
	                 points to 'class', use '->'
	  test.cpp(20) : fatal error C1903: unable to recover from previous
	                 error(s); stop ping compilation
	
	Sample Code to Demonstrate Problem
	----------------------------------
	
	  /* Compile options needed: none
	  */ 
	  // #define SHOW_TEMPLATE_ERROR
	
	  template <class Type>
	  class A
	  {
	  public:
	      Type a;
	      void Afunc(void){};
	  };
	
	  template <class Type1, class Type2>
	  class B: public A<Type1>
	  {
	  public:
	      void Bfunc()
	      {
	  #ifdef SHOW_TEMPLATE_ERROR
	          this->A<Type1>::Afunc();
	  #else
	          A<Type1>::Afunc();
	  #endif
	      }
	  };
	
	  void main()
	  {
	      B<int, int> b;
	  }
	
	Additional query words: 2.00 2.10
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :2.0,2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
