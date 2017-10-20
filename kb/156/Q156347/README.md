---
layout: page
title: "Q156347: INFO: STL Sample for the generate_n Function"
permalink: /kb/156/Q156347/
---

## Q156347: INFO: STL Sample for the generate_n Function

{% raw %}

	Article: Q156347
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
	
	The sample code below illustrates how to use the generate_n, begin, end, and
	size STL functions in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <algorithm>
	
	Prototype
	---------
	
	     template<class OutputIterator, class Size, class Generator> inline
	
	           void generate_n(OutputIterator first, Size n, Generator gen)
	
	NOTE: The class/parameter names in the prototype do not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The generate_n algorithm traverses the range [first, first + n) assigning to each
	element the value returned by gen. Note that generate modifies the elements in
	the specified range.
	
	Sample Code
	-----------
	
	NOTE: In the first line of the sample code section, /GX is equivalent to /EHsc in
	VC++ .NET and is set by default.
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // generate_n.cpp : Illustrates how to use the generate_n function.
	  // 
	  // Functions:
	  // 
	  //   generate_n  - Fill a specified number of elements of a sequence
	  //                 using a generator function.
	  // 
	  //   begin       - Returns an iterator that points to the first element
	  //                 in a sequence.
	  // 
	  //   end         - Returns an iterator that points one past the end of
	  //                 a sequence.
	  // 
	  //   size        - Returns the length of a sequence.
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
	
	      const int VECTOR_SIZE = 15 ;
	
	      // Define a template class vector of integers
	      typedef vector<int, allocator<int> > IntVector ;
	
	      //Define an iterator for template class vector of integer
	      typedef IntVector::iterator IntVectorIt ;
	
	      IntVector Numbers(VECTOR_SIZE) ;   //vector containing numbers
	
	      IntVectorIt start, end, it ;
	
	      int i ;
	
	      //Initialize vector Numbers
	      for(i = 0; i < VECTOR_SIZE; i++)
	          Numbers[i] = i * i ;
	
	      start = Numbers.begin() ;   // location of first
	                                  // element of Numbers
	
	      end = Numbers.end() ;       // one past the location
	                                  // last element of Numbers
	
	      cout << "Before calling generate_n" << endl ;
	
	      // print content of Numbers
	      cout << "Numbers { " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	
	      // fill the specified range with a series of
	      // Fibonacci numbers using the Fibonacci function
	      generate_n(start + 5, Numbers.size() - 5, Fibonacci) ;
	
	      cout << "After calling generate_n" << endl ;
	
	      // print content of Numbers
	      cout << "Numbers { " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	
	  }
	
	Program Output is:
	
	Before calling generate_n
	Numbers { 0 1 4 9 16 25 36 49 64 81 100 121 144 169 196  }
	
	After calling generate_n
	Numbers { 0 1 4 9 16 1 1 2 3 5 8 13 21 34 55  }
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample generate_n begin end size
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCNET kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
