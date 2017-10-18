---
layout: page
title: "Q141457: FIX: C1001 When Calling Base Class Conversion Operator"
permalink: kb/141/Q141457/
---

## Q141457: FIX: C1001 When Calling Base Class Conversion Operator

	Article: Q141457
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbcode kbCompiler kbCPPonly kbVC kbVC410fix
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling a C++ file that contains an explicit call to a base class conversion
	operator, with the /FR compiler option (create Browser information) may result
	in the following fatal compiler error:
	
	  C:\Test\Test.Cpp(22) : fatal error C1001: INTERNAL COMPILER ERROR (compiler
	  file 'msc1.cpp', line 899)
	
	RESOLUTION
	==========
	
	There are two possible workarounds:
	
	- Turn off "Generate browse info" or remove /FR compiler option.
	
	-or-
	
	- Provide an implicit call to the base class conversion operator as
	  demonstrated by the following sample code.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /FR
	  */ 
	
	  class   Base
	  {
	  public:
	      operator int()
	      {
	          return 0;
	      }
	  };
	
	  class   Derived : public Base
	  {
	      int fun()
	      {
	          return  Base::operator int();
	
	  // The following line is a workaround for the
	  // previous line that fails.
	
	     //  return  int(*((Base*)this));
	      }
	  };
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	Additional query words: kbVC400bug 4.00 10.0 4.10 10.10 ICE
	
	======================================================================
	Keywords          : kbcode kbCompiler kbCPPonly kbVC kbVC410fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
