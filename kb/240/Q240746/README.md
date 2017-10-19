---
layout: page
title: "Q240746: FIX: Error Due to Class Member Function's Missing Argument List"
permalink: /kb/240/Q240746/
---

## Q240746: FIX: Error Due to Class Member Function's Missing Argument List

	Article: Q240746
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbLangCPP kbVC kbVC600 kbVC600bug kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to compile a member function of a class with a missing argument
	list, the compiler displays the following error:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'msc1.cpp', line 1786)
	
	The line number is 1794 if Visual Studio 6.0 Service Pack 3 installed.
	
	CAUSE
	=====
	
	The compiler fails to correctly parse the code and is unable to generate a
	proper syntax error message.
	
	RESOLUTION
	==========
	
	Make sure that you have provided an argument list for all the class member
	functions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	The following code demonstrates the problem:
	
	  //Compile options : None.
	
	  class CMyClass
	  {
	  	public:
	  	CMyClass(){ }
	  	int DoNothing();
	  };
	
	  // Missing argument list for the member function.
	
	  int CMyClass::DoNothing
	  {
	  }
	
	Additional query words: Internal Compiler Error ICE C1001
	
	======================================================================
	Keywords          : kbCompiler kbLangCPP kbVC kbVC600 kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
