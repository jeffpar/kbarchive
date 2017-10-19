---
layout: page
title: "Q37223: INFO: Definition of a Domain Error"
permalink: /kb/037/Q37223/
---

## Q37223: INFO: Definition of a Domain Error

	Article: Q37223
	Product(s): Microsoft C Compiler
	Version(s): MS- DOS:6.0,6.00a,6.00ax,7.0;OS/2:6.0,6.00a;WIN3X:1.0,1.5;WINNT:1.0,2.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A domain error occurs when an application passes an invalid value to a function.
	The "domain" of a function refers to its arguments; the "range" of a function
	refers to the values it returns.
	
	For example, if an application calls the sqrt() function with the argument -1, a
	domain error occurs because -1 is not in the domain of the real number square
	root function (that is, you can't take the square root of -1 and receive a real
	result).
	
	A domain error can also occur if an application calls a function with an
	incorrect data type. (For example, if you call a function that expects a double
	parameter with an int.) The compiler should produce warning messages or perform
	the required conversion if you properly declare prototypes for each function
	your application calls (perhaps by including the appropriate system header file,
	such as MATH.H).
	
	To avoid a domain error, verify that the value your application passes to a
	function has the proper type and that the value is in the function's domain.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS- DOS:6.0,6.00a,6.00ax,7.0;OS/2:6.0,6.00a;WIN3X:1.0,1.5;WINNT:1.0,2.0,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
