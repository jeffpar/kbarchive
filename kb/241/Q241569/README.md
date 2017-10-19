---
layout: page
title: "Q241569: BUG: C2258 and C2252 on in Place Initialization of Static Const"
permalink: /kb/241/Q241569/
---

## Q241569: BUG: C2258 and C2252 on in Place Initialization of Static Const

	Article: Q241569
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC500 kbVC500bug kbVC600 kbVC600bug kbDSupport
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may get the following error message if you try to perform in-place
	initialization of static const integral member data.
	
	  error C2258: illegal pure syntax, must be '= 0'
	  error C2252: 'x' : pure specifier can only be specified for functions
	
	Please refer to the sample in the "More Information Section" for details.
	
	CAUSE
	=====
	
	The compiler does not support in-place initialization of static const integral
	member data as specified in the C++ standard (section 9.2) quoted in the
	following:
	
	4 - A member-declarator can contain a constant-initializer only if it declares a
	static member of integral or enumeration type.
	
	RESOLUTION
	==========
	
	Use one of the following Resolutions:
	
	- Use enum instead of static const int:
	
	  enum{x = 3};
	
	- Instantiate the member outside the class:
	
	  const int A::x=3;
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior:
	
	The following example demonstrates the error.
	
	  //test.cpp
	  // compiler option needed: none
	
	  class A 
	  { 
	  	const static int x = 3; 
	  };
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC500 kbVC500bug kbVC600 kbVC600bug kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
