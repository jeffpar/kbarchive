---
layout: page
title: "Q129132: BUG: Can't Use Simple Type in an Explicit Call of a Destructor"
permalink: kb/129/Q129132/
---

## Q129132: BUG: Can't Use Simple Type in an Explicit Call of a Destructor

	Article: Q129132
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.52,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC100bug kbVC150bug kbVC151bug kbVC152bug kbVC200bug kbVC21
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The notation for an explicit call of a destructor may be used for any simple
	type name. Using the notation for a type that does not have a destructor has no
	effect. However, for the products mentioned previously, the use of a simple type
	name causes the following compiler errors:
	
	  t.cpp(6): error C2611: 'int' : illegal following '~' (expected identifier)
	
	  t.cpp(6): error C2062: type 'int' unexpected
	
	NOTE: The error numbers in Visual C++ .NET are C2611 and C26929, respectively.
	
	RESOLUTION
	==========
	
	The Annotated C++ Reference Manual (Jan '94), section 12.4 contains the
	following example:
	
	     int* p;
	     / ...
	     p->int::~int();
	
	However, the current language grammar restricts the use of the ->~ and ::
	syntax to class names. Because at the current time simple types are not
	considered class names, the above syntax is not implemented by the compiler.
	
	Until this language feature is implemented, removing the code is the only
	resolution.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Using an explicit call of a destructor for a simple type would have no effect,
	so removing it will not affect the compiled code. However, this may not be easy
	to do when this code is part of a macro expansion or templated class that should
	be able to accept both built-in and user-defined types.
	
	REFERENCES
	==========
	
	For more information, see The Annotated C++ Reference Manual (Jan '94), section
	12.4.
	
	Sample Code
	-----------
	
	     /* No special compile options needed. */ 
	     void main(void)
	     {
	        int*    p;
	        p->int::~int();     // Generates C2611 error
	     }
	   
	
	Additional query words: kbVC400bug 8.00 8.00c 9.00 9.10 template 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC100bug kbVC150bug kbVC151bug kbVC152bug kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410 kbVC420bug kbVC500bug kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,1.52,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
