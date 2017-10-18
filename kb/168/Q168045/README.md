---
layout: page
title: "Q168045: HOWTO: STL Sample For [list::merge] Function(s)"
permalink: kb/168/Q168045/
---

## Q168045: HOWTO: STL Sample For [list::merge] Function(s)

	Article: Q168045
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbVC420 kbVC500 kbVC600
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
	
	The sample code below illustrates how to use the [list::merge] STL function(s)
	in Visual C++.
	
	Note that there are some differences in the implementation of the Standard C++
	Library components in Visual C++ version 4.2 versus later revisions. The
	relevant sections of code below compile conditionally based upon the value of
	_MSC_VER.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <list>
	     <iostream>
	
	Prototype
	---------
	
	     void merge(list& x);
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	This example shows how to merge two sorted lists.
	
	Sample Code
	-----------
	
	     ////////////////////////////////////////////////////////////////////// 
	     // 
	     // Compile options needed: -GX
	     // 
	     // merge.cpp :  This example show how to merge two sorted list<T>s.
	     // 
	     // Functions:
	     // 
	     //  list::merge
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
	        // List's must be sorted first
	        int list1[] = {12,11,10,7,6,5,3,1};
	        int list2[] = {22,21,20,10,7,6,5};
	
	        LISTINT test1;
	        LISTINT test2;
	        LISTINT::iterator i;
	
	        test1.insert (test1.begin(), list1, list1 + 8);
	        test2.insert (test2.begin(), list2, list2 + 7);
	
	        test1.merge (test2);
	
	        // 22 21 20 12 11 10 10 7 7 6 6 5 5 3 1
	        for (i = test1.begin(); i != test1.end(); ++i)
	           cout << *i << " ";
	        cout << endl;
	     }
	
	Program Output
	--------------
	
	     12 11 10 7 6 5 3 1 22 21 20 10 7 6 5
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample [list::merge]
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
