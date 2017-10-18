---
layout: page
title: "Q156080: STL Sample for Non-Predicate Version of adjacent_find Function"
permalink: kb/156/Q156080/
---

## Q156080: STL Sample for Non-Predicate Version of adjacent_find Function

	Article: Q156080
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
	
	     template<class ForwardIterator> inline
	        ForwardIterator adjacent_find(ForwardIterator first,
	                                                      ForwardIterator last) ;
	
	NOTE: The class/parameter names in the prototype do not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The adjacent_find algorithm finds consecutive pair of matching elements in a
	sequence. The adjacent_find algorithm returns an iterator referencing the first
	consecutive matching element in the range (first, last), or last if there are no
	such elements.
	
	Comparison is done using operator== in this non-predicate version of the
	algorithm.
	
	Sample Code
	-----------
	
	     ////////////////////////////////////////////////////////////////////// 
	     // 
	     // Compile options needed: /GX
	     // 
	     // adfind.cpp : Illustrates how to use the  non-predicate version of
	     //              adjacent_find function.
	     // 
	     // Functions:
	     // 
	     //   adjacent_find - Locates a matching consecutive sequence in a range.
	     // 
	     // Written by Kalindi Sanghrajka
	     // of Microsoft Technical Support,
	     // Software Core Developer Support.
	     // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	     ////////////////////////////////////////////////////////////////////// 
	
	     #include <algorithm>
	     #include <iostream>
	     using namespace std;
	
	     void main()
	     {
	         const int ARRAY_SIZE = 8 ;
	         int IntArray[ARRAY_SIZE] = { 1, 2, 3, 4, 4, 5, 6, 7 } ;
	
	         int *location ;   // stores the position for the first pair
	                           // of matching consecutive elements.
	
	         int i ;
	
	         // print content of IntArray
	         cout << "IntArray { " ;
	         for(i = 0; i < ARRAY_SIZE; i++)
	             cout << IntArray[i] << ", " ;
	         cout << " }" << endl ;
	
	         // Find the first pair of matching consecutive elements
	         // in the range [first, last + 1)
	         // This version performs matching using operator==
	         location = adjacent_find(IntArray, IntArray + ARRAY_SIZE) ;
	
	         //print the matching consecutive elements if any were found
	         if (location != IntArray + ARRAY_SIZE)  // matching consecutive
	                                                 // elements found
	             cout << "Found adjacent pair of matching elements: ("
	             << *location << ", " << *(location + 1) << "), " <<
	             "at location " << location - IntArray << endl;
	         else         // no matching consecutive elements were found
	             cout << "No adjacent pair of matching elements were found"
	             << endl ;
	
	     }
	
	The Program Output is:
	
	IntArray { 1, 2, 3, 4, 4, 5, 6, 7, }
	
	Found adjacent pair of matching elements: (4, 4), at location 3
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL adjacent_find
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : winnt:
	Issue type        : kbhowto
	
	=============================================================================
	
