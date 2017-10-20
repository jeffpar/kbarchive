---
layout: page
title: "Q157479: INFO: STL Sample for the rotate Function"
permalink: /kb/157/Q157479/
---

## Q157479: INFO: STL Sample for the rotate Function

{% raw %}

	Article: Q157479
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
	
	The sample code below illustrates how to use the rotate STL function in Visual
	C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <algorithm>
	
	Prototype
	
	     template<class ForwardIterator> inline
	     void rotate(ForwardIterator first,
	
	                 ForwardIterator middle,
	                 ForwardIterator last)
	
	NOTE: The class/parameter names in the prototype do not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The rotate algorithm rotates the elements in the range [first, last), to the
	right by N positions, where N = middle - first.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // rotate.cpp : Illustrates how to use the rotate function.
	  // 
	  // Functions:
	  // 
	  //    rotate - Rotate the items in a sequence by n positions.
	  // 
	  // Written by Kalindi Sanghrajka
	  // of Microsoft Product Support Services,
	  // Software Core Developer Support.
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  // disable warning C4786: symbol greater than 255 character,
	  // okay to ignore
	
	  #pragma warning(disable: 4786)
	
	  #include <iostream>
	  #include <vector>
	  #include <string>
	  #include <algorithm>
	  #include <functional>
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  void main()
	  {
	
	      const int VECTOR_SIZE = 8 ;
	
	      // Define a template class vector of strings
	      typedef vector<string, allocator<string> > StrVector ;
	
	      //Define an iterator for template class vector of strings
	      typedef StrVector::iterator StrVectorIt ;
	
	      StrVector Tongue_Twister(VECTOR_SIZE) ;
	
	      StrVectorIt start, end, middle, it ;
	
	      start = Tongue_Twister.begin() ;   // location of first
	                                         // element of Tongue_Twister
	
	      end = Tongue_Twister.end() ;       // one past the location last
	                                         // element of Tongue_Twister
	
	      //Initialize vector Tongue_Twister
	      Tongue_Twister[0] = "she" ;
	      Tongue_Twister[1] = "sells" ;
	      Tongue_Twister[2] = "sea" ;
	      Tongue_Twister[3] = "shells" ;
	      Tongue_Twister[4] = "by";
	      Tongue_Twister[5] = "the";
	      Tongue_Twister[6] = "sea" ;
	      Tongue_Twister[7] = "shore" ;
	
	      middle = start + 3 ;  // start position for rotating elements
	
	      cout << "Before calling rotate\n" << endl ;
	
	      // print content of Tongue_Twister
	      cout << "Try this Tongue Twister: " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << "\n\n" ;
	
	      // rotate the items in the vector Tongue_Twister by 3 positions
	      rotate(start, middle, end) ;
	
	      cout << "After calling rotate \n" << endl ;
	
	      // print content of Tongue_Twister
	      cout << "Now try the rotated Tongue Twister: " ;
	      for(it = start; it != end; it++)
	          cout << *it << " " ;
	      cout << "\n\n" ;
	  }
	
	Program Output is:
	------------------
	
	Before calling rotate
	
	Try this Tongue Twister: she sells sea shells by the sea shore
	
	After calling rotate
	
	Now try the rotated Tongue Twister: shells by the sea shore she sells sea
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample rotate
	
	======================================================================
	Keywords          : kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
