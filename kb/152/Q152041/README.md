---
layout: page
title: "Q152041: FIX: C1001 Error in 'msc1.cpp' on Template Function Parameter"
permalink: kb/152/Q152041/
---

## Q152041: FIX: C1001 Error in 'msc1.cpp' on Template Function Parameter

	Article: Q152041
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.2
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbLangCPP kbVC kbVC500fix
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error is generated for template function with a parameter of
	scoped template member type:
	
	  
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	   (compiler file 'msc1.cpp', line 899)
	   Please choose the Technical Support command on the Visual C++
	   Help menu, or open the Technical Support help file for more information
	  Error executing cl.exe.
	
	Under Visual C++ 4.1, the error will occur at line 1090 instead of line 899.
	Under Visual C++ 4.2, the error will occur at line 1089. The sample code in the
	More Information section of this article demonstrates the presence of this
	error.
	
	CAUSE
	=====
	
	The reason for this error is the second parameter, Container::typA, in the
	template function funcA in the sample code. The compiler is unable to
	distinguish the scoped template parameter.
	
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
	
	     template<class Container>
	     void funcA(Container * , Container::typA *apTarget) { }
	
	Additional query words: kbVC400bug template
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbLangCPP kbVC kbVC500fix 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC32bitSearch
	Version           : 4.0 4.1 4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
