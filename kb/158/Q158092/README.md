---
layout: page
title: "Q158092: STL Sample for the List::insert Function"
permalink: /kb/158/Q158092/
---

## Q158092: STL Sample for the List::insert Function

{% raw %}

	Article: Q158092
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbVC420 kbVC500 kbVC600 kbDSupport
	Last Modified: 29-APR-2002
	
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
	
	The sample code below illustrates how to use the list::insert STL function in
	Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <list>
	
	Prototype
	---------
	
	     iterator insert(iterator it, const T& x = T());
	     void insert(iterator it, size_type n, const T& x);
	     void insert(iterator it, const_iterator first, const_iterator last);
	     void insert(iterator it, const T *first, const T *last);
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	Each of the member functions inserts, after the element pointed to by it in the
	controlled sequence, a sequence specified by the remaining operands. The first
	member function inserts a single element with value x and returns an iterator
	that points to the newly inserted element. The second member function inserts a
	repetition of n elements of value x. The last two member functions insert the
	sequence [first, last).
	
	Sample Code
	-----------
	
	     ////////////////////////////////////////////////////////////////////// 
	     // 
	     // Compile options needed: -GX
	     // 
	     // insert.cpp :  Shows the various ways to insert elements into a
	     //               list<T>.
	     // 
	     // Functions:
	     // 
	     //    list::insert
	     // 
	     // Written by Andrew Bradnan
	     // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	     ////////////////////////////////////////////////////////////////////// 
	
	     #include <list>
	     #include <iostream>
	     using namespace std;
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	     typedef list<int, allocator<int> > LISTINT;
	
	     void main()
	     {
	         int rgTest1[] = {5,6,7};
	         int rgTest2[] = {10,11,12};
	
	         LISTINT listInt;
	         LISTINT listAnother;
	         LISTINT::iterator i;
	
	         // Insert one at a time
	         listInt.insert (listInt.begin(), 2);
	         listInt.insert (listInt.begin(), 1);
	         listInt.insert (listInt.end(), 3);
	
	         // 1 2 3
	         for (i = listInt.begin(); i != listInt.end(); ++i)
	             cout << *i << " ";
	         cout << endl;
	
	         // Insert 3 fours
	         listInt.insert (listInt.end(), 3, 4);
	
	         // 1 2 3 4 4 4
	         for (i = listInt.begin(); i != listInt.end(); ++i)
	             cout << *i << " ";
	         cout << endl;
	
	         // Insert an array in there
	         listInt.insert (listInt.end(), rgTest1, rgTest1 + 3);
	
	         // 1 2 3 4 4 4 5 6 7
	         for (i = listInt.begin(); i != listInt.end(); ++i)
	             cout << *i << " ";
	         cout << endl;
	
	         // Insert another LISTINT
	         listAnother.insert (listAnother.begin(), rgTest2, rgTest2+3);
	         listInt.insert (listInt.end(), listAnother.begin(),
	         listAnother.end());
	
	         // 1 2 3 4 4 4 5 6 7 10 11 12
	         for (i = listInt.begin(); i != listInt.end(); ++i)
	             cout << *i << " ";
	         cout << endl;
	     }
	
	Program Output is as follows:
	
	  1 2 3
	  1 2 3 4 4 4
	  1 2 3 4 4 4 5 6 7
	  1 2 3 4 4 4 5 6 7 10 11 12
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample list::insert
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
