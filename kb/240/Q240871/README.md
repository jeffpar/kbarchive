---
layout: page
title: "Q240871: BUG: Explicitly Specified Template Functions Not Overloaded"
permalink: kb/240/Q240871/
---

## Q240871: BUG: Explicitly Specified Template Functions Not Overloaded

	Article: Q240871
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbtemplate kbCompiler kbCPPonly kbLangCPP kbSTL kbVC kbVC500 kbVC500bug kbVC600 kbVC600
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
	
	If all the template parameters are not used in function arguments or return type
	of a template function, the template functions are not overloaded correctly.
	
	Please refer to the sample in the "More Information" Section for details.
	
	CAUSE
	=====
	
	The bug is the result of the way the compiler decorates template function names.
	Name Decoration uses the arguments and return type and doesn't use the
	explicitly specified template argument type. Therefore, all three template
	function instantiations receive the same decorated name, as seen in the sample
	code the "More Information" section.
	
	RESOLUTION
	==========
	
	Use dummy arguments to the function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Please refer to the C++ Standard, section 14.8.1, for information on explicit
	template argument specification.
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample code demonstrates the problem:
	
	  #include<iostream>
	  //#define WORKAROUND
	  #ifdef WORKAROUND
	  template <class T>
	  void f(T dummy = 0)
	       {
	       std::cout <<typeid(T).name() <<std::endl;
	       }
	  #else
	  template <class T>
	  void f(void)
	       {
	       std::cout <<typeid(T).name() <<std::endl;
	       }
	  #endif
	
	  int main(void)
	       {
	       f<bool>();
	       f<char>();
	       f<int>();
	       return 0;
	       }
	
	  Output :
	  int
	  int
	  int
	
	Additional query words: STL
	
	======================================================================
	Keywords          : kbtemplate kbCompiler kbCPPonly kbLangCPP kbSTL kbVC kbVC500 kbVC500bug kbVC600 kbVC600bug kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
