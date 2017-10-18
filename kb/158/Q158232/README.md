---
layout: page
title: "Q158232: STL Sample for the unary_functi"
permalink: kb/158/Q158232/
---

## Q158232: STL Sample for the unary_functi

	Article: Q158232
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2
	Operating System(s): 
	Keyword(s): _IK
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	- The Standard C++ Library 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the unary_function STL structure in
	Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <functional>
	
	Prototype
	---------
	
	     template<class _A, class _R>
	     struct unary_function
	     {
	       typedef _A argument_type;
	       typedef _R result_type;
	     };
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	unary_function is used as a base class to allow us to better define operator
	functions in the following format:
	
	     result_type classname::operatorX(argument_type)
	
	Sample Code
	-----------
	
	  //////////////////////////////////////////// 
	  // 
	  // Compile options needed: none
	  // 
	  // Structure used:
	  //       unary_function<int, float> - allows us
	  //       to write operator functions accepting an
	  //       integer and returning floats.
	  // 
	  // Written by Mark Hagen
	  // of Microsoft Product Support Services,
	  // Copyright (c) 1996 Microsoft Corporation.
	  // All rights reserved.
	  //////////////////////////////////////////// 
	
	  #include <functional>
	  #include <iostream>
	  using namespace std;
	
	  /* derive class from unary_function in order to use it */ 
	
	  class unary_test : public unary_function<int,float>
	  {
	  public:
	    float value;
	    unary_test(){value=10.0;}
	    unary_test(float x){value=x;}
	    result_type operator*(argument_type x);
	    result_type operator-(argument_type x);
	  };
	
	  /* You can now easily create operators that accept */ 
	  /* an int and return a float.                     */ 
	
	  unary_test::result_type unary_test::operator*(unary_test::argument_type x)
	  {
	    value*=x;
	    cout << "New value after * is " << value << endl ;
	    return value;
	  }
	
	  unary_test::result_type unary_test::operator-(unary_test::argument_type x)
	  {
	    value-+(float)x;
	    cout << "New value after minus is " << value << endl ;
	
	    return value;
	  }
	
	  void main(void)
	  {
	    unary_test item;
	    unary_test item2(18.0);
	
	    cout << "Begin" << endl ;
	    cout.setf(ios::fixed) ;
	    item = item * 2;
	    item2 = item2 - 5;
	  }
	
	Program Output is:
	
	Begin
	New value after * is 20.000000
	New value after minus is 18.000000
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL Sample unary_function
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch kbVCLibrary
	Version           : winnt:4.2
	Issue type        : kbhowto
	
	=============================================================================
	
