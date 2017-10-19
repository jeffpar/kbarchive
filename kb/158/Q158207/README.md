---
layout: page
title: "Q158207: STL Sample for the string::operator+ Function"
permalink: /kb/158/Q158207/
---

## Q158207: STL Sample for the string::operator+ Function

	Article: Q158207
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbVC420 kbVC500 kbVC600 kbDSupport
	Last Modified: 29-APR-2002
	
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
	
	The sample code below illustrates how to use the string::operator+ STL function
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
	         basic_string<_E, _TYPE, _A>
	         operator+(const basic_string<_E, _TYPE, _A>& LString,
	                   const _E *RCharArray);
	
	     Function 2:
	         template<class _E, class _TYPE, class _A> inline
	         basic_string<_E, _TYPE, _A>
	         operator+(const _E *LCharArray,
	                   const basic_string<_E, _TYPE, _A>& RString);
	
	     Function 3:
	         template<class _E, class _TYPE, class _A> inline
	         basic_string<_E, _TYPE, _A>
	         operator+(const basic_string<_E, _TYPE, _A>& LString,
	                   const _E RChar);
	
	     Function 4:
	         template<class _E, class _TYPE, class _A> inline
	         basic_string<_E, _TYPE, _A>
	         operator+(const _E LChar,
	                   const basic_string<_E, _TYPE, _A>& RString);
	
	     Function 5:
	         template<class _E, class _TYPE, class _A> inline
	         basic_string<_E, _TYPE, _A>
	         operator+(const basic_string<_E, _TYPE, _A>& LString,
	                   const basic_string<_E, _TYPE, _A>& RString);
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description:
	------------
	
	There are five versions of the string::operator+ function. Two functions are used
	to concatenate a null-terminated character array and a basic_string. Two
	functions are used to concatenate a character and a basic_string. The last
	function is used to concatenate two basic_string variables.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // StringPlus.cpp : Illustrates how to use the operator+ to concatenate
	  //                  a null-terminated character array and a basic_string,
	  //                  how to concatenate a character and a basic_string,
	  //                  and how to concatenate two basic_string variables.
	  // 
	  // Functions:
	  // 
	  //    operator+ : Concatenates a null-terminated character array and
	  //                a basic_string.
	  //    operator+ : Concatenates a character array and a basic_string.
	  //    operator+ : Concatenates two basic_string variables.
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
	
	  void main()
	
	  {
	
	     string result;
	     string S1="ABC";
	     string S2="DEF";
	     char CP1[]="GHI";
	     char C='J';
	
	     cout << "S1 is " << S1 << endl;
	     cout << "S2 is " << S2 << endl;
	     cout << "CP1 is " << CP1 << endl;
	     cout << "C is " << C << endl;
	
	     result=S1+CP1;                           // Function 1  (ABCGHI)
	     cout << "S1+CP1 is " << result << endl;
	
	     result=CP1+S1;                           // Function 2  (GHIABC)
	     cout << "CP1+S1 is " << result << endl;
	
	     result=S1+S2;                            // Function 3  (ABCDEF)
	     cout << "S1+S2 is " << result << endl;
	
	     result=S1+C;                             // Function 4  (ABCJ)
	     cout << "S1+C is " << result << endl;
	
	     result=C+S1;                             // Function 5  (JABC)
	     cout << "C+S1 is " << result << endl;
	
	  }
	
	Program Output is:
	
	  S1 is ABC
	  S2 is DEF
	  CP1 is GHI
	  C is J
	  S1+CP1 is ABCGHI
	  CP1+S1 is GHIABC
	  S1+S2 is ABCDEF
	  S1+C is ABCJ
	  C+S1 is JABC
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample operator+ string
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
