---
layout: page
title: "Q158200: STL Sample for the string::getline Function"
permalink: /kb/158/Q158200/
---

## Q158200: STL Sample for the string::getline Function

{% raw %}

	Article: Q158200
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
	
	The sample code below illustrates how to use the string::getline STL function in
	Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <string>
	
	Prototype
	---------
	
	    template<class _E, class _TYPE, class _A> inline
	    basic_istream<_E, _TYPE>& getline( basic_istream<_E, _TYPE>& Istream,
	                              basic_string<_E, _TYPE, _A>& Xstring,
	                              const _E _D=_TYPE::newline());
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The getline function creates a string containing all of the characters from the
	input stream until one of the following situations occurs:
	
	- End of file.
	
	- The delimiter is encountered.
	
	- is.max_str() elements have been extracted.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // Getline.cpp : Illustrates how to use the getline function to read a
	  //               line of text from the keyboard.
	  // 
	  // Functions:
	  // 
	  //    getline       Returns a string from the input stream.
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
	      string s1;
	      cout << "Enter a sentence (use <space> as the delimiter):";
	      getline(cin,s1, ' ');
	      cout << "You entered: " << s1;
	  }
	
	Program Output is:
	
	Enter a sentence (use <space> as the delimiter): A_space_at_the_end.
	You entered: A_space_at_the_end.
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample getline
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
