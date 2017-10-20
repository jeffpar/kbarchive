---
layout: page
title: "Q157221: STL Sample for the Predicate Version of lower_bound Function"
permalink: /kb/157/Q157221/
---

## Q157221: STL Sample for the Predicate Version of lower_bound Function

{% raw %}

	Article: Q157221
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2
	Operating System(s): 
	Keyword(s): _IK
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the predicate version of
	lower_bound STL function in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <algorithm>
	
	Prototype
	---------
	
	     template<class ForwardIterator, class T, class Compare> inline
	         ForwardIterator lower_bound(ForwardIterator first,
	                                       ForwardIterator last,
	                                       const T& value,
	                                       Compare compare)
	
	NOTE: The class/parameter names in the prototype do not match the original
	version in the header file. They have been modified to improve readability.
	
	Description
	-----------
	
	The lower_bound algorithm returns the first location in the sequence that value
	can be inserted such that the order of the sequence is maintained.
	
	lower_bound returns an iterator positioned at the location that value can be
	inserted in the range [first..last), or returns last if no such position
	exists.
	
	This version assumes the range [first..last) is sorted sequentially using the
	compare function.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // lower_bound.cpp : Illustrates how to use the lower_bound
	  //                   function.
	  // 
	  // Functions:
	  // 
	  //    lower_bound : Return the lower bound within a range.
	  // 
	  // Written by Kalindi Sanghrajka
	  // of Microsoft Product Support Services,
	  // Software Core Developer Support.
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  // disable warning C4786: symbol greater than 255 character,
	  // okay to ignore this warning
	  #pragma warning(disable: 4786)
	
	  #include <iostream>
	  #include <algorithm>
	  #include <functional>
	  #include <vector>
	  using namespace std;
	
	  void main()
	  {
	      const int VECTOR_SIZE = 8 ;
	
	      // Define a template class vector of int
	      typedef vector<int, allocator<int> > IntVector ;
	
	      //Define an iterator for template class vector of strings
	      typedef IntVector::iterator IntVectorIt ;
	
	      IntVector Numbers(VECTOR_SIZE) ;
	
	      IntVectorIt start, end, it, location ;
	
	      // Initialize vector Numbers
	      Numbers[0] = 4 ;
	      Numbers[1] = 10;
	      Numbers[2] = 70 ;
	      Numbers[3] = 10 ;
	      Numbers[4] = 30 ;
	      Numbers[5] = 69 ;
	      Numbers[6] = 96 ;
	      Numbers[7] = 100;
	
	      start = Numbers.begin() ;   // location of first
	                                  // element of Numbers
	
	      end = Numbers.end() ;       // one past the location
	                                  // last element of Numbers
	
	      //sort Numbers using the function object less<int>()
	      //lower_bound assumes that Numbers is sorted
	      //using the "compare" (less<int>() in this case)
	      //function
	      sort(start, end, less<int>()) ;
	
	      // print content of Numbers
	      cout << "Numbers { " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	
	      // return the first location at which 10 can be inserted
	      // in Numbers
	      location = lower_bound(start, end, 10, less<int>()) ;
	
	      cout << "First location element 10 can be inserted in Numbers is: "
	          << location - start << endl ;
	  }
	
	Output:
	
	Numbers { 4 10 10 30 69 70 96 100  }
	
	First location element 10 can be inserted in Numbers is: 1
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL lower_bound
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch kbVCLibrary
	Version           : winnt:4.2
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
