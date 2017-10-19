---
layout: page
title: "Q122265: BUG: Incorrect Calculations with Both /Og and /G5"
permalink: /kb/122/Q122265/
---

## Q122265: BUG: Incorrect Calculations with Both /Og and /G5

	Article: Q122265
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0,2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 2.0, 2.1 
	- Microsoft C/C++ Compiler (CL.EXE) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Code compiled with both /G5 and the /Og options generate incorrect floating
	point results.
	
	RESOLUTION
	==========
	
	To work around the problem, do not use both the /G5 and the /Og compiler
	switches together; use either /G5 or /Og. Alternatively, you can disable the
	global optimization (provided by /Og) for the area of code generated incorrectly
	with the #pragma optimize.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The /G5 compiler switch tells the compiler to place the assembly instructions
	generated into an order that will be more beneficial to the pipelined
	architecture of the Pentium processor. The /Og switch enables global
	optimizations.
	
	The following sample code illustrates the problem. Remove the comment slashes
	(//) from the #pragma line to optimze the line and illustrate a workaround to
	the problem.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /G5 /Og
	  */ 
	
	  #include <stdio.h>
	
	  //#pragma optimize("g", off)    //uncomment to fix the problem
	  void main()
	  {
	     double   polylgd[5] = {0.0, 0.0, 0.0, 1.0, 1.0};
	     double   valpol,an,an1,temp,dtemp;
	     double   *polyptr;
	     int      i;
	
	     polyptr = &polylgd[4];
	     an  = *polyptr--;
	     an1 = *polyptr--;
	
	     for (i = 4; i >= 2; i--)
	     {
	        dtemp = (double) (i - 1.0) / (double) i ;
	        temp  =  dtemp * an;
	        temp  = *polyptr - temp;
	        *polyptr--;
	        an    = an1 + (dtemp + 1.0) * (-0.5) * an;
	        an1   = temp;
	     }
	
	     valpol = an1 + (-0.5) * an;
	     printf("value should be:  0.14843750\n");
	     printf("value this run is %.8lf\n", valpol);
	  }
	
	Additional query words: 8.00 9.00 1.00 2.00 2.10 buglist1.00 buglist2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbvc100 kbCVCComp kbVC200 kbVC210
	Version           : :1.0,2.0,2.1
	
	=============================================================================
	
