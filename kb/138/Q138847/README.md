---
layout: page
title: "Q138847: BUG: C2572 When Define Function Pointer w/ Default Argument"
permalink: /kb/138/Q138847/
---

## Q138847: BUG: C2572 When Define Function Pointer w/ Default Argument

	Article: Q138847
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangCPP kbVC kbVC500bug kbVC600bug
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compile the code shows in the "Sample Code to Reproduce Problem"
	section of this article, Visual C++ reports the following error:
	
	  error C2572: 'member' : redefinition of default parameter : parameter 1
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The error occurs only when a function pointer is a static member of a class, and
	the function pointer type is a function that has a default argument. The error
	is reported for the line where the static member is defined.
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	     /* Compile options needed: none
	     */ 
	
	     typedef void (*function_ptr)( int default_arg = 0 );
	
	     class my_class
	     {
	     public:
	         static function_ptr member;
	     };
	
	     function_ptr my_class::member;  // error will be reported for this line
	   
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbLangCPP kbVC kbVC500bug kbVC600bug 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
