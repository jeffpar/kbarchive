---
layout: page
title: "Q158575: STL Sample for the set::(empty, clear) Functions"
permalink: kb/158/Q158575/
---

## Q158575: STL Sample for the set::(empty, clear) Functions

	Article: Q158575
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
	
	The following sample code illustrates how to use the set::empty and set::clear
	STL functions in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <set>
	
	Prototype
	---------
	
	     template<class _K, class _Pr, class _A>
	     class set {
	     public:
	     // Function 1:
	
	        bool empty() const;
	
	     // Function 2:
	        void clear();
	     }
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The empty function returns true when there are no elements in the controlled
	sequence. By calling erase(begin,end), the clear function removes all elements
	in the controlled sequence. For more information on the erase function, please
	see set::erase.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: -GX
	  // 
	  // SetEmpty&Clear.cpp:
	  //      Illustrates how to use the empty function to determine if
	  //      there are elements in the controlled sequence. It also
	  //      illustrates how to use the clear function to remove all
	  //      elements from the controlled sequence.
	  // 
	  // Functions:
	  // 
	  //    empty        Returns true if there are no elements in the
	  //                 controlled sequence.
	  //    clear        Removes all elements from the controlled sequence.
	  // 
	  // Written by Derek Jamison
	  // of Microsoft Technical Support,
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  #pragma warning(disable:4786)
	
	  #include <set>
	  #include <iostream>
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  typedef set<int,less<int>,allocator<int> > SET_INT;
	
	  void truefalse(int x)
	  {
	    cout << (x?"True":"False") << endl;
	  }
	
	  void main() {
	
	    SET_INT s1;
	
	    cout << "s1.empty() returned ";
	    truefalse(s1.empty());  // True
	
	    cout << "s1.insert(5)" << endl;
	    s1.insert(5);
	    cout << "s1.insert(8)" << endl;
	    s1.insert(8);
	
	    cout << "s1.empty() returned ";
	    truefalse(s1.empty());  // False
	
	    cout << "s1.clear()" << endl;
	    s1.clear();
	
	    cout << "s1.empty() returned ";
	    truefalse(s1.empty());  // True
	  }
	
	Program Output
	--------------
	
	  s1.empty() returned True
	  s1.insert(5)
	  s1.insert(8)
	  s1.empty() returned False
	  s1.clear()
	  s1.empty() returned True
	
	REFERENCES
	==========
	
	Visual C++ Books Online: Visual C++ Books; C/C++; Standard C++ Library Reference
	
	Additional query words: STL STLSample empty clear string
	
	======================================================================
	Keywords          : kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
