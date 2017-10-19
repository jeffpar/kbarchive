---
layout: page
title: "Q117201: BUG: sizeof Used in Comparison Does Not Generate C4018"
permalink: /kb/117/Q117201/
---

## Q117201: BUG: sizeof Used in Comparison Does Not Generate C4018

	Article: Q117201
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC100bug kbVC150bug kbVC200bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C for MS-DOS 
	   - Microsoft C/C++ for MS-DOS 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 4.1, 4.2, 5.0, 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	According to ANSI specifications, the sizeof macro returns the unsigned integer
	size of a particular data type or variable.
	
	When the sizeof macro is used in a comparison with an integer variable, the
	compiler should, but does not, generate the following warning:
	
	  warning C4018: 'op' : signed/unsigned mismatch
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate the problem. The C4018
	warning is produced for the statement in function3, but not for the statements
	in function1 and function2.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /W4
	  */ 
	
	  int i;
	  unsigned u;
	
	  int function1(void)
	  {
	     return(i > sizeof(i));
	  }
	
	  int function2(void)
	  {
	     return(i > (unsigned) sizeof(i));
	  }
	
	  int function3(void)
	  {
	     u = sizeof(i);
	     return(i > u);
	  }
	
	Additional query words: kbVC400bug 6.00 6.00a 6.00ax 7.00 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbCompiler kbVC100bug kbVC150bug kbVC200bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,2.0,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
