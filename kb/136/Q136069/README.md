---
layout: page
title: "Q136069: FIX: Visual C++ Build Process Won't Return If Missing ')'"
permalink: /kb/136/Q136069/
---

## Q136069: FIX: Visual C++ Build Process Won't Return If Missing ')'

	Article: Q136069
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.10,2.20
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 02-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.10, 2.20 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the left parenthesis ')' is missing from the sample code listed below,
	which uses template, the Microsoft Visual C++ version 2.x build process will not
	return. However, you can choose Stop Build from the Project menu to cause the
	process to terminate with the following messages:
	
	  cl.exe terminated at user request.
	  Tool execution cancelled by user.
	  Test.obj - 0 error(s), 0 warning(s)
	
	RESOLUTION
	==========
	
	To work around this problem, add back the missing parenthesis.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This bug was corrected in Microsoft Visual C++, 32-bit Edition,
	version 4.0.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	  /* No special compile options needed
	  */ 
	
	  template <class T> class CTest
	  {
	  public:
	     method();
	  };
	
	  template <class T> CTest<T>::method(() // Note the extra '(' here. The
	                                         // compile on will never complete.
	  {
	  }
	
	
	Additional query words: 2.00 2.10 2.20
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbVC200
	Version           : :2.0,2.10,2.20
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
