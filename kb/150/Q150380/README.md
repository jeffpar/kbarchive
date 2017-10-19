---
layout: page
title: "Q150380: PRB: Sizeof Constant Character Returns Different Values"
permalink: /kb/150/Q150380/
---

## Q150380: PRB: Sizeof Constant Character Returns Different Values

	Article: Q150380
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1
	Operating System(s): 
	Keyword(s): kbCompiler kbCRT kbVC kbprb
	Last Modified: 05-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Learning Edition, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The sizeof('x') or sizeof(L'x') constants do not return expected results. In C,
	the return value is 4 for the sizeof character constant and 2 for the sizeof
	multicharacter constant. In C++, the return value is 1 for the sizeof character
	constant and 2 for the sizeof multicharacter constant.
	
	CAUSE
	=====
	
	The specification on this point is different for C from what it is for C++. In
	C, a character constant is of type int. In C++, a character constant is of type
	char. Multicharacter constants are implementation dependent.
	
	RESOLUTION
	==========
	
	When using C, do not use sizeof to determine the width of a character constant.
	Use sizeof("") to give the width of one character in both C and C++.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For more information, see "The Annotated C++ Reference Manual" by Margaret Ellis
	and Bjarne Stroustrup, Section 2.5.2.
	
	Additional query words: 2.00 2.10 2.20 4.00 4.10
	
	======================================================================
	Keywords          : kbCompiler kbCRT kbVC kbprb 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC32bitSearch
	Version           : :4.0,4.1
	Issue type        : kbprb
	
	=============================================================================
	
