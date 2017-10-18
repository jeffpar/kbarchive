---
layout: page
title: "Q150378: FIX: C1001 if No Template Types in Template Func Arg List"
permalink: kb/150/Q150378/
---

## Q150378: FIX: C1001 if No Template Types in Template Func Arg List

	Article: Q150378
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.2
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC500fix
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a function template is defined without one of the types in the template
	parameter list in its function argument list, the Visual C++ compiler issues the
	following error:
	
	  
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	      (compiler file 'msc1.cpp', line 1090)
	
	RESOLUTION
	==========
	
	The argument list of a function template needs at least one argument using a
	type specified in the template parameter list. This is a requirement of the
	Visual C++ language.
	
	
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
	     // The function "func" should use T or some variant of T in
	     // its argument list. The following code produces the C1001 error.
	     struct myclass {};
	     template <class T> T* func(int p) { return 0; }
	     void main(){
	       myclass *x = func(0);
	     }
	
	Additional query words: kbVC400bug 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 4.0 4.1 4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
