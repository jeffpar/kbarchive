---
layout: page
title: "Q157869: STL Sample for Predicate Version of next_permutation Function"
permalink: /kb/157/Q157869/
---

## Q157869: STL Sample for Predicate Version of next_permutation Function

{% raw %}

	Article: Q157869
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
	next_permutation STL function in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <algorithm>
	
	Prototype
	---------
	
	     template<class BidirectionalIterator, class Compare> inline
	     bool next_permutation(BidirectionalIterator first,
	                           BidirectionalIterator last,
	                           Compare compare)
	
	NOTE: The class/parameter names in the prototype do not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The next_permutation algorithm changes the order of the elements in the range
	[first, last) to the next lexicographic permutation and returns true. If there
	is no next_permutation, it arranges the sequence to be the first permutation and
	returns false.
	
	NOTE: The next_permutation algorithm assumes that the sequence is sorted in
	ascending order using the compare function.
	
	The non-predicate version uses the compare function to order the permutations.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // next_permutation.cpp : Illustrates how to use the predicate version
	  //                        of the next_permutation function.
	  // 
	  // Functions:
	  // 
	  //    next_permutation : Change the order of the sequence to the
	  //                       next lexicograhic permutation.
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
	  #include <vector>
	  #include <string>
	  #include <algorithm>
	  #include <functional>
	  using namespace std;
	
	  void main()
	  {
	      const int VECTOR_SIZE = 3 ;
	
	      // Define a template class vector of strings
	      typedef vector<string, allocator<string> > StrVector ;
	
	      //Define an iterator for template class vector of strings
	      typedef StrVector::iterator StrVectorIt ;
	
	      //Define an ostream iterator for strings
	      typedef ostream_iterator<string,char,char_traits<char> > StrOstreamIt;
	
	      StrVector Pattern(VECTOR_SIZE) ;
	
	      StrVectorIt start, end, it ;
	
	      StrOstreamIt outIt(cout, " ") ;
	
	      start = Pattern.begin() ;   // location of first
	                                        // element of Pattern
	
	      end = Pattern.end() ;       // one past the location last
	                                         // element of Pattern
	
	      //Initialize vector Pattern
	      Pattern[0] = "K" ;
	      Pattern[1] = "A" ;
	      Pattern[2] = "L" ;
	
	      //sort the contents of Pattern, required by next_permutation
	      sort(start, end, less<string>()) ;
	
	      // print content of Pattern
	      cout << "Before calling next_permutation...\n" << "Pattern: " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << "\n\n" ;
	
	      // Generate all possible permutations
	
	      cout << "After calling next_permutation...." << endl ;
	      while ( next_permutation(start, end, less<string>()) )
	      {
	          copy(start, end, outIt) ;
	          cout << endl ;
	      }
	  }
	
	  Program Output is:
	
	  Before calling next_permutation:
	  Pattern: A K L
	
	  After calling next_permutation:.
	  A L K
	  K A L
	  K L A
	  L A K
	  L K A
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL reverse
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : winnt:
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
