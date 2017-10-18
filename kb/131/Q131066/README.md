---
layout: page
title: "Q131066: PRB: C2922 Error for Class Template Containing Friend Function"
permalink: kb/131/Q131066/
---

## Q131066: PRB: C2922 Error for Class Template Containing Friend Function

	Article: Q131066
	Product(s): Microsoft C Compiler
	Version(s): 2.00 2.10
	Operating System(s): 
	Keyword(s): kberrmsg kbCompiler kbCPPonly kbVC kbprb
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler generates the following error message when the friend function in a
	template class is not prototyped:
	
	  
	
	  Error C2922: 'symbol' a friend function of a template
	                class must have been previously defined
	
	CAUSE
	=====
	
	Friend functions must be declared before they are used in a template class. You
	cannot have a friend function defined within a class definition. This is a
	Microsoft Specific requirement. Templates are not officially standardized and,
	as a result, different C++ compiler vendors have implemented them differently,
	so this requirement may change in future versions of the compiler.
	
	
	RESOLUTION
	==========
	
	Declare the friend function before using it in the template definition.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For more information about the Microsoft-specific implementations on the
	templates, please see the Books Online under C/C++, C++ Language Reference,
	Chapter 6 Declarations, Template Specifications, Differences from Other
	Implementations.
	
	Sample Code to Demonstrate Behavior
	-----------------------------------
	
	  /* Compile options : /Ze ( default option )
	  */ 
	
	  #include <iostream.h>
	
	  template <class T> class A;   // Forward declaration
	
	  // Change the following line from a comment into an executed line to
	  // prevent the compiler error with Visual C++, 32-bit edition, version 2.0
	  // or 2.1:
	
	  // template <class T> ostream& operator<< (ostream &s, const A<T> &b);
	
	  template <class T>
	  class A {
	  public:
	     friend ostream & operator << (ostream &s, const A<T> &b);
	  };
	
	  template <class T> ostream& operator<< (ostream &s, const A<T> &b)
	  {
	     return s << "testing";
	  }
	
	  void main()
	  {
	     A<int> fa;
	     cout << fa;
	  }
	
	
	Additional query words: 2.00 2.10 8.0 8.00 8.0c 8.00c 9.0 9.00 9.1 9.10
	
	======================================================================
	Keywords          : kberrmsg kbCompiler kbCPPonly kbVC kbprb 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 2.00 2.10
	Issue type        : kbprb
	
	=============================================================================
	
