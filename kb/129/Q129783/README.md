---
layout: page
title: "Q129783: FIX: typedef Class Template Causes Compiler Errors C2440/C2561"
permalink: /kb/129/Q129783/
---

## Q129783: FIX: typedef Class Template Causes Compiler Errors C2440/C2561

	Article: Q129783
	Product(s): Microsoft C Compiler
	Version(s): 2.00 2.10
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling a program that has all of the following in the code causes the
	compiler to generate two errors:
	
	- Class A.
	
	- Class B derived from class A.
	
	- Template class C that has type T as its argument.
	
	- Class C has a member function that returns a type of A*.
	
	- Type T* value in the return statement of the function.
	
	- Function implementation inside the class C definition.
	
	- "typedef C<B> CB" before the class B definition.
	
	Here are the two errors generated:
	
	  
	
	  error C2440 : 'return' : cannot convert from 'class B*' to
	                           'class A*'
	
	-and-
	
	  
	
	  error C2561 : 'f' : function must return a value
	
	CAUSE
	=====
	
	The class template was instantiated within the typedef statement where the class
	B definition (the derivation) has not been seen by the compiler yet. Therefore
	no conversion is defined between the derived class and the base class.
	
	RESOLUTION
	==========
	
	Use any one of the following three workarounds:
	
	- Do not create a typedef based on class B until class B is defined.
	
	-or-
	
	- Due to the definition of the member function, the templated class C can only
	  be instantiated with class T if a conversion from T* to A* exists. This may
	  have been unintentional, and the design of class C could be re-thought.
	
	-or-
	
	- Do not define the class template member function inside the class definition.
	  The following sample code demonstrates this workaround:
	
	     /* Compile options needed: none
	     */ 
	
	     class A {};
	
	     template < class T >
	     class C
	     {
	       public:
	        A* f( T *t );
	     };
	
	     template < class T >
	     inline A* C::f( T *t )
	     {
	       return t;
	     }
	
	     class B;
	     typedef C<B> CB;
	
	     class B : public A {};
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	  /* Compile options needed: none
	  */ 
	  class A {};
	  template < class T >
	  class C
	  {
	    public :
	     A* f( T *t ) { return t; }
	  };
	  class B;
	  typedef C<B> CB;
	  // Work around #1: Move the following line, the definition of class B,
	  // before the typedef which depends on class B
	  class B : public A {};
	
	Additional query words: 2.00 2.10 9.00 9.10
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 2.00 2.10
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
