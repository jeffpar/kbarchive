---
layout: page
title: "Q156591: STL Sample for deque::begin and deque::end Functions"
permalink: /kb/156/Q156591/
---

## Q156591: STL Sample for deque::begin and deque::end Functions

	Article: Q156591
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
	
	The sample code below illustrates how to use the deque::begin and deque::end STL
	functions in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     < deque>
	
	Prototype
	---------
	
	     const_iterator begin() const;
	     iterator begin();
	
	     const_iterator end() const;
	     iterator end();
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The begin member function returns a random-access iterator that points at the
	first element of the sequence, or just beyond the end of an empty sequence.
	
	The end member function returns a random-access iterator that points just beyond
	the end of the sequence.
	
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
	  //    begin()
	  //    end()
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
	
	  void main()
	
	  {
	
	      // Create A and fill it with elements 1,2,3,4 and 5
	      // using push_back function
	
	      INTDEQUE  A;
	      A.push_back(1);
	      A.push_back(2);
	      A.push_back(3);
	      A.push_back(4);
	      A.push_back(5);
	
	      // Print the contents of A using iterator
	      // and functions begin() and end()
	
	       INTDEQUE::iterator pi;
	
	      for(pi= A.begin();  pi !=A.end(); pi++)
	      {
	          cout << *pi <<" " ;
	      }
	          cout<<endl;
	
	  }
	
	Program Output is:
	
	1 2 3 4 5
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample begin end iterator
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCNET kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
