---
layout: page
title: "Q240869: BUG: C2667 and C2668 on Partial Ordering of Function Templates"
permalink: kb/240/Q240869/
---

## Q240869: BUG: C2667 and C2668 on Partial Ordering of Function Templates

	Article: Q240869
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbLangCPP kbVC kbVC500 kbVC500bug kbVC600 kbVC600bug
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may get the following error message if you try to use partial ordering of
	template functions:
	
	  error C2667: 'f' : none of 3 overload have a best conversion error C2668: 'f'
	  : ambiguous call to overloaded function
	
	Please refer to the sample code in the "More Information" section for details.
	
	CAUSE
	=====
	
	The compiler does not support partial ordering of template functions as
	specified in the C++ Standard, section 14.5.5.2, which is quoted below:
	
	  1 - If a function template is overloaded, the use of a function template
	  specialization might be ambiguous because template argument deduction may
	  associate the function template specialization with more than one function
	  template declaration. Partial ordering of overloaded function template
	  declarations is used in the following contexts to select the function
	  template to which a function template specialization refers:
	
	- during overload resolution for a call to a function template specialization;
	
	- when the address of a function template specialization is taken;
	
	- when a placement operator delete that is a template function specialization
	  is selected to match a placement operator new;
	
	- when a friend function declaration, an explicit instantiation or an explicit
	  specialization refers to a function template specialization
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample code demonstrates the error:
	
	  //test.cpp
	  // compiler option needed: none
	
	  template<class T> void f(T);
	  template<class T> void f(T*);
	  template<class T> void f(const T*);
	
	  void m() {
	  	const int *p;
	  	f(p);  //   f(const   T*)  is more specialized 
	                  //   than  f(T)  or  f(T*)
	  }
	
	REFERENCES
	==========
	
	Please refer to the C++ Standard, section 14.5.5.2, for more information.
	
	Additional query words: 2667 2668
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbLangCPP kbVC kbVC500 kbVC500bug kbVC600 kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :5.0,6.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
