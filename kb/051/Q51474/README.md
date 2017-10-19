---
layout: page
title: "Q51474: INFO: Character Parameters May Be Prototyped as Integers"
permalink: /kb/051/Q51474/
---

## Q51474: INFO: Character Parameters May Be Prototyped as Integers

	Article: Q51474
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:5.1,6.0,6.00a,6.00ax,7.0; OS/2:5.1,6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.
	Operating System(s): 
	Keyword(s): kbCRT kbVC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
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
	
	SUMMARY
	=======
	
	In Microsoft C, there are some functions in the run-time library that take
	character values as parameters (for example, memccpy, memset, and so on) and
	that are prototyped as taking integers. This is not a documentation error and
	your program will work correctly if a character value is passed in the place of
	the integer parameter (automatic type conversion takes care of this).
	
	The integer value is specified because when the compiler pushes parameters on the
	stack so that the function being called can use them, it always pushes them in
	integer sized increments. In a 16-bit program where an integer is 2 bytes, 2
	bytes will be pushed on the stack regardless of whether the value is an integer
	or a character. In a 32-bit program where an integer is always 4 bytes, 4 bytes
	will be pushed on the stack regardless of whether the value is an integer, long,
	short, or character.
	
	Therefore, to simplify, the function is prototyped as receiving an integer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS-DOS:5.1,6.0,6.00a,6.00ax,7.0; OS/2:5.1,6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
