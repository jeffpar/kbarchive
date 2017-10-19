---
layout: page
title: "Q167966: FIX: C2248: Statics in Friends, No Access to Protected Members"
permalink: /kb/167/Q167966/
---

## Q167966: FIX: C2248: Statics in Friends, No Access to Protected Members

	Article: Q167966
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbtool kbVC500bug kbVC600bug kbNoUpdatekbbuglist
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a static object created in a friend function, it is denied
	access to protected members of a class and compiler error C2248 appears as
	follows:
	
	  'member' : cannot access protected member declared in class 'class'
	
	RESOLUTION
	==========
	
	Create the static object using the new operator.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	The following sample demonstrates the problem and the workaround.
	
	Sample Code
	-----------
	
	     #include <iostream>
	
	     //#define WORKAROUND //Uncomment this line for workaround
	
	     class A
	     {
	     protected:
	     A() { std::cout << "A()" << std::endl ;}
	     ~A() { std::cout << "~A()" << std::endl ;};
	
	     friend A* GetA();
	     };
	
	     A* GetA()
	     {
	     #ifndef WORKAROUND
	
	       static A a ;
	       return &a ;
	
	     #else
	
	       static A *pA = new A;
	       return pA;
	
	     #endif
	     }
	
	     void main()
	     {
	      A *pA = GetA() ;
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbtool kbVC500bug kbVC600bug kbNoUpdate kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
