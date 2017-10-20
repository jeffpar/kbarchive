---
layout: page
title: "Q158613: STL Sample for the vector::(front, back) Functions"
permalink: /kb/158/Q158613/
---

## Q158613: STL Sample for the vector::(front, back) Functions

{% raw %}

	Article: Q158613
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
	
	The following sample code illustrates how to use the vector::front and
	vector::back STL functions in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <vector>
	
	Prototypes
	----------
	
	     template<class _TYPE, class _A>
	     reference vector::front();
	
	     template<class _TYPE, class _A>
	     reference vector::back();
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The sample declares an empty vector of integers with the members [100, 200, 300,
	400]. It displays the first element of the vector using vector::front to obtain
	it. It displays the last element of the vector using vector::back to obtain it.
	It displays the number of elements of the vector using vector::size.
	
	The sample erases the last element of the vector using vector::end()-1, and then
	displays the new last element using vector::back. It erases the first element of
	the vector using vector::begin, and then displays the new first element using
	vector::front.
	
	Finally, the sample displays the number of elements remaining in the vector using
	vector::size.
	
	Sample Code
	-----------
	
	NOTE: The first line in the sample code section says:
	
	  // Compile options needed: /GX
	
	In VC++ .NET, /EHsc is set by default and is equivalent to /GX.
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  //    front.cpp: Illustrates the vector::front and vector::back methods.
	  // 
	  // Functions:
	  // 
	  //    vector::front - Returns reference to first element of vector.
	  // 
	  //    vector::back - Returns reference to last element of vector.
	  // 
	  //    vector::push_back - Appends (inserts) an element to the end of a
	  //                        vector, allocating memory for it if necessary.
	  // 
	  //    vector::size - Returns number of elements in the vector.
	  // 
	  //    vector::begin - Returns an iterator to start traversal of the vector.
	  // 
	  //    vector::end - Returns an iterator for the last element of the vector.
	  // 
	  //    vector::erase - Deletes elements from a vector (single & range).
	  // 
	  // Written by Tom Campbell
	  // of Microsoft Corporation
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  // The debugger can't handle symbols more than 255 characters long.
	  // STL often creates symbols longer than that.
	  // When symbols are longer than 255 characters, the warning is issued.
	
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
	
	  const ARRAY_SIZE = 4;
	
	  void main()
	
	  {
	
	      // Dynamically allocated vector begins with 0 elements.
	      INTVECTOR theVector;
	
	      // Intialize the array to contain the members [100, 200, 300, 400]
	      for (int cEachItem = 0; cEachItem < ARRAY_SIZE; cEachItem++)
	          theVector.push_back((cEachItem + 1) * 100);
	
	      cout << "First element: " << theVector.front() << endl;
	      cout << "Last element: " << theVector.back() << endl;
	      cout << "Elements in vector: " << theVector.size() << endl;
	
	      // Delete the last element of the vector. Remember that the vector
	      // is 0-based, so theVector.end() actually points 1 element beyond
	      // the end.
	      theVector.erase(theVector.end() - 1);
	
	      cout << endl << "After erasing last element, new last element is: "
	           << theVector.back() << endl;
	
	      // Delete the first element of the vector.
	      theVector.erase(theVector.begin());
	
	      cout << "After erasing first element, new first element is: "
	           << theVector.front() << endl;
	
	      cout << "Elements in vector: " << theVector.size() << endl;
	
	  }
	
	Program Output
	--------------
	
	  First element: 100
	  Last element: 400
	  Elements in vector: 4
	
	  After erasing last element, new last element is: 300
	  After erasing first element, new first element is: 200
	  Elements in vector: 2
	
	REFERENCES
	==========
	
	Visual C++ Books Online: Visual C++ Books; C/C++; Standard C++ Library Reference
	
	Additional query words: STL STLSample
	
	======================================================================
	Keywords          : kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
