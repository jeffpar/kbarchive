---
layout: page
title: "Q240014: FIX: Listing Sort Function Removes Elements"
permalink: kb/240/Q240014/
---

## Q240014: FIX: Listing Sort Function Removes Elements

	Article: Q240014
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbLangCPP kbSTL kbVC600 kbVC600bug kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a list has over 32K elements, list::sort removes the elements.
	Please refer to the Sample Program in the MORE INFORMATION section for details.
	
	RESOLUTION
	==========
	
	The bug is in the header file <list>.
	
	In the sort() function:
	
	     if (_I == _MAXN)
	  	//_A[_I].merge(_X); /* remove this line and add the line below*/ 
	  	_A[_I - 1].merge(_X);
	
	In the sort(_Pr3 _Pr) function :
	
	     if (_I == _MAXN)
	  	//_A[_I].merge(_X, _Pr); /* remove this line and add the line below*/ 
	  	_A[_I - 1].merge(_X, _Pr);<BR/>
	
	If you are sorting through a list larger than 32K, increasing _MAXN from 15 to 25
	would improve the performance.
	
	NOTE: Since the resolution involves modifying a system header file, extreme care
	should be taken to make sure nothing else is changed in the header file.
	Microsoft is not responsible for any problems resulting due to unwanted changes
	to the system header files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample program demonstrates the bug.
	
	     //test.cpp
	     //Compiler options : /GX
	     #include <list>
	     #include <algorithm>
	     #include <iostream>
	
	     void main()
	     {
	       std::list<int> mylist;
	
	       int i;
	       int last = 32768;
	
	       for (i = 0; i < last; i++)
	      mylist.push_back(i);
	
	       std::cout << "Size before sort: " << mylist.size() << "\n";
	       mylist.sort();
	       std::cout << "Size after sort: " << mylist.size() << "\n";
	     }
	
	     Actual Results:
	     Size before sort: 32768
	     Size after sort: 0
	
	     Expected Results:
	     Size before sort: 32768
	     Size after sort: 32768
	
	Additional query words: STL
	
	======================================================================
	Keywords          : kbLangCPP kbSTL kbVC600 kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
