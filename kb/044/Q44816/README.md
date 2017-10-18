---
layout: page
title: "Q44816: PRB: printf() Appears to Print Incorrect Results for Floats"
permalink: kb/044/Q44816/
---

## Q44816: PRB: printf() Appears to Print Incorrect Results for Floats

	Article: Q44816
	Product(s): Microsoft C Compiler
	Version(s): 5.1 6.0 6.0a 6.0ax 7.0 1.
	Operating System(s): 
	Keyword(s): kbCRT kbVC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 5.1, 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The printf() in the sample code below does not print out the correct values; the
	float is printed with a hexadecimal specifier before the float specifier.
	
	CAUSE
	=====
	
	The problem is that a 2-byte format specifier is being used for an 8-byte value.
	
	RESOLUTION
	==========
	
	To correct this problem, replace "%x" and "%lx" with "%lx %lx".
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <stdio.h>
	  main()
	  {
	     float flt  = 1.701411e+038;
	     double dbl = 1.701411e+038;
	
	     printf("\nFLOAT         %x   %e", flt,flt);
	     printf("\nDOUBLE        %lx  %le",dbl,dbl);
	  }
	
	The above code produces incorrect output. However, the source code is incorrect.
	When printing, the above code is using a 2-byte hex format specifier %x or a
	4-byte hex format specifier %lx with an 8-byte double argument (the float is
	also passed as a double). This produces the incorrect results. To solve this
	problem, use two %lx format specifiers to remove 8-bytes off the stack before
	printing the second double. For example:
	
	  printf("\nFloat  %lx %lx %e",flt,flt);
	  printf("\nDouble %lx %lx %le",dbl,dbl);
	
	This works correctly for Microsoft C under MS-DOS or OS/2; however, this code may
	not be portable under other systems that support types of different sizes.
	
	Eight bytes are passed, independent of the fact that one argument is a float and
	the other a double, because the float is being promoted to a double. This is
	because all floats are passed as doubles unless they are specified as floats in
	the prototype. Because printf() has a variable number of parameters, the
	arguments are not prototyped and therefore all floats are promoted up to
	doubles.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : 5.1 6.0 6.0a 6.0ax 7.0 1.
	Issue type        : kbprb
	
	=============================================================================
	
