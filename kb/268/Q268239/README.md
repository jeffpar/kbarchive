---
layout: page
title: "Q268239: BUG: C2084 on Overloading Function Templates"
permalink: /kb/268/Q268239/
---

## Q268239: BUG: C2084 on Overloading Function Templates

	Article: Q268239
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC600bug kbDSupport
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
	
	You may receive the following error message if you try to overload a template
	function that has class templates as parameters:
	
	  error C2084: function 'void __cdecl f1(class A<T>,class A<T>)'
	  already has a body
	
	Please refer to the sample code in the "More Information" section for details.
	
	RESOLUTION
	==========
	
	See the workaround in the sample code in the "More Information" section.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample code demonstrates the bug and the workaround:
	
	  //test.cpp
	  // Compiler option needed: none.<BR/>
	  //#define WORKAROUND  //Uncomment this line to work around the bug.
	  template<class T>
	  class A {
	  };
	
	  #ifndef WORKAROUND
	  template<class T>
	  void f1(A<T> a, A<T> b){}
	  #else
	  template<class T1, class T2>
	  void f1(A<T1> a, A<T2> b){}
	  #endif
	  void f1(A<int> a, A<long> b){} //C2084 here. 
	  void f1(A<int> a, A<int> b){}  //Compiles fine.
	  void f1(A<long> a, A<long> b){} //Compiles fine.
	
	  int main()
	  {
	  A<int>  a;
	  A<long>  b;
	  f1(a,b);
	  return 0;
	  }
	
	   
	
	Additional query words: C2084
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC600bug kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	
