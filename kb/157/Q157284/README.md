---
layout: page
title: "Q157284: STL Sample for the upper_bound Function"
permalink: /kb/157/Q157284/
---

## Q157284: STL Sample for the upper_bound Function

	Article: Q157284
	Product(s): Microsoft C Compiler
	Version(s): winnt:; :4.2
	Operating System(s): 
	Keyword(s): _IK
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library 
	- Microsoft Visual C++, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the upper_bound STL function in
	Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <algorithm>
	
	Prototype
	---------
	
	     template<class ForwardIterator, class T> inline
	         ForwardIterator upper_bound(ForwardIterator first,
	                                     ForwardIterator last,
	                                     const T& value)
	
	NOTE: The class/parameter names in the prototype do not match the original
	version in the header file. They have been modified to improve readability.
	
	Description
	-----------
	
	The upper_bound algorithm returns the last location in the sequence that value
	can be inserted such that the order of the sequence is maintained.
	
	upper_bound returns an iterator positioned at the location that value can be
	inserted in the range [first..last), or returns last if no such position
	exists.
	
	upper_bound assumes the range [first ..last) is sorted using operator<.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // upper_bound.cpp : Illustrates how to use the upper_bound
	  //                   function.
	  // 
	  // Functions:
	  // 
	  //    upper_bound : Return the upper bound within a range.
	  // 
	  // Written by Kalindi Sanghrajka
	  // of Microsoft Product Support Services,
	  // Software Core Developer Support.
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  // disable warning C4786: symbol greater than 255 character,
	  // okay to ignore
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
	      Numbers[2] = 10 ;
	      Numbers[3] = 30 ;
	      Numbers[4] = 69 ;
	      Numbers[5] = 70 ;
	      Numbers[6] = 96 ;
	      Numbers[7] = 100;
	
	      start = Numbers.begin() ;   // location of first
	                                  // element of Numbers
	
	      end = Numbers.end() ;       // one past the location
	                                  // last element of Numbers
	
	      // print content of Numbers
	      cout << "Numbers { " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	
	      //return the last location at which 10 can be inserted
	      // in Numbers
	      location = upper_bound(start, end, 10) ;
	
	      cout << "Element 10 can be inserted at index "
	          << location - start << endl ;
	  }
	
	Program Output is:
	
	Numbers { 4 10 10 30 69 70 96 100  }
	
	Element 10 can be inserted at index 3
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL upper_bound
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVCLibrary
	Version           : winnt:; :4.2
	Issue type        : kbhowto
	
	=============================================================================
	
