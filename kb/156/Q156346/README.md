---
layout: page
title: "Q156346: INFO: STL Sample for the iter_swap Function"
permalink: /kb/156/Q156346/
---

## Q156346: INFO: STL Sample for the iter_swap Function

	Article: Q156346
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbVC420 kbVC500 kbVC600 kbDSupport
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the iter_swap, begin, and end STL
	function in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <algorithm>
	
	Prototype
	---------
	
	     template<class ForwardIterator1, class ForwardIterator2> inline
	
	         void iter_swap(ForwardIterator1 first, ForwardIterator2 second)
	
	NOTE: The class/parameter names in the prototype do not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The iter_swap algorithm swaps two elements represented by two iterators.
	
	Sample Code
	-----------
	
	NOTE: In the first line of the sample code section, /GX is equivalent to /EHsc in
	VC++ .NET and is set by default.
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // iter_swap.cpp : Illustrates how to use the iter_swap function.
	  // 
	  // Functions:
	  // 
	  //   iter_swap  - Swap two elements in a sequence represented by
	  //                two iterators.
	
	  //   begin      - Returns an iterator that points to the first element
	  //                in a sequence.
	
	  //   end        - Returns an iterator that points one past the end of
	                    a sequence.
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
	  #include <algorithm>
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  // return the next Fibonacci number in the
	  // Fibonacci series.
	  int Fibonacci(void)
	
	  {
	
	      static int r;
	      static int f1 = 0;
	      static int f2 = 1;
	      r = f1 + f2 ;
	      f1 = f2 ;
	      f2 = r ;
	      return f1 ;
	
	  }
	
	  void main()
	
	  {
	
	      const int VECTOR_SIZE = 8 ;
	
	      // Define a template class vector of integers
	      typedef vector<int, allocator<int> > IntVector ;
	
	      //Define an iterator for template class vector of integer
	      typedef IntVector::iterator IntVectorIt ;
	
	      IntVector Numbers(VECTOR_SIZE) ;   //vector containing numbers
	
	      IntVectorIt start, end, it ;
	
	      start = Numbers.begin() ;   // location of first
	                                  // element of Numbers
	
	      end = Numbers.end() ;       // one past the location
	                                  // last element of Numbers
	
	      // fill the range [first, last +1) with a series of
	      // Fibonacci numbers using the Fibonacci function
	      generate(start, end, Fibonacci) ;
	
	      cout << "Before calling iter_swap" << endl ;
	
	      // print content of Numbers
	      cout << "Numbers { " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	
	      // swap the first and last elements of the
	      // sequence using iter_swap
	      iter_swap(start, end - 1) ;
	
	      cout << "After calling iter_swap" << endl ;
	
	      // print content of Numbers
	      cout << "Numbers { " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	
	  }
	
	The Program Output is:
	
	Before calling iter_swap
	Numbers { 1 1 2 3 5 8 13 21  }
	
	After calling iter_swap
	Numbers { 21 1 2 3 5 8 13 1  }
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample generate end begin
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCNET kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
