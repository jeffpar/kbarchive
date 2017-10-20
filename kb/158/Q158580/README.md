---
layout: page
title: "Q158580: STL Sample for the set::(swap, begin, end) Function"
permalink: /kb/158/Q158580/
---

## Q158580: STL Sample for the set::(swap, begin, end) Function

{% raw %}

	Article: Q158580
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600 kbDSupport
	Last Modified: 29-APR-2002
	
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
	
	The following sample code illustrates how to use the set::swap, set::begin and
	set::end STL functions in Visual C++.
	
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
	
	        void swap(_Myt& _X);
	     // Function 2:
	        friend void swap(_Myt& _X, _Myt& _Y);
	     // Function 3:
	        const_iterator begin() const;
	     // Function 4:
	        const_iterator end() const;
	     }
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The swap function swaps the two controlled sequences. The begin function returns
	a bidirectional iterator that points at the first element of the sequence. The
	end function returns a bidirectional iterator that points just beyond the end of
	the sequence.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: -GX
	  // 
	  // SetSwapBeginEnd.cpp:
	  //      Illustrates how to use the swap function to exchange the two
	  //      controlled sequences. It also illustrates how to use the
	  //      begin function to get a bidirectional iterator that points at
	  //      the first element of the controlled sequence. Finally, it
	  //      illustrates how to use the end function to get a bidirectional
	  //      iterator that points just beyond the end of the controlled
	  //      sequence.
	  // 
	  // Functions:
	  // 
	  //    swap        Exchanges the two controlled sequences.
	  //    begin       Returns a bidirectional iterator that points at the
	  //                first element of the controlled sequence.
	  //    end         Returns a bidirectional iterator that points just
	  //                beyond the end of the controlled sequence.
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
	    SET_INT s2;
	    SET_INT::iterator i;
	    cout << "s1.insert(5)" << endl;
	    s1.insert(5);
	    cout << "s1.insert(10)" << endl;
	    s1.insert(10);
	    cout << "s1.insert(15)" << endl;
	    s1.insert(15);
	    cout << "s2.insert(2)" << endl;
	    s2.insert(2);
	    cout << "s2.insert(4)" << endl;
	    s2.insert(4);
	
	    cout << "swap(s1,s2)" << endl;
	    swap(s1,s2);
	
	    // Displays: 2,4
	
	    for (i=s1.begin();i!=s1.end();i++)
	
	       cout << "s1 has " << *i << " in its set." << endl;
	
	    // Displays: 5,10,15
	
	    for (i=s2.begin();i!=s2.end();i++)
	
	       cout << "s2 has " << *i << " in its set." << endl;
	
	    cout << "s1.swap(s2)" << endl;
	    s1.swap(s2);
	
	    // Displays: 5,10,15
	
	    for (i=s1.begin();i!=s1.end();i++)
	
	       cout << "s1 has " << *i << " in its set." << endl;
	
	    // Displays: 2,4
	
	    for (i=s2.begin();i!=s2.end();i++)
	
	       cout << "s2 has " << *i << " in its set." << endl;
	
	  }
	
	Program Output
	--------------
	
	  s1.insert(5)
	  s1.insert(10)
	  s1.insert(15)
	  s2.insert(2)
	  s2.insert(4)
	  swap(s1,s2)
	  s1 has 2 in its set.
	  s1 has 4 in its set.
	  s2 has 5 in its set.
	  s2 has 10 in its set.
	  s2 has 15 in its set.
	  s1.swap(s2)
	  s1 has 5 in its set.
	  s1 has 10 in its set.
	  s1 has 15 in its set.
	  s2 has 2 in its set.
	  s2 has 4 in its set.
	
	REFERENCES
	==========
	
	Visual C++ Books Online: Visual C++ Books; C/C++; Standard C++ Library Reference
	
	Additional query words: STL STLSample swap begin end
	
	======================================================================
	Keywords          : kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
