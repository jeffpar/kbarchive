---
layout: page
title: "Q116486: FIX: Compiler May Generate Invalid Errors for Local Classes"
permalink: /kb/116/Q116486/
---

## Q116486: FIX: Compiler May Generate Invalid Errors for Local Classes

	Article: Q116486
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVCkbbuglist kbfixlist
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler may incorrectly generate the following error messages when
	compiling code that declares a local class that derives virtually from another
	class:
	
	  C2517: 'identifier' : right of '::' is undefined
	  C2270: 'identifier' : modifiers not allowed on nonmember functions
	  C2561: 'identifier' : function must return a value
	
	Under Visual C++ version 2.0, the following errors are generated:
	
	  C2653: 'identifier' : is not a class name
	  C2561: 'identifier' : function must return a value
	
	You can use the sample code in the "MORE INFORMATION" section, below, to
	illustrate this problem.
	
	RESOLUTION
	==========
	
	To avoid the error messages, either do not derive the local class virtually or
	do not declare both the parent and the derived class as local classes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	     void main()
	     {
	         class B { public: int bi; };             // Class local to main
	         class D : virtual public B { int di; };      // Class derived from
	                                                  // Local class B
	         D d;
	     }
	
	Additional query words: 8.00 8.00c 9.00 1.00 1.50 2.00
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
