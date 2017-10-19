---
layout: page
title: "Q140605: PRB: C2059 When Declaring Friend Template Functions in a Class"
permalink: /kb/140/Q140605/
---

## Q140605: PRB: C2059 When Declaring Friend Template Functions in a Class

	Article: Q140605
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbCompiler kbprb
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to declare a friend template function in a class definition may
	result in the following errors:
	
	  error C2059: syntax error: 'template'
	
	  error C2238: unexpected token(s) preceding ';'
	
	CAUSE
	=====
	
	This is a relatively new language feature that is currently not supported by the
	Visual C++ 4.0 compiler. For example, the following code will generate the
	errors noted above.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	  class A;
	  template <class T> void f(T, A *a)  { a->x; }
	
	  class A
	  {
	  private:
	     int x;
	     template <class T> friend void f(T, A*);
	  };
	
	  int main(void)
	  {
	     A a;
	     f(5, &a);
	     f(1.5, &a);
	     return 0;
	  }
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbCompiler kbprb 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
