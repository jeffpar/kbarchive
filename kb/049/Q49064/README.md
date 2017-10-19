---
layout: page
title: "Q49064: INFO: Declaring a Pointer to a Function: C4071, C4001, or C4220"
permalink: /kb/049/Q49064/
---

## Q49064: INFO: Declaring a Pointer to a Function: C4071, C4001, or C4220

	Article: Q49064
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbLangC kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft C, the old method of declaring a pointer to a function,
	
	  type (*ptr)();
	  ptr = function;
	
	causes the following compiler warnings when compiling with the "/W3" option in C
	versions 6.0, 6.0a, and 6.0ax:
	
	  C4071: 'ptr' : no function prototype given
	
	Microsoft C/C++ version 7.0 generates the following warning when the "/W4" option
	is used:
	
	  C4001: nonstandard extension [...] was used
	
	Visual C++, 16- and 32-bit editions, versions 1.0 and above generate the
	following warning when the "/W4" option is used:
	
	  C4220: varargs matches remaining parameters
	
	MORE INFORMATION
	================
	
	Use one of the following methods to avoid the warning message:
	
	- Prototype the function with a complete argument list and then specify actual
	  parameters when declaring the pointer, as follows:
	
	     type function(parameter_list);
	     type (*ptr)(parameter_list);
	     ptr = function;
	
	  Note: The parameter list must be exactly the same parameter list with which
	  the function was declared.
	
	- Adjust the warning level (i.e., /W1, /W2, etc.).
	
	The following program will generate a warning when compiled with the warning
	level set as specified by the "compile options needed" comment. To eliminate the
	warning use the prototype which is shown in the comment.
	
	Sample Code
	-----------
	
	    /* Compile options needed: /W3 - Microsoft C version 6.xx
	                               /W4 - Microsoft C/C++ version 7.0, Visual C++,
	                                     all versions
	    */ 
	
	    #include <stdio.h>
	
	    void main (void)
	    {
	       /* Declare 'fun_ptr' as a pointer to a function  */ 
	       /* Use the following line to correct the warning */ 
	       /* int (*fun_ptr)(const char *, ... ); */ 
	       int (*fun_ptr)();
	       int other_args;
	
	       /* Assign pointer to the specific function, 'printf' */ 
	       fun_ptr = printf; <= error C2440: '=' : cannot convert from 'int (__cdecl *)(const char *,...)' to 'int (__cdecl *)(void) 
	                         When using VC++ 6.0.  Workaround still works.
	
	       /* Standard usage in calling environment */ 
	       fun_ptr("format string goes here", other_args);
	    }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbLangC kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
