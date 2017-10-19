---
layout: page
title: "Q156589: STL Sample for deque::insert Function"
permalink: /kb/156/Q156589/
---

## Q156589: STL Sample for deque::insert Function

	Article: Q156589
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
	
	The sample code below illustrates how to use the deque::insert, begin, and end
	STL functions in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <deque>
	
	Prototype
	---------
	
	     iterator insert(iterator iter, const T& x = T());
	     void insert(iterator iter, size_type n, const T& x);
	     void insert(iterator iter, const_iterator first,const_iterator last);
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	Each of these functions inserts a sequence specified by the remaining operands
	after the element pointed to by iter in the container. The first member function
	inserts a single element with value x and returns an iterator that points to the
	newly inserted element. The second member function inserts a repetition of n
	elements of value x. The third member function inserts the sequence [first,
	last).
	
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
	  //    insert
	  //    begin
	  //    end
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
	
	  typedef deque<char, allocator<char> >  CHARDEQUE;
	
	  void print_contents (CHARDEQUE  deque);
	
	  void main()
	
	  {
	
	      //create a with 3 A's
	      CHARDEQUE  a(3,'A');
	
	      //create b with 2 B's.
	      CHARDEQUE  b(2,'B');
	
	      //print out the contents
	      print_contents (a);
	      print_contents (b);
	
	      //insert 'X' to the beginning of a
	      a.insert(a.begin(),'X');
	      print_contents (a);
	
	      //insert 'Y' to the end of a
	      a.insert(a.end(),'Y');
	      print_contents (a);
	
	      //inset 3 'Z's to one item before the end of a
	      a.insert(a.end()-1,3,'Z');
	      print_contents (a);
	
	      //insert to the end of a from b
	      a.insert(a.end(),b.begin(),b.end());
	      print_contents (a);
	
	  }
	
	  //function to print the contents of deque
	  void print_contents (CHARDEQUE  deque)
	
	  {
	
	      CHARDEQUE::iterator pdeque;
	
	      cout <<"The output is: ";
	
	      for(pdeque = deque.begin();
	          pdeque != deque.end();
	          pdeque++)
	      {
	          cout << *pdeque <<" " ;
	      }
	          cout<<endl;
	
	  }
	
	Program Output is:
	
	The output is: A A A
	The output is: B B
	The output is: X A A A
	The output is: X A A A Y
	The output is: X A A A Z Z Z Y
	The output is: X A A A Z Z Z Y B B
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample insert begin end
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCNET kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
