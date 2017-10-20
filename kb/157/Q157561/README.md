---
layout: page
title: "Q157561: STL Sample for the Predicate Version of the merge Function"
permalink: /kb/157/Q157561/
---

## Q157561: STL Sample for the Predicate Version of the merge Function

{% raw %}

	Article: Q157561
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
	
	The sample code below illustrates how to use the predicate version of the merge
	STL function in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <algorithm>
	
	Prototype
	---------
	
	     template<class InputIterator1,
	              class InputIterator2,
	              class OutputIterator
	              class Compare> inline
	     OutputIterator merge( InputIterator1 first1,
	                           InputIterator1 last1,
	                           InputIterator2 first2,
	                           InputIterator2 last2
	                           OutputIterator result,
	                           Compare compare )
	
	NOTE: The class/parameter names in the prototype do not match the original
	version in the header file. They have been modified to improve readability.
	
	Description
	-----------
	
	The merge algorithm merges two sorted sequences: [first1..last1) and
	[first2..last2) into a single sorted sequence starting at result.
	
	This version assumes that the ranges [first1..last1) and [first2..last2) are
	sorted using compare function. If both ranges contain equal values, the value
	from the first range will be stored first.
	
	The result of merging overlapping ranges is undefined.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // merge.cpp : Illustrates how to use predicate version of the merge
	  //             function.
	  // 
	  // Functions:
	  // 
	  //    merge : Merge two sorted sequences
	  //            into a single sorted list.
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
	  #include <vector>
	  #include <list>
	  #include <deque>
	  using namespace std;
	
	  void main()
	  {
	      const int MAX_ELEMENTS = 8 ;
	
	      // Define a template class vector of int
	      typedef vector<int, allocator<int> > IntVector ;
	
	      //Define an iterator for template class vector of ints
	      typedef IntVector::iterator IntVectorIt ;
	
	      IntVector NumbersVector(MAX_ELEMENTS) ;
	
	      IntVectorIt startv, endv, itv ;
	
	      // Define a template class list of int
	      typedef list<int, allocator<int> > IntList ;
	
	      //Define an iterator for template class list of ints
	      typedef IntList::iterator IntListIt ;
	
	      IntList NumbersList ;
	
	      IntListIt first, last, itl ;
	
	      // Define a template class deque of int
	      typedef deque<int, allocator<int> > IntDeque ;
	
	      //Define an iterator for template class deque of ints
	      typedef IntDeque::iterator IntDequeIt ;
	
	      IntDeque NumbersDeque(2 * MAX_ELEMENTS) ;
	
	      IntDequeIt itd ;
	
	      // Initialize vector NumbersVector
	      NumbersVector[0] = 4 ;
	      NumbersVector[1] = 10;
	      NumbersVector[2] = 70 ;
	      NumbersVector[3] = 10 ;
	      NumbersVector[4] = 30 ;
	      NumbersVector[5] = 69 ;
	      NumbersVector[6] = 96 ;
	      NumbersVector[7] = 100;
	
	      startv = NumbersVector.begin() ;   // location of first
	                                         // element of NumbersVector
	
	      endv = NumbersVector.end() ;  // one past the location
	                                    // last element of NumbersVector
	
	      // sort NumbersVector, merge requires the sequences
	      // to be sorted
	      sort(startv, endv, less<int>()) ;
	
	      // print content of NumbersVector
	      cout << "NumbersVector { " ;
	      for(itv = startv; itv != endv; itv++)
	          cout << *itv << " " ;
	      cout << " }\n" << endl ;
	
	      // Initialize vector NumbersList
	      for(int i = 0; i < MAX_ELEMENTS; i++)
	          NumbersList.push_back(i) ;
	
	      first = NumbersList.begin() ;   // location of first
	                                       // element of NumbersList
	
	      last = NumbersList.end() ;  // one past the location
	                                  // last element of NumbersList
	
	      // print content of NumbersList
	      cout << "NumbersList { " ;
	      for(itl = first; itl != last; itl++)
	          cout << *itl << " " ;
	      cout << " }\n" << endl ;
	
	      // merge the elements of NumbersVector
	      // and NumbersList and place the
	      // results in NumbersDeque
	      merge(startv, endv, first, last, NumbersDeque.begin(), less<int>()) ;
	
	      cout << "After calling merge\n" << endl ;
	
	      // print content of NumbersDeque
	      cout << "NumbersDeque { " ;
	      for(itd = NumbersDeque.begin();
	          itd != NumbersDeque.end(); itd++)
	          cout << *itd << " " ;
	      cout << " }\n" << endl ;
	  }
	  Program Output is:
	
	  NumbersVector { 4 10 10 30 69 70 96 100  }
	
	  NumbersList { 0 1 2 3 4 5 6 7  }
	
	  After calling merge
	
	  NumbersDeque { 0 1 2 3 4 4 5 6 7 10 10 30 69 70 96 100  }
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL merge
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : winnt:
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
