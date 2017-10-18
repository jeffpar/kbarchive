---
layout: page
title: "Q158205: STL Sample for the string::operation"
permalink: kb/158/Q158205/
---

## Q158205: STL Sample for the string::operation

	Article: Q158205
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600 kbDSupport
	Last Modified: 04-MAY-2002
	
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
	
	The sample code below illustrates how to use the string::operator< STL
	function in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <string>
	
	Prototype
	---------
	
	     Function 1:
	         template<class _E, class _TYPE, class _A> inline
	         bool operator<(const basic_string<_E, _TYPE, _A>& LString,
	                        const _E *RCharArray);
	
	     Function 2:
	         template<class _E, class _TYPE, class _A> inline
	         bool operator<(const _E *LCharArray,
	                        const basic_string<_E, _TYPE, _A<& RString);
	
	     Function 3:
	         template<class _E, class _TYPE, class _A> inline
	         bool operator<(const basic_string<_E, _TYPE, _A>& LString,
	                        const basic_string<_E, _TYPE, _A>& RString);
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	There are three versions of the string::operator< function. Two of the
	functions compare a null-terminated character array against a basic_string. They
	perform this operation by using the basic_string's string::compare function and
	returning a value based on the results of the compare function. The third
	function compares two basic_string variables, using the string::compare function
	of the first basic_string variable. For more information on the compare
	function, please see the string::compare function.
	
	Note that this operator does not work with NULL pointer for the character array.
	You will need to make sure that the character array is not NULL before you pass
	it to the operator.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // StringLessThan.cpp : Illustrates how to use the operator< to compare
	  //                      a basic_string variable and a null-terminated
	  //                      string. It also illustrates how to use the
	  //                      operator< to compare two basic_string variables.
	  // 
	  // Functions:
	  // 
	  //    operator<    Returns true if the first parameter is less than the
	  //                 second.
	  // 
	  // Written by Derek Jamison
	  // of Microsoft Product Support Services,
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  #pragma warning(disable:4786)
	
	  #include <string>
	  #include <iostream>
	
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
	     string S4="abc";
	     char CP1[]="ABC";
	     char CP2[]="DEF";
	     char CP3[]="ABCD";
	
	     cout << "S1 is " << S1 << endl;
	     cout << "S2 is " << S2 << endl;
	     cout << "S3 is " << S3 << endl;
	     cout << "S4 is " << S4 << endl;
	     cout << "CP1 is " << CP1 << endl;
	     cout << "CP2 is " << CP2 << endl;
	     cout << "CP3 is " << CP3 << endl;
	
	     cout << "S1<CP1 returned ";
	     trueFalse(S1<CP1);  // False    (calls function 1)
	
	     cout << "S1<CP2 returned ";
	     trueFalse(S1<CP2);  // True   (calls function 1)
	
	     cout << "CP1<S1 returned ";
	     trueFalse(CP1<S1);  // False    (calls function 2)
	
	     cout << "CP2<S1 returned ";
	     trueFalse(CP2<S1);  // False    (calls function 2)
	
	     cout << "S1<S2 returned ";
	     trueFalse(S1<S2);   // False    (calls function 3)
	
	     cout << "S1<S3 returned ";
	     trueFalse(S1<S3);   // True   (calls function 3)
	
	     cout << "S1<S4 returned ";
	     trueFalse(S1<S4);   // True   (calls function 3)
	
	     cout << "S1<CP3 returned ";
	     trueFalse(S1<CP3);  // True   (calls function 1)
	
	  }
	
	Program Output is:
	
	  S1 is ABC
	  S2 is ABC
	  S3 is DEF
	  S4 is abc
	  CP1 is ABC
	  CP2 is DEF
	  CP3 is ABCD
	  S1<CP1 returned False
	  S1<CP2 returned True
	  CP1<S1 returned False
	  CP2<S1 returned False
	  S1<S2 returned False
	  S1<S3 returned True
	  S1<S4 returned True
	  S1<CP3 returned True
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample operator string
	
	======================================================================
	Keywords          : kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
