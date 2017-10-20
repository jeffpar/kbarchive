---
layout: page
title: "Q158004: STL Sample for the random_shuffle Function"
permalink: /kb/158/Q158004/
---

## Q158004: STL Sample for the random_shuffle Function

{% raw %}

	Article: Q158004
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
	
	The sample code below illustrates how to use the random_shuffle STL function in
	Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <algorithm>
	
	Prototype
	---------
	
	     template<class RandomAccessIterator> inline
	     void random_shuffle(RandomAccessIterator first,
	                      RandomAccessIterator last)
	
	NOTE: The class/parameter names in the prototype do not match the original
	version in the header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The random_shuffle algorithm shuffles the elements of a sequence [first..last) in
	a random order.
	
	The non-predicate version uses an internal random-number generator to generate
	the indices of the elements to swap.
	
	The non-predicate version of random_shuffle uses operator= to perform swaps.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // random_shuffle.cpp : Illustrates how to use the random_shuffle
	  //                      function.
	  // 
	  // Functions:
	  // 
	  //     random_shuffle : Shuffle the elements in a random order.
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
	
	      cout << "Before calling random_shuffle\n" << endl ;
	
	      // print content of Numbers
	      cout << "Numbers { " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	
	      // shuffle the elements in a random order
	      random_shuffle(start, end) ;
	
	      cout << "After calling random_shuffle\n" << endl ;
	
	      cout << "Numbers { " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	  }
	
	  Program Output is:
	
	  Before calling random_shuffle
	
	  Numbers { 4 10 70 30 10 69 96 100  }
	
	  After calling random_shuffle
	
	  Numbers { 10 30 4 70 96 100 69 10  }
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: 4.00 STL random_shuffle
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : winnt:
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
