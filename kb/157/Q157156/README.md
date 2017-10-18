---
layout: page
title: "Q157156: STL Sample for the Predicate Versions of the heap Functions"
permalink: kb/157/Q157156/
---

## Q157156: STL Sample for the Predicate Versions of the heap Functions

	Article: Q157156
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
	
	The sample code below illustrates how to use the predicate versions of the
	make_heap, sort_heap, push_heap, pop_heap, begin, and end STL functions in
	Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <algorithm>
	
	Prototype
	---------
	
	     template<class RandomAccessIterator, class Compare> inline
	        void make_heap(RandomAccessIterator first,
	                        RandomAccessIterator last,
	                        Compare compare)
	
	     template<class RandomAccessIterator, class Compare> inline
	        void sort_heap(RandomAccessIterator first,
	                        RandomAccessIterator last,
	                        Compare compare)
	
	     template<class RandomAccessIterator, class Compare> inline
	        void push_heap(RandomAccessIterator first,
	                        RandomAccessIterator last,
	                        Compare compare)
	
	     template<class RandomAccessIterator, class Compare> inline
	        void pop_heap(RandomAccessIterator first,
	                       RandomAccessIterator last,
	                       Compare compare)
	
	NOTE: The class/parameter names in the prototype do not match the original
	version in the header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	A heap is a sequence of elements organized like a binary tree. Each heap element
	corresponds to a tree node. The first value in the sequence [first..last) is the
	root, and is ordered by the predicate. For example, if the predicate is
	greater<int>, every element in the heap satisfies the following; every
	element is greater than or equal to its parent. The smallest element is stored
	in the root, and all children hold progressively larger values.
	
	The make_heap function converts the range [first..last) into a heap.
	
	The sort_heap function sorts a "heapified" sequence that was created using the
	make_heap function.
	
	The push_heap function inserts a new value into the heap.
	
	The pop_heap function swaps the first and last elements in the heap specified by
	[first, last), then reduces the length of the sequence by one before restoring
	the heap property.
	
	The predicate versions of the heap functions use the compare function for
	comparisons.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // heap_functions.cpp : Illustrates how to use the predicate versions
	  //                      of the make_heap, sort_heap, push_heap
	  //                      and pop_heap functions.
	  // 
	  // Functions:
	  // 
	  //    make_heap : Convert a sequence to a heap.
	  //    sort_heap : Sort a heap.
	  //    push_heap : Insert an element in a heap.
	  //    pop_heap  : Remove the top element from a heap.
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
	     IntVectorIt it ;
	
	     // Initialize vector Numbers
	     Numbers[0] = 4 ;
	     Numbers[1] = 10;
	     Numbers[2] = 70 ;
	     Numbers[3] = 10 ;
	     Numbers[4] = 30 ;
	     Numbers[5] = 69 ;
	     Numbers[6] = 96 ;
	     Numbers[7] = 100;
	
	     // print content of Numbers
	     cout << "Numbers { " ;
	     for(it = Numbers.begin(); it != Numbers.end(); it++)
	        cout << *it << " " ;
	     cout << " }\n" << endl ;
	
	     // convert Numbers into a heap
	     make_heap(Numbers.begin(), Numbers.end(), greater<int>()) ;
	     cout << "After calling make_heap\n" << endl ;
	
	     // print content of Numbers
	     cout << "Numbers { " ;
	     for(it = Numbers.begin(); it != Numbers.end(); it++)
	        cout << *it << " " ;
	     cout << " }\n" << endl ;
	
	     // sort the heapified sequence Numbers
	     sort_heap(Numbers.begin(), Numbers.end(), greater<int>()) ;
	     cout << "After calling sort_heap\n" << endl ;
	
	     // print content of Numbers
	     cout << "Numbers { " ;
	     for(it = Numbers.begin(); it != Numbers.end(); it++)
	        cout << *it << " " ;
	     cout << " }\n" << endl ;
	
	     make_heap(Numbers.begin(), Numbers.end(), greater<int>()) ;
	     //insert an element in the heap
	     Numbers.push_back(7) ;
	     push_heap(Numbers.begin(), Numbers.end(), greater<int>()) ;
	     cout << "After calling push_heap()\n" << endl;
	
	     // print content of Numbers
	     cout << "Numbers { " ;
	     for(it = Numbers.begin(); it != Numbers.end(); it++)
	        cout << *it << " " ;
	     cout << " }\n" << endl ;
	
	     //remove the root element from the heap Numbers
	     pop_heap(Numbers.begin(), Numbers.end(), greater<int>()) ;
	     cout << "After calling pop_heap\n" << endl ;
	
	     // print content of Numbers
	     cout << "Numbers { " ;
	     for(it = Numbers.begin(); it != Numbers.end(); it++)
	        cout << *it << " " ;
	     cout << " }\n" << endl ;
	  }
	
	Program Output is:
	
	Numbers { 4 10 70 10 30 69 96 100  }
	
	After calling make_heap
	
	Numbers { 4 10 69 10 30 70 96 100  }
	
	After calling sort_heap
	
	Numbers { 100 96 70 69 30 10 10 4  }
	
	After calling push_heap()
	
	Numbers { 4 7 10 30 100 10 70 96 69  }
	
	After calling pop_heap
	
	Numbers { 7 30 10 69 100 10 70 96 4  }
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL make_heap sort_heap push_heap pop_heap begin end
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : winnt:
	Issue type        : kbhowto
	
	=============================================================================
	
