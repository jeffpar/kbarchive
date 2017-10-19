---
layout: page
title: "Q128213: FIX: C1001 Internal Compiler Error in MAIN.C File Line 374"
permalink: /kb/128/Q128213/
---

## Q128213: FIX: C1001 Internal Compiler Error in MAIN.C File Line 374

	Article: Q128213
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVCkbbuglist kbfixlist
	Last Modified: 12-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Defining a static member function together with a user-defined class destructor
	in a class that is used only as a return type of a member function in another
	class may cause the Microsoft C++ compiler version 9.0 to generate the following
	compiler error:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'd:\b_bld\c2.m2\p2\main.c', line 374)
	  Please choose the Technical Support command on the Visual C++ Help menu, or
	  open the Technical Support help file for more information
	
	The sample code in the More Information section below demonstrates this problem.
	
	RESOLUTION
	==========
	
	To work around the problem, use one of the following suggestions:
	
	- Instead of using the chain notation to call the static member function, break
	  the statement into two statements. For example,
	
	        b.GetClassA().problem(10);     // error
	
	        a = b.GetClassA();             // work-around
	        a.problem(10);
	
	  where a is an instance of class A, b is an instance of class B based on the
	  sample code below.
	
	-or-
	
	- Define the static member function as a non-static member function.
	
	-or-
	
	- Instead of returning object A for function GetClassA() in the following
	  sample code, return a reference to A.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	The sample code below can be used to generate the C1001 error.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  class A
	  {
	    public:
	    ~A() {}
	    static void problem(int a) {}
	  };
	
	  class B
	  {
	    public:
	    A GetClassA();
	  };
	
	  void main()
	  {
	    B b;
	    b.GetClassA().problem(10);
	  }
	
	Additional query words: 2.00 2.10 2.20 9.00 9.10
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbVC220 kbVC200 kbVC210 kbVC32bitSearch
	Version           : :2.0,2.1,2.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
