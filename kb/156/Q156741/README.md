---
layout: page
title: "Q156741: INFO: STL Sample for the replace Function"
permalink: /kb/156/Q156741/
---

## Q156741: INFO: STL Sample for the replace Function

{% raw %}

	Article: Q156741
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
	
	The sample code below illustrates how to use the remove STL function in Visual
	C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <algorithm>
	
	Prototype
	---------
	
	     template<class ForwardIterator, class Type> inline
	     void remove(ForwardIterator first,
	
	                 ForwardIterator last,
	                 const T& old_value,
	                 const T& new_value)
	
	NOTE: The class/parameter names in the prototype do not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The replace algorithm replaces all elements that match old_value from the range
	[first, last) with new_value.
	
	Sample Code
	-----------
	
	NOTE: In the first line of the sample code section, /GX is equivalent to /EHsc in
	VC++ .NET and is set by default.
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // replace.cpp : Illustrates how to use the replace function.
	  // 
	  // Functions:
	  // 
	  //    replace - Replace all elements from the sequence that match value
	  //              with another value.
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
	
	      cout << "Before calling replace" << endl ;
	
	      // print content of Numbers
	      cout << "Numbers { " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	
	      // remove all elements from Numbers that match 10
	       replace(start, end, 10, 35) ;
	
	      cout << "After calling replace, to replace all 10's with 35" << endl ;
	
	      // print content of Numbers
	      cout << "Numbers { " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << " }\n" << endl ;
	
	  }
	
	Program Output is:
	
	Before calling replace
	Numbers { 10 20 10 15 12 7 9 10  }
	
	After calling replace, to replace all 10's with 35
	Numbers { 35 20 35 15 12 7 9 35  }
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STLSample STL replace
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCNET kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
