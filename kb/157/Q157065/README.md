---
layout: page
title: "Q157065: STL Sample for deque::size and deque::resize Functions"
permalink: /kb/157/Q157065/
---

## Q157065: STL Sample for deque::size and deque::resize Functions

{% raw %}

	Article: Q157065
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
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the deque::size, deque::resize,
	deque::max_size, deque::end, and deque::begin STL functions in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <deque>
	
	Prototype
	---------
	
	     size_type size() const;
	     void resize(size_type n, T x = T());
	     size_type max_size() const;
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The member function size returns the length of the controlled sequence.
	
	The member function resize ensures that size() henceforth returns n. If it must
	make the controlled sequence longer, it appends elements with value x. If no
	value is supplied, the default value depends upon the type. For example, if it
	is a deque of chars, the default is a blank. If it is a deque of ints, the
	default is zero.
	
	The member function max_size returns the length of the longest sequence that the
	object can control.
	
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
	  //    size
	  //    resize
	  //    max_size
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
	
	      //create a  with  A, B, C and D
	      CHARDEQUE  a;
	      a.push_back('A');
	      a.push_back('B');
	      a.push_back('C');
	      a.push_back('D');
	
	      //print out the contents
	
	      print_contents (a,"a");
	      cout <<"max_size of a is " <<a.max_size() <<endl;
	      cout <<"size of a is " <<a.size() <<endl;
	
	      //let us increase the size to 10
	      // and set the new elements to be 'X'
	      a.resize(10,'X');
	      print_contents (a,"a");
	      cout <<"size of a is " <<a.size() <<endl;
	
	      //let us resize it to 5
	
	      a.resize(5);
	      print_contents (a,"a");
	      cout <<"size of a is " <<a.size() <<endl;
	      cout <<"max_size of a is still " <<a.max_size() <<endl;
	
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
	
	The contents of a : A B C D
	max_size of a is 4294967295
	size of a is 4
	The contents of a : A B C D X X X X X X
	size of a is 10
	The contents of a : A B C D X
	size of a is 5
	max_size of a is still 4294967295
	
	NOTE: With Visual C++ 4.2, the max_size value is misleading because a sequence
	this long cannot be created. See the following Microsoft Knowledge Base article
	for further information:
	
	  Q160017 BUG: Access Violation Using deque class
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample deque size resize max_size begin end kbSTL kbTemplate
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
