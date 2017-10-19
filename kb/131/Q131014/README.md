---
layout: page
title: "Q131014: How to Instantiate a Templated Function"
permalink: /kb/131/Q131014/
---

## Q131014: How to Instantiate a Templated Function

	Article: Q131014
	Product(s): Microsoft C Compiler
	Version(s): 2.00 2.10 4.00
	Operating System(s): 
	Keyword(s): kbcode kbCompiler kbCPPonly kbVC
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is no built-in way to create an explicit instantiation of a templated
	function. Normally, an instantiation is created when the function is called the
	first time with a specific type. Subsequent calls to the function with the same
	type use the same piece of the code generated before. However, if you want to
	instantiate the function without actually calling it, you must use one of the
	methods in this article.
	
	MORE INFORMATION
	================
	
	The best method to use with function templates is to place the function
	definition in a header file, and include that header file in all of the source
	files.
	
	If this is not an option then try one of these alternatives:
	
	- In the source file where the function is defined, explicitly reference the
	  function by taking the address of the function.
	
	-or-
	
	- In the source file where the function is defined, add a dummy function that
	  makes a call to the templated function. The dummy function itself does not
	  need to be called.
	
	NOTE: With both of these alternative methods, a prototype still needs to be
	provided for all source files that might call the templated function.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  /********** Source File One **********/ 
	  void func1(void);
	  template < class T> T SwapTemplate(T Source) {
	     return Source;
	  }
	  void Dummy(void) {                            // Option One
	     char a = 'a', b;
	     b = SwapTemplate(a);
	  }
	
	  void main() {
	     int (*pfunc)(int) = SwapTemplate;     // Option Two
	     func1();
	  }
	
	  /********** Source File Two **********/ 
	
	  template < class T> T SwapTemplate(T Source); // Prototype
	
	  void func1(void) {
	     int  a = 5, b;
	     char c = 'c', d;
	     b = SwapTemplate( a );
	     d = SwapTemplate( c );
	  }
	
	Additional query words: kbinf 9.00 9.0 9.1 9.10 2.00 2.10 4.00
	
	======================================================================
	Keywords          : kbcode kbCompiler kbCPPonly kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 2.00 2.10 4.00
	
	=============================================================================
	
