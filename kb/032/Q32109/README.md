---
layout: page
title: "Q32109: INFO: Two Syntaxes for Calling Functions with Pointers"
permalink: kb/032/Q32109/
---

## Q32109: INFO: Two Syntaxes for Calling Functions with Pointers

	Article: Q32109
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	The source code below contains what appears to be an improper use of a pointer
	to a function. However, the code is correct. There are two ways to call a
	function when using a pointer to a function:
	
	  (*pointer_to_function)();
	
	  -or-
	
	  pointer_to_function();
	
	The behavior exhibited in the sample code is expected. The ANSI Standard
	(Document Number X3J11/88-002, January 11, 1988) allows a function to be called
	through a pointer with the following syntax
	
	  (*pointer_to_function)();
	
	in addition to the following non-traditional syntax:
	
	  pointer_to_function();
	
	The text below is quoted from page 41 of the "Rationale for Draft Proposed
	American National Standard for Information Systems Programming Language C" (sec.
	3.3.2.2, "Function calls"):
	
	  The latter construct, not sanctioned in the Base Document, appears in some
	  present versions of C, is unambiguous, invalidates no old code, and can be an
	  important shorthand.
	
	MORE INFORMATION
	================
	
	The sample code below demonstrates this method.
	
	Sample Code
	-----------
	
	  /*
	   * Compile options needed: none
	   */ 
	
	  #include <stdio.h>
	
	  void main(void)
	  {
	     void ftn(void);
	     void (*ptr_to_ftn)(void);
	
	     ptr_to_ftn = ftn;   // The pointer is correctly assigned
	                         // the address of 'ftn()'
	
	     printf("\nCalling the function\n\n");
	
	     ptr_to_ftn();     // This is not traditional syntax for
	                         // a call through a function pointer
	
	     printf("back to main\n");
	  }
	
	  void ftn(void)
	  {
	     printf("in the function\n\n");
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
