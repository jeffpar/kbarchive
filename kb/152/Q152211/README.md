---
layout: page
title: "Q152211: FIX: Constructor Gets Called Multiple Times on the Same Object"
permalink: /kb/152/Q152211/
---

## Q152211: FIX: Constructor Gets Called Multiple Times on the Same Object

	Article: Q152211
	Product(s): Microsoft C Compiler
	Version(s): 4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC410bug kbVC500bug kbVC600bug kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The constructor gets called more than once on the same global object.
	
	CAUSE
	=====
	
	This error occurs when a file has both a global object and a function that
	references the global object as extern. In this case, the compiler incorrectly
	generates code that calls the constructor on the "extern myClass object;"
	statement.
	
	RESOLUTION
	==========
	
	Remove the line that contains extern reference to the global. You can safely
	remove this line since the global is in file scope.
	
	-or-
	
	Create two separate files, one that contains the global object, and one that
	contains the function that references the global object as extern.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  // This sample demonstrates the problem of the constructor getting
	  // called twice.
	  /* Compile options needed: cl test.cpp
	  */ 
	  // TEST.CPP
	  // ========
	  #include "stdio.h"
	  class myClass {
	  public:
	    myClass() {printf("myClass Constructor called\n");};
	    void test() {printf("test() called\n");};
	  } object;
	
	  void main()
	  {
	  // Remove the next line for the first workaround:
	    extern myClass object;
	    object.test();
	  }
	
	  // sample output: (without extern line removed)
	  myClass Constructor called
	  myClass Constructor called
	  test() called
	
	  // This sample demonstrates the workaround that causes the program
	  // to only call the constructor once.
	  /* Compile options needed: cl Test2A.cpp Test2B.cpp
	  */ 
	  // Test2.h
	  // ========
	  #include "stdio.h"
	  class myClass {
	  public:
	    myClass() {printf("myClass Constructor called\n");};
	    void test() {printf("test() called\n");};
	  };
	  // Test2A.cpp
	  // ==========
	  #include "Test2.h"
	  myClass object;
	
	  // Test2B.cpp
	  // ==========
	  #include "Test2.h"
	  void main()
	  {
	    extern myClass object;
	    object.test();
	  }
	
	  // sample output:
	  myClass Constructor called
	  test() called
	
	Additional query words: 10.10 10.20
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC410bug kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
