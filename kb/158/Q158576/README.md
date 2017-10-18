---
layout: page
title: "Q158576: STL Sample for the set::find Function"
permalink: kb/158/Q158576/
---

## Q158576: STL Sample for the set::find Function

	Article: Q158576
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
	
	SUMMARY
	=======
	
	The following sample code illustrates how to use the set::find STL function in
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
	
	        const_iterator find(const _K& _Kv) const;
	
	     }
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The find function is used to locate an element in a controlled sequence. It
	returns an iterator to the first element in the controlled sequence whose sort
	key matches its parameter. If no such element exists, the returned iterator
	equals end().
	
	Sample Code
	-----------
	
	NOTE: The first line in the sample code section says:
	
	  // Compile options needed: /GX
	
	In VC++ .NET, /EHsc is set by default and is equivalent to /GX.
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: -GX
	  // 
	  // SetFind.cpp:
	  //      Illustrates how to use the find function to get an iterator
	  //      that points to the first element in the controlled sequence
	  //      that has a particular sort key.
	  // 
	  // Functions:
	  // 
	  //    find         Returns an iterator that points to the first element
	  //                 in the controlled sequence that has the same sort key
	  //                 as the value passed to the find function. If no such
	  //                 element exists, the iterator equals end().
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
	    cout << "s1.insert(5)" << endl;
	    s1.insert(5);
	    cout << "s1.insert(8)" << endl;
	    s1.insert(8);
	    cout << "s1.insert(12)" << endl;
	    s1.insert(12);
	
	    SET_INT::iterator it;
	    cout << "it=find(8)" << endl;
	    it=s1.find(8);
	    cout << "it!=s1.end() returned ";
	    truefalse(it!=s1.end());  //  True
	
	    cout << "it=find(6)" << endl;
	    it=s1.find(6);
	    cout << "it!=s1.end() returned ";
	    truefalse(it!=s1.end());  // False
	  }
	
	Program Output
	--------------
	
	  s1.insert(5)
	  s1.insert(8)
	  s1.insert(12)
	  it=find(8)
	  it!=s1.end() returned True
	  it=find(6)
	  it!=s1.end() returned False
	
	REFERENCES
	==========
	
	Visual C++ Books Online: Visual C++ Books; C/C++; Standard C++ Library Reference
	
	Additional query words: STL STLSample find string
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
