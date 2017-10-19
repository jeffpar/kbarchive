---
layout: page
title: "Q40160: PRB: C2001: Newline in Constant for a String on Multiple Lines"
permalink: /kb/040/Q40160/
---

## Q40160: PRB: C2001: Newline in Constant for a String on Multiple Lines

	Article: Q40160
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbCompiler kbprb
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.50, 1.51 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If program contains a string literal that is incorrectly split over multiple
	lines the following error will occur:
	
	  error C 2001: newline in constant
	
	Several other errors may be caused by this also. This sample will also give
	errors C2065, C2121, C2143, and C2198 as a result of the newline errors.
	
	CAUSE
	=====
	
	This is a common programming mistake. Special considerations must be taken to
	split a constant string over several lines.
	
	RESOLUTION
	==========
	
	The best method is to change the format string, as in the following example
	(this works because strings separated only by spaces, tabs, and/or newlines are
	concatenated as specified by the ANSI standard):
	
	     printf("\n %s"
	            " %s"
	            " %s",
	            "this", "is", "it");
	
	The older and less-preferred method is to use continuation lines by typing a
	backslash followed by a carriage return at the end of a line, as in the
	following example:
	
	     printf("\n %s\ 
	            %s\ 
	            %s",
	            "this", "is", "it");
	
	This is not as good as the previous example because the spaces at the beginning
	of the continuation line become part of the string, unlike the first example.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  #include <stdio.h>
	  void main()
	  {
	     printf("\n %s"
	            " %s"
	            " %s",
	            "this", "is", "it");
	  }
	
	
	Additional query words: 1.00 1.50 2.00 2.10 6.00 6.00a 6.00ax 7.00 8.00 8.00c 9.00 9.10
	
	======================================================================
	Keywords          : kbCompiler kbprb 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Issue type        : kbprb
	
	=============================================================================
	
