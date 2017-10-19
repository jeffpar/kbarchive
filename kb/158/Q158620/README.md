---
layout: page
title: "Q158620: STL Sample for the vector::(push_back, pop_back) Functions"
permalink: /kb/158/Q158620/
---

## Q158620: STL Sample for the vector::(push_back, pop_back) Functions

	Article: Q158620
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbtemplate kbSTL kbVC500 kbVC600 kbDSupport
	Last Modified: 04-MAY-2002
	
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
	
	The following sample code illustrates how to use the vector::push_back and
	vector::pop_back STL functions in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <vector>
	
	Prototypes
	----------
	
	     template<class _TYPE, class _A>
	     void vector::push_back(const _TYPE& X);
	
	     template<class _TYPE, class _A>
	     void vector::pop_back();
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The sample declares an empty vector of integers. It adds three integers to the
	vector, and then deletes one. Finally, it generates the remaining elements in
	the vector.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // Pushpop.cpp: Illustrates how to use the push and pop member
	  //              functions of the vector container.
	  // 
	  // Functions:
	  // 
	  //    vector::push_back - Appends (inserts) an element to the end of a
	  //                        vector, allocating memory for it if necessary.
	  // 
	  //    vector::pop_back -  Erases the last element of the vector.
	  // 
	  //    vector::begin - Returns an iterator to start traversal of the vector.
	  // 
	  //    vector::end - Returns an iterator for the last element of the vector.
	  // 
	  //    vector::iterator - Traverses the vector.
	  // 
	  // Written by Tom Campbell
	  // of Microsoft Corporation
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  // The debugger can't handle symbols more than 255 characters long.
	  // STL often creates symbols longer than that.
	  // When symbols are longer than 255 characters, the warning is disabled.
	
	  #pragma warning(disable:4786)
	
	  #include <iostream>
	  #include <vector>
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  typedef vector<int, allocator<int> > INTVECTOR;
	
	  void main()
	
	  {
	
	      // Dynamically allocated vector begins with 0 elements.
	      INTVECTOR theVector;
	
	      // Iterator is used to loop through the vector.
	      INTVECTOR::iterator theIterator;
	
	      // Add one element to the end of the vector, an int with the value 42.
	      // Allocate memory if necessary.
	      theVector.push_back(42) ;
	
	      // Add two more elements to the end of the vector.
	      // theVector will contain [ 42, 1, 109 ].
	      theVector.push_back(1) ;
	      theVector.push_back(109) ;
	
	      // Erase last element in vector.
	      theVector.pop_back();
	
	      // Output contents of theVector. Shows [ 42, 1 ]
	      cout << "theVector [ " ;
	      for (theIterator = theVector.begin(); theIterator != theVector.end();
	           theIterator++)
	      {
	          cout << *theIterator;
	          if (theIterator != theVector.end()-1) cout << ", ";
	                                                // cosmetics for the output
	      }
	      cout << " ]" << endl ;
	
	  }
	
	Program Output
	--------------
	
	  theVector [ 42, 1 ]
	
	REFERENCES
	==========
	
	Visual C++ Books Online: Visual C++ Books; C/C++; Standard C++ Library Reference
	
	Additional query words: STL STLSample
	
	======================================================================
	Keywords          : kbcode kbtemplate kbSTL kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
