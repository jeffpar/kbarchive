---
layout: page
title: "Q158091: STL Sample for the list::list Functions"
permalink: /kb/158/Q158091/
---

## Q158091: STL Sample for the list::list Functions

	Article: Q158091
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600 kbDSupport
	Last Modified: 04-MAY-2002
	
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
	
	The sample code below illustrates how to use the list::list STL functions in
	Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <list>
	
	Prototype
	
	     explicit list(const A& al = A());
	     explicit list(size_type n, const T& v = T(), const A& al = A());
	     list(const list& x);
	     list(const_iterator first, const_iterator last, const A& al = A());
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The first constructor specifies an empty initial controlled sequence. The second
	constructor specifies a repetition of n elements of value x. The third
	constructor specifies a copy of the sequence controlled by x. The last
	constructor specifies the sequence [first, last). All constructors store the
	allocator object al, or for the copy constructor, x.get_allocator(), in
	allocator and initialize the controlled sequence.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: -GX
	  // 
	  // list.cpp : demonstrates the different constructors for list<T>
	  // 
	  // Functions:
	  // 
	  //    list::list
	  // 
	  // Written by Andrew Bradnan
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  #include <list>
	  #include <string>
	  #include <iostream>
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  typedef list<string, allocator<string> > LISTSTR;
	
	  // Try each of the four constructors
	  void main()
	  {
	      LISTSTR::iterator i;
	      LISTSTR test;                   // default constructor
	      test.insert(test.end(), "one");
	      test.insert(test.end(), "two");
	      LISTSTR test2(test);            // construct from another list
	      LISTSTR test3(3, "three");      // add several <T>'s
	      LISTSTR test4(++test3.begin(),  // add part of another list
	               test3.end());
	      // Print them all out
	      // one two
	      for (i =  test.begin(); i != test.end(); ++i)
	          cout << *i << " ";
	      cout << endl;
	      // one two
	      for (i =  test2.begin(); i != test2.end(); ++i)
	          cout << *i << " ";
	      cout << endl;
	      // three three three
	      for (i =  test3.begin(); i != test3.end(); ++i)
	          cout << *i << " ";
	      cout << endl;
	      // three three
	      for (i =  test4.begin(); i != test4.end(); ++i)
	          cout << *i << " ";
	      cout << endl;
	  }
	
	Program Output is:
	
	one two
	one two
	three three three
	three three
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample kbdss list::list, list::insert
	
	======================================================================
	Keywords          : kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
