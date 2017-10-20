---
layout: page
title: "Q156590: STL Sample for deque::erase and deque::clear Functions"
permalink: /kb/156/Q156590/
---

## Q156590: STL Sample for deque::erase and deque::clear Functions

{% raw %}

	Article: Q156590
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
	
	The sample code below illustrates how to use the deque::erase, deque::clear,
	deque::begin, and deque::end STL functions in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     < deque>
	
	Prototype
	---------
	
	     iterator erase(iterator iter);
	     iterator erase(iterator first, iterator last);
	     void clear() const;
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The first erase member function removes the element of the container pointed to
	by iter. The second erase member function removes the elements of the container
	in the range [first, last). Both return an iterator that designates the first
	element remaining beyond any elements removed, or end() if no such element
	exists.
	
	Removing N elements causes N destructor calls and an assignment for each of the
	elements between the insertion point and the nearer end of the sequence.
	
	Removing an element at either end invalidates only iterators and references that
	designate the erased elements. Otherwise, erasing an element invalidates all
	iterators and references.
	
	The clear member function calls erase( begin(), end()).
	
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
	  //    erase
	  //    clear
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
	
	  typedef deque<int, allocator<int> >  INTDEQUE;
	
	  void print_contents (INTDEQUE  deque);
	
	  void main()
	
	  {
	
	      // create a and with elements 1,2,3,4 and 5
	      INTDEQUE  a;
	      a.push_back(1);
	      a.push_back(2);
	      a.push_back(3);
	      a.push_back(4);
	      a.push_back(5);
	
	      //print the contents
	      print_contents (a);
	
	      //  erase the second element
	      a.erase(a.begin()+1);
	      print_contents (a);
	
	      //erase the last two elements
	      a.erase(a.end()-2,a.end());
	      print_contents (a);
	
	      //clear a
	      a.clear();
	      print_contents (a);
	
	  }
	
	  void print_contents (INTDEQUE  deque) {
	      INTDEQUE::iterator pdeque;
	
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
	
	The output is: 1 2 3 4 5
	The output is: 1 3 4 5
	The output is: 1 3
	The output is:
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample erase clear begin end
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCNET kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
