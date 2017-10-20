---
layout: page
title: "Q156809: STL Sample for adjacent_difference, vector::push_back Function"
permalink: /kb/156/Q156809/
---

## Q156809: STL Sample for adjacent_difference, vector::push_back Function

{% raw %}

	Article: Q156809
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
	
	The sample code below illustrates how to use the adjacent_difference and
	vector::push_back STL functions in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <numeric>
	     <functional>
	
	Prototype
	---------
	
	     template<class InputIterator, class OutputIterator> inline
	
	         OutputIterator adjacent_difference(InputIterator first,
	              InputIterator last, OutputIterator result)
	
	     template<class InputIterator, class OutputIterator,
	
	              class BinaryOperator> inline
	         OutputIterator adjacent_difference(InputIterator first,
	              InputIterator last, OutputIterator result,
	              BinaryOperator binary_op)
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	Assigns to every element referred to by iterator i in the range [result + 1,
	result + (last - first)) a value correspondingly equal to *(first + (i -
	result)) - *(first + (i - result) - 1) or binary_op (*(first + (i - result)),
	*(first + (i - result) - 1)). Result gets the value of *first.
	
	Sample Code
	-----------
	
	  /////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // adj_diff.cpp : Demonstrates the use of adjacent_difference()
	  // 
	  // Description of adjacent_difference(first,last,result)
	  //                adjacent_difference(first,last,result,binary_op):
	  // 
	  //    Assigns to every element referred to by iterator i in the range
	  //    [result + 1, result + (last - first))
	  //    a value correspondingly equal to
	  //    *(first + (i - result)) - *(first + (i - result) - 1)
	  //    or
	  //    binary_op(*(first + (i - result)), *(first + (i - result) - 1)).
	  //    Result gets the value of *first.
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
	
	  typedef vector < int, allocator < int > > IntegerArray;
	  typedef ostream_iterator < int, char, char_traits<char> > IntOstreamIt;
	
	  void main ()
	
	  {
	
	      // an ostream iterator that outputs an int to cout terminated
	      // by a space
	      IntOstreamIt itOstream(cout," ");
	
	      // Initialize the array
	      // Suppose that you are taking a trip and can measure
	      // the miles traveled from your city of origin
	      // to the city you are traveling through
	      IntegerArray rgIA;
	      rgIA.push_back(5661); // San Francisco to Berlin
	      rgIA.push_back(7456); // to Cairo
	      rgIA.push_back(10995); // to Calcutta
	      rgIA.push_back(17019); // to Cape Town
	      rgIA.push_back(24394); // to Hong Kong
	      rgIA.push_back(30376); // to London
	      rgIA.push_back(35758); // to Los Angeles
	
	      // Print the array
	      copy(rgIA.begin(),rgIA.end(),itOstream);
	      cout << endl;
	
	      // Suppose that you now want the distance between each
	      // of the cities that you traveled to. You can easily
	      // find it with adjacent_difference()
	      IntegerArray rgDifferences(7);
	      IntegerArray::iterator itDifferences = rgDifferences.begin();
	      adjacent_difference(rgIA.begin(),rgIA.end(),itDifferences);
	
	      // Print the differences
	      // Remember that the first item in the differences array is
	      // not a difference, but is unused space
	      cout << "The adjacent differences are: ";
	      copy(rgDifferences.begin()+1,rgDifferences.end(),itOstream);
	      cout << endl;
	
	      // Suppose that you now want to know which adjacent differences
	      // are greater. If you have [a,b,c], you would like [1,0] if a>b
	      // and b<=c.
	      // You are using less() rather than greater() because
	      // adjacent_difference() reverses the parameters. For example,
	      // if a and b are adjacent, adjacent_difference() calls
	      // less(b,a). See the explanation at the top of this file
	      // for a more exact description.
	      IntegerArray rgGT(6);
	      IntegerArray::iterator itGT = rgGT.begin();
	      adjacent_difference(rgDifferences.begin()+1,
	                          rgDifferences.end(),
	                          itGT,
	                          less<int>());
	
	      // Print the greater thans
	      // Remember that the first item in the differences array is
	      // not a difference, but is unused space
	      cout << "Which adjacent distances are greater:" << endl
	           << "(If you have [a,b,c], then you have [1,0] if a>b and b<=c)"
	           << endl;
	      copy(rgGT.begin()+1,rgGT.end(),itOstream);
	      cout << endl;
	
	  }
	
	Program Output is:
	
	5661 7456 10995 17019 24394 30376 35758
	The adjacent differences are: 1795 3539 6024 7375 5982 5382
	Which adjacent distances are greater:
	(If you have [a,b,c], then you have [1,0] if a>b and b<=c)
	0 0 0 1 1
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample adjacent_difference push_back iterator kbSTL kbTemplate
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
