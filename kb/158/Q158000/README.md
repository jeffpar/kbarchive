---
layout: page
title: "Q158000: STL Sample for the nth_element Function"
permalink: kb/158/Q158000/
---

## Q158000: STL Sample for the nth_element Function

	Article: Q158000
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): _IK
	Last Modified: 05-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the nth_element STL function in
	Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <algorithm>
	
	Prototype
	---------
	
	     template<class RandomAccessIterator> inline
	     void nth_element(RandomAccessIterator first,
	                      RandomAccessIterator nth,
	                      RandomAccessIterator last)
	
	NOTE: The class/parameter names in the prototype do not match the original
	version in the header file. They have been modified to improve readability.
	
	Description
	-----------
	
	The nth_element algorithm partitions the sequence [first..last) on the value
	referenced by nth. All the elements less than or equal to the value are placed
	before value and all elements greater than value are placed after value in the
	sequence.
	
	The non-predicate version of nth_element uses operator< for comparisons.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // nth_element.cpp : Illustrates how to use the nth_element
	  //                   function.
	  // 
	  // Functions:
	  // 
	  //   nth_element : Partition the elements in a sequence by its nth
	  //                 element.
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
	  #include <vector><BR/>
	  using namespace std;
	
	  void main()
	  {
	      const int VECTOR_SIZE = 8 ;
	
	      // Define a template class vector of int
	      typedef vector<int, allocator<int> > IntVector ;
	
	      //Define an iterator for template class vector of strings
	      typedef IntVector::iterator IntVectorIt ;
	
	      IntVector Numbers(VECTOR_SIZE) ;
	
	      IntVectorIt start, end, it ;
	
	      // Initialize vector Numbers
	      Numbers[0] = 4 ;
	      Numbers[1] = 10;
	      Numbers[2] = 70 ;
	      Numbers[3] = 30 ;
	      Numbers[4] = 10;
	      Numbers[5] = 69 ;
	      Numbers[6] = 96 ;
	      Numbers[7] = 100;
	
	      start = Numbers.begin() ;   // location of first
	                                  // element of Numbers
	
	      end = Numbers.end() ;       // one past the location
	                                  // last element of Numbers
	
	      cout << "Before calling nth_element\n" << endl ;
	
	      // print content of Numbers
	      cout << "Numbers { " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	
	      // partition the elements by the 4th element
	      nth_element(start, start+4, end) ;
	
	      cout << "After calling nth_element\n" << endl ;
	
	      cout << "Numbers { " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	  }
	
	  Program Output is:
	
	  Before calling nth_element
	
	  Numbers { 4 10 70 30 10 69 96 100  }
	
	  After calling nth_element
	
	  Numbers { 4 10 10 30 69 70 96 100  }
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL nth_element
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : winnt:
	Issue type        : kbhowto
	
	=============================================================================
	
