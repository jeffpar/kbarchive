---
layout: page
title: "Q160740: STL Sample for the vector::(capacity size push_back) Functions"
permalink: /kb/160/Q160740/
---

## Q160740: STL Sample for the vector::(capacity size push_back) Functions

{% raw %}

	Article: Q160740
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600 kbDSupport
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
	
	The sample code below illustrates how to use the vector::size, vector::capacity,
	and vector::push_back functions.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <vector>
	
	Prototypes
	----------
	
	     size_type vector::capacity() const
	     size_type vector::size() const
	     void vector::push_back(const _TYPE& _X)
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	- The sample declares an empty vector of integers.
	
	- It outputs the size and capacity of the vector.
	
	- It adds a single element to the vector, then outputs the size and capacity
	  again.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // Capacity.cpp  - Illustrates vector::capacity and vector::size
	  // 
	  // Functions:
	  // 
	  //    vector::capacity  - Return # of elements for which memory has
	  //                        been allocated.
	  // 
	  //    vector::size      - Return # of elements in the vector
	  // 
	  //    vector::push_back - Append (insert) an element to the end of a
	  //                        vector, allocating memory for it if necessary.
	  // 
	  // Written by Tom Campbell
	  // of Microsoft Corporation
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  // The debugger can't handle symbols more than 255 characters long.
	  // STL often creates symbols longer than that.
	  // This disables the warning issued when symbols are longer than 255 chars.
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
	
	      // Show size (current # of elements) and capacity (# of elements
	      // there's room for) of the empty vector.
	      cout << endl << "Vector with no elements:" << endl;
	      cout << "theVector's size is: " << theVector.size() << endl;
	      cout << "theVector's capacity is: " << theVector.capacity() << endl;
	
	      // Add one element to the end of the vector, an int with the value 42.
	      // Allocate memory if necessary.
	      theVector.push_back(42) ;
	
	      // Show size & capacity after adding an element to the vector.
	      cout << endl << "After adding 1 element:" << endl;
	      cout << "theVector's size is: " << theVector.size() << endl;
	      cout << "theVector's capacity is: " << theVector.capacity() << endl;
	  }
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++: Standard C++ Library
	Reference.
	
	Additional query words: STL STLSample vector capacity size push_back
	
	======================================================================
	Keywords          : kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
