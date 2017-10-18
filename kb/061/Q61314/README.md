---
layout: page
title: "Q61314: INFO: The Limit of Macro Expansion"
permalink: kb/061/Q61314/
---

## Q61314: INFO: The Limit of Macro Expansion

	Article: Q61314
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,2.0,2.1,5.1,6.0,6.0a,6.0ax
	Operating System(s): 
	Keyword(s): kbCompiler
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 5.1, 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.51 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft C and Visual C++, the limit of a preprocessor macro expansion can
	be no more than 6K when it is FULLY expanded. Similarly, actual arguments plus
	FULLY expanded actual arguments are not allowed to exceed 6K during a single
	macro expansion. Note that this is not the same as saying that the macro
	DEFINITIONS must be 6K or less. The 6K limitation was chosen because the buffer
	used for expansion is dynamically allocated, and 6K seems to be a reasonable
	limit for most real programs.
	
	Additionally, there is a nesting DEPTH limit in C versions 6.0 and below of 64 on
	macros in C1.EXE, and 256 in C1L.EXE. The nesting limit for C 7.0 and Visual C++
	1.0 is 255. This may be noticed only if you are writing macros for some
	relocatable indexing scheme, such as in the following example:
	
	     #define INCOME 1;
	     #define EXPENSE (INCOME+1)
	     #define GINCOME (EXPENSE+1)
	     #define TAXES (GINCOME+1)
	     #define NINCOME (TAXES+1)
	
	and so on.
	
	Additional query words: 8.00 8.00c 9.00 9.10
	
	======================================================================
	Keywords          : kbCompiler 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,1.51,2.0,2.1,5.1,6.0,6.0a,6.0ax
	Issue type        : kbinfo
	
	=============================================================================
	
