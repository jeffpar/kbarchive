---
layout: page
title: "Q98588: PRB: Undesired Side Effects from toascii, tolower, toupper"
permalink: /kb/098/Q98588/
---

## Q98588: PRB: Undesired Side Effects from toascii, tolower, toupper

{% raw %}

	Article: Q98588
	Product(s): Microsoft C Compiler
	Version(s): 6.0 6.0a 6.0ax 7.0 1.0 1.5 1.51 2.0 2.1 4.0 4.1 4.2 5.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC100 kbVC150 kbVC151 kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In an application compiled with Microsoft C/C++, using the toascii, tolower, or
	toupper macros with a pointer value produces incorrect results, such as
	corrupted strings or a GP fault, depending on which compiler you use.
	
	CAUSE
	=====
	
	Because the tolower and toupper macros evaluate the input argument twice, the
	compiler performs any pointer arithmetic specified in a macro argument twice.
	This problem occurs most often with macros that affect an individual character
	because character pointers are common arguments for these macros.
	
	RESOLUTION
	==========
	
	The text below presents two methods to address the behavior the side effects
	cause.
	
	- Modify the code to remove the pointer arithmetic expression from the macro
	  argument. In the code fragment below, because the argument to the toupper
	  macro does not change, the side effect does not occur when the macro
	  evaluates the argument a second time.
	
	  while (*x != '\0')
	     {
	     *x = (char) toupper((int) *x);
	     x++;
	     }
	
	- The compiler provides more than one implementation for some functions. For
	  example, to use a different implementation of the tolower or toupper
	  function, perform the following three steps:
	
	  1. Specify the /Za option (ANSI compatibility) on the compiler command line.
	
	  2. Use the _tolower() or _toupper() functions in place of the tolower or
	     toupper macros.
	
	  3. After including the <ctype.h> file in your application source code,
	     use the #undef tolower or #undef toupper statement to remove the macro
	     definition from the code.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /*
	   * Compile options needed: none
	   */ 
	
	  #include <stdio.h>
	  #include <ctype.h>
	
	  char string[20]="this is a string";
	
	  void main(void)
	  {
	     char *x;
	
	     x = string;
	     while (*x != '\0')
	        *x = (char)toupper((int) *(x++));
	     printf("%s\n", string);
	  }
	
	The sample code above may produce the following output:
	
	thHssiI    ttiIgg
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC100 kbVC150 kbVC151 kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : 6.0 6.0a 6.0ax 7.0 1.0 1.5 1.51 2.0 2.1 4.0 4.1 4.2 5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
