---
layout: page
title: "Q157433: INFO: STL Sample for the basic_string size and resize Functions"
permalink: /kb/157/Q157433/
---

## Q157433: INFO: STL Sample for the basic_string size and resize Functions

{% raw %}

	Article: Q157433
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
	
	The sample code below illustrates how to use the basic_string size() and
	resize() STL function(s) in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <string>
	
	Prototype
	---------
	
	     size_type size() const;
	
	     void resize(size_type n, E c = E());
	
	  resize is defined in header xstring which is included indirectly.
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The size() function returns the length of the sequence.
	
	The resize() function changes the size to the length specified by the first
	parameter. If the sequence is made longer, the function appends elements with
	the value of the second parameter. This value defaults to a null. The output of
	the sample code shows spaces for the null characters. operator<< reads the
	size of string and outputs each character in the string one at a time.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // <filename> :  size.cpp
	  // 
	  // Functions:
	  // 
	  //    size()
	  //    resize() ; Defined in header xstring which is included indirectly.
	  // 
	  // Written by Linda Koontz
	  // of Microsoft Product Support Services,
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  #include <iostream>
	  #include <string>
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  void main()
	  {
	
	      string TestString = "1111122222333334444455555";
	      cout << TestString << "\n  size: " << TestString.size() << endl;
	      TestString.resize(5);
	      cout << TestString << "\n  size: " << TestString.size() << endl;
	      TestString.resize(10);
	      cout << TestString << "\n  size: " << TestString.size() << endl;
	      TestString.resize(15,'6');
	      cout << TestString << "\n  size: " << TestString.size() << endl;
	
	  } 
	
	Output is:
	
	1111122222333334444455555
	 size: 25
	11111
	 size: 5
	11111
	 size: 10
	11111     66666
	 size: 15
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample size resize
	
	======================================================================
	Keywords          : kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
