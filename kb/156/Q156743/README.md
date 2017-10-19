---
layout: page
title: "Q156743: INFO: STL Sample for the replace_if Function"
permalink: /kb/156/Q156743/
---

## Q156743: INFO: STL Sample for the replace_if Function

	Article: Q156743
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
	
	The sample code below illustrates how to use the replace_if STL function in
	Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <algorithm>
	
	     template<class ForwardIterator, class Predicate, class Type> inline
	     void replace_if(ForwardIterator first,
	
	                     ForwardIterator last,
	                     Predicate pred,
	                     const Type& value)
	
	NOTE: The class/parameter names in the prototype do not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The replace_if algorithm replaces all elements from the range [first, last) that
	cause the predicate to return true with value.
	
	Sample Code
	-----------
	
	NOTE: In the first line of the sample code section, /GX is equivalent to /EHsc in
	VC++ .NET and is set by default.
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // replace_if.cpp : Illustrates how to use the replace_if function.
	  // 
	  // Functions:
	  // 
	  //    replace_if - Replace all elements from the sequence that
	  //                 satisfies a predicate with a specified value.
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
	  #include <functional>
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
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
	
	      //Initialize vector Numbers
	      Numbers[0] = 10 ;
	      Numbers[1] = 20 ;
	      Numbers[2] = 10 ;
	      Numbers[3] = 15 ;
	      Numbers[4] = 12 ;
	      Numbers[5] = 7 ;
	      Numbers[6] = 9 ;
	      Numbers[7] = 10 ;
	
	      cout << "Before calling replace_if" << endl ;
	
	      // print content of Numbers
	      cout << "Numbers { " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	
	      // replace all elements from Numbers that are <= 10 with 4
	       replace_if(start, end, bind2nd(less_equal<int>(), 10), 4 ) ;
	
	      cout << "After calling replace_if" << endl ;
	
	      // print content of Numbers
	      cout << "Numbers { " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	
	  }
	
	Program Output is:
	
	Before calling replace_if
	Numbers { 10 20 10 15 12 7 9 10  }
	
	After calling replace_if
	Numbers { 4 20 4 15 12 4 4 4  }
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample remove_if
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCNET kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
