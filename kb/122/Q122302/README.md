---
layout: page
title: "Q122302: FIX: C1001 Error Compiling Naked Function with /Og and /G5"
permalink: kb/122/Q122302/
---

## Q122302: FIX: C1001 Error Compiling Naked Function with /Og and /G5

	Article: Q122302
	Product(s): Microsoft C Compiler
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 2.0, on platform(s):
	      - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling a function with the __declspec(naked) modifier, but without an __asm
	block for the epilog code, and using the /Og and /G5 switches, results in the
	following error:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'l:\b_bld\c2\P2\main.c', line 374)
	  Please choose the Technical Support command on the Visual C++ Help menu, or
	  open the Technical Support help file for more information
	
	RESOLUTION
	==========
	
	Implement a epilog code block in your function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	If a function is declared with the __declspec(naked) modifier, the compiler will
	not generate any prolog or epilog code. Users should implement their own prolog
	and epilog code, using blocks of inline assembler code.
	
	NOTE: without proper prolog and epilog code, the code will not execute
	correctly.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /Og /G5
	     Note that /O1, /O2, and /Ox all imply /Og
	  */ 
	
	  void __declspec(naked) NakedFunction()
	  {
	      __asm
	      {
	      // prolog code
	      }
	
	      printf( "Inside naked function\n" );
	
	      // note: epilog __asm block missing
	  }
	
	Additional query words: 2.00 9.00 buglist2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
