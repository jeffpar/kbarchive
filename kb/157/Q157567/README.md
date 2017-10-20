---
layout: page
title: "Q157567: STL Sample for the prev_permutation Function"
permalink: /kb/157/Q157567/
---

## Q157567: STL Sample for the prev_permutation Function

{% raw %}

	Article: Q157567
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
	
	The sample code below illustrates how to use the prev_permutation STL function
	in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <algorithm>
	
	Prototype
	---------
	
	     template<class BidirectionalIterator> inline
	     bool prev_permutation(BidirectionalIterator first,
	                           BidirectionalIterator last)
	
	NOTE: The class/parameter names in the prototype do not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The prev_permutation algorithm changes the order of the elements the range
	[first, last), to the previous lexicographic permutation and returns true. If
	there is no prev_permutation it arranges the sequence to be the first
	permutation and returns false.
	
	IMPORTANT: The prev_permutation algorithm assumes the sequence is sorted in
	descending order using operator<.
	
	The non-predicate version uses the operator< to order the permutations.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // prev_permutation.cpp : Illustrates how to use the prev_permutation
	  //                        function.
	  // 
	  // Functions:
	  // 
	  //    prev_permutation : Change the order of the sequence to the
	  //                       previous lexicographic permutation.
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
	      typedef ostream_iterator<string, char, char_traits<char> >
	      StrOstreamIt;
	
	      StrVector Pattern(VECTOR_SIZE) ;
	
	      StrVectorIt start, end, it ;
	
	      StrOstreamIt outIt(cout, " ") ;
	
	      start = Pattern.begin() ;   // location of first
	                                        // element of Pattern
	
	      end = Pattern.end() ;       // one past the location last
	                                         // element of Pattern
	
	      //Initialize vector Pattern
	      Pattern[0] = "C" ;
	      Pattern[1] = "B" ;
	      Pattern[2] = "A" ;
	
	      // print content of Pattern
	      cout << "Before calling prev_permutation...\n" << "Pattern: " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << "\n\n" ;
	
	      // Generate all possible permutations
	
	      cout << "After calling prev_permutation...." << endl ;
	      while ( prev_permutation(start, end) )
	      {
	          copy(start, end, outIt) ;
	          cout << endl ;
	      }
	  }
	
	  Program Output is:
	
	  Before calling prev_permutation...
	  Pattern: C B A
	
	  After calling prev_permutation....
	  C A B
	  B C A
	  B A C
	  A C B
	  A B C
	
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
