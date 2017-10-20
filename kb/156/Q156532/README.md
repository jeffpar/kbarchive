---
layout: page
title: "Q156532: INFO: STL Sample for the remove_if Function"
permalink: /kb/156/Q156532/
---

## Q156532: INFO: STL Sample for the remove_if Function

{% raw %}

	Article: Q156532
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
	
	The sample code below illustrates how to use the remove_if, end, begin, and
	bind2nd STL functions in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	  <algorithm>
	
	Prototype
	---------
	
	  template<class ForwardIterator, class Predicate> inline
	  ForwardIterator remove_if(ForwardIterator first,
	
	                               ForwardIterator last,
	                               Predicate pred)
	
	NOTE: The class/parameter names in the prototype do not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The remove_if algorithm removes all elements from the range (first, last) that
	cause the predicate to return true. It returns an iterator equal to last - N,
	where N = number of elements removed. The last N elements of the range have
	undefined values. The size of the container remains the same.
	
	Sample Code
	-----------
	
	  NOTE: The first line in the sample code section is: // Compile options
	  needed: /GX
	
	In VC++ .NET, /EHsc is set by default and is equivalent to /GX.
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // remove_if.cpp : Illustrates how to use the remove_if function.
	  // 
	  // Functions:
	  // 
	  //   remove_if - remove all elements from the sequence that
	  //               satisfies a predicate.
	  //   bind2nd - Returns true for elements for which the condition is true
	  //   begin - Returns an iterator that points to the first element in a
	  //           sequence
	  //   end - Returns an iterator that points one past the end of a sequence
	  // 
	  // Written by Kalindi Sanghrajka
	  // of Microsoft Product Support Services,
	  // Software Core Developer Support.
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  // disable warning C4786: symbol greater than 255 character,
	  // okay to ignore
	
	  #pragma warning(disable: 4786)
	
	  // disable warning C4244: possible loss of data,
	  // okay to ignore
	
	  #pragma warning(disable: 4244)
	
	  #include <iostream>
	  #include <vector>
	  #include <algorithm>
	  #include <functional>
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  void main()
	
	  {
	
	      const int VECTOR_SIZE = 8 ;
	
	      // Define a template class vector of integers
	      typedef vector<int, allocator<int> > IntVector ;
	
	      //Define an iterator for template class vector of integer
	      typedef IntVector::iterator IntVectorIt ;
	
	      IntVector Numbers(VECTOR_SIZE) ;   //vector containing numbers
	
	      IntVectorIt start, end, it, last;
	
	      start = Numbers.begin() ;   // location of first
	                                  // element of Numbers
	
	      end = Numbers.end() ;       // one past the location
	                                  // last element of Numbers
	
	      //Initialize vector Numbers
	      Numbers[0] = 10 ;
	      Numbers[1] = 20 ;
	      Numbers[2] = 10 ;
	      Numbers[3] = 15 ;
	      Numbers[4] = 12 ;
	      Numbers[5] = 7 ;
	      Numbers[6] = 9 ;
	      Numbers[7] = 10 ;
	
	      cout << "Before calling remove_if" << endl ;
	
	      // print content of Numbers
	      cout << "Numbers { " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	
	      // remove all elements from Numbers that <= 10
	       last = remove_if(start, end, bind2nd(less_equal<int>(), 10) ) ;
	
	      cout << "After calling remove_if" << endl ;
	
	      // print content of Numbers
	      cout << "Numbers { " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	
	      //print number of elements removed from Numbers
	      cout << "Total number of elements removed from Numbers = "
	          << end - last << endl ;
	
	      //print only the valid elements of Number
	      cout << "Valid elements of Numbers { " ;
	      for(it = start; it != last; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	
	  }
	
	Program output follows:
	
	Before calling remove_if
	Numbers { 10 20 10 15 12 7 9 10  }
	
	After calling remove_if
	Numbers { 20 15 12 15 12 7 9 10  }
	
	Total number of elements removed from Numbers = 5
	Valid elements of Numbers { 20 15 12  }
	
	REFERENCES
	==========
	
	Visual C++, version 4.2, Visual C++ Books Online; click Visual C++ Books, C/C++,
	and then Standard C++ Library Reference.
	
	Additional query words: STL STLSample remove_if begin end bind2nd
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
