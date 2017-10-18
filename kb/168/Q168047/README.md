---
layout: page
title: "Q168047: HOWTO: STL Sample for [list::remove, remove_if] Function(s)"
permalink: kb/168/Q168047/
---

## Q168047: HOWTO: STL Sample for [list::remove, remove_if] Function(s)

	Article: Q168047
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): _IK kbVC420 kbVC500 kbVC600
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
	
	The sample code below illustrates how to use the [list::remove, list::remove_if]
	STL function(s) in Visual C++.
	
	Note that there are some differences in the implementation of the Standard C++
	Library components in Visual C++ version 4.2 versus later revisions. The
	relevant sections of code below compile conditionally based upon the value of
	_MSC_VER.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <list>
	     <string>
	     <iostream>
	
	Prototype
	---------
	
	     void remove(const T& x);
	     void remove_if(binder2nd< not_equal_to<T> > pr);
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	This example shows how to use list::remove and list::remove_if. It also shows how
	to use list::remove_if with your own function.
	
	Sample Code
	-----------
	
	     ////////////////////////////////////////////////////////////////////// 
	     // 
	     // Compile options needed: -GX
	     // 
	     // remove.cpp :  This example shows how to use list::remove and
	     //               list::remove_if.  It also shows how to use
	     //               list::remove_if with your own function.
	     // 
	     // Functions:
	     // 
	     //  list::remove
	     //  list::remove_if
	     // 
	     // Written by Andrew Bradnan
	     // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	     ////////////////////////////////////////////////////////////////////// 
	
	     #pragma warning(disable:4786) // disable spurious C4786 warnings
	
	     #include <list>
	     #include <string>
	     #include <iostream>
	     using namespace std;
	
	     #if _MSC_VER > 1020   // if later than revision 4.2
	     using namespace std;   // std c++ libs are implemented in std
	     #endif
	
	     typedef list<string, allocator<string> > LISTSTR;
	
	     // Used to customize list::remove_if()
	     class is_four_chars
	        : public not_equal_to<string>
	     {
	        bool operator()(const string& rhs, const string&) const
	        {  return rhs.size() == 4; }
	     };
	
	     void main()
	     {
	        LISTSTR test;
	        LISTSTR::iterator i;
	
	        test.push_back("good");
	        test.push_back("bad");
	        test.push_back("ugly");
	
	        // good bad ugly
	        for (i = test.begin(); i != test.end(); ++i)
	           cout << *i << " ";
	        cout << endl;
	
	        test.remove("bad");
	
	        // good ugly
	        for (i = test.begin(); i != test.end(); ++i)
	           cout << *i << " ";
	        cout << endl;
	
	        // remove any not equal to "good"
	        test.remove_if(binder2nd<not_equal_to<string> >
	           (not_equal_to<string>(), "good"));
	
	        // good
	        for (i = test.begin(); i != test.end(); ++i)
	           cout << *i << " ";
	        cout << endl;
	
	        // Remove any strings that are four characters long
	        test.remove_if(binder2nd<not_equal_to<string> >
	           (is_four_chars(), "useless parameter"));
	
	        if (test.empty())
	           cout << "Empty list\n";
	
	     }
	
	Program Output
	--------------
	
	  good bad ugly
	  good ugly
	  good
	  Empty list
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample [xxxx]
	
	======================================================================
	Keywords          : _IK kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : winnt:4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
