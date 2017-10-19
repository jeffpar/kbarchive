---
layout: page
title: "Q130551: FIX: C2974 When Explicitly Call Class Template('s) Destructor"
permalink: /kb/130/Q130551/
---

## Q130551: FIX: C2974 When Explicitly Call Class Template('s) Destructor

	Article: Q130551
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you explicitly call a class template destructor, and the class object is
	instantiated with a user defined class in a C++ program, the compiler generates
	the following compiler errors:
	
	  Error C2974 : 'B' : invalid template actual argument '#1', type expected
	
	  Error C2039 : 'B<int>' : is not a member of 'B<class A>'
	
	For example, this can happen when you use MFC's collection classes and need to
	overload the DestroyElement() helper function, in which the class destructor can
	be explicitly called.
	
	RESOLUTION
	==========
	
	The following code can be used to work around the problem.
	
	Problem:
	
	    B<A> a;
	     a.B<A>::~B();
	
	Workaround:
	
	     B<A> a;
	     a.B< class A >::~B();
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	Sample Code to Demonstrate Problem
	----------------------------------
	
	  /* Compile options needed: none.
	  */ 
	
	  class A
	  {
	  public:
	     A() {}
	     ~A() {}
	  };
	
	  template < class T >
	  class B
	  {
	  public:
	     B() {}
	     ~B() {}
	  };
	
	  void main()
	  {
	     B<A> a;
	     // Workaround: change the following line into a comment
	     // and change the line after that into an executed line of code.
	     a.B<A>::~B();
	     // a.B<class A>::~B();
	  }
	
	Additional query words: 9.00 2.00 2.10 9.10
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :2.0,2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
