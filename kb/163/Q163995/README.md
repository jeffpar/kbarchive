---
layout: page
title: "Q163995: FIX: C2989 Declaring Template Class in a Namespace"
permalink: /kb/163/Q163995/
---

## Q163995: FIX: C2989 Declaring Template Class in a Namespace

	Article: Q163995
	Product(s): Microsoft C Compiler
	Version(s): 4.2
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbLangCPP kbVC kbVC500fix kbHWx86
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A template class is defined inside a namespace that has the same name as a
	non-template class declared at global scope. When you compile this construct,
	the following error message appears:
	
	  
	
	  error C2989: '<classname>' : template class has already been defined as
	  a non-template class
	
	RESOLUTION
	==========
	
	There are 3 ways to work around this problem.
	
	1. Change the name of one of the classes involved. If this is possible, it may
	  be the best solution because having two different classes with the same name
	  could lead to confusion.
	
	2. Move the definition of the non-template class so that it appears after the
	  definition of the template class. See sample code below.
	
	3. Move the definition of the non-template class into a namespace (other than
	  the one the template class is defined in).
	
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
	   class test {}; // Move this line below namespace tester for resolution #2.
	   namespace tester {
	       template <class T> class test {};
	   }
	
	Additional query words: C2989 template namespace
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbLangCPP kbVC kbVC500fix kbHWx86 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
