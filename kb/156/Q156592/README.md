---
layout: page
title: "Q156592: STL Sample for deque::rbegin and deque::rend Functions"
permalink: kb/156/Q156592/
---

## Q156592: STL Sample for deque::rbegin and deque::rend Functions

	Article: Q156592
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
	
	The sample code below illustrates how to use the deque::rbegin, deque::rend, and
	deque::push_back STL functions in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     < deque>
	
	Prototype
	---------
	
	     const_reverse_iterator rbegin() const;
	     reverse_iterator rbegin();
	
	     const_reverse_iterator rend() const;
	     reverse_iterator rend();
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The rbegin member function returns a reverse iterator that points just beyond the
	end of the controlled sequence. Therefore, it designates the beginning of the
	reverse sequence.
	
	The rend member function returns a reverse iterator that points at the first
	element of the sequence, or just beyond the end of an empty sequence. Therefore,
	it designates the end of the reverse sequence.
	
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
	  //    rbegin
	  //    rend
	  //    push_back
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
	
	      // Now print the contents in reverse order using reverse_iterator
	      // and functions rbegin() and rend()
	
	      INTDEQUE::reverse_iterator rpi;
	
	      for(rpi= A.rbegin();  rpi !=A.rend(); rpi++)
	      {
	          cout << *rpi <<" " ;
	      }
	          cout<<endl;
	
	  }
	
	Program Output is:
	
	5 4 3 2 1
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample rbegin rend reverse_iterator push_back
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCNET kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
