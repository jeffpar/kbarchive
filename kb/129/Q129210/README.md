---
layout: page
title: "Q129210: FIX: Linker Errors on Array of Constant Pointers to Constants"
permalink: /kb/129/Q129210/
---

## Q129210: FIX: Linker Errors on Array of Constant Pointers to Constants

	Article: Q129210
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52
	Operating System(s): 
	Keyword(s): kbCodeGen kbCompiler kbCPPonly kbVCkbbuglist kbfixlist
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.5, 1.51, 1.52 
	- Microsoft Visual C++, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Building a project that includes the code listed in the "Sample Code" section of
	this article results in the following link error or warning:
	
	For Visual C++ for Windows:
	
	  
	
	   MODULE2.OBJ(module2.cpp) : error L2025: char const __near*
	        __near* __near str : symbol defined more than once
	   LINK returned error code 2.
	
	For Visual C++, 32-bit Edition:
	
	  
	
	   module2.obj: warning LNK4006: xxxxx already defined in
	        module1.obj; second definition ignored.
	
	Here xxxxx is the decorated name for str.
	
	RESOLUTION
	==========
	
	To work around the problem, explicitly declare the const as static, as in this
	example:
	
	     static const char *const str[2] = { "string1", "string2" };
	
	This definition can be placed in a header file, and can be included in multiple
	source files. However, there are implications for the size of the program when
	you use this workaround. That is, a copy of the array and of the strings will be
	in every module that includes the header file, whether you use it or not. The
	sample code below shares this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++, 32- bit
	Edition, version 2.0.
	
	MORE INFORMATION
	================
	
	In C++, const objects do not have external linkage, unless they are explicitly
	declared extern. Const objects have internal linkage, meaning that the name of
	the object is local to the source file in which it is declared.
	
	The following sample code has two source files and one header file. The array of
	const pointers to const chars is included twice in the program. However, because
	this is C++, const objects should have internal linkage, the arrays should only
	be visible in the source file they are declared in. This means that the linker
	should not fail with an L2025 error, or report the LNK4006 warning.
	
	Sample Code
	-----------
	
	  // Compile options needed: None
	
	  // Test.h
	
	  const char *const str[] = { "string1" , "string2" };  // error
	
	  // Module1.cpp
	
	  #include "test.h"           // included test.h once in project.
	  #include <iostream.h>
	
	  void function1()
	  {
	     cout << "In Function1" << endl;
	  }
	
	  // Module2.cpp
	
	  #include "test.h"          // included test.h twice in project
	  #include <iostream.h>
	
	  extern void function1();
	
	  void function2()
	  {
	    cout << "In Function2" << endl;
	  }
	
	  void main()
	  {
	    function1();
	    function2();
	
	    return;
	  }
	
	Additional query words: 1.00 1.50 1.51 1.52 8.00 8.00c
	
	======================================================================
	Keywords          : kbCodeGen kbCompiler kbCPPonly kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbvc150 kbvc100 kbVC151 kbVC152
	Version           : :1.0,1.5,1.51,1.52
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
