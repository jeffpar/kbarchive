---
layout: page
title: "Q156994: INFO: STL Sample for the random_shuffle Function"
permalink: /kb/156/Q156994/
---

## Q156994: INFO: STL Sample for the random_shuffle Function

	Article: Q156994
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbVC420 kbVC500 kbVC600 kbDSupport
	Last Modified: 27-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the random_shuffle STL function in
	Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <algorithm>
	
	Prototype
	---------
	
	     template<class RandomAccessIterator, class Predicate> inline
	     void random_shuffle(RandomAccessIterator first,
	                         RandomAccessIterator last,
	                         Predicate pred)
	
	NOTE: The class/parameter names in the prototype do not match the original
	version in the header file. They have been modified to improve readability.
	
	Description
	-----------
	
	The random_shuffle algorithm shuffles the elements of a sequence [first..last) in
	a random order.
	
	The predicate version uses the pred function to generate the indices of the
	elements to swap. The pred has to be a function object that takes a parameter n
	and returns an integral random number in the range 0 - (n - 1).
	
	The predicate version of random_shuffle uses operator= to perform swaps.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // random_shuffle.cpp: Illustrates how to use the predicate version
	  //                      of the random_shuffle function.
	  // 
	  // Functions:
	  // 
	  //    random_shuffle: Shuffle the elements in a random order.
	  // 
	        Rand: Given n, generates an integral random number in the
	  //          in the range 0 - (n - 1).
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
	
	  // return an integral random number in the range 0 - (n - 1)
	  int Rand(int n)
	  {
	      return rand() % n ;
	  }
	
	  void main()
	  {
	      const int VECTOR_SIZE = 8 ;
	
	      // Define a template class vector of int
	      typedef vector<int, allocator<int> > IntVector ;
	
	      //Define an iterator for template class vector of strings
	      typedef IntVector::iterator IntVectorIt ;
	
	      IntVector Numbers(VECTOR_SIZE) ;
	
	      IntVectorIt start, end, it ;
	
	      // Initialize vector Numbers
	      Numbers[0] = 4 ;
	      Numbers[1] = 10;
	      Numbers[2] = 70 ;
	      Numbers[3] = 30 ;
	      Numbers[4] = 10;
	      Numbers[5] = 69 ;
	      Numbers[6] = 96 ;
	      Numbers[7] = 100;
	
	      start = Numbers.begin() ;   // location of first
	                                  // element of Numbers
	
	      end = Numbers.end() ;       // one past the location
	                                  // last element of Numbers
	
	      cout << "Before calling random_shuffle:\n" << endl ;
	
	      // print content of Numbers
	      cout << "Numbers { " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	
	      // shuffle the elements in a random order.
	      // the pointer_to_unary_function adapter converts a function to a
	      // function object.
	      random_shuffle(start, end, pointer_to_unary_function<int, int>(Rand));
	
	      cout << "After calling random_shuffle:\n" << endl ;
	
	      cout << "Numbers { " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	  }
	
	Program Output is:
	
	Before calling random_shuffle
	
	Numbers { 4 10 70 30 10 69 96 100  }
	
	After calling random_shuffle
	
	Numbers { 10 30 4 70 96 100 69 10  }
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample random_shuffle kbtemplate kbSTL
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
