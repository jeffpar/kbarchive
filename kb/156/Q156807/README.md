---
layout: page
title: "Q156807: STL Sample for accumulate, copy, vector::push_back Functions"
permalink: kb/156/Q156807/
---

## Q156807: STL Sample for accumulate, copy, vector::push_back Functions

	Article: Q156807
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbVC420 kbVC500 kbVC600 kbDSupport
	Last Modified: 27-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the accumulate, copy, and
	vector::push_back STL functions in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <numeric>
	     <functional>
	
	Prototype
	---------
	
	     template<class InputIterator, class _TYPE> inline
	
	        _TYPE accumulate(InputIterator first, InputIterator last, _TYPE init)
	
	     template<class InputIterator, class _TYPE, class BinaryOperator> inline
	
	        _TYPE accumulate(InputIterator first, InputIterator last, _TYPE init,
	                         BinaryOperator binary_op)
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The accumulate function initializes an accumulator acc with an initial value init
	and then modifies it with acc = acc + *i or acc = binary_op(acc,*i) for every
	iterator i in the range [first, last) in order.
	
	Normally, the accumulate function is used to sum the numeric elements of a
	vector. However, it can also be used to do other useful work such as concatenate
	a vector of strings.
	
	Sample Code
	-----------
	
	     /////////////////////////////////////////////////////////////////////// 
	     // 
	     // Compile options needed: /GX
	     // 
	     // accumulate.cpp : Demonstrates the use of accumulate()
	     // 
	     // Description of accumulate(first,last,init)
	     //                accumulate(first,last,init,binary_op):
	     // 
	     //    Initializes the accumulator acc with the initial value init
	     //        acc = init
	     //    and then modifies it with
	     //        acc  =  acc + *i
	     //    or
	     //        acc = binary_op(acc, *i)
	     //    for every iterator i in the range [first, last) in order.
	     // 
	     // Written by Shaun Miller
	     // of Microsoft Product Support Services, Languages Developer Support.
	     // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	     /////////////////////////////////////////////////////////////////////// 
	
	     // turn off warning about symbols too long for debugger
	     #pragma warning (disable : 4786)
	
	     #include <iostream>
	     #include <numeric>
	     #include <functional>
	     #include <vector>
	     #include <iterator>
	     #include <string>
	     
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	     typedef vector < float, allocator < float > > FloatArray;
	     typedef vector < string, allocator < string > > StringArray;
	     typedef ostream_iterator <float, char, char_traits <char> >
	     FloatOstreamIt;
	
	     void main ()
	     {
	         // a vector of floats
	         FloatArray rgFA;
	
	         // an ostream iterator that outputs a float to cout terminated
	         // by a space
	         FloatOstreamIt OstreamIt(cout," ");
	
	         // Initialize the array to 1,1/2,1/3,...
	         for (int i=0; i<10; i++) rgFA.push_back(1.0f/(i+1));
	
	         // Print the array
	         copy(rgFA.begin(),rgFA.end(),OstreamIt);
	         cout << endl;
	
	         // Sum the array
	         cout << "The sum of 1 + 1/2 + 1/3 + ... + 1/10 is "
	              << accumulate(rgFA.begin(),rgFA.end(),0.0f)
	              << endl;
	
	         // Compute the product of the array
	         cout << "The product of 1 * 1/2 * 1/3 * ... * 1/10 is "
	              << accumulate(rgFA.begin(),rgFA.end(),1.0f,multiplies<float>())
	              << endl;
	
	         // Initialize array of strings
	         StringArray rgs;
	         rgs.push_back("This ");
	         rgs.push_back("is ");
	         rgs.push_back("one ");
	         rgs.push_back("sentence. ");
	
	         // Concatenate the strings in the array & print the sentence
	         cout << "The concatenated vector of strings: "
	              << accumulate(rgs.begin(),rgs.end(),string(""))
	              << endl;
	     }
	
	Program Output is:
	
	1 0.5 0.333333 0.25 0.2 0.166667 0.142857 0.125 0.111111 0.1
	The sum of 1 + 1/2 + 1/3 + ... + 1/10 is 2.92897
	The product of 1 * 1/2 * 1/3 * ... * 1/10 is 2.75573e-007
	The concatenated vector of strings: This is one sentence.
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample accumulate copy push_back
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
