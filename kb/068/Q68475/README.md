---
layout: page
title: "Q68475: PRB: C2118: Negative Subscript May Be Caused by int Expression"
permalink: kb/068/Q68475/
---

## Q68475: PRB: C2118: Negative Subscript May Be Caused by int Expression

	Article: Q68475
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC100 kbVC150 kbVC151 kbVC200 kbVC210 kbVC400 kbVC500
	Last Modified: 27-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C for OS/2 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler error:
	
	  C2118: negative subscript
	
	  -or-
	
	  C2118: negative subscript or subscript is too large
	
	may be caused by an integer expression in the subscript of an array. If the
	expression evaluates to greater than INT_MAX, as defined in limits.h, its value
	becomes negative, thus causing the aforementioned error. For the 16- bit
	compilers, INT_MAX equals 32767; for 32-bit compilers, INT_MAX equals
	2,147,483,647.
	
	CAUSE
	=====
	
	This is correct and expected behavior for the Microsoft C Compiler because the
	evaluation of integer expressions is done using integer math. In some cases,
	integer math produces an incorrect result because the value of the expression is
	larger than an integer.
	
	RESOLUTION
	==========
	
	16-bit: To work around this situation, add an uppercase (or lowercase) "L" to
	one of the terms of the expression. This will force the compiler to evaluate the
	expression using long math which is less likely to overflow.
	
	32-bit (or 16-bit expressions greater than LONG_MAX): Unfortunately, the above
	resolution will not work as INT_MAX equals LONG_MAX. In these cases, we
	recommend that the array be broken into several smaller arrays, each of whose
	size will not exceed INT_MAX.
	
	MORE INFORMATION
	================
	
	If the sample code below is compiled with C/C++ version 7.0 or Visual C++ for
	Windows, the following error message will be generated:
	
	  error C2118: negative subscript
	
	Moreover, if the warning level is set to 2 or above, the following warning
	message will also be generated:
	
	  warning C4307: '*' : integral constant overflow; result truncated
	
	To eliminate the error, add "L" to one of the terms to indicate it is a long
	constant. For example:
	
	  char mystring[1000L * 33];
	
	Sample Code
	-----------
	
	  /* Compile options needed: <none>; for warning, /W2 or greater
	  */ 
	
	  char mystring[1000 * 33];
	
	Visual C++ 32-bit edition will not generate an error with the above Sample Code
	because integers are 4 bytes instead of 2 bytes and the limit for the subscript
	is 2,147,483,647. However, if we include LIMITS.H and use INT_MAX + 2 as the
	size of the array, we can generate the desired error.
	
	Additional query words: 8.00 8.00c 9.00 9.10
	
	======================================================================
	Keywords          : kbCompiler kbVC100 kbVC150 kbVC151 kbVC200 kbVC210 kbVC400 kbVC500 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC500Search
	Version           : :1.0,1.5,1.51,2.0,2.1,4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
