---
layout: page
title: "Q156811: INFO: STL Sample for the abs Function"
permalink: /kb/156/Q156811/
---

## Q156811: INFO: STL Sample for the abs Function

	Article: Q156811
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
	
	The sample code below illustrates how to use the abs STL function in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <valarray>
	
	Prototype
	---------
	
	     template<class T>
	     valarray<T> abs(const valarray<T>& x);
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The sample declares a valarray of integers and uses STL abs() function to get the
	absolute value for each array element.
	
	Sample Code
	-----------
	
	NOTE: The first line in the sample code section says:
	
	  // Compile options needed: /GX
	
	In VC++ .NET, /EHsc is set by default and is equivalent to /GX.
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: None
	  // 
	  // <filename> :  main.cpp
	  // 
	  // Functions:
	  // 
	  //    abs
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
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  #define ARRAY_SIZE  10              // array size
	
	  typedef valarray<int> INTVALARRAY;  // type for valarray of ints
	
	  void main()
	
	  {
	
	      // Initialize val_array to 0, -1, -2, etc.
	      INTVALARRAY val_array(ARRAY_SIZE);
	      for (int i = 0; i < ARRAY_SIZE; i++)
	          val_array[i] = -i;
	
	      // Display the size of val_array.
	      cout << "Size of val_array = " << val_array.size() << "\n\n";
	
	      // Display the values of val_array before calling abs().
	      cout << "The values of val_array before calling abs():\n";
	      for (i = 0; i < ARRAY_SIZE; i++)
	          cout << val_array[i] << "    ";
	      cout << "\n\n";
	
	      // Display the result of val_array after calling abs().
	      INTVALARRAY abs_array = abs(val_array);
	      cout << "The result of val_array after calling abs():\n";
	      for (i = 0; i < ARRAY_SIZE; i++)
	          cout << abs_array[i] << "     ";
	      cout << "\n\n";
	
	  }
	
	Output:
	
	Size of val_array = 10
	
	The values of val_array before calling abs():
	0    -1    -2    -3    -4    -5    -6    -7    -8    -9
	
	The result of val_array after calling abs():
	0     1     2     3     4     5     6     7     8     9
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample abs
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
