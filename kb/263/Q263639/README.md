---
layout: page
title: "Q263639: BUG: Class Access Specifier Ignored for Fully Qual. Stat Members"
permalink: /kb/263/Q263639/
---

## Q263639: BUG: Class Access Specifier Ignored for Fully Qual. Stat Members

	Article: Q263639
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
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
	
	The compiler incorrectly allows access to private or protected static members
	and enums when you use fully qualified names to refer to them.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample programs demonstrate the bug:
	
	  //test1.cpp
	  // compiler option needed: none
	  class X {
	  private:
	    static int s_i;
	    enum {e};
	    static void f() {}
	  };
	  int X::s_i = 0;
	
	  int main() 
	  {
	    int i  = ::X::s_i; //no error here
	    i = ::X::e;        //no error here
	    ::X::f();          //no error here
	    
	    return 0;
	  }
	
	  //test2.cpp
	  // compiler option needed: none
	  namespace N 
	  {
	    class X 
	    {
	    private:
	      static int s_i;
	      enum {e};
	      static void f() {}
	    };
	  }
	  int N::X::s_i = 0;
	
	  int main() 
	  {
	    int i  = N::X::s_i; //no error here
	    i = N::X::e;        //no error here
	    N::X::f();          //no error here
	
	    return 0;
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC600bug kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:6.0
	Issue type        : kbbug
	
	=============================================================================
	
