---
layout: page
title: "Q156899: INFO: STL Sample for the make_pair Function"
permalink: /kb/156/Q156899/
---

## Q156899: INFO: STL Sample for the make_pair Function

{% raw %}

	Article: Q156899
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
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the make_pair STL function in
	Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <utility>
	
	Prototype
	---------
	
	     template<class first, class second> inline
	
	           pair<first, second> make_pair(const first& _X, const second& _Y)
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The make_pair function creates a pair structure that contains two data elements
	of any type.
	
	Sample Code
	-----------
	
	  /////////////////////////////////////////////////////////////////////// 
	  // Compile options needed: none
	  // 
	  // mkpair.cpp: Illustrates how to use the make_pair function.
	  // 
	  // Functions: make_pair - creates an object pair containing two data
	  //                        elements of any type.
	  // 
	  // Written by Mark Hagen
	  // of Microsoft Technical Support
	  // Copyright (c) 1996 Microsoft Corporation.
	  // All rights reserved.
	  /////////////////////////////////////////////////////////////////////// 
	
	  /* Compiler options needed: none
	  */ 
	
	  #include <utility>
	
	  /* STL pair data type containing int and float
	  */ 
	
	  typedef struct pair<int,float> PAIR_IF;
	
	  void main(void)
	
	  {
	    PAIR_IF pair1=make_pair(18,3.14f);
	
	    cout << pair1.first << "  " << pair1.second << endl;
	    pair1.first=10;
	    pair1.second=1.0f;
	    cout << pair1.first << "  " << pair1.second << endl;
	  }
	
	Program Output is:
	
	18  3.14
	10  1
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample make_pair pair kbstl kbTemplate
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
