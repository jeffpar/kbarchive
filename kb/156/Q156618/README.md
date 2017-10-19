---
layout: page
title: "Q156618: STL Sample for the count Function"
permalink: /kb/156/Q156618/
---

## Q156618: STL Sample for the count Function

	Article: Q156618
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
	
	The sample code below illustrates how to use the count STL function in Visual
	C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	  <algorithm>
	   
	
	Prototype
	---------
	
	     template<class InputIterator, class T> inline
	  </FIXEDTEXT>
	  <BLOCKQUOTE>
	     template<class InputIterator, class T> inline
	         size_t count(InputIterator first,
	                                          InputIterator last,
	                                          const T& value)
	
	NOTE: The class/parameter names in the prototype do not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The count algorithm counts the number of elements in the range [first, last +1)
	that match value and returns the number of matching elements.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // count.cpp : Illustrates how to use the count function.
	  // 
	  // Functions:
	  // 
	  //    count  - Count items in a range that match a value.
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
	  #include <string>
	  #include <vector>
	  using namespace std;
	
	  void main()
	  {
	      const int VECTOR_SIZE = 8 ;
	
	      // Define a template class vector of strings
	      typedef vector<string, allocator<string> > StringVector ;
	
	      //Define an iterator for template class vector of strings
	      typedef StringVector::iterator StringVectorIt ;
	
	      StringVector NamesVect(VECTOR_SIZE) ;   //vector containing names
	
	      string value("Sea") ;  // stores the value used
	                             // to count matching elements
	
	      StringVectorIt start, end, it ;
	
	      int result = 0 ;   // stores count of elements
	                         // that match value.
	
	      // Initialize vector NamesVect
	      NamesVect[0] = "She" ;
	      NamesVect[1] = "Sells" ;
	      NamesVect[2] = "Sea" ;
	      NamesVect[3] = "Shells" ;
	      NamesVect[4] = "by" ;
	      NamesVect[5] = "the" ;
	      NamesVect[6] = "Sea" ;
	      NamesVect[7] = "Shore" ;
	
	      start = NamesVect.begin() ;   // location of first
	                                    // element of NamesVect
	
	      end = NamesVect.end() ;       // one past the location
	                                    // last element of NamesVect
	
	      // print content of NamesVect
	      cout << "NamesVect { " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	
	      // Count the number of elements in the range [first, last +1)
	      // that match value.
	      result = count(start, end, value) ;
	
	      // print the count of elements that match value
	      cout << "Number of elements that match \"Sea\" = "
	          << result << endl  ;
	  }
	
	Program Output is:
	
	NamesVect { She Sells Sea Shells by the Sea Shore }
	
	Number of elements that match "Sea" = 2
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL count
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : winnt:
	Issue type        : kbhowto
	
	=============================================================================
	
