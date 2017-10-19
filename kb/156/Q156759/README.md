---
layout: page
title: "Q156759: STL Sample for deque::push_back and deque::pop_back Functions"
permalink: /kb/156/Q156759/
---

## Q156759: STL Sample for deque::push_back and deque::pop_back Functions

	Article: Q156759
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbVC420 kbVC500 kbVC600 kbDSupport
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the deque::push_back and
	deque::pop_back STL functions in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <deque>
	
	Prototype
	---------
	
	     void push_back(const T& x);
	     void pop_back();
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The push_back function inserts an element with value x at the end of the
	container deque. The pop_back function removes the last element of the container
	deque, which must be non-empty.
	
	Sample Code
	-----------
	
	NOTE: In the first line of the sample code section, /GX is equivalent to /EHsc in
	VC++ .NET and is set by default.
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: -GX
	  // 
	  // deque.cpp :
	  // 
	  // Functions:
	  // 
	  //    deque::push_back
	  // 
	  //    deque::pop_back
	  // 
	  // Written by Bobby Mattappally
	  // of Microsoft Product Support Services,
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  /* Compile options needed:-GX
	  */ 
	
	  #include <iostream>
	  #include <deque>
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  typedef deque<int, allocator<int> >  INTDEQUE;
	
	  void printcontents (INTDEQUE  deque);
	
	  void main()
	
	  {
	
	      INTDEQUE  dequetest;
	
	      dequetest.push_back(1);
	      dequetest.push_back(2);
	      dequetest.push_back(3);
	      printcontents (dequetest);
	      dequetest.pop_back();
	      printcontents (dequetest);
	      dequetest.pop_back();
	      printcontents (dequetest);
	
	     }
	
	     //function to print the contents of deque
	     void printcontents (INTDEQUE  deque)
	     {
	         INTDEQUE::iterator pdeque;
	
	         cout <<"The output is:"<<endl;
	
	             for(pdeque = deque.begin();
	             pdeque != deque.end();
	             pdeque++)
	         {
	             cout << *pdeque <<endl ;
	         }
	
	     }
	
	Program output is:
	
	The output is:
	1
	2
	3
	The output is:
	1
	2
	The output is:
	1
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample push_back pop_back deque
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCNET kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
