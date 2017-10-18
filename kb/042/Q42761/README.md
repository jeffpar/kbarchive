---
layout: page
title: "Q42761: PRB: Use /Op to Avoid Loss of Precision from Optimization"
permalink: kb/042/Q42761/
---

## Q42761: PRB: Use /Op to Avoid Loss of Precision from Optimization

	Article: Q42761
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kb16bitonly kbprb
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The program below fails when compiled with default optimizations with C 6.x and
	with any optimizations except /Op under the later versions of the compiler. The
	program prints the following with optimizations enabled:
	
	  23.31 * 100 = 2330
	
	However, if compiled with /Od, the following is printed:
	
	  23.31 * 100 = 2331
	
	The problem seems to be in the conversion of the double to int; the rounding
	apparently is done incorrectly.
	
	CAUSE
	=====
	
	When the code is optimized, the result of the division is kept on the
	floating-point stack rather than being stored into memory and reloaded onto the
	stack. This causes precision problems, because the numbers on the stack are
	stored in extended (10- byte) precision, while doubles in memory are stored
	using 8 bytes.
	
	NOTE: The constant 23.31 cannot be represented exactly in the binary
	floating-point scheme used by Microsoft C. The fact that it is represented
	slightly small and then multiplied by 100 (magnifying the error) contributes to
	this problem.
	
	RESOLUTION
	==========
	
	To avoid this problem, use the /Op option when compiling. The /Op switch forces
	in-memory storage of intermediate results. /Op can be combined with other
	optimizations (for example, /Oxp).
	
	This problem does not occur in Visual C++ 32-bit Edition.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	  #include <stdio.h>
	  void main( )
	  {
	     int a;
	     double f;
	     f = 23.31;
	     f = f * 100;
	     a = (int) f;
	     printf( "23.31 * 100 = %d\n", a );
	  }
	
	Additional query words: 1.00 1.50 6.00 6.00a 6.00ax 7.00 8.00 8.00c
	
	======================================================================
	Keywords          : kb16bitonly kbprb 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
