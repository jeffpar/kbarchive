---
layout: page
title: "Q43391: INFO: Handling Floating-Point Errors in C"
permalink: /kb/043/Q43391/
---

## Q43391: INFO: Handling Floating-Point Errors in C

	Article: Q43391
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:6.00ax,7.0; OS/2:5.1,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,4.0,4.1,5.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC kbVC150 kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC500 kbVC600
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 5.1, 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0, 4.1, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With Microsoft C, floating-point error-handling routines may be written using
	the signal() function; however, "return" should not be used to go back to the
	calling process. If "return" is used, the floating-point state is left
	undefined.
	
	Instead, use the setjmp() function to save the stack environment before each
	section of the calling process code that may potentially generate a
	floating-point error. In the error handler, use _fpreset() to reinitialize the
	floating-point package and longjmp() to return to the calling process.
	
	WARNING: Neither the setjmp nor longjmp function is compatible with the C++
	language.
	
	The sample program on page 296 of the "Microsoft C/C++ Run-time Library
	Reference" that shipped with Microsoft C/C++ version 7.0 demonstrates the use of
	setjmp(), _fpreset(), and longjmp() to handle a floating-point error. The online
	help also provides samples for these functions.
	
	The function setjmp() saves the environment (bp, si, di, sp, and ds registers)
	and return address in a buffer. The buffer is used by longjmp() to restore the
	environment.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC kbVC150 kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS-DOS:6.00ax,7.0; OS/2:5.1,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,4.0,4.1,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
