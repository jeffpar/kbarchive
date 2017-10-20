---
layout: page
title: "Q156302: INFO: STL Sample for the find Function"
permalink: /kb/156/Q156302/
---

## Q156302: INFO: STL Sample for the find Function

{% raw %}

	Article: Q156302
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): _IK
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the count_if, begin, and end STL
	function in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	  <algorithm>
	
	Prototype
	---------
	
	     template<class InputIterator, class T> inline
	         InputIterator find(InputIterator first,
	                            InputIterator last,
	                            const T& value)
	
	NOTE: The class/parameter names in the prototype do not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The find algorithm locates the first element in the range [first, last) that
	matches value and returns the iterator positioned at the first matching element,
	or last + 1 if no such element exists.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // find.cpp : Illustrates how to use the find function.
	  // 
	  // Functions:
	  // 
	  //   find  - Find the first element in a sequence that matches value.
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
	
	  void main()
	  {
	      const int ARRAY_SIZE = 8 ;
	      int IntArray[ARRAY_SIZE] = { 1, 2, 3, 4, 4, 5, 6, 7 } ;
	
	      int *location ;   // stores the position of the first
	                        // matching element.
	
	      int i ;
	
	      int value = 4 ;
	
	      // print content of IntArray
	      cout << "IntArray { " ;
	      for(i = 0; i < ARRAY_SIZE; i++)
	          cout << IntArray[i] << ", " ;
	      cout << " }" << endl ;
	
	      // Find the first element in the range [first, last + 1)
	      // that matches value.
	      location = find(IntArray, IntArray + ARRAY_SIZE, value) ;
	
	      //print the matching element if any was found
	      if (location != IntArray + ARRAY_SIZE)  // matching element found
	          cout << "First element that matches " << value
	               << " is at location " << location - IntArray << endl;
	      else                                    // no matching element was
	                                              // found
	          cout << "The sequence does not contain any elements"
	               << " with value " << value << endl ;
	      }
	
	Output:
	
	IntArray { 1, 2, 3, 4, 4, 5, 6, 7, }
	
	First element that matches 4 is at location 3
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL find
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : winnt:
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
