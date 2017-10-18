---
layout: page
title: "Q158204: STL Sample for the string::operator&gt;&gt; Function"
permalink: kb/158/Q158204/
---

## Q158204: STL Sample for the string::operator&gt;&gt; Function

	Article: Q158204
	Product(s): Microsoft C Compiler
	Version(s): 4.2
	Operating System(s): 
	Keyword(s): kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600
	Last Modified: 04-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the string::operator>> STL
	function in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <string>
	
	Prototype
	---------
	
	     template<class E, class TYPE, class A> inline
	     basic_istream<E, TYPE>&
	     operator>>(basic_istream<E, TYPE>& InStream,
	                basic_string<E, TYPE, A>& String);
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The operator>> is used to populate a string with the contents of an input
	stream.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // StringExtract.cpp : Illustrates how to use the operator>> to extract
	  //                     a string from an input stream, populating a string
	  //                     variable with the contents.
	  // 
	  // Functions:
	  // 
	  //    operator>>  Extracts a string from an input stream.
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
	
	  void main()
	  {
	      string s1;
	      cout << "Enter a word: ";
	      cin >> s1;
	      cout << endl << "You entered: " << s1;
	  }
	
	Program Output is:
	
	Enter a word: Sample
	You entered: Sample
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample operator>>
	
	======================================================================
	Keywords          : kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2
	Issue type        : kbinfo
	
	=============================================================================
	
