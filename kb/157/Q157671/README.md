---
layout: page
title: "Q157671: INFO: STL Sample for the advance() Function"
permalink: kb/157/Q157671/
---

## Q157671: INFO: STL Sample for the advance() Function

	Article: Q157671
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600 kbDSupport
	Last Modified: 02-MAY-2002
	
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
	
	The sample code below illustrates how to use the advance() STL function in
	Visual C++.
	
	MORE INFORMATION
	================
	
	Because only random access iterators provide + and - operators, the library
	provides two template functions, advance() and distance().
	
	Required Header
	---------------
	
	     <iterator>
	
	Prototype
	---------
	
	     template<class InIt, class Dist>
	
	         void advance(InIt& it, Dist n);
	
	Description
	-----------
	
	The advance function accepts two parameters:
	
	- InIt: The iterator to advance.
	
	- Dist: The number of elements to increment the iterator by.
	
	The advance function advances the iterator n times. If the iterator is a
	random-access iterator type, the function evaluates the expression as
	
	  iterator += n.
	
	Otherwise, it performs each increment by evaluating:
	
	  ++iterator.
	
	If the iterator is an input or forward iterator type, n must not be negative.
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // <filename> :  Advance.cpp
	  // 
	  // Functions:
	  // 
	  //    advance()
	  // 
	  // Written by Linda Koontz
	  // of Microsoft Product Support Services,
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  /* Compile options needed: /GX
	  */ 
	  #include <iostream>
	  #include <string>
	  #include <list>
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  #pragma warning (disable:4786)
	
	  typedef list<string, allocator<string> > STRLIST;
	
	  void main() {
	      STRLIST List;
	      STRLIST::iterator iList;
	      STRLIST::difference_type dTheDiff;
	
	      List.push_back("A1");
	      List.push_back("B2");
	      List.push_back("C3");
	      List.push_back("D4");
	      List.push_back("E5");
	      List.push_back("F6");
	      List.push_back("G7");
	
	      // Print out the list
	      iList=List.begin();
	      cout << "The list is: ";
	      for (int i = 0; i < 7 ; i++, iList++)
	          cout << *iList  << "  ";
	
	      // Initialize to the first element"
	      iList=List.begin();
	      cout << "\n\nAdvance to the 3rd element." << endl;
	      advance(iList,2);
	      cout << "The element is " << *iList << endl;
	      dTheDiff = distance( List.begin(), iList);
	
	  }
	
	Program Output is:
	
	The list is: A1  B2  C3  D4  E5  F6  G7
	
	Advance to the 3rd element.
	
	The element is C3
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample
	
	======================================================================
	Keywords          : kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCNET kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
