---
layout: page
title: "Q119873: FIX: Incorrect Use of #pragma Pack Causes C1001 Errors"
permalink: /kb/119/Q119873/
---

## Q119873: FIX: Incorrect Use of #pragma Pack Causes C1001 Errors

	Article: Q119873
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC100bug kbVC200bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 4.1, 4.2, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling code that uses #pragma pack() to pop an ID that has not been
	pushed after successfully popping an ID that was pushed, the compilers listed
	above will generate:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	
	In addition, this error will be followed by a message similar to
	
	  (compiler file 'msc1.cpp', line 902)
	  Please choose the Technical Support command on the Visual C++ Help menu, or
	  open the Technical Support help file for more information
	
	NOTE: In Microsoft Visual Studio .NET, you receive a C4160 warning instead of the
	error message, so you can compile and run the program.
	
	RESOLUTION
	==========
	
	Pop only IDs that have been previously pushed onto the compiler's internal
	stack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates the bug:
	
	Sample Code
	-----------
	
	  /* packfail.c
	
	  Compile options needed: none
	  */ 
	
	  #pragma pack(push, a)
	  #pragma pack(push, b, 4)
	  #pragma pack(pop, b)
	  #pragma pack(pop, value)
	
	Additional query words: kbVC400bug 8.00 9.00 buglist1.00 buglist2.00 buglist8.00 buglist9.00 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbCompiler kbVC100bug kbVC200bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,2.0,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
