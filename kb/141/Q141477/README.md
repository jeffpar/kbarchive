---
layout: page
title: "Q141477: FIX: Exception Specification Syntax Handled Incorrectly"
permalink: /kb/141/Q141477/
---

## Q141477: FIX: Exception Specification Syntax Handled Incorrectly

	Article: Q141477
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.2
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC500fix
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling a program that contains a constructor using exception specification
	syntax may cause the compiler to generate the following error messages:
	
	  
	
	  warning C4290: C++ Exception Specification ignored
	
	  error C2143: syntax error : missing ';' before '~'
	  error C2059: syntax error : '<constructor>'
	  error C2238: unexpected token(s) preceding ';'
	
	RESOLUTION
	==========
	
	To work around the problem, add an additional ';' at the end of constructor
	declaration.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /* Compile options needed: none
	     */ 
	
	     class CBug
	     {
	     public:
	       CBug () throw ();  // Adding an additional ';' at the end of this line
	                          // fixes the problem
	       ~CBug () throw ();
	     };
	
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC500fix 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC32bitSearch
	Version           : 4.0 4.1 4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
