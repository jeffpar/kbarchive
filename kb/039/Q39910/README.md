---
layout: page
title: "Q39910: PRB: Initializing Non-Primary Union Element Produces Errors"
permalink: /kb/039/Q39910/
---

## Q39910: PRB: Initializing Non-Primary Union Element Produces Errors

{% raw %}

	Article: Q39910
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), used with:
	   - Microsoft C for MS-DOS 
	   - Microsoft C/C++ for MS-DOS 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to initialize any element of a union except the first may generate
	any combination of the following compiler messages:
	
	  error C2078: too many initializers
	
	  warning C4047: 'initialization' - different levels of indirection
	
	  -or-
	
	  warning C4047: 'initializing' : 'type1' differs in levels of indirection from
	  'type2'
	
	  warning C4133: 'initializing' : incompatible types - from 'type1' to 'type2'
	
	CAUSE
	=====
	
	The compiler issues these messages by design. According to the ANSI standard,
	initialization of a union must be directed to the first element. An attempt to
	initialize some other union member may be interpreted by the compiler as a
	syntactically incorrect initialization of the first element.
	
	RESOLUTION
	==========
	
	If it is necessary to initialize a non-primary element of a union, change the
	order of your union members, so that the element that requires initialization
	appears as the first element of the union.
	
	MORE INFORMATION
	================
	
	Example1.c, in the sample code below, fails compilation with one C2078 error and
	three C4047 warnings. The error is generated because only one union element may
	be initialized (the first) and by the time the compiler processes the
	"{ch1,ch2,ch3,ch4}" initialization, it has already filled element one. The
	warnings are generated because the compiler expects to be initializing "union
	TEST tsty" with integer values, but it is finding char* (character pointers)
	instead.
	
	Example2.c compiles but produces a C4133 warning. The compiler expects to
	initialize "union ONION anONION" with an integer pointer but finds a float
	pointer instead. Although, this situation is not serious enough to prohibit
	compilation, it does indicate that there may be a problem.
	
	Sample Code
	-----------
	
	  /* Example1.c
	   *
	   * Compile options needed: none
	   */ 
	
	  union TEST
	  {
	      struct
	      {
	        int a;
	        int b;
	        int c;
	      } one;             /* union element #1 */ 
	      struct
	      {
	        char *ptr1;
	        char *ptr2;
	        char *ptr3;
	        char *ptr4;
	      } two;             /* union element #2 */ 
	  } u;
	
	  char ch1[10], ch2[10], ch3[10], ch4[10];
	
	  union TEST test ={ {1,2,3},                /* initialize element #1 */ 
	                     {ch1,ch2,ch3,ch4} };    /* generates error C2078 */ 
	
	  void main(void)
	  {
	     union TEST tsty ={ {ch1,ch2,ch3,ch4} }; /* generates 3 C4047
	                                                warnings */ 
	  }
	
	  -------------
	  /* Example2.c
	   *
	   * Compile options needed: /c
	   */ 
	
	  union  ONION  { int *iptr; float *fptr; };
	  float sam = 3.141592;
	  union ONION anONION = { &sam };  /* generates warning C4133 */ 
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q47693 Initializing Unions Initializes First Member of the Union
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
