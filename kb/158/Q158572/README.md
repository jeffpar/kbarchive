---
layout: page
title: "Q158572: STL Sample set::(lower_, upper_)bound, equal_range Functions"
permalink: /kb/158/Q158572/
---

## Q158572: STL Sample set::(lower_, upper_)bound, equal_range Functions

{% raw %}

	Article: Q158572
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): _IK kbVC420 kbVC500 kbVC600 kbDSupport
	Last Modified: 05-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following sample code illustrates how to use the set::lower_bound,
	set::upper_bound, and set::equal_range STL functions in Visual C++.
	
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
	
	        const_iterator lower_bound(const _K& _Kv) const;
	
	     // Function 2:
	        const_iterator upper_bound(const _K& _Kv) const;
	     // Function 3:
	        _Paircc equal_range(const _K& _Kv) const;
	     }
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The lower_bound function returns an iterator to the earliest element in the
	controlled sequence that has a key that does not match the value passed to the
	lower_bound function. The upper_bound function returns an iterator to the
	earliest element in the controlled sequence that has a key that matches the
	value passed to the upper_bound function. If no such element exists, the
	function returns end(). In both cases, the function set::key_comp()(key, x) is
	used to determine if the keys match. The equal_range function returns a pair
	value, where .first is the result of the lower_bound function, and .second is
	the result of the upper_bound function.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: -GX
	  // 
	  // SetBoundRange.cpp:
	  //      Illustrates how to use the lower_bound function to get an
	  //      iterator to the earliest element in the controlled sequence
	  //      that has a key that does not match the value passed to the
	  //      function. It also illustrates how to use the upper_bound
	  //      function to get an iterator to the earliest element in the
	  //      controlled sequence that has a key that matches the value
	  //      passed to the function. The last thing it illustrates is
	  //      how to use the equal_range function to get a pair value that
	  //      contains the lower_bound and upper_bound results of the key.
	  // 
	  // Functions:
	  // 
	  //    lower_bound  Returns an iterator whose value does not match the
	  //                 key passed to the function, or end() if no such
	  //                 element exists.
	  //    upper_bound  Returns an iterator whose value matches the key
	  //                 passed to the function, or end() if no such element
	  //                 exists.
	  //    equal_range  Returns a pair of (lower_bound,upper_bound).
	  // 
	  // Written by Derek Jamison
	  // of Microsoft Technical Support,
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  #pragma warning(disable:4786)
	
	  #include <set>
	  #include <iostream>
	  using namespace std;
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  typedef set<int,less<int>,allocator<int> > SET_INT;
	
	  void main() {
	
	    SET_INT s1;
	    SET_INT::iterator i;
	    cout << "s1.insert(5)" << endl;
	    s1.insert(5);
	    cout << "s1.insert(10)" << endl;
	    s1.insert(10);
	    cout << "s1.insert(15)" << endl;
	    s1.insert(15);
	    cout << "s1.insert(20)" << endl;
	    s1.insert(20);
	    cout << "s1.insert(25)" << endl;
	    s1.insert(25);
	
	    cout << "s1 -- starting at s1.lower_bound(12)" << endl;
	
	  // prints: 15,20,25
	
	    for (i=s1.lower_bound(12);i!=s1.end();i++)
	
	       cout << "s1 has " << *i << " in its set." << endl;
	
	    cout << "s1 -- starting at s1.lower_bound(15)" << endl;
	
	  // prints: 15,20,25
	
	    for (i=s1.lower_bound(15);i!=s1.end();i++)
	
	       cout << "s1 has " << *i << " in its set." << endl;
	
	    cout << "s1 -- starting at s1.upper_bound(12)" << endl;
	
	  // prints: 15,20,25
	
	    for (i=s1.upper_bound(12);i!=s1.end();i++)
	
	       cout << "s1 has " << *i << " in its set." << endl;
	
	    cout << "s1 -- starting at s1.upper_bound(15)" << endl;
	
	  // prints: 20,25
	
	    for (i=s1.upper_bound(15);i!=s1.end();i++)
	
	       cout << "s1 has " << *i << " in its set." << endl;
	
	    cout << "s1 -- s1.equal_range(12)" << endl;
	
	  // does not print anything
	
	    for (i=s1.equal_range(12).first;i!=s1.equal_range(12).second;i++)
	
	       cout << "s1 has " << *i << " in its set." << endl;
	
	    cout << "s1 -- s1.equal_range(15)" << endl;
	
	  // prints: 15
	
	    for (i=s1.equal_range(15).first;i!=s1.equal_range(15).second;i++)
	
	       cout << "s1 has " << *i << " in its set." << endl;
	
	  }
	
	Program Output
	--------------
	
	  s1.insert(5)
	  s1.insert(10)
	  s1.insert(15)
	  s1.insert(20)
	  s1.insert(25)
	  s1 -- starting at s1.low
	  s1 has 15 in its set.
	  s1 has 20 in its set.
	  s1 has 25 in its set.
	  s1 -- starting at s1.low
	  s1 has 15 in its set.
	  s1 has 20 in its set.
	  s1 has 25 in its set.
	  s1 -- starting at s1.upp
	  s1 has 15 in its set.
	  s1 has 20 in its set.
	  s1 has 25 in its set.
	  s1 -- starting at s1.upp
	  s1 has 20 in its set.
	  s1 has 25 in its set.
	  s1 -- s1.equal_range(12)
	  s1 -- s1.equal_range(15)
	  s1 has 15 in its set.
	
	REFERENCES
	==========
	
	Visual C++ Books Online: Visual C++ Books; C/C++; Standard C++ Library Reference
	
	Additional query words: STL STLSample equal_range lower_bound upper_bound string
	
	======================================================================
	Keywords          : _IK kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : winnt:4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
