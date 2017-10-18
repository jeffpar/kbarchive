---
layout: page
title: "Q156300: STL Sample for the count_if Function"
permalink: kb/156/Q156300/
---

## Q156300: STL Sample for the count_if Function

	Article: Q156300
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
	
	The sample code below illustrates how to use the count_if, begin, and end STL
	function in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	  <algorithm>
	   
	
	Prototype
	---------
	
	     template<class InputIterator, class Predicate>  inline
	         size_t count_if(InputIterator first, InputIterator last,
	                                Predicate P)
	
	NOTE: The class/parameter names in the prototype do not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The count_if algorithm counts the number of elements in the range [first, last)
	that cause the predicate to return true, and returns the number of elements for
	which the predicate was true.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // count.cpp : Illustrates how to use the count_if function.
	  // 
	  // Functions:
	  // 
	  //   count_if  - Count items in a range that satisfy a predicate.
	  // 
	  //   begin     - Returns an iterator that points to the first element in
	  //               a sequence.
	  // 
	  //   end       - Returns an iterator that points one past the end of a
	  //               sequence.
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
	
	  // Return true if string str starts with letter 'S'
	  int MatchFirstChar( const string& str)
	  {
	      string s("S") ;
	      return s == str.substr(0,1) ;
	  }
	
	  void main()
	  {
	      const int VECTOR_SIZE = 8 ;
	
	      // Define a template class vector of strings
	      typedef vector<string, allocator<string> > StringVector ;
	
	      //Define an iterator for template class vector of strings
	      typedef StringVector::iterator StringVectorIt ;
	
	      StringVector NamesVect(VECTOR_SIZE) ;   //vector containing names
	
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
	      // that start with letter 'S'
	      result = count_if(start, end, MatchFirstChar) ;
	
	      // print the count of elements that start with letter 'S'
	      cout << "Number of elements that start with letter \"S\" = "
	          << result << endl  ;
	  }
	
	Output:
	
	NamesVect { She Sells Sea Shells by the Sea Shore }
	
	Number of elements that start with letter "S" = 6
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL count_if begin end
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : winnt:
	Issue type        : kbhowto
	
	=============================================================================
	
