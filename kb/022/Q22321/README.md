---
layout: page
title: "Q22321: INFO: Common Programming Errors in the C Language"
permalink: /kb/022/Q22321/
---

## Q22321: INFO: Common Programming Errors in the C Language

{% raw %}

	Article: Q22321
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The text below lists some of the most common errors that occur programming in
	the C language. Any one of these items can cause unpredictable results, such as
	invalid data. Some are caught by the compiler and reported as errors or
	warnings.
	
	- Using an automatic variable that has not been initialized
	
	- Omitting a closing comment delimiter
	
	- Using an array index greater than the length of the array (In C, array
	  indexes run from zero to <length>-1.)
	
	- Omitting a semicolon or a closing brace
	
	- Using an uninitialized pointer
	
	- Using a forward slash when a backslash is required (for example, substituting
	  "/n" for "\n.")
	
	- Using "=" in a comparison where "==" is desired
	
	- Overwriting the null terminator for a string
	
	- Prematurely terminating a function declaration with a semicolon (The compiler
	  often flags the "orphan" block of code as a syntax error.)
	
	- Specifying the values of variables in a scanf() statement instead of their
	  addresses
	
	- Failing to declare the return type for a function
	
	- Assuming an expression evaluation order when using an expression with side
	  effects (For example, a[i] = i++; is ambiguous and dangerous.)
	
	- Failing to account that a static variable in a function is initialized only
	  once
	
	- Omitting a "break" from a case in a switch statement (Execution "falls
	  through" to subsequent cases.)
	
	- Using "break" to exit a block of code associated with an if statement (The
	  break statement exits a block of code associated with a for, switch, or while
	  statement.)
	
	- Comparing a "char" variable against EOF (-1). The following idiom results in
	  an infinite loop when char is unsigned. Note that char is signed by default,
	  so the following will only fail when using the "/J" compiler option:
	
	  char c;
	  while ((c = getchar()) != EOF)
	     {
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
