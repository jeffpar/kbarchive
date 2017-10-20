---
layout: page
title: "Q93401: PRB: C2279: Braces Not Valid in Function Default Argument List"
permalink: /kb/093/Q93401/
---

## Q93401: PRB: C2279: Braces Not Valid in Function Default Argument List

{% raw %}

	Article: Q93401
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC410 kb
	Last Modified: 17-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1, 4.2, 5.0, 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Microsoft C/C++ compiles an application that specifies a structure in the
	default arguments for a function, the compilation fails with the following error
	messages:
	
	  error C2059: syntax error : '{'
	  error C2279: cannot use braces to initialize default arguments
	
	If you are using Visual C++ .NET compiler, the following compiler errors will be
	generated instead of the above two compiler errors.
	
	  error C2143: syntax error : missing ')' before '{'
	  error C2059: syntax error : ')'
	
	CAUSE
	=====
	
	According to the C++ grammar, the default value for an argument must be an
	expression. An initializer list, such as that used to initialize a structure, is
	not an expression.
	
	RESOLUTION
	==========
	
	Define a constructor to perform the required initialization.
	
	MORE INFORMATION
	================
	
	The first code example demonstrates the errors listed above. The second code
	example demonstrates the correct method to initialize the structure.
	
	Code Sample 1
	-------------
	
	  /*
	   * Compile options needed: /c
	   */ 
	
	  struct ag_type
	  {
	     int a;
	     float b;
	  };
	
	  void func(ag_type arg = {5, 7.0});
	
	Code Sample 2
	-------------
	
	  /*
	   * Compile options needed: /c
	   */ 
	
	  struct ag_type
	  {
	     int a;
	     float b;
	     ag_type(int aa, float bb) : a(aa), b(bb) {}
	  };
	
	  void func(ag_type arg = ag_type(5, 7.0));
	
	Additional query words: 8.00 8.00c 9.00 9.10
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbVC410 kbVC420 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC152 kbVCNET kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
