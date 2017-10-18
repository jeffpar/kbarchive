---
layout: page
title: "Q156619: STL Sample for the min_element Function"
permalink: kb/156/Q156619/
---

## Q156619: STL Sample for the min_element Function

	Article: Q156619
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): _IK
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the min_element STL function in
	Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	  <algorithm>
	   
	
	Prototype
	---------
	
	     template<class InputIterator> inline
	         InputIterator min_element(InputIterator first,
	                                   InputIterator last)
	
	NOTE: The class/parameter names in the prototype do not match the original
	version in the header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The min_element algorithm returns the location of the minimum element in the
	sequence [first, last).
	
	The non-predicate version of min_element uses operator< for comparisons.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // min_element.cpp : Illustrates how to use the min_element
	  //                   function.
	  // 
	  // Functions:
	  // 
	  //    min_element - Return the minimum element within a range.
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
	      Numbers[1] = 10 ;
	      Numbers[2] = 10 ;
	      Numbers[3] = 30 ;
	      Numbers[4] = 69 ;
	      Numbers[5] = 70 ;
	      Numbers[6] = 96 ;
	      Numbers[7] = 100 ;
	
	      start = Numbers.begin() ;   // location of first
	                                  // element of Numbers
	
	      end = Numbers.end() ;       // one past the location
	                                  // last element of Numbers
	
	      // print content of Numbers
	      cout << "Numbers { " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	
	      // return the minimum element in the Numbers
	      location = min_element(start, end) ;
	
	      cout << "The minimum element in Numbers is: "
	          << *location << endl ;
	  }
	
	Program Output is:
	
	Numbers { 4 10 10 30 69 70 96 100 }
	
	The minimum element in Numbers is: 4
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL min_element
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : winnt:
	Issue type        : kbhowto
	
	=============================================================================
	
