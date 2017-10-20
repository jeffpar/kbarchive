---
layout: page
title: "Q156079: STL Sample for the Generate Function"
permalink: /kb/156/Q156079/
---

## Q156079: STL Sample for the Generate Function

{% raw %}

	Article: Q156079
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2
	Operating System(s): 
	Keyword(s): _IK
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the generate STL function in Visual
	C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	  <algorithm>
	
	Prototype
	---------
	
	  template<class InputIterator, class Function> inline
	      Function for_each(InputIterator first,
	                        InputIterator last,
	                        Function F)
	  template<class ForwardIterator, class Generator> inline
	   void generate(ForwardIterator first, ForwardIterator last, Generator gen)
	
	NOTE: The class/parameter names in the prototype do not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The Generate algorithm traverses the range [first, last + 1), assigning to each
	element the value returned by gen. Generate modifies the elements in the
	specified range.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // generate.cpp : Illustrates how to use the generate function.
	  // 
	  // Functions:
	  // 
	  //   generate - Fill a sequence using a generator function
	  //   Fibonacci - return the next Fibonacci number in the
	  //               Fibonacci series.
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
	  using namespace std;
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
	      // Fibonnaci numbers using the Fibonacci function
	      generate(start, end, Fibonacci) ;
	      // print content of Numbers
	      cout << "Numbers { " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	  }
	
	Program Output is:
	Numbers { 1 1 2 3 5 8 13 21 }
	
	REFERENCES
	==========
	
	Visual C++ Books Online; click "Visual C++ Books," "C/C++," then "Standard C++
	Library Reference."
	
	Additional query words: STL generate
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : winnt:4.2
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
