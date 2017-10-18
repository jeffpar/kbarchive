---
layout: page
title: "Q158579: STL Sample for the set::size Function"
permalink: kb/158/Q158579/
---

## Q158579: STL Sample for the set::size Function

	Article: Q158579
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
	
	The following sample code illustrates how to use the set::size STL function in
	Visual C++.
	
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
	
	        size_type size() const;
	
	     }
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The size function is used to determine the number of elements in the controlled
	sequence.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: -GX
	  // 
	  // SetSize.cpp:
	  //      Illustrates how to use the size function to determine how
	  //      many elements are in the controlled sequence.
	  // 
	  // Functions:
	  // 
	  //    size         Returns the number of elements in the controlled
	  //                 sequence.
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
	
	  void main() {
	
	    SET_INT s1;
	
	    cout << "s1.size() returned ";
	    cout << s1.size() << endl;  // 0
	
	    cout << "s1.insert(5)" << endl;
	    s1.insert(5);
	    cout << "s1.insert(8)" << endl;
	    s1.insert(8);
	    cout << "s1.insert(12)" << endl;
	    s1.insert(12);
	
	    cout << "s1.size() returned ";
	    cout << s1.size() << endl; // 3
	  }
	
	Program Output
	--------------
	
	  s1.size() returned 0
	  s1.insert(5)
	  s1.insert(8)
	  s1.insert(12)
	  s1.size() returned 3
	
	REFERENCES
	==========
	
	Visual C++ Books Online: Visual C++ Books; C/C++; Standard C++ Library Reference
	
	Additional query words: STL STLSample size string
	
	======================================================================
	Keywords          : kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
