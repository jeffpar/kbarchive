---
layout: page
title: "Q156808: INFO: STL Sample for the new operator Function"
permalink: /kb/156/Q156808/
---

## Q156808: INFO: STL Sample for the new operator Function

{% raw %}

	Article: Q156808
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbVC420 kbVC500 kbVC600 kbDSupport
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the new operator from the Standard
	Library in Visual C++.
	
	MORE INFORMATION
	================
	
	The new operator will return NULL or throw an exception on failure.
	
	Required Header
	---------------
	
	     <new>
	
	Prototype
	---------
	
	     void *operator new(size_t n)
	     void *operator new(size_t n, const nothrow&)
	     void *operator new[](size_t n);
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The first operator new will attempt to allocate memory and if it fails, will
	throw an exception.
	
	The second operator new accepts a second parameter of type nothrow. This
	parameter indicates that if the allocation fails, it should return NULL and not
	throw an exception.
	
	The third operator new will allocate memory for an array of that type and if it
	fails, will throw an exception.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // <filename> :  newop.cpp
	  // 
	  // Functions:
	  // 
	  //    void *operator new(size_t n)
	  // 
	  //    void *operator new(size_t n, const nothrow&)
	  // 
	  //    void *operator new[](size_t n);
	  // 
	  // Written by Linda Koontz
	  // of Microsoft Product Support Services,
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  /* Compile options needed: /GX
	  */ 
	
	  #include <new>
	  #include <iostream>
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  class BigClass {
	  public:
	      BigClass() {};
	      ~BigClass(){}
	          double BigArray[99999999];
	  };
	
	  void main()
	  {
	      try {
	      BigClass * p = new BigClass;
	      }
	      catch( bad_alloc a) {
	          const char * temp = a.what();
	          cout << temp << endl;
	          cout << "Threw a bad_alloc exception" << endl;
	      }
	      BigClass * q = new(nothrow) BigClass;
	      if ( q == NULL )
	          cout << "Returned a NULL pointer" << endl;
	
	      try {
	      BigClass * r = new BigClass[3];
	      }
	      catch( bad_alloc a) {
	          const char * temp = a.what();
	          cout << temp << endl;
	          cout << "Threw a bad_alloc exception" << endl;
	      }
	  }
	
	Program Output is:
	
	bad allocation
	Threw a bad_alloc exception
	Returned a NULL pointer
	bad allocation
	Threw a bad_alloc exception
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	Query on [ASCII 147]operator new,[ASCII 148] or look in Help for the <new>
	header file.
	
	NOTE: The Online Help for the new header file lists the following prototypes for
	the new operators demonstrated in this article:
	
	      void *operator new(size_t n) throw(bad_alloc);
	
	      void *operator new(size_t n, const nothrow&) throw();
	
	      void *operator new[](size_t n) throw(bad_alloc);
	
	The throw() following the prototype is an exception specification that is not
	implemented in Visual C++ version 4.2. This is noted in the Online Help:
	
	  Microsoft C++ does not support the function exception
	  specification mechanism, as described in section 15.4 of the
	  ANSI C++ draft.
	
	An exception-specification specifies the type of exceptions a function can throw.
	For example,
	
	     void Func() throw (ProblemOne, ProblemTwo) {}
	
	is equivalent to:
	
	      void Func() {
	      {
	      try {}
	      catch (ProblemOne) {}
	      catch (ProblemTwo) {}
	      catch (...) { unexpected(); }
	      }
	
	Additional query words: STL STLSample new
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
