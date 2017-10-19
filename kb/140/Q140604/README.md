---
layout: page
title: "Q140604: FIX: 'using' Declaration Doesn't Overload Base Class Members"
permalink: /kb/140/Q140604/
---

## Q140604: FIX: 'using' Declaration Doesn't Overload Base Class Members

	Article: Q140604
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to overload member functions located in a base class from a derived
	class with a 'using' declaration, may result in the following compiler error:
	
	  error C2664: 'function': cannot convert parameter 'number' from 'type1' to
	  'type2'
	
	CAUSE
	=====
	
	This particular problem occurs if the member functions that are being overloaded
	are declared before the 'using' declaration in the class definition.
	
	RESOLUTION
	==========
	
	Place the 'using' declaration above the declarations for the member functions
	you want to overload. See the comments in the following code sample:
	
	Sample Code
	-----------
	
	  #include "iostream.h"
	
	  class A
	  {
	  public:
	     int f(int) {cout << "In A::f(int)!!!\n";return 0;}
	  };
	
	  class B : public A
	  {
	  public:
	     int f(char*){cout << "In D::f(char*)!!!\n";return 0;}
	     using A::f;        // <<== move this above the int f(char*)
	                        //  declaration to fix the problem.
	  };
	
	  void main()
	  {
	     B d;
	     d.A::f(1);
	     d.f(1);            // <<== C2664 happens here
	     d.f("Hi There");
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	REFERENCES
	==========
	
	For more information on the 'using' declaration, please see:
	
	  \Visual C++ Books\C/C++\C++ Language\Reference\Declarations\ Namespaces\using
	  Declaration
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbCompiler kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
