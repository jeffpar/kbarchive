---
layout: page
title: "Q158005: STL Sample for the Predicate of partial_sort_copy Function"
permalink: kb/158/Q158005/
---

## Q158005: STL Sample for the Predicate of partial_sort_copy Function

	Article: Q158005
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
	
	The sample code below illustrates how to use the predicate version of the
	partial_sort_copy STL function in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	    <algorithm>
	
	Prototype
	---------
	
	    template<class InputIterator, RandomAccessIterator, class Compare> inline
	    RandomAccessIterator partial_sort(InputIterator first1,
	                                      InputIterator last1,
	                                      RandomAccessIterator first2,
	                                      RandomAccessIterator last2,
	                                      Compare compare)
	
	NOTE: The class/parameter names in the prototype do not match the original
	version in the header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The partial_sort_copy algorithm sorts the smallest N elements, where N =
	min((last1 - first1), (last2 - first2)), of the sequence [first1, last1), and
	copies the results to the sequence [first2, first2 + N].
	
	The predicate version of partial_sort_copy uses the compare function for
	comparisons.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // partial_sort_copyP.cpp : Illustrates how to use the predicate version
	  //                          of the partial_sort_copy function.
	  // 
	  // Functions:
	  // 
	  //    partial_sort_copy : Sort the smallest N elements in a sequence
	  //                        and copy the resulting sequence
	  //                        to another sequence.
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
	      IntVector Result(4) ;
	
	      IntVectorIt start, end, it ;
	
	      // Initialize vector Numbers
	      Numbers[0] = 4 ;
	      Numbers[1] = 10;
	      Numbers[2] = 70 ;
	      Numbers[3] = 30 ;
	      Numbers[4] = 10;
	      Numbers[5] = 69 ;
	      Numbers[6] = 96 ;
	      Numbers[7] = 7;
	
	      start = Numbers.begin() ;   // location of first
	                                  // element of Numbers
	
	      end = Numbers.end() ;       // one past the location
	                                  // last element of Numbers
	
	      cout << "Before calling partial_sort_copy\n" << endl ;
	
	      // print content of Numbers
	      cout << "Numbers { " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	
	      // sort the smallest 4 elements in the Numbers
	      // and copy the results in Result
	      partial_sort_copy(start, end, Result.begin(),Result.end(),less<int>());
	
	      cout << "After calling partial_sort_copy\n" << endl ;
	
	      cout << "Numbers { " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	
	      cout << "Result { " ;
	      for(it = Result.begin(); it != Result.end(); it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	  }
	
	  Program Output is:
	
	  Before calling partial_sort_copy
	
	  Numbers { 4 10 70 30 10 69 96 7  }
	
	  After calling partial_sort_copy
	
	  Numbers { 4 10 70 30 10 69 96 7  }
	
	  Result { 4 7 10 10  }
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL partial_sort_copy
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : winnt:
	Issue type        : kbhowto
	
	=============================================================================
	
