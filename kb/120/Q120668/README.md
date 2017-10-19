---
layout: page
title: "Q120668: BUG: Trigraph Statements May Produce End-of-File Error"
permalink: /kb/120/Q120668/
---

## Q120668: BUG: Trigraph Statements May Produce End-of-File Error

	Article: Q120668
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC100bug kbVC150bug kbVC200bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.1, 4.2, 5.0, 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Trigraphs are three-character sequences used to represent punctuation
	unavailable in a character set. When the compiler encounters Trigraph statements
	that use ifdef and endif statements, it gives the following erroneous
	end-of-file error:
	
	  fatal error C1004: unexpected end of file found.
	
	CAUSE
	=====
	
	Trigraph translation is not finished before processing, so the #endif (the
	equivalent of ??=endif) is not reached.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	NOTE: This problem did not occur in Microsoft Visual C++, 32-bit Edition, version
	4.0.
	
	MORE INFORMATION
	================
	
	The following is sample code to reproduce the problem:
	
	     /* Compile options needed: none
	     */ 
	
	     ??=ifdef TESTING
	     int i=0;
	     ??=endif
	
	Additional query words: 1.00 1.50 2.00 8.00 8.00c 9.00 5.00
	
	======================================================================
	Keywords          : kbCompiler kbVC100bug kbVC150bug kbVC200bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,2.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
