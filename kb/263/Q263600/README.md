---
layout: page
title: "Q263600: BUG: Nested Class Does Not See typedef in the Enclosing Class"
permalink: kb/263/Q263600/
---

## Q263600: BUG: Nested Class Does Not See typedef in the Enclosing Class

	Article: Q263600
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC600bug kbDSupport
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	According to the ANSI C++ Standard, a nested class should find a symbol in its
	enclosing class's scope before it finds it in global scope. However, when the
	code is compiled with Microsoft C++ compiler, the global scope is searched ahead
	of the enclosing class's scope.
	
	Please refer to the sample code in the "More Information" section for details.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample code demonstrates the bug:
	
	  // Test.cpp
	  // Compiler option needed: /GX
	
	  #include <iostream>
	  using std::cout;
	  using std::endl;
	
	  struct Target
	  {
	    static void test()
	    {
	      cout <<
	        "BUG: Nested class doesn't see typedef in the enclosing class."
	      << endl;
	    }
	  };
	
	  struct CorrectTarget
	  {
	    static void test()
	    {
	      cout <<
	        "Good: Nested  class CORRECTLY finds 'Target' as typedef in the enclosing class."
	      << endl;
	    }
	  };
	
	  struct Tester
	  {
	    typedef CorrectTarget Target;
	
	    struct Inner
	    {
	      static void test()
	      {
	        Target::test();
	      }
	    };
	  };
	
	  void main()
	  {
	    Tester::Inner::test();
	  }
	
	Program output: BUG: Nested class doesn't see typedef in the enclosing class.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC600bug kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	
