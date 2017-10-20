---
layout: page
title: "Q163359: HOWTO: STL Sample for list::size,list::resize Functions"
permalink: /kb/163/Q163359/
---

## Q163359: HOWTO: STL Sample for list::size,list::resize Functions

{% raw %}

	Article: Q163359
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbVC420 kbVC500 kbVC600 kbDSupport
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the list::max_size, list::size,
	list::resize STL functions in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <list>
	     <string>
	     <iostream>
	
	Prototype
	---------
	
	     size_type max_size() const;
	     size_type size() const;
	     void resize(size_type n, T x = T());
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The member function max_size returns the length of the longest sequence that the
	object can control. The member function size returns the length of the
	controlled sequence. The member function resize ensures that size() henceforth
	returns n. If the member function resize must make the controlled sequence
	longer, it appends elements with the value x.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: -GX
	  // 
	  // size.cpp :  This example shows how to resize a list<T>.  It also
	  //             uses list::size() and list::max_size().
	  // 
	  //  Functions
	  //  ---------
	  // 
	  //  list::size
	  //  list::resize
	  //  list::max_size
	  // 
	  // Written by Andrew Bradnan
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	      #include <list>
	      #include <string>
	      #include <iostream>
	      
	     #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	      typedef list<string, allocator<string> > LISTSTR;
	
	      void main()
	      {
	         LISTSTR test;
	         LISTSTR::iterator i;
	
	         cout << "max_size() = " << test.max_size() << endl;
	
	         test.insert(test.begin(), 10, "test");
	
	         cout << "There are " << test.size() << " elements." << endl;
	         // test test test test test test test test test test
	         for (i = test.begin(); i != test.end(); ++i)
	            cout << *i << " ";
	         cout << endl;
	
	         // Make it smaller
	         test.resize(5);
	         cout << "There are " << test.size() << " elements." << endl;
	         // test test test test test
	         for (i = test.begin(); i != test.end(); ++i)
	            cout << *i << " ";
	         cout << endl;
	
	         // Make it bigger
	         test.resize(10, "bigger");
	         // test test test test test bigger bigger bigger bigger bigger
	         cout << "There are " << test.size() << " elements." << endl;
	         for (i = test.begin(); i != test.end(); ++i)
	            cout << *i << " ";
	         cout << endl;
	
	         test.clear();
	         cout << "There are " << test.size() << " elements." << endl;
	      }
	
	The Program Output is:
	
	      max_size() = 268435455
	      There are 10 elements.
	      test test test test test test test test test test
	      There are 5 elements.
	      test test test test test
	      There are 10 elements.
	      test test test test test bigger bigger bigger bigger bigger
	      There are 0 elements.
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference
	
	Additional query words: STL STLSample list max_size size resize clear kbSTL
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
