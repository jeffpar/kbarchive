---
layout: page
title: "Q117384: BUG: Unable to Hit Breakpoint on ELSE IF Statement"
permalink: kb/117/Q117384/
---

## Q117384: BUG: Unable to Hit Breakpoint on ELSE IF Statement

	Article: Q117384
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbtool kbCompiler kbVC100bug kbVC200bug kbVC210bug kbVC400bug kbVC410bug kbVC420 kbVC50
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft C/C++ for MS-DOS 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1, 4.2, 5.0, 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the sample code in the "MORE INFORMATION" section, below, is compiled for
	debugging (/Zi), the debugger (either CodeView or the Visual Workbench) does not
	stop at a breakpoint that is placed on the ELSE IF statement.
	
	CAUSE
	=====
	
	The compiler does not generate the correct symbolic information for the line of
	code containing the ELSE IF statement.
	
	RESOLUTION
	==========
	
	To work around the problem, place the "else" and "if" statements on separate
	lines. For example:
	
	  else
	     if (i==7)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	To reproduce this problem with the sample code below:
	
	1. Set a breakpoint on the line with the ELSE IF statement
	
	2. Press F5 (GO) to start debugging the program.
	
	Neither debugger stops running until the program is finished, unless you set a
	breakpoint on a different line of code.
	
	In CodeView, if you switch into mixed source/assembly mode, you can verify that
	there is executable code associated with the ELSE IF statement. If a breakpoint
	is placed on one of the lines of assembly code for the ELSE IF statement and the
	application is debugged, the code stops running at the breakpoint. With the
	Visual Workbench debugger, step through the code at the ELSE IF statement to set
	the breakpoint.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /Zi /Od
	  */ 
	
	     void main(void)
	     {
	        int i=100;
	        if (i==2);
	        else if(i==7);  /* cannot stop on this line */ 
	     }
	
	Additional query words: kbVC400bug 6.00 8.00 8.00c 9.00 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbtool kbCompiler kbVC100bug kbVC200bug kbVC210bug kbVC400bug kbVC410bug kbVC420 kbVC500bug kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
