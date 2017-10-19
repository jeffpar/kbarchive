---
layout: page
title: "Q133071: FIX: Exception Specification in Template causes C2961 Error"
permalink: /kb/133/Q133071/
---

## Q133071: FIX: Exception Specification in Template causes C2961 Error

	Article: Q133071
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2,4.0,4.1
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbtool kbLangCPP kbVC kbVC500fix
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an exception specification in a class or function template, the
	following error occurs:
	
	  error C2961: syntax error : 'throw' : unexpected token in template
	  declaration
	
	RESOLUTION
	==========
	
	Remove the exception specification from the function declaration and definition.
	By design, it is not supported.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	The use of exception specifications is not supported in this version of
	Microsoft C++. However, you would expect the compiler to generate the following
	warning instead of an error:
	
	  warning C4290: C++ Exception Specification ignored
	
	This level 4 warning is generated as expected when using an exception
	specification in a non-templated class or function.
	
	Sample Code to Generate Error C2961 and Demonstrate Problem
	-----------------------------------------------------------
	
	   /* Compile options needed: (none)
	     */ 
	     template <class T>
	     class C1 {
	     public:
	          C1();
	          void fn() throw();   // C2961 error - to work around, remove
	          "throw()"
	     };
	
	     template <class T>
	     void C1<T>::fn() throw()  // C2961 error - to work around, remove
	     "throw()"
	     {}
	
	Sample Code to Generate Warning C4290 and Demonstrate Resolution
	----------------------------------------------------------------
	
	     /* Compile options needed: /W4
	     */ 
	     class C2 {
	     public:
	          C2();
	          void fn() throw(); // compiler correctly generates C4290 warning
	     };
	
	     void C2::fn() throw()   // compiler correctly generates C4290 warning
	     {}
	
	Additional query words: 9.0 9.00 9.1 9.10 9.2 9.20
	
	======================================================================
	Keywords          : kbcode kberrmsg kbtool kbLangCPP kbVC kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :2.0,2.1,2.2,4.0,4.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
