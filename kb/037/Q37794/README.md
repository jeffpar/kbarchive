---
layout: page
title: "Q37794: PRB: gcvt() Generates Exponential Notation for 0.0x"
permalink: /kb/037/Q37794/
---

## Q37794: PRB: gcvt() Generates Exponential Notation for 0.0x

	Article: Q37794
	Product(s): Microsoft C Compiler
	Version(s): 5.1 6.0 6.0a 6.0ax 7.0 1.0 1.5 2
	Operating System(s): 
	Keyword(s): kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 5.1, 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The gcvt() function returns a value in scientific notation, without regard to
	the specified precision, when the floating-point value has the form
	"0.0<x>" and <x> is any sequence of digits.
	
	CAUSE
	=====
	
	This is expected behavior for gcvt().
	
	RESOLUTION
	==========
	
	If this behavior is not desired, use the fcvt() function to convert the
	floating-point number to a string.
	
	MORE INFORMATION
	================
	
	The following code demonstrates this behavior:
	
	Sample Code
	-----------
	
	  /*
	   * Compile options needed: None
	   */ 
	
	  #include <stdio.h>
	  #include <stdlib.h>
	
	  char buffer[50];
	  int precision = 20;
	
	  void main(void)
	  {
	     gcvt(-0.1123, precision, buffer);    /* Decimal output */ 
	     printf("buffer ........\"%s\"\n", buffer);
	
	     gcvt(-0.0123, precision, buffer);    /* Scientific notation */ 
	     printf("buffer ........\"%s\"\n", buffer);
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : 5.1 6.0 6.0a 6.0ax 7.0 1.0 1.5 2
	Issue type        : kbprb
	
	=============================================================================
	
