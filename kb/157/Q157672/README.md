---
layout: page
title: "Q157672: STL Sample for the basic_string::find_first_of() Functions"
permalink: kb/157/Q157672/
---

## Q157672: STL Sample for the basic_string::find_first_of() Functions

	Article: Q157672
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
	
	The sample code below illustrates how to use the basic_string::find_first_of()
	STL function in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <xstring>
	
	Prototype
	---------
	
	     size_type find_first_of(const basic_string& _X, size_type iPos = 0);
	     size_type find_first_of(const element_type *_S, size_type iPos,
	
	                             size_type cElementsIn_S);
	
	     size_type find_first_of(const element_type *_S, size_type iPos = 0);
	     size_type find_first_of(element_type _C, size_type iPos = 0);
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The member functions each find the first (lowest position) element of the
	controlled sequence at or after position iPos that matches any of the elements
	in the operand sequence specified by the remaining operands. If it succeeds, it
	returns the position. Otherwise, the function returns npos.
	
	The position returned is 0 (zero) based. The npos return value is a special value
	indicating that none of the elements were found.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // main.cpp : Demonstrates the use of the basic_string::find_first_of().
	  // 
	  // Functions:
	  // 
	  //    basic_string::find_first_of() - find the first instance in the
	  //         controlled string of any of the elements specified by the
	  //         parameters. The search begins at an optionally-supplied
	  //         position in the controlled string.
	  // 
	  // Written by Michael Reeves
	  // of Microsoft Product Support Services,
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  #include <xstring>
	  #include <iostream>
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  typedef basic_string<char, char_traits<char>,
	               allocator<char> > test_string;
	
	  void main()
	
	  {
	
	      test_string str1("Heartbeat");
	      test_string str2("abcde");
	      int iPos = 0;
	
	      cout << "The string to search is '" << str1.c_str() << "'"
	           << endl;
	
	      // find the first instance in str1 of any characters in str2
	      iPos = str1.find_first_of (str2, 0);  // 0 is default position
	
	      cout << "Element in '" << str2.c_str() << "' found at position "
	           << iPos << endl;
	
	      // start looking in the third position...
	      iPos = str1.find_first_of (str2, 2);
	
	      cout << "Element in '" << str2.c_str() << "' found at position "
	           << iPos << endl;
	
	      // use an array of the element type as the set of elements to
	      // search for; look for anything after the fourth position
	      char achVowels[] = {'a', 'e', 'i', 'o', 'u'};
	      iPos = str1.find_first_of (achVowels, 4, sizeof(achVowels));
	
	      cout << "Element in '";
	      for (int i = 0; i < sizeof (achVowels); i++)
	          cout << achVowels[i];
	      cout << "' found at position " << iPos << endl;
	
	      // use a string literal to specify the set of elements
	      char szVowels[] = "aeiou";
	      iPos = str1.find_first_of (szVowels, 0);  // 0 is default position
	
	      cout << "Element in '" << szVowels << "' found at position "
	           << iPos << endl;
	
	      // look for a specific character beginning in the third position
	      iPos = str1.find_first_of ('e', 2);
	
	      cout << "'e' found at position " << iPos << endl;
	
	  }
	
	Program Output is:
	
	  The string to search is 'Heartbeat'
	  Element in 'abcde' found at position 1
	  Element in 'abcde' found at position 2
	  Element in 'aeiou' found at position 6
	  Element in 'aeiou' found at position 1
	  'e' found at position 6
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample basic_string::find_first_of
	
	======================================================================
	Keywords          : kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
