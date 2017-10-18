---
layout: page
title: "Q128897: FIX: GP Fault When For Loop Used with Unsigned Char Index"
permalink: kb/128/Q128897/
---

## Q128897: FIX: GP Fault When For Loop Used with Unsigned Char Index

	Article: Q128897
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbCompilerkbbuglist kbfixlist
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you access a structure member when using an unsigned char index in a For
	loop, a general protection (GP) fault occurs.
	
	CAUSE
	=====
	
	When the compiler is optimizing for speed, only the low byte of the register
	where the index is stored is zeroed. Later on, the full extended register is
	used in calculating the offset of the structure member. Because the rest of the
	register is never zeroed, the offset used is invalid.
	
	RESOLUTION
	==========
	
	Use either one of the following workarounds:
	
	- Change the type of the For loop index to any type other than unsigned char.
	
	-or-
	
	- Do not use speed optimizations.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	The sample code below can be used to demonstrate the problem.
	
	Due to the complexity of the optimization algorithm, some structures may work
	while others fail. However until this bug is fixed, it should be considered
	unsafe to use unsigned char indexing in a For loop with speed optimization.
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	  /* Compile options needed: any speed optimizations
	  */ 
	
	  struct TEST
	  {
	     char    filler[37];
	     int     x;
	  } xyz[2];
	
	  void main()
	  {
	     unsigned char i = 1;
	
	     for(i=0; i<2; i++)
	     {
	        xyz[i].x = -1;
	     }
	  }
	
	Additional query words: 2.00 2.10 VCx86 GPF
	
	======================================================================
	Keywords          : kbCompiler kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
