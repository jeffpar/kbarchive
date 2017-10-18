---
layout: page
title: "Q158231: STL Sample for the binary_function Structure"
permalink: kb/158/Q158231/
---

## Q158231: STL Sample for the binary_function Structure

	Article: Q158231
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2
	Operating System(s): 
	Keyword(s): _IK
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the binary_function STL structure
	in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <functional>
	
	Prototype
	---------
	
	     template<class _A1, class _A2, class _R>
	     struct binary_function
	     {
	       typedef _A1 first_argument_type;
	       typedef _A2 second_argument_type;
	       typedef _R result_type;
	     };
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The binary_function<A,B,C> class is used as a base class to allow the user
	to easily define binary operator functions that take data types A and B as
	arguments and return data type C objects.
	
	Sample Code
	-----------
	
	  //////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // binfunc.cpp : Illustrating the binary_function
	  //               structure.
	  // 
	  // Structure used: binary_function<A,B,C> - base
	  //                 class used to create operator
	  //                 functions taking data types A
	  //                 and B and returning data type C.
	  // 
	  // Written by Mark Hagen
	  // of Microsoft Product Support Services,
	  // Copyright (c) 1996 Microsoft Corporation.
	  // All rights reserved.
	  //////////////////////////////////////////// 
	
	  #include <functional>
	  #include <iostream>
	  using namespace std;
	
	  class binary_test : public binary_function<binary_test &,int,float>
	  {
	  public:
	    float value;
	    binary_test(){value=10.0;}
	    binary_test(float x){value=x;}
	    result_type operator<<(second_argument_type arg2);
	  };
	
	  binary_test::result_type
	  binary_test::operator<<(binary_test::second_argument_type arg2)
	  {
	    value = ((int)value) << arg2;
	    cout << "New value after shift is" << value << endl;
	    return value;
	  }
	
	  void main(void)
	  {
	    binary_test item;
	
	    cout << "Begin" << endl;
	    item = item << 2;
	  }
	
	Program Output is:
	
	Begin
	New value after shift is 40.0
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL Sample binary_function
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch kbVCLibrary
	Version           : winnt:4.2
	Issue type        : kbhowto
	
	=============================================================================
	
