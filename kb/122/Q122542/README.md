---
layout: page
title: "Q122542: BUG: Incorrect Code for Loop with Known Value"
permalink: /kb/122/Q122542/
---

## Q122542: BUG: Incorrect Code for Loop with Known Value

	Article: Q122542
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.51 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the /Ox, /Og, /O1, or /02 optimizations with the 32-bit compiler or
	the /Ox and /Ol optimizations with the 16-bit compiler, incorrect code is
	generated for loops where the number of iterations is a known value. The loop is
	not executed.
	
	RESOLUTION
	==========
	
	Workarounds are:
	
	- Remove the optimization from the command line.
	
	-or-
	
	- Use the optimize pragma to disable optimizations for the function. Use:
	
	        #pragma optimize ("",off)
	
	  before the function call, and use:
	
	        #pragma optimize ("",on)
	
	  after the function call.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. We are researching this bug and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	  /* Compile options needed:
	  /*        32-bit compiler: /Ox, /Og, /O1, or /02
	  /*        16-bit compiler: /Ox or /Ol
	  */ 
	
	  /* This sample prints out 11 */ 
	
	  #include <stdio.h>
	
	  void main(void)
	  {
	     int i = 500;
	  loop:  i++;
	     if( i <= 10 ) goto loop;
	        printf( "This should be 501: %d\n", i );
	  }
	
	Additional query words: 1.00 1.50 1.51 2.00 7.00 8.00 8.00c 9.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,1.51,2.0
	
	=============================================================================
	
