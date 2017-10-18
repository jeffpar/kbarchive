---
layout: page
title: "Q122300: FIX: C1001 Error for typedef Within the Class Declaration"
permalink: kb/122/Q122300/
---

## Q122300: FIX: C1001 Error for typedef Within the Class Declaration

	Article: Q122300
	Product(s): Microsoft C Compiler
	Version(s): 2.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVCkbbuglist kbfixlist
	Last Modified: 24-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 2.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling the code that uses a class declaration with a typedef of itself, as
	demonstrated by the sample code in the More Information section, produces this
	error:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'msc1.cpp', line 1056)
	  Please choose the Technical Support command on the Visual C++ Help menu, or
	  open the Technical Support help file for more information
	
	RESOLUTION
	==========
	
	Use a forward declaration for the class, and place the typedef line before the
	class declaration:
	
	     class A;
	     typedef A B;
	
	Alternatively, enclose the returned typedef name in parentheses to indicate that
	the constructor is used to return the value (see AltRetB in the sample code).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  class A
	  {
	     typedef A B;
	
	     B RetB() { return B(*this); }      // this causes the error
	
	     B AltRetB() { return (B)(*this); } // this line is OK
	  };
	
	
	Additional query words: 2.00 9.00 buglist2.00
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC200 kbVC32bitSearch
	Version           : :2.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
