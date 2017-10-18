---
layout: page
title: "Q158199: STL Sample for the string::operator== Function"
permalink: kb/158/Q158199/
---

## Q158199: STL Sample for the string::operator== Function

	Article: Q158199
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
	
	The sample code below illustrates how to use the string::operator== STL function
	in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <string>
	
	Prototype
	---------
	
	     Function 1:
	     template<class _E, class _TYPE, class _A> inline
	         bool operator==(const basic_string<_E, _TYPE, _A>& LString,
	             const _E *RCharArray);
	
	     Function 2:
	     template<class _E, class _TYPE, class _A> inline
	         bool operator==(const _E * LCharArray,
	             const basic_string<_E, _TYPE, _A>& RString);
	
	     Function 3:
	     template<class _E, class _TYPE, class _A> inline
	         bool operator==(const basic_string<_E, _TYPE, _A>& LString,
	             const basic_string<_E, _TYPE, _A>& RString);
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	There are three versions of the string::operator== function. The first two
	functions compare a null-terminated character array against a basic_string. They
	perform this operation by using the basic_string's string::compare function and
	returning true if the compare function returns a 0 value. The third function
	compares two basic_string variables, using the string::compare function of the
	first basic_string variable. For more information on the compare function,
	please see the string::compare function.
	
	Note that this operator does not work with NULL pointer for the character array.
	You will need to make sure that the character array is not NULL before you pass
	it to the operator.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // StringEqual.cpp: Illustrates how to use the operator== to test for
	  //                  equality of a basic_string variable and a
	  //                  null-terminated string. It also illustrates how to
	  //                  use the operator== to test for equality of two
	  //                  basic_string variables.
	  // 
	  // Functions:
	  // 
	  //    operator==   returns true if the basic_string and the null-
	  //                 terminated string are equal.
	  //    operator==   returns true if both basic_strings are equal.
	  // 
	  // Written by Derek Jamison
	  // of Microsoft Product Support Services,
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  #pragma warning(disable:4786)
	
	  #include <string>
	  #include <iostream>
	  using namespace std;
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  void trueFalse(int x)
	
	  {
	    cout << (x? "True": "False") << endl;
	  }
	
	  void main()
	
	  {
	
	     string S1="ABC";
	     string S2="ABC";
	     string S3="DEF";
	     string S4; //This specifies an empty initial-controlled sequence.
	     char CP1[]="abc";
	     char CP2[]="DEF";
	     char *CP3 = NULL;
	
	     cout << "S1 is " << S1 << endl;
	     cout << "S2 is " << S2 << endl;
	     cout << "S3 is " << S3 << endl;
	     cout << "S4 is " << S4 << endl;
	     cout << "CP1 is " << CP1 << endl;
	     cout << "CP2 is " << CP2 << endl;
	
	     cout << "S1==CP1 returned ";
	     trueFalse(S1==CP1);  // False    (calls function 1)
	
	     cout << "S1==CP2 returned ";
	     trueFalse(S1==CP2);  // False   (calls function 1)
	
	     cout << "CP1==S1 returned ";
	     trueFalse(CP1==S1);  // False    (calls function 2)
	
	     cout << "CP2==S1 returned ";
	     trueFalse(CP2==S1);  // False   (calls function 2)
	
	     cout << "S1==S2 returned ";
	     trueFalse(S1==S2);   // True    (calls function 3)
	
	     cout << "S1==S3 returned ";
	     trueFalse(S1==S3);   // False   (calls function 3)
	
	     cout << "S1==S4 returned ";
	     trueFalse(S1==S4);   // False   (calls function 3)
	
	     // Following use of the operator will cause the program to
	     // crash since CP3 is NULL.
	     // cout << "S1==CP3 returned ";
	     // trueFalse(S1==CP3);
	
	  }
	
	Program Output
	--------------
	
	  S1 is ABC
	  S2 is ABC
	  S3 is DEF
	  S4 is
	  CP1 is abc
	  CP2 is DEF
	  S1==CP1 returned False
	  S1==CP2 returned False
	  CP1==S1 returned False
	  CP2==S1 returned False
	  S1==S2 returned True
	  S1==S3 returned False
	  S1==S4 returned False
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample operator== string
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
