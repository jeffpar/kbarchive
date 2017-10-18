---
layout: page
title: "Q104243: PRB: Unexpected C2440 Error in C++ Typecast"
permalink: kb/104/Q104243/
---

## Q104243: PRB: Unexpected C2440 Error in C++ Typecast

	Article: Q104243
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbprb
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error
	
	  Error C2440 : 'Conversion': cannot convert from 'type1' to 'type2'
	
	is generated when a statement of the form
	
	     TYPE ( identifier ) ( expression );
	
	is used to type cast a function pointer and make a call simultaneously.
	
	CAUSE
	=====
	
	This is expected C++ compiler behavior. The sample code below explains the
	problem in a more understandable way.
	
	If the following three statements taken from the sample code are compiled
	
	     typedef void (* funcptr) (int);
	
	...
	
	     void f(int){...};
	
	...
	
	     funcptr (f)(1); // Error C2440
	
	the following error message is generated:
	
	  
	
	  error C2440: 'initializing' : cannot convert from 'const int' to
	  'void (__cdecl *) (int)'
	
	Although the last statement appears to be typecasting the function "f" to
	funcptr, the compiler thinks it is declaring an object of name "f" of type
	funcptr and initializing it with the integer constant "1" equivalent to having
	
	     funcptr f = 1;
	
	-or-
	
	     void (*f) (int) = 1;
	
	which makes the error message much more understandable.
	
	RESOLUTION
	==========
	
	The way to the achieve the desired typecast is to add another set of
	parenthesis, for example
	
	     ((funcptr)f)(1);
	
	which resolves the confusion for the compiler, which thus treats the typecast in
	the way it should.
	
	NOTE: Using a C++ style cast, such as (funcptr(f))(1), produces a syntax error.
	You must use C-style casting.
	
	Another method is to have a pointer explicitly bind a new name to the function,
	for example
	
	     void (*f1)(int) = f;
	
	and use: "
	
	     f1(1);     // OK
	
	" (without the quotation marks)
	
	MORE INFORMATION
	================
	
	The sample below demonstrates the error and workarounds.
	
	Sample Code
	-----------
	
	  typedef void (*funcptr) (int);
	
	  void f(int);
	
	  void main()
	  {
	      ((void (*) (int)) f)(1);
	      funcptr (f) (1);             // Gives error C2440
	      ((funcptr)f)(1);
	      void (*f1) (int) = f;
	      f1(1);
	  }
	
	Additional query words: 1.00 1.50 2.00 2.10 4.00 7.00 8.00 8.00c 9.00 9.10
	
	======================================================================
	Keywords          : kbprb 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Issue type        : kbprb
	
	=============================================================================
	
