---
layout: page
title: "Q140188: FIX: C1001 or C2434: Using Templates in Default Arguments"
permalink: /kb/140/Q140188/
---

## Q140188: FIX: C1001 or C2434: Using Templates in Default Arguments

	Article: Q140188
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC500bug kbVC600bug kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler generates either an internal compiler error C1001 or a C2434 error
	when using the Minimal Rebuild option with code that contains:
	
	- Classes that contain member functions that have default arguments of type
	  template class or member of template class.
	
	- A Template class that contains member functions that have non trivial default
	  arguments (arguments that are not simple constants).
	
	Even though the code is correct, the compiler generates one of the following two
	errors:
	
	  fatal error C1001: INTERNAL COMPILER ERROR (compiler file 'msc1.cpp', line
	  899)
	
	  -or-
	
	  error C2434: cannot convert default argument from 'type1' to 'type2'
	
	CAUSE
	=====
	
	The error occurs when processing the non-trivial default argument of a member
	function of a class that requires instantiating a template class for the first
	time.
	
	The error occurs when the compiler is forced to instantiate a template class for
	the first time in a default-argument expression because it needs to record
	information about the class for Minimal Rebuild purposes.
	
	One function is destroying data required by a function that is further down the
	call stack. The compiler generates a syntax error depending on how it interprets
	the destroyed data. If the compiler cannot make sense of the destroyed data, it
	will generate an Internal Compiler Error C1001.
	
	Depending on the code, the errors C1001 or C2434 may only occur when using one or
	more of these compiler options:
	
	  /Gm  Enable Minimal Rebuild
	  /GX  Enable Exception Handling
	  /Zi  Create CodeView type Debug Information in a PDB file
	
	RESOLUTION
	==========
	
	- Re-order the code so that the first instantiation of the template class does
	  not occur in a default-argument expression. Make sure you have provided
	  definitions for all the member functions of the class template. See the "More
	  Information" section for an example.
	
	-or-
	
	- Turn off the Minimal Rebuild (-Gm) option. To do this:
	
	  1. On the Build menu, click Settings.
	
	  2. Select the Debug Version of the project.
	
	  3. Click the C/C++ tab.
	
	  4. Select Customize from the Category list.
	
	  5. Clear the Enable Minimal Rebuild option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates the problem and generates the incorrect
	error C2434. The workaround in the comment below is to explicitly instantiate
	the template class (X<int>) before using it in a default- argument
	expression.
	
	Sample Code
	-----------
	
	  /* Compile options needed: NONE
	  */ 
	  const int flag = 0;
	
	  template<class T> struct X {
	     void Xmf(int = flag) {}
	     static int m_data;
	  };
	
	  template<class T> int X<T>::m_data = 1;
	
	  //  Workaround: uncomment this explicit instantiation:
	  //  template struct X<int> ;
	
	  struct Y {
	     void Ymf(int = X<int>::m_data); // this line generates a C2434
	  };
	
	  void main(void) {}
	
	Additional query words: kbVC400bug 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
