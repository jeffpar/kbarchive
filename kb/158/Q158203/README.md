---
layout: page
title: "Q158203: STL Sample for the string::operation"
permalink: /kb/158/Q158203/
---

## Q158203: STL Sample for the string::operation

{% raw %}

	Article: Q158203
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbVC420 kbVC500 kbVC600 kbDSupport
	Last Modified: 29-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the string::operator<= STL
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
	        bool operator<=(const basic_string<_E, _TYPE, _A>& LString,
	                        const _E *RCharArray);
	
	     Function 2:
	        template<class _E, class _TYPE, class _A> inline
	        bool operator<=(const _E * LCharArray,
	                        const basic_string<_E, _TYPE, _A>& RString);
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	There are two versions of the string::operator<= function. Both versions are
	used to compare a null-terminated character array to a basic_string. They
	perform this operation by negating the result of (RString<LCharArray or
	RCharArray<LString). For more information on this comparison, please see the
	string::operator< function.
	
	Note that this operator does not work with NULL pointer for the character array.
	You will need to make sure that the character array is not NULL before you pass
	it to the operator.
	
	Sample Code
	-----------
	
	  ///////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // StringLessEqual.cpp : Illustrates how to use the operator<= to compare
	  //                       a basic_string variable to a null-terminated
	  //                       string.
	  // 
	  // Functions:
	  // 
	  //    operator<=   Returns true if the second parameter is not less
	  //                 than the first.
	  // 
	  // Written by Derek Jamison
	  // of Microsoft Product Support Services,
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ///////////////////////////////////////////////////////////////////////// 
	
	  #pragma warning(disable:4786)
	
	  #include <string>
	  #include <iostream><BR/>
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
	
	     string S1="DEF";
	     char CP1[]="ABC";
	     char CP2[]="DEF";
	     char CP3[]="DEFG";
	     char CP4[]="def";
	
	     cout << "S1 is " << S1 << endl;
	     cout << "CP1 is " << CP1 << endl;
	     cout << "CP2 is " << CP2 << endl;
	     cout << "CP3 is " << CP3 << endl;
	     cout << "CP4 is " << CP4 << endl;
	
	     cout << "S1<=CP1 returned ";
	     trueFalse(S1<=CP1);  // False  (calls function 1)
	
	     cout << "S1<=CP2 returned ";
	     trueFalse(S1<=CP2);  // True   (calls function 1)
	
	     cout << "S1<=CP3 returned ";
	     trueFalse(S1<=CP3);  // True   (calls function 1)
	
	     cout << "CP1<=S1 returned ";
	     trueFalse(CP1<=S1);  // True   (calls function 2)
	
	     cout << "CP2<=S1 returned ";
	     trueFalse(CP2<=S1);  // True   (calls function 2)
	
	     cout << "CP4<=S1 returned ";
	     trueFalse(CP4<=S1);  // False   (calls function 2)
	
	  }
	
	Program Output is:
	
	  S1 is DEF
	  CP1 is ABC
	  CP2 is DEF
	  CP3 is DEFG
	  CP4 is def
	  S1<=CP1 returned False
	  S1<=CP2 returned True
	  S1<=CP3 returned True
	  CP1<=S1 returned True
	  CP2<=S1 returned True
	  CP4<=S1 returned False
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample operator string
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
