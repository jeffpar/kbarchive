---
layout: page
title: "Q123803: FIX: Fatal Error C1001: Compiler File MSC1.CPP Line 1056"
permalink: kb/123/Q123803/
---

## Q123803: FIX: Fatal Error C1001: Compiler File MSC1.CPP Line 1056

	Article: Q123803
	Product(s): Microsoft C Compiler
	Version(s): 2.00
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVCkbbuglist kbfixlist
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE) 
	- Microsoft Visual C++, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling the Sample Code below, the compiler gives the following fatal
	error message:
	
	  
	
	  test.cpp(14) : fatal error C1001: INTERNAL COMPILER ERROR
	                  (compiler file 'msc1.cpp', line 1056)
	      Please choose the Technical Support command on the Visual C++
	      Help menu, or open the Technical Support help file for more
	      information
	
	RESOLUTION
	==========
	
	See the workaround embedded in the Sample Code section of this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	The sample code below can be used to reproduce the compiler error.
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	  /* Compile options needed: none
	  */ 
	  #include <iostream.h>
	  template <class T> class genvec3d { };
	  template <class T>
	  ostream& operator<< (ostream& o, const genvec3d<T>& p)
	  {
	     return o;
	  }
	  class ray
	  {
	     public:
	                  genvec3d<float> origin;
	                  ray(){}
	                  friend int operator<<(ostream& o, ray& r)
	  /* The following line causes compiler Error */ 
	                  { o << origin; return 1; }
	
	  /* To work around the problem, change the line above into a comment and
	     change the following line to an executed line of code.  */ 
	              /*  { o << r.origin; return 1; }  */ 
	  };
	
	Additional query words: 9.00 2.00
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp kbVC200
	Version           : 2.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
