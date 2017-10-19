---
layout: page
title: "Q120921: Visual C++ Vers 2.0 README.WRI, Part 5 C++ Exception Handling"
permalink: /kb/120/Q120921/
---

## Q120921: Visual C++ Vers 2.0 README.WRI, Part 5 C++ Exception Handling

	Article: Q120921
	Product(s): Microsoft C Compiler
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 2.0, on platform(s):
	   - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is based on the Visual C++ version 2.0 README.WRI file:
	
	Interaction Between setjmp/longjmp and C++ Exception Handling
	-------------------------------------------------------------
	
	The use of setjmp and longjmp is strongly discouraged in C++ programs. However,
	if you use these functions and compile with the /GX option (Enable Exception
	Handling), destructors for local objects will be called during the stack unwind.
	Note that the use of setjmp and longjmp in C++ programs may degrade performance
	by preventing optimization on local variables.
	
	This interaction between setjmp/longjmp and C++ exception handling is supported
	only when you include SETJMP.H or SETJMPEX.H.
	
	If you are writing code that is intended to be portable, do not rely on correct
	destruction of frame-based objects when executing a non-local goto using a call
	to longjmp. The use of C++ exception handling try/catch constructs is
	recommended in C++ programs instead of setjmp and longjmp.
	
	Additional query words: 2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper
	Version           : :2.0
	
	=============================================================================
	
