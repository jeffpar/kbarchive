---
layout: page
title: "Q157220: INFO: STL Sample for the exp, log, and log10 Functions"
permalink: kb/157/Q157220/
---

## Q157220: INFO: STL Sample for the exp, log, and log10 Functions

	Article: Q157220
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
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the exp, log, and log10 STL
	functions in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <valarray>
	     <math>
	
	Prototype
	---------
	
	     / exp
	     template<class T>
	     valarray<T> exp(const valarray<T>& x);
	
	     // log
	     template<class T>
	     valarray<T> log(const valarray<T>& x);
	
	     // log10
	     template<class T>
	     valarray<T> log10(const valarray<T>& x);
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	This article illustrates the use of STL exp(), log(), and log10() functions
	through sample code.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: None
	  // 
	  // <filename> :  main.cpp
	  // 
	  // Functions:
	  // 
	  //    exp, log, log10
	  // 
	  // Written by Yeong-Kah Tam
	  // of Microsoft Product Support Services,
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  // disable warning C4267: possible loss of data,
	  // okay to ignore
	
	  #pragma warning(disable: 4267)
	
	  #include <iostream>                 // for i/o functions
	  #include <valarray>                 // for valarray
	  #include <math.h>                   // for exp(), log(), and log10()
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  #define ARRAY_SIZE  3               // array size
	
	  typedef valarray<double> DB_VARRAY;
	
	  void main()
	
	  {
	
	      // Set val_array to contain values 1, 10, 100 for the following test.
	      DB_VARRAY val_array(ARRAY_SIZE);
	      for (int i = 0; i < ARRAY_SIZE; i++)
	          val_array[i] = pow(10, i);
	
	      // Display the size of val_array.
	      cout << "Size of val_array = " << val_array.size() << "\r\n";
	
	      // Display the content of val_array before calling exp, log, and
	      // log10 functions.
	      cout << "The values in val_array:\r\n";
	      for (i = 0; i < ARRAY_SIZE; i++)
	          cout << val_array[i] << "    ";
	      cout << "\r\n\r\n";
	
	      // rvalue_array to hold the return value from calling the sqrt() and
	      // pow() functions.
	      DB_VARRAY rvalue_array;
	
	      // ----------------------------------------------------------------
	      // exp() - display the content of rvalue_array
	      // ----------------------------------------------------------------
	      rvalue_array = exp(val_array);
	      cout << "The result after calling exp():\r\n";
	      for (i = 0; i < ARRAY_SIZE; i++)
	          cout << rvalue_array[i] << "     ";
	      cout << "\r\n\r\n";
	
	      // ----------------------------------------------------------------
	      // log() - display the content of rvalue_array
	      // ----------------------------------------------------------------
	      rvalue_array = log(val_array);
	      cout << "The result after calling log():\r\n";
	      for (i = 0; i < ARRAY_SIZE; i++)
	          cout << rvalue_array[i] << "     ";
	      cout << "\r\n\r\n";
	
	      // ----------------------------------------------------------------
	      // log10() - display the content of rvalue_array
	      // ----------------------------------------------------------------
	      rvalue_array = log10(val_array);
	      cout << "The result after calling log10():\r\n";
	      for (i = 0; i < ARRAY_SIZE; i++)
	          cout << rvalue_array[i] << "     ";
	      cout << "\r\n\r\n";
	
	  }
	
	Output:
	
	Size of val_array = 3
	
	The values in val_array:
	
	1    10    100
	
	The result after calling exp():
	
	2.71828     22026.5     2.68812e+043
	
	The result after calling log():
	0     2.30259     4.60517
	
	The result after calling log10():
	
	0     1     2
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample exp log log10
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
