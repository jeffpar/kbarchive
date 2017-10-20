---
layout: page
title: "Q168046: HOWTO: STL Sample for &#91;list::rbegin, rend, reverse, rev_iterator"
permalink: /kb/168/Q168046/
---

## Q168046: HOWTO: STL Sample for &#91;list::rbegin, rend, reverse, rev_iterator

{% raw %}

	Article: Q168046
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
	
	The sample code below illustrates how to use the [list::rbegin, list::rend,
	list::reverse_iterator, list::reverse] STL function(s) in Visual C++.
	
	NOTE: There are some differences in the implementation of the Standard C++
	Library components in Visual C++ version 4.2 versus later revisions. The
	relevant sections of code below compile conditionally based upon the value of
	_MSC_VER.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <list>
	     <string>
	     <iostream>
	
	Prototype
	---------
	
	     const_reverse_iterator rbegin() const;
	     reverse_iterator rbegin();
	     const_reverse_iterator rend() const;
	     reverse_iterator rend();
	     typedef reverse_bidirectional_iterator<iterator,
	         value_type, reference, A::types<T>::pointer,
	             difference_type> reverse_iterator;
	     void reverse();
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	This example shows how to iteratate through a list backwards. It also shows how
	to reverse a list.
	
	Sample Code
	-----------
	
	     ////////////////////////////////////////////////////////////////////// 
	     // 
	     // Compile options needed: -GX
	     // 
	     // rev.cpp :  This example shows how to iteratate through a list
	     //            backwards.  It also shows how to reverse a list.
	     // 
	     // Functions:
	     // 
	     //  list::rbegin
	     //  list::rend
	     //  list::reverse_iterator
	     //  list::reverse
	     // 
	     // Written by Andrew Bradnan
	     // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	     ////////////////////////////////////////////////////////////////////// 
	     #pragma warning(disable:4786)
	     #include <list>
	     #include <string>
	     #include <iostream>
	     using namespace std;
	
	     #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	     typedef list<string, allocator<string> > LISTSTR;
	
	     // We use this object so that list::sort() can sort in a different
	     // order.Normally greater<> is used.  We override it here to switch to
	     // less.
	     struct less_str : greater<string> {
	        bool operator()(const string& _X, const string& _Y) const
	           {return (_X < _Y); }
	        };
	
	     void main()
	     {
	        LISTSTR test;
	        LISTSTR::iterator i;
	        LISTSTR::reverse_iterator r;
	
	        test.push_back("one");
	        test.push_back("two");
	        test.push_back("three");
	
	        // one two three
	        cout << "Forwards" << endl << " ";
	        for (i = test.begin(); i != test.end(); ++i)
	           cout << *i << " ";
	        cout << endl;
	
	        // three two one
	        cout << "Backwards" << endl << " ";
	        for (r = test.rbegin(); r != test.rend(); ++r)
	           cout << *r << " ";
	        cout << endl;
	
	        // Switch the order
	        test.reverse();
	
	        // three two one
	        cout << "Reversed" << endl << " ";
	        for (i = test.begin(); i != test.end(); ++i)
	           cout << *i << " ";
	        cout << endl;
	
	        // sort alphabetically (decending by default)
	        test.sort();
	
	        // two three one
	        cout << "Sorted descending" << endl << " ";
	        for (i = test.begin(); i != test.end(); ++i)
	           cout << *i << " ";
	        cout << endl;
	
	        test.sort(less_str());
	
	        // One three two
	        cout << "Sorted ascending" << endl << " ";
	        for (i = test.begin(); i != test.end(); ++i)
	           cout << *i << " ";
	        cout << endl;
	     }
	
	Program Output
	--------------
	
	  Forwards
	   one two three
	  Backwards
	   three two one
	  Reversed
	   three two one
	  Sorted descending
	   one three two
	  Sorted ascending
	   two three one
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample [list::rbegin, list::rend, list::reverse_iterator, list::reverse]
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
