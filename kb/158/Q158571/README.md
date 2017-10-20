---
layout: page
title: "Q158571: STL Sample for the string::operator&gt;= Function"
permalink: /kb/158/Q158571/
---

## Q158571: STL Sample for the string::operator&gt;= Function

{% raw %}

	Article: Q158571
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
	
	The following sample code illustrates how to use the string::operator>= STL
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
	        bool operator>=(const basic_string<_E, _TYPE, _A>& _L,
	           const _E *_R);
	     Function 2:
	     template<class _E, class _TYPE, class _A> inline
	        bool operator>=(const _E * _L,
	           const basic_string<_E, _TYPE, _A>& _R);
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	There are two versions of the string::operator>= function. Both versions are
	used to compare a null-terminated character array against a basic_string. They
	perform this operation by negating the result of (_L < _R). For more
	information on this comparison, please see the string::operator< function.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: none
	  // 
	  // StringGreaterEqual.cpp:
	  //     Illustrates how to use the operator>= to compare a
	  //     basic_string variable and a null-terminated string.
	  // 
	  // Functions:
	  // 
	  //     operator>=   Returns true if the first parameter is not less than
	  //                  the second.
	  // 
	  // Written by Derek Jamison
	  // of Microsoft Technical Support,
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  #pragma warning(disable:4786)
	  #include <string>
	  #include <iostream>
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  void truefalse(int x)
	  {
	    cout << (x?"True":"False") << endl;
	  }
	
	  void main()
	  {
	     string S1="ABC";
	     char CP1[4]="ABC";
	     char CP2[4]="DEF";
	
	     cout << "S1 is " << S1 << endl;
	     cout << "CP1 is " << CP1 << endl;
	     cout << "CP2 is " << CP2 << endl;
	
	     cout << "S1>=CP1 returned ";
	     truefalse(S1>=CP1);  // True   (calls function 1)
	
	     cout << "S1>=CP2 returned ";
	     truefalse(S1>=CP2);  // False  (calls function 1)
	
	     cout << "CP1>=S1 returned ";
	     truefalse(CP1>=S1);  // True   (calls function 2)
	
	     cout << "CP2>=S1 returned ";
	     truefalse(CP2>=S1);  // True   (calls function 2)
	  }
	
	Program Output
	--------------
	
	S1 is ABC
	CP1 is ABC
	CP2 is DEF
	S1>=CP1 returned True
	S1>=CP2 returned False
	CP1>=S1 returned True
	CP2>=S1 returned True
	
	REFERENCES
	==========
	
	Visual C++ Books Online: Visual C++ Books; C/C++; Standard C++ Library Reference
	
	Additional query words: STL STLSample operator>= string
	
	======================================================================
	Keywords          : kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
