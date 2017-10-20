---
layout: page
title: "Q156299: STL Sample for the find_if Function"
permalink: /kb/156/Q156299/
---

## Q156299: STL Sample for the find_if Function

{% raw %}

	Article: Q156299
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
	
	The sample code below illustrates how to use the find_if STL function in Visual
	C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	  <algorithm>
	   
	
	Prototype
	---------
	
	     template<class InputIterator, class T, class Predicate> inline
	              InputIterator find_if(InputIterator first,
	                                    InputIterator last,
	                                    Predicate predicate)
	
	NOTE: The class/parameter names in the prototype do not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The find_if algorithm locates the first element in the range [first, last) that
	causes the predicate to return true and returns the iterator positioned at that
	element, or last if no such element was found.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // findif.cpp : Illustrates how to use the find_if function.
	  // 
	  // Functions:
	  // 
	  //   find_if  - locate the first element in a range that satisfies
	  //              a predicate.
	  // 
	  // Written by Kalindi Sanghrajka
	  // of Microsoft Product Support Services,
	  // Software Core Developer Support.
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  // disable warning C4786: symbol greater than 255 character,
	  // okay to ignore
	  #pragma warning(disable: 4786)
	
	  #include <algorithm>
	  #include <iostream>
	  using namespace std;
	
	  // returns true if n is an odd number
	  int IsOdd( int n)
	  {
	      return n % 2 ;
	  }
	
	  void main()
	  {
	      const int ARRAY_SIZE = 8 ;
	      int IntArray[ARRAY_SIZE] = { 1, 2, 3, 4, 4, 5, 6, 7 } ;
	      int *location ;   // stores the position of the first
	                        // element that is an odd number
	      int i ;
	
	          // print content of IntArray
	      cout << "IntArray { " ;
	      for(i = 0; i < ARRAY_SIZE; i++)
	          cout << IntArray[i] << ", " ;
	      cout << " }" << endl ;
	
	      // Find the first element in the range [first, last -1 ]
	      // that is an odd number
	      location = find_if(IntArray, IntArray + ARRAY_SIZE, IsOdd) ;
	
	      //print the location of the first element
	      // that is an odd number
	      if (location != IntArray + ARRAY_SIZE)  // first odd element found
	          cout << "First odd element " << *location
	               << " is at location " << location - IntArray << endl;
	      else         // no odd numbers in the range
	          cout << "The sequence does not contain any odd numbers"
	               << endl ;
	      }
	
	Output:
	
	IntArray { 1, 2, 3, 4, 4, 5, 6, 7, }
	
	First odd element 1 is at location 0
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL count_if
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : winnt:
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
