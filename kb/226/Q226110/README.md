---
layout: page
title: "Q226110: FIX: Internal Compiler Error Creating Copy of Temporary Object"
permalink: /kb/226/Q226110/
---

## Q226110: FIX: Internal Compiler Error Creating Copy of Temporary Object

{% raw %}

	Article: Q226110
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC600bug kbNoUpdate
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating an object that is a copy of a virtual function return value (a
	temporary object) using the compiler-supplied copy constructor, you may get the
	following error:
	
	  test.cpp(22) : fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'msc1.cpp', line 1794)
	  Please choose the Technical Support command on the Visual C++
	  Help menu, or open the Technical Support help file for more information
	
	Please see the steps to reproduce in the More Information section below.
	
	RESOLUTION
	==========
	
	There are four ways to get around the problem:
	
	1. Explicitly Define a Copy Constructor. (See Workaround #1 in sample code
	  below).
	
	2. Remove the virtual keyword from the function which returns the value. (See
	  Workaround #2 in sample code below).
	
	3. Introduce a temporary variable to store the return value. (See Workaround #3
	  in the sample code below).
	
	4. Remove compiler support for synchronous (C++) exception handling. This is
	  accomplished by removing /GX (the Visual Studio default) from your compile
	  options. (See Workaround #4 in sample code below).
	
	Workaround #1 is the recommended workaround whenever possible.
	
	NOTE: If you define a copy constructor, you should also define an assignment
	operator (operator=).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	  ////////////////////////////////////////////////////////////////////// 
	  // cl /c /GX test.cpp
	  // test.cpp(22) : fatal error C1001: INTERNAL COMPILER ERROR
	  //  (compiler file 'msc1.cpp', line 1794) 
	  //  Please choose the Technical Support command on the Visual C++ 
	  //  Help menu, or open the Technical Support help file for more information
	  ////////////////////////////////////////////////////////////////////// 
	  class A
	  {
	    public:
	      /* workaround #1, add an explicit copy constructor to class A */ 
	      // A(A& a) {};
	      ~A() {}; 
	  };
	  class B
	  {
	    public:
	   /* workaround #2, remove virtual keyword from B::GetA */ 
	      virtual A& GetA(void);
	      void Func (void);
	  };
	  void B::Func (void)
	  {
	    A *att;
	    att=new A(GetA());
	    /* workaround #3, substitute the above line with the following two lines */ 
	    //A tmp = GetA();
	    //att=new A(tmp);
	  }
	  /* workaround #4, remove /GX compiler option */ 
	
	Additional query words: Internal Compiler Error ICE C1001
	
	======================================================================
	Keywords          : kbCompiler kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
