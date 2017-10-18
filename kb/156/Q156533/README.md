---
layout: page
title: "Q156533: INFO: STL Sample for the remove_copy Function"
permalink: kb/156/Q156533/
---

## Q156533: INFO: STL Sample for the remove_copy Function

	Article: Q156533
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
	
	The sample code below illustrates how to use the remove_copy, begin, and end STL
	functions in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <algorithm>
	
	Prototype
	---------
	
	     template<class ForwardIterator, class OutputIterator, class Type> inline
	     OutputIterator remove_copy(ForwardIterator first,
	
	                                ForwardIterator last,
	                    OutputIterator result,
	                       const T& value)
	
	NOTE: The class/parameter names in the prototype do not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The remove_copy algorithm copies all elements from the range (first, last) to the
	range starting at result, skipping any element that matches value. It returns an
	iterator positioned immediately after the last new element.
	
	Sample Code
	-----------
	
	NOTE: The first line in the sample code section says:
	
	  // Compile options needed: /GX
	
	In VC++ .NET, /EHsc is set by default and is equivalent to /GX.
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // remove_copy.cpp : Illustrates how to use the remove_copy function.
	  // 
	  // Functions:
	  // 
	  //   remove_copy - copy the elements of a sequence to another sequence
	  //                 eliminating any elements that match value.
	  //   begin - Returns an iterator that points to the first element in a
	  //           sequence.
	  //   end - Returns an iterator that points one past the end of a sequence.
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
	     // skipping any item that equals 10
	     last = remove_copy(start, end, resultIt, 10) ;
	
	     //print number of elements copied to Result
	     cout << "Total number of elements copied to Result = "
	        << last - resultIt << endl ;
	
	     start = Result.begin() ;   // location of first
	
	                                 // element of Result
	
	     end = Result.end() ;       // one past the location
	
	                                // last element of Result
	
	     // print content of Result
	     cout << "Result { " ;
	     for(it = start; it != end; it++)
	        cout << *it << " " ;
	     cout << " }\n" << endl ;
	
	  }
	
	Program Output is:
	
	Numbers { 10 20 10 15 12 7 9 10  }
	
	Total number of elements copied to Result = 5
	Result { 20 15 12 7 9 0 0 0  }
	
	REFERENCES
	==========
	
	Visual C++, version 4.2, Visual C++ Books Online; click Visual C++ Books:,
	C/C++, and then Standard C++ Library Reference.
	
	Additional query words: STL STLSample remove_copy begin end
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
