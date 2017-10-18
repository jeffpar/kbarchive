---
layout: page
title: "Q113427: FIX: Incorrect Optimization of Left Shift Operator"
permalink: kb/113/Q113427/
---

## Q113427: FIX: Incorrect Optimization of Left Shift Operator

	Article: Q113427
	Product(s): Microsoft C Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbCompilerkbbuglist kbfixlist
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Optimization of the left shift operator may generate incorrect code in loop
	operations when compiled with global optimizations on. In the code sample below,
	the "for" loop incorrectly evaluates the "count" variable. The resultant code
	causes the loop to execute only once with the following output:
	
	  0
	
	RESOLUTION
	==========
	
	Turn off global optimizations (/Og). In the code sample below, turning off
	global optimizations will correctly output:
	
	  0
	  40000000
	  80000000
	  C0000000
	
	Global optimizations can be disabled by excluding /Og from the command-line
	switches or by the use of a pragma:
	
	     #pragma optimize ("g", off)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft C/C++ 32-bit
	compiler, version 8.0, which is included with Visual C++ 32-bit Edition. This
	problem was corrected in C/C++ compiler version 9.0, included with Visual C++
	32-bit Edition, version 2.0
	
	Sample Code
	-----------
	
	  /*
	  * Compile options needed: /Og
	  */ 
	
	  #include <stdio.h>
	
	  void main( void )
	  {
	      unsigned count;
	       for ( count = 0 ; count < 4 ; count++ )
	           printf(" %X \n", count << 30);
	  }
	
	Additional query words: 1.00 8.00
	
	======================================================================
	Keywords          : kbCompiler kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
