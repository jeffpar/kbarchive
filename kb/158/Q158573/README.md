---
layout: page
title: "Q158573: STL Sample for the set::(key_, value_)comp Function"
permalink: kb/158/Q158573/
---

## Q158573: STL Sample for the set::(key_, value_)comp Function

	Article: Q158573
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
	
	The following sample code illustrates how to use the set::key_comp and
	set::value_comp STL functions in Visual C++.
	
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
	
	        key_compare key_comp() const;
	
	     // Function 2:
	        value_compare value_comp() const;
	     }
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The key_comp function returns the stored function object that determines the
	order of elements in the controlled sequence. The value_comp function returns
	the same function that key_comp returns.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: -GX
	  // 
	  // SetComp.cpp:
	  //      Illustrates how to use the key_comp function to obtain a
	  //      function pointer that is the stored function object that
	  //      determines the order of elements in the controlled sequence.
	  //      It also illustrates how to use the value_comp function to
	  //      obtain a function pointer that is the stored function object
	  //      that determines the order of the elements in the controlled
	  //      sequence (same as key_comp result).
	  // 
	  // Functions:
	  // 
	  //    key_comp     Returns a function pointer to the function that
	  //                 determines the order of elements in the controlled
	  //                 sequence.
	  //    value_comp   Returns a function pointer to the function that
	  //                 determines the order of elements in the controlled
	  //                 sequence (same as key_comp).
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
	
	    cout << "s1.key_comp()(8,10) returned ";
	    truefalse(s1.key_comp()(8,10));  // True
	
	    cout << "s1.value_comp()(8,10) returned ";
	    truefalse(s1.value_comp()(8,10));  // True
	
	    cout << "s1.key_comp()(10,8) returned ";
	    truefalse(s1.key_comp()(10,8));  // False
	
	    cout << "s1.value_comp()(10,8) returned ";
	    truefalse(s1.value_comp()(10,8));  // False
	
	    cout << "s1.key_comp()(8,8) returned ";
	    truefalse(s1.key_comp()(8,8));  // False
	
	    cout << "s1.value_comp()(8,8) returned ";
	    truefalse(s1.value_comp()(8,8));   // False
	  }
	
	Program Output
	--------------
	
	  s1.key_comp()(8,10) returned True
	  s1.value_comp()(8,10) returned True
	  s1.key_comp()(10,8) returned False
	  s1.value_comp()(10,8) returned False
	  s1.key_comp()(8,8) returned False
	  s1.value_comp()(8,8) returned False
	
	REFERENCES
	==========
	
	Visual C++ Books Online: Visual C++ Books; C/C++; Standard C++ Library Reference
	
	Additional query words: STL STLSample value_comp key_comp
	
	======================================================================
	Keywords          : kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
