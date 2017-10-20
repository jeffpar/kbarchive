---
layout: page
title: "Q275674: BUG: C2955 Error When You Use Template Name as Function Argument"
permalink: /kb/275/Q275674/
---

## Q275674: BUG: C2955 Error When You Use Template Name as Function Argument

{% raw %}

	Article: Q275674
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbLangCPP kbVC600bug kbDSupport kbGrpDSVCCompiler
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
	
	You may receive the following error message if you try to use a template name as
	a function argument:
	
	  error C2955: 'S' : use of class template requires template argument List
	
	Please refer to the sample code in the "More Information" section for details.
	
	RESOLUTION
	==========
	
	Use a different name for the template class or the function argument.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample code demonstrates the bug:
	
	  // Test.cpp
	  // Compiler option needed: none
	
	  template <class T>
	  struct S { };
	
	  int hoo (int *S);
	
	Additional query words: C2955
	
	======================================================================
	Keywords          : kbCompiler kbLangCPP kbVC600bug kbDSupport kbGrpDSVCCompiler 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
