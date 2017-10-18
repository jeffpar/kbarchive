---
layout: page
title: "Q158621: STL Sample for vector::(size, capacity, and so on) Functions"
permalink: kb/158/Q158621/
---

## Q158621: STL Sample for vector::(size, capacity, and so on) Functions

	Article: Q158621
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600 kbDSupport
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
	
	The following sample code illustrates how to use the vector::reserve,
	vector::max_size, vector::resize, and vector::capacity STL functions in Visual
	C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <vector>
	
	Prototypes
	----------
	
	     template<class _TYPE, class _A>
	     void vector::reserve(size_type _N);
	
	     template<class _TYPE, class _A>
	     size_type vector::max_size() const;
	
	     template<class _TYPE, class _A>
	     void vector::resize(size_type _N, _TYPE _X = _TYPE());
	
	     template<class _TYPE, class _A>
	     size_type vector::capacity() const;
	
	     template<class _TYPE, class _A>
	     size_type vector::size() const;
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The sample declares an empty vector of integers. It adds a single integer element
	to the vector, and then shows information about the vector's size, maximum size,
	and capacity. It reserves storage for 1000 elements and displays the same
	information about the vector. Finally, it resizes the vector to 2000 elements,
	and then displays the information.
	
	Sample Code
	-----------
	
	NOTE: The first line in the sample code section says:
	
	  // Compile options needed: /GX
	
	In VC++ .NET, /EHsc is set by default and is equivalent to /GX.
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  //    Remax.cpp: Illustrates vector::reserve, vector::max_size,
	  //               vector::resize, vector::resize, and vector::capacity.
	  // 
	  // Functions:
	  // 
	  //    vector::max_size - Returns maximum number of elements vector could
	  //                       hold.
	  // 
	  //    vector::capacity - Returns number of elements for which memory has
	  //                       been allocated.
	  // 
	  //    vector::size - Returns number of elements in the vector.
	  // 
	  //    vector::resize - Reallocates memory for vector, preserves its
	  //                     contents if new size is larger than existing size.
	  // 
	  //    vector::reserve - Allocates elements for vector to ensure a minimum
	  //                      size, preserving its contents if the new size is
	  //                      larger than existing size.
	  // 
	  //    vector::push_back - Appends (inserts) an element to the end of a
	  //                        vector, allocating memory for it if necessary.
	  // 
	  // Written by Tom Campbell
	  // of Microsoft Corporation
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  // The debugger can't handle symbols more than 255 characters long.
	  // STL often creates symbols longer than that.
	  // When symbols are longer than 255 characters, the warning is disabled.
	
	  #pragma warning(disable:4786)
	
	  // disable warning C4267: possible loss of data,
	  // okay to ignore
	
	  #pragma warning(disable: 4267)
	
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
	
	      // Add one element to the end of the vector, an int with the value 42.
	      theVector.push_back(42) ;
	
	      // Show statistics about vector.
	      cout << "theVector's size is: " << theVector.size() << endl;
	      cout << "theVector's maximum size is: " << theVector.max_size()
	           << endl;
	      cout << "theVector's capacity is: " << theVector.capacity() << endl;
	
	      // Ensure there's room for at least 1000 elements.
	      theVector.reserve(1000);
	      cout << endl << "After reserving storage for 1000 elements:" << endl;
	      cout << "theVector's size is: " << theVector.size() << endl;
	      cout << "theVector's maximum size is: " << theVector.max_size()
	           << endl;
	      cout << "theVector's capacity is: " << theVector.capacity() << endl;
	
	      // Ensure there's room for at least 2000 elements.
	      theVector.resize(2000);
	      cout << endl << "After resizing storage to 2000 elements:" << endl;
	      cout << "theVector's size is: " << theVector.size() << endl;
	      cout << "theVector's maximum size is: " << theVector.max_size()
	           << endl;
	      cout << "theVector's capacity is: " << theVector.capacity() << endl;
	
	  }
	
	Program Output
	--------------
	
	theVector's size is: 1
	theVector's maximum size is: 1073741823
	theVector's capacity is: 1
	
	After reserving storage for 1000 elements:
	theVector's size is: 1
	theVector's maximum size is: 1073741823
	theVector's capacity is: 1000
	
	After resizing storage to 2000 elements:
	theVector's size is: 2000
	theVector's maximum size is: 1073741823
	theVector's capacity is: 2000
	
	REFERENCES
	==========
	
	Visual C++ Books Online: Visual C++ Books; C/C++; Standard C++ Library Reference
	
	Additional query words: STL STLSample
	
	======================================================================
	Keywords          : kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCNET kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
