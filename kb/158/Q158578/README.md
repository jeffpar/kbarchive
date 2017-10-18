---
layout: page
title: "Q158578: STL Sample for the set::(rbegin, rend) Functions"
permalink: kb/158/Q158578/
---

## Q158578: STL Sample for the set::(rbegin, rend) Functions

	Article: Q158578
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
	
	The following sample code illustrates how to use the set::rbegin and set::rend
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
	
	        const_reverse_iterator rbegin() const;
	
	     // Function 2:
	        const_reverse_iterator rend() const;
	     }
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The rbegin function returns a reverse bidirectional iterator that points just
	beyond the end of the controlled sequence. The rend function returns a reverse
	bidirectional iterator that points at the first element of the sequence.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: -GX
	  // 
	  // SetRbeginRend.cpp:
	  //      Illustrates how to use the rbegin function to get a reverse
	  //      bidirectional iterator that points just beyond the end of
	  //      the controlled sequence. It also illustrates how to use
	  //      the rend function to get a reverse bidirectional iterator
	  //      that points at the first element of the sequence.
	  // 
	  // Functions:
	  // 
	  //    rbegin      Returns a reverse bidirectional iterator that points
	  //                just beyond the end of the controlled sequence.
	  //    rend        Returns a reverse bidirectional iterator that points
	  //                at the first element of the sequence.
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
	    SET_INT::reverse_iterator i;
	    cout << "s1.insert(5)" << endl;
	    s1.insert(5);
	    cout << "s1.insert(10)" << endl;
	    s1.insert(10);
	    cout << "s1.insert(15)" << endl;
	    s1.insert(15);
	    cout << "s1.insert(20)" << endl;
	    s1.insert(20);
	
	    // displays: 20,15,10,5
	
	    for (i=s1.rbegin();i!=s1.rend();i++)
	
	       cout << "s1 has " << *i << " in its set." << endl;
	
	  }
	
	Program Output
	--------------
	
	  s1.insert(5)
	  s1.insert(10)
	  s1.insert(15)
	  s1.insert(20)
	  s1 has 20 in its set.
	  s1 has 15 in its set.
	  s1 has 10 in its set.
	  s1 has 5 in its set.
	
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
	
