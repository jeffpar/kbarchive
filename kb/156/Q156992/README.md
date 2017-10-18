---
layout: page
title: "Q156992: INFO: STL Sample for the Predicate Version of max_element Functi"
permalink: kb/156/Q156992/
---

## Q156992: INFO: STL Sample for the Predicate Version of max_element Functi

	Article: Q156992
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
	
	The sample code below illustrates how to use the predicate version of the
	max_element STL function in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <algorithm>
	
	Prototype
	---------
	
	     template<class InputIterator, class Compare> inline
	
	         InputIterator max_element(InputIterator first,
	                                   InputIterator last,
	                                   Compare compare)
	
	NOTE: The class/parameter names in the prototype do not match the original
	version in the header file. They have been modified to improve readability.
	
	Description
	-----------
	
	The max_element algorithm returns the location of the maximum element in the
	sequence [first, last).
	
	The predicate version of max_element uses compare function for comparisons.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // max_element.cpp : Illustrates how to use the predicates version
	  //                   of the max_element function.
	  // 
	  // Functions:
	  // 
	  //    max_element : Return the maximum element within a range.
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
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  void main()
	
	  {
	
	      const int VECTOR_SIZE = 8 ;
	
	      // Define a template class vector of int
	      typedef vector<int, allocator<int> > IntVector ;
	
	      //Define an iterator for template class vector of strings
	      typedef IntVector::iterator IntVectorIt ;
	
	      IntVector Numbers(VECTOR_SIZE) ;
	
	      IntVectorIt start, end, it, location ;
	
	      // Initialize vector Numbers
	      Numbers[0] = 4 ;
	      Numbers[1] = 10;
	      Numbers[2] = 10 ;
	      Numbers[3] = 30 ;
	      Numbers[4] = 69 ;
	      Numbers[5] = 70 ;
	      Numbers[6] = 96 ;
	      Numbers[7] = 100;
	
	      start = Numbers.begin() ;   // location of first
	                                  // element of Numbers
	
	      end = Numbers.end() ;       // one past the location
	                                  // last element of Numbers
	
	      // print content of Numbers
	      cout << "Numbers { " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	
	      // return the maximum element in the Numbers
	      location = max_element(start, end, less<int>()) ;
	
	      cout << "The maximum element in Numbers is: "
	          << *location << endl ;
	
	  }
	
	Program Output is:
	
	Numbers { 4 10 10 30 69 70 96 100  }
	
	The maximum element in Numbers is: 100
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample max_element kbSTL kbTemplate
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
