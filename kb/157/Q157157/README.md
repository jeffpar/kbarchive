---
layout: page
title: "Q157157: STL Sample for the heap Functions"
permalink: /kb/157/Q157157/
---

## Q157157: STL Sample for the heap Functions

{% raw %}

	Article: Q157157
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
	
	The sample code below illustrates how to use the make_heap, sort_heap,
	push_heap, pop_heap, begin, and end STL functions in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <algorithm>
	
	Prototype
	---------
	
	     template<class RandomAccessIterator> inline
	         void make_heap(RandomAccessIterator first,
	                        RandomAccessIterator last)
	
	     template<class RandomAccessIterator> inline
	         void sort_heap(RandomAccessIterator first,
	                        RandomAccessIterator last)
	
	     template<class RandomAccessIterator> inline
	         void push_heap(RandomAccessIterator first,
	                        RandomAccessIterator last)
	
	     template<class RandomAccessIterator> inline
	         void pop_heap(RandomAccessIterator first,
	                        RandomAccessIterator last)
	
	NOTE: The class/parameter names in the prototype do not match the original
	version in the header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	A heap is a sequence of elements organized like a binary tree. Each heap element
	corresponds to a tree node. The first value in the sequence [first..last) is the
	root, and is the largest value in the heap. Every element in the heap satisfies
	the following: every element is less than or equal to its parent. The largest
	element is stored in the root, and all children hold progressively smaller
	values.
	
	The make_heap functions converts the range [first..last) into a heap.
	
	The sort_heap function sorts a "heapified" sequence that was created using the
	make_heap function.
	
	The push_heap function inserts a new value into the heap.
	
	The pop_heap function swaps the first and last elements in the heap specified by
	[first, last), then reduces the length of the sequence by one before restoring
	the heap property.
	
	The non-predicate versions of the heap functions use the operator< for
	comparisons.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // heap_functions.cpp : Illustrates how to use the
	  //                      make_heap, sort_heap, push_heap
	  //                      and pop_heap functions.
	  // 
	  // Functions:
	  // 
	  //    make_heap : convert a sequence to a heap
	  //    sort_heap : sort a heap
	  //    push_heap : insert an element in a heap
	  //    pop_heap  : remove the top element from a heap
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
	      make_heap(Numbers.begin(), Numbers.end()) ;
	
	      cout << "After calling make_heap\n" << endl ;
	
	      // print content of Numbers
	      cout << "Numbers { " ;
	      for(it = Numbers.begin(); it != Numbers.end(); it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	
	      // sort the heapified sequence Numbers
	      sort_heap(Numbers.begin(), Numbers.end()) ;
	
	      cout << "After calling sort_heap\n" << endl ;
	
	      // print content of Numbers
	      cout << "Numbers { " ;
	      for(it = Numbers.begin(); it != Numbers.end(); it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	
	      //insert an element in the heap
	      Numbers.push_back(7) ;
	      push_heap(Numbers.begin(), Numbers.end()) ;
	
	      // you need to call make_heap to re-assert the
	      // heap property
	      make_heap(Numbers.begin(), Numbers.end()) ;
	
	      cout << "After calling push_heap and make_heap\n" << endl ;
	
	      // print content of Numbers
	      cout << "Numbers { " ;
	      for(it = Numbers.begin(); it != Numbers.end(); it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	
	      // remove the root element from the heap Numbers
	      pop_heap(Numbers.begin(), Numbers.end()) ;
	
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
	
	Numbers { 100 30 96 10 4 69 70 10  }
	
	After calling sort_heap
	
	Numbers { 4 10 10 30 69 70 96 100  }
	
	After calling push_heap and make_heap
	
	Numbers { 100 69 96 30 4 70 10 10 7  }
	
	After calling pop_heap
	
	Numbers { 96 69 70 30 4 7 10 10 100  }
	
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
	

{% endraw %}
