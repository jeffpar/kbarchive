---
layout: page
title: "Q156898: STL Sample for deque::assign and deque::swap Functions"
permalink: kb/156/Q156898/
---

## Q156898: STL Sample for deque::assign and deque::swap Functions

	Article: Q156898
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbVC420 kbVC500 kbVC600 kbDSupport
	Last Modified: 27-MAR-2002
	
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
	
	The sample code below illustrates how to use the deque::assign, deque::swap,
	deque::end, and deque::begin STL functions in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     < deque>
	
	Prototype
	---------
	
	     void assign(const_iterator first, const_iterator last);
	     void assign(size_type n, const T& x = T());
	     void swap(deque& dq);
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The first assign member function replaces the sequence controlled by *this with
	the sequence [first, last). The second assign member function replaces the
	sequence controlled by *this with a repetition of n elements of value x.
	
	The swap member function swaps the contents between *this and dq.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: -GX
	  // 
	  // deque.cpp :
	  // 
	  // Functions:
	  // 
	  //    assign
	  //    swap
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
	
	  void print_contents (CHARDEQUE  deque, char*);
	
	  void main()
	
	  {
	
	      //create a  with  3 A's
	      CHARDEQUE  a(3,'A');
	
	      //create b with 4 B's.
	      CHARDEQUE  b(4,'B');
	
	      //print out the contents
	      print_contents (a,"a");
	      print_contents (b,"b");
	
	      //swap a and b
	      a.swap(b);
	      print_contents (a,"a");
	      print_contents (b,"b");
	
	      // let us swap it back
	          a.swap(b);
	      print_contents (a,"a");
	      print_contents (b,"b");
	
	      //assign the contents of b to a
	      a.assign(b.begin(),b.end());
	      print_contents (a,"a");
	
	      //assign the first two items of b to a
	      a.assign(b.begin(),b.begin()+2);
	      print_contents (a,"a");
	
	      //assign 3 'Z's to a
	      a.assign(3,'Z');
	      print_contents (a,"a");
	
	      }
	
	  //function to print the contents of deque
	  void print_contents (CHARDEQUE  deque, char *name)
	
	  {
	
	      CHARDEQUE::iterator pdeque;
	
	      cout <<"The contents of "<< name <<" : ";
	
	          for(pdeque = deque.begin();
	          pdeque != deque.end();
	          pdeque++)
	      {
	          cout << *pdeque <<" " ;
	      }
	          cout<<endl;
	
	  }
	
	Program Output is:
	
	The contents of a : A A A
	The contents of b : B B B B
	The contents of a : B B B B
	The contents of b : A A A
	The contents of a : A A A
	The contents of b : B B B B
	The contents of a : B B B B
	The contents of a : B B
	The contents of a : Z Z Z
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample assign swap end begin kbSTL kbTemplate
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
