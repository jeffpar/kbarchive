---
layout: page
title: "Q158085: STL Sample for the list::assign Functions"
permalink: kb/158/Q158085/
---

## Q158085: STL Sample for the list::assign Functions

	Article: Q158085
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
	
	The sample code below illustrates how to use the list::assign, list::empty, and
	list::erase STL functions in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <list>
	
	Prototype
	---------
	
	     void assign(const_iterator first, const_iterator last);
	     void assign(size_type n, const T& x = T());
	     iterator erase(iterator it);
	     iterator erase(iterator first, iterator last);
	     bool empty() const;
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The first member function replaces the sequence controlled by *this with the
	sequence [first, last). The second member function replaces the sequence
	controlled by *this with a repetition of n elements of value x.
	
	The third member function removes the element of the controlled sequence pointed
	to by it. The fourth member function removes the elements of the controlled
	sequence in the range [first, last). Both return an iterator that designates the
	first element remaining beyond any elements removed, or end() if no such element
	exists.
	
	The last member function returns true for an empty controlled sequence.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: -GX
	  // 
	  // assign.cpp :  Shows the various ways to assign and erase elements
	  //               from a list<T>.
	  // 
	  // Functions:
	  // 
	  //    list::assign
	  //    list::empty
	  //    list::erase
	  // 
	  // Written by Andrew Bradnan
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  #include <list>
	  #include <iostream>
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  typedef list<int, allocator<int> > LISTINT;
	
	  void main()
	
	  {
	
	      LISTINT listOne;
	      LISTINT listAnother;
	      LISTINT::iterator i;
	
	      // Add some data
	      listOne.push_front (2);
	      listOne.push_front (1);
	      listOne.push_back (3);
	
	      listAnother.push_front(4);
	
	      listAnother.assign(listOne.begin(), listOne.end());
	
	      // 1 2 3
	      for (i = listAnother.begin(); i != listAnother.end(); ++i)
	          cout << *i << " ";
	      cout << endl;
	
	      listAnother.assign(4, 1);
	
	      // 1 1 1 1
	      for (i = listAnother.begin(); i != listAnother.end(); ++i)
	          cout << *i << " ";
	      cout << endl;
	
	      listAnother.erase(listAnother.begin());
	
	      // 1 1 1
	      for (i = listAnother.begin(); i != listAnother.end(); ++i)
	          cout << *i << " ";
	      cout << endl;
	
	      listAnother.erase(listAnother.begin(), listAnother.end());
	      if (listAnother.empty())
	          cout << "All gone\n";
	
	  }
	
	Program Output is:
	
	1 2 3
	1 1 1 1
	1 1 1
	All gone
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample list::assign list::empty list::erase
	
	======================================================================
	Keywords          : kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
