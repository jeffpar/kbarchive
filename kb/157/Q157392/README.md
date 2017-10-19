---
layout: page
title: "Q157392: INFO: STL Sample for the inner_product Function"
permalink: /kb/157/Q157392/
---

## Q157392: INFO: STL Sample for the inner_product Function

	Article: Q157392
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
	
	The sample code below illustrates how to use the inner_product STL function in
	Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     #include <numeric>
	     #include <functional>
	
	Prototype
	---------
	
	     template<class InputIterator1, class InputIterator2, class _TYPE>
	
	         inline _TYPE inner_product(InputIterator first, InputIterator last,
	                             InputIterator first2, _TYPE init)
	
	     template<class InputIterator1, class InputIterator2, class _TYPE,
	
	              class BinaryOperator1, class BinaryOperator2> inline
	         _TYPE inner_product(InputIterator1 first, InputIterator1 last,
	                             InputIterator2 first2, _TYPE init,
	                             BinaryOperator1 binary_op1,
	                             BinaryOperator2 binary_op2)
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	inner_product computes its result by initializing the accumulator acc with init
	and then modifying it with:
	
	  acc = acc + (*i1) * (*i2)
	
	  - or -
	
	  acc = binary_op1(acc, binary_op2(*i1, *i2))
	
	for every iterator i1 in the range [first, last) and iterator i2 in the range
	[first2, first2 + (last - first)) in order.
	
	Sample Code
	-----------
	
	  /////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // inner_product.cpp : Demonstrates the use of inner_product().
	  // 
	  // Description of
	  //         inner_product(first,last,first2,init)
	  //         inner_product(first,last,first2,init,binary_op1,binary_op2):
	  // 
	  //    Computes its result by initializing the accumulator acc with init
	  //        acc = init
	  //    and then modifying it with
	  //        acc = acc  +  (*i1) * (*i2)
	  //    or
	  //        acc = binary_op1(acc, binary_op2(*i1, *i2))
	  //    for every iterator i1 in the range [first, last) and
	  //    iterator  i2  in  the  range [first2, first2 + (last - first))
	  //    in order.
	  // 
	  // Written by Shaun Miller
	  //  of Microsoft Product Support Services, Languages Developer Support.
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
	
	  typedef vector < float, allocator < float > > FloatArray;
	  typedef ostream_iterator < float, char, char_traits<char> >
	  FloatOstreamIt;
	
	  void main ()
	
	  {
	
	      FloatOstreamIt itOstream(cout," ");
	
	      // Initialize the arrays
	      FloatArray rgF1, rgF2;
	      for (int i=1; i<=5; i++) {
	          rgF1.push_back((float)i);
	          rgF2.push_back((float)i*i);
	      };
	
	      // Print the arrays
	      cout << "Array 1: ";
	      copy(rgF1.begin(),rgF1.end(),itOstream);
	      cout << endl;
	      cout << "Array 2: ";
	      copy(rgF2.begin(),rgF2.end(),itOstream);
	      cout << endl;
	
	      // Compute the inner_product of the arrays
	      // This is the sum of the products (S.O.P) of the correspondingelements
	
	      float ip1 = inner_product(rgF1.begin(),rgF1.end(),rgF2.begin(),0.0f);
	      cout << "The inner product (S.O.P) of Array1 and Array2 is "
	         << ip1
	         << endl;
	
	      // Compute the inner_product of the arrays
	      // This is the product of the sums (P.O.S.) of the corresponding elements
	
	      float ip2 = inner_product(rgF1.begin(),rgF1.end(),rgF2.begin(),1.0f,
	                              multiplies<float>(),plus<float>());
	      cout << "The inner product (P.O.S.) of Array1 and Array2 is "
	         << ip2
	         << endl;
	
	  } 
	
	Program Output is:
	
	Array 1: 1 2 3 4 5
	Array 2: 1 4 9 16 25
	The inner product (S.O.P) of Array1 and Array2 is 225
	The inner product (P.O.S.) of Array1 and Array2 is 86400
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample inner_product kbSTL kbTemplate
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
