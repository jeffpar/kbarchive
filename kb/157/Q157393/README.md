---
layout: page
title: "Q157393: INFO: STL Sample for the partial_sum Function"
permalink: /kb/157/Q157393/
---

## Q157393: INFO: STL Sample for the partial_sum Function

{% raw %}

	Article: Q157393
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
	
	The sample code below illustrates how to use partial_sum STL function in Visual
	C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     #include <numeric>
	     #include <functional>
	
	Prototype
	---------
	
	     template<class InputIterator, class OutputIterator> inline
	
	         OutputIterator partial_sum(InputIterator first, InputIterator last,
	                                    OutputIterator first2)
	
	     template<class InputIterator, class OutputIterator,
	
	              class BinaryOperator> inline
	         OutputIterator partial_sum(InputIterator first, InputIterator last,
	                                    OutputIterator first2,
	                                    BinaryOperator binary_op)
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	Assigns to every iterator i in the range [result,result + (last - first)) a value
	correspondingly equal to ((...(*first + *(first + 1)) + ...) + *(first + (i -
	result)))
	
	- or -
	
	binary_op(binary_op(..., binary_op(*first, *(first + 1)),...), *(first + (i -
	result)))
	
	In other words, *(result+i) = init + *(first+0) + *(first+1) + ... + *(first+i)
	
	Sample Code
	-----------
	
	  /////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // partial_sum.cpp : Demonstrates the use of partial_sum().
	  // 
	  // Description of partial_sum(first,last,first2,init)
	  //                partial_sum(first,last,first2,init,binary_op):
	  // 
	  //    Assigns to every iterator i in the range
	  //    [result,result + (last - first)) a value correspondingly equal to
	  //    ((...(*first + *(first + 1)) + ...) + *(first + (i - result)))
	  // 
	  //     - or -
	  // 
	  //    binary_op(binary_op(..., binary_op(*first, *(first  +  1)),...),
	  //    *(first + (i - result)))
	  // 
	  //    In other words,
	  //    *(result+i) = init + *(first+0) + *(first+1) + ... + *(first+i)
	  // 
	  // Written by Shaun Miller
	  // of Microsoft Product Support Services, Languages Developer Support.
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  /////////////////////////////////////////////////////////////////////// 
	
	  #include <iostream>
	  #include <numeric>
	  #include <functional>
	  #include <vector>
	  #include <iterator>
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  typedef vector < int, allocator < int > > IntArray;
	  typedef ostream_iterator < int, char, char_traits<char> > IntOstreamIt;
	
	  void main ()
	
	  {
	
	      IntOstreamIt itOstream(cout," ");
	
	      // Initialize the array
	      IntArray rgI;
	      for (int i=1; i<=10; i++) rgI.push_back(i);
	
	      // Print the arrays
	      cout << "Array: ";
	      copy(rgI.begin(),rgI.end(),itOstream);
	      cout << endl;
	
	      // The result array must be at least the same size as the data array
	      IntArray rgIresult(rgI.size());
	
	      // Compute the partial sum of the array
	      partial_sum(rgI.begin(),rgI.end(),rgIresult.begin());
	
	      // Print the array of partial sums
	      cout << "Array of partial sums: ";
	      copy(rgIresult.begin(),rgIresult.end(),itOstream);
	      cout << endl;
	
	      // Compute the partial product of the array
	      partial_sum(rgI.begin(),rgI.end(),rgIresult.begin(),multiplies<int>());
	
	      // Print the array of partial products
	      cout << "Array of partial products: ";
	      partial_sum(rgIresult.begin(),rgIresult.end(),itOstream);
	      cout << endl;
	
	  }
	
	The program output is:
	
	Array: 1 2 3 4 5 6 7 8 9 10
	Array of partial sums: 1 3 6 10 15 21 28 36 45 55
	Array of partial products: 1 3 9 33 153 873 5913 46233 409113 4037913
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample partial_sum kbSTL kbTemplate
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
