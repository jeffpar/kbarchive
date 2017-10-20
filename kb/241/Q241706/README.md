---
layout: page
title: "Q241706: BUG: Compiler Error C2143 on Function-Try-Block Syntax"
permalink: /kb/241/Q241706/
---

## Q241706: BUG: Compiler Error C2143 on Function-Try-Block Syntax

{% raw %}

	Article: Q241706
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbLangCPP kbVC600 kbVC600bug
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error messages may appear if you try to use the function-try-block
	syntax.
	
	  error C2143: syntax error : missing ';' before 'try'
	  error C2143: syntax error : missing ';' before 'try'
	  error C2065: 'ii' : undeclared identifier
	  error C2143: syntax error : missing ';' before 'try'
	  error C2448: 'Unknown' : function-style initializer appears to be a function
	  definition
	  error C2143: syntax error : missing ';' before 'catch'
	  error C2143: syntax error : missing ';' before '{'
	  error C2447: missing function header (old-style formal list?)
	
	CAUSE
	=====
	
	The compiler does not support the function-try-block syntax as specified in the
	C++ Standard (section 15) quoted below:
	
	  -3- A function-try-block associates a handler-seq with the ctor-initializer,
	  if present, and the function-body. An exception thrown during the execution
	  of the initializer expressions in the ctor-initializer or during the
	  execution of the function-body transfers control to a handler in a
	  function-try-block in the same way as an exception thrown during the
	  execution of a try-block transfers control to other handler.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following code example demonstrates the error:
	
	  //test.cpp
	  // compiler option needed: /GX
	  int f(int);
	  class C {
	  	int i;
	  public:
	  	C(int);
	  };
	
	  C::C(int ii)
	  try
	  : i(f(ii))
	  {
	  	//  constructor function body
	  }
	  catch (...)
	  {
	  	//  handles exceptions thrown from the ctor-initializer
	  	//  and from the constructor function body
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbLangCPP kbVC600 kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
