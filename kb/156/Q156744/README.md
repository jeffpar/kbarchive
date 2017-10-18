---
layout: page
title: "Q156744: INFO: STL Sample for the replace_copy_if Function"
permalink: kb/156/Q156744/
---

## Q156744: INFO: STL Sample for the replace_copy_if Function

	Article: Q156744
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
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the replace_copy_if STL function in
	Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <algorithm>
	
	Prototype
	---------
	
	     template<class ForwardIterator, class OutputIterator, class Predicate,
	              class Type> inline
	
	     OutputIterator replace_copy_if(ForwardIterator first,
	
	                                    ForwardIterator last,
	                                    OutputIterator result,
	                                    Predicate pred,
	                                    const T& new_value)
	
	NOTE: The class/parameter names in the prototype do not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The replace_copy_if algorithm copies all elements from the range [first, last) to
	a same-size range starting at result, replacing all occurrences that cause the
	predicate to return true with new_value in the resulting sequence. It returns an
	iterator positioned immediately after the last new element in the resulting
	sequence.
	
	Sample Code
	-----------
	
	NOTE: The first line in the sample code section says:
	
	  // Compile options needed: /GX
	
	Add this comment right after this line: In VC++ .NET, /EHsc is set by default and
	is equivalent to /GX.
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // replace_copy_if.cpp : Illustrates how to use the replace_copy_if
	  //                       function.
	  // 
	  // Functions:
	  // 
	  //    replace_copy_if - Copy the elements of a sequence to another
	  //                      same-size sequence replacing any elements
	  //                      that satisfies a predicate, with another value.
	  // 
	  // Written by Kalindi Sanghrajka
	  // of Microsoft Product Support Services,
	  // Software Core Developer Support.
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  // disable warning C4786: symbol greater than 255 character,
	  // okay to ignore
	
	  #pragma warning(disable: 4786)
	
	  // disable warning C4244: possible loss of data,
	  // okay to ignore
	
	  #pragma warning(disable: 4244)
	
	  #include <iostream>
	  #include <vector>
	  #include <algorithm>
	  #include <functional>
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  void main()
	
	  {
	
	      const int MAX_ELEMENTS = 8 ;
	
	      // Define a template class vector of integers
	      typedef vector<int, allocator<int> > IntVector ;
	
	      //Define an iterator for template class vector of integer
	      typedef IntVector::iterator IntVectorIt ;
	
	      //vector containing numbers
	      IntVector Numbers(MAX_ELEMENTS), Result(MAX_ELEMENTS) ;
	
	      IntVectorIt start, end, it, last, resultIt ;
	
	      //Initialize vector Numbers
	      Numbers[0] = 10 ;
	      Numbers[1] = 20 ;
	      Numbers[2] = 10 ;
	      Numbers[3] = 15 ;
	      Numbers[4] = 12 ;
	      Numbers[5] = 7 ;
	      Numbers[6] = 9 ;
	      Numbers[7] = 10 ;
	
	      start = Numbers.begin() ;   // location of first
	                                  // element of Numbers
	
	      end = Numbers.end() ;       // one past the location
	                                  // last element of Numbers
	
	      resultIt = Result.begin() ; // location of first
	                                  // element of Result
	
	      // print content of Numbers
	      cout << "Numbers { " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	
	      // copy all elements from Numbers to Result
	      // replacing any item that >= 10 with 30
	      last = replace_copy_if(start, end, resultIt,
	                             bind2nd(greater_equal<int>(), 10), 30) ;
	
	      //print number of elements copied to Result
	      cout << "Total number of elements copied to Result = "
	          << last - resultIt << endl ;
	
	      start = Result.begin() ;   // location of first
	                                  // element of Result
	
	      end = Result.end() ;       // one past the location
	                                 // last element of Result
	
	      // print content of Result
	      cout << "Result  { " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	
	  }
	
	Program Output is:
	
	Numbers { 10 20 10 15 12 7 9 10  }
	
	Total number of elements copied to Result = 8
	Result  { 30 30 30 30 30 7 9 30  }
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample replace_copy_if
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
