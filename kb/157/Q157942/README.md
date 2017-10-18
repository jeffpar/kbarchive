---
layout: page
title: "Q157942: INFO: STL Sample for the sqrt and pow Functions"
permalink: kb/157/Q157942/
---

## Q157942: INFO: STL Sample for the sqrt and pow Functions

	Article: Q157942
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
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the STL sqrt and pow functions in
	Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <valarray>
	     <cmath>
	
	Prototype
	---------
	
	     // sqrt
	     template<class T>
	     inline valarray<T> sqrt(const valarray<T>& x);
	
	     // pow
	     template<class T>
	     inline valarray<T> pow(const valarray<T>& x, const valarray<T>& y);
	
	     template<class T>
	     inline valarray<T> pow(const valarray<T> x, const T& y);
	
	     template<class T>
	     inline valarray<T> pow(const T& x, const valarray<T>& y);
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	This article illustrates the use of STL sqrt() and pow() functions through sample
	code. sqrt() returns an object of class <valarrayT>, each of whose
	elements at index I is the square root of x[I]. pow() has three template
	functions. The first template function returns an object of class
	valarray<T>, each of whose elements at index I is x[I] raised to the power
	of y[I]. The second template function stores in element I x[I] raised to the
	power of y. The third template function stores in element I x raised to the
	power of y[I].
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // main.cpp : Illustrates the use of STL sqrt() and pow() functions.
	  // 
	  // Functions:
	  // 
	  //    sqrt, pow
	  // 
	  // Written by Yeong-Kah Tam
	  // of Microsoft Product Support Services,
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  #include <iostream>                 // for i/o functions
	  #include <valarray>                 // for valarray
	  #include <cmath>                    // for sqrt() and pow()
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  #define ARRAY_SIZE  3               // array size
	
	  void main()
	
	  {
	
	      // Set val_array to contain values 1, 4, 9 for the following test
	      valarray<double> val_array(ARRAY_SIZE);
	
	      for (int i = 0; i < ARRAY_SIZE; i++)
	          val_array[i] = (i+1) * (i+1);
	
	      // Display the size of val_array
	      cout << "Size of val_array = " << val_array.size() << endl;
	
	      // Display the values of val_array before calling sqrt() and pow().
	      cout << "The values in val_array:" << endl;
	      for (i = 0; i < ARRAY_SIZE; i++)
	          cout << val_array[i] << "    ";
	      cout << endl << endl;
	
	      // Initialize rev_valarray that is the reverse of val_array.
	      valarray<double> rev_valarray(ARRAY_SIZE);
	      for (i = 0; i < ARRAY_SIZE; i++)
	          rev_valarray[i] = val_array[ARRAY_SIZE - i - 1];
	
	      // Display the size of rev_valarray.
	      cout << "Size of rev_valarray = " << rev_valarray.size() << endl;
	
	      // Display the values of rev_valarray.
	      cout << "The values in rev_valarray:" << endl;
	      for (i = 0; i < ARRAY_SIZE; i++)
	          cout << rev_valarray[i] << "    ";
	      cout << endl << endl;
	
	      // rvalue_array to hold the return value from calling the sqrt() and
	      // pow() functions.
	      valarray<double> rvalue_array;
	
	      // ----------------------------------------------------------------
	      // sqrt() - display the content of rvalue_array
	      // ----------------------------------------------------------------
	
	      // Display the result of val_array after calling sqrt().
	      rvalue_array = sqrt(val_array);
	      cout << "The result of val_array after calling sqrt():" << endl;
	      for (i = 0; i < ARRAY_SIZE; i++)
	          cout << rvalue_array[i] << "     ";
	      cout << endl << endl;
	
	      // ----------------------------------------------------------------
	      // pow() - display the content of rvalue_array
	      // ----------------------------------------------------------------
	
	      // This template function returns an object of class valarray<T>,
	      // each of whose elements at I is x[I] raised to the power of y[I].
	      rvalue_array = pow(val_array, rev_valarray);
	      cout << "The result after calling pow(val_array, rev_valarray):"
	           << endl;
	      for (i = 0; i < ARRAY_SIZE; i++)
	          cout << rvalue_array[i] << "     ";
	      cout << endl << endl;
	
	      // This template function stores in element I x[I] raised to the
	      // power of y, where y=2.0.
	      rvalue_array = pow(val_array, 2.0);
	      cout << "The result after calling pow(val_array, 2.0):" << endl;
	      for (i = 0; i < ARRAY_SIZE; i++)
	          cout << rvalue_array[i] << "     ";
	      cout << endl << endl;
	
	      // This template function stores in element I x raised to the
	      // y[I] power, where x=2.0.
	      rvalue_array = pow(2.0, val_array);
	      cout << "The result after calling pow(2.0, val_array):" << endl;
	      for (i = 0; i < ARRAY_SIZE; i++)
	          cout << rvalue_array[i] << "     ";
	      cout << endl << endl;
	
	  }
	
	Program Output
	--------------
	
	Size of val_array = 3
	The values in val_array:
	1    4    9
	
	Size of rev_valarray = 3
	The values in rev_valarray:
	9    4    1
	
	The result of val_array after calling sqrt():
	1     2     3
	
	The result after calling pow(val_array, rev_valarray):
	1     256     9
	
	The result after calling pow(val_array, 2.0):
	1     16     81
	
	The result after calling pow(2.0, val_array):
	2     16     512
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample sqrt pow
	
	======================================================================
	Keywords          : kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
