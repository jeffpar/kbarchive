---
layout: page
title: "Q156760: STL Sample for deque::front and deque::back Functions"
permalink: /kb/156/Q156760/
---

## Q156760: STL Sample for deque::front and deque::back Functions

{% raw %}

	Article: Q156760
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbVC420 kbVC500 kbVC600 kbDSupport
	Last Modified: 26-MAR-2002
	
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
	
	The sample code below illustrates how to use the deque::front and deque::back
	STL functions for the deque container class in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     < deque>
	
	Prototype
	---------
	
	     reference front();
	     const_reference front() const;
	
	     reference back();
	     const_reference back() const;
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The member function front() returns a reference to the first element of the
	controlled sequence, which must be non-empty.
	
	The member function back() returns a reference to the last element of the
	controlled sequence, which must be non-empty.
	
	Sample Code
	-----------
	
	NOTE: In the first line of the sample code section, /GX is equivalent to /EHsc in
	VC++ .NET and is set by default.
	
	     ////////////////////////////////////////////////////////////////////// 
	     // 
	     // Compile options needed: -GX
	     // 
	     // deque.cpp :
	     // 
	     // Functions:
	     // 
	     //    front()
	     // 
	     //    back()
	     // 
	     // Written by Bobby Mattappally
	     // of Microsoft Product Support Services,
	     // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	     ////////////////////////////////////////////////////////////////////// 
	
	     /* Compile options needed:-GX
	     */ 
	     #include <iostream>
	     #include <deque>
	    
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	     typedef deque<char, allocator<char> >  CHARDEQUE;
	     void print_contents (CHARDEQUE  deque, char*);
	
	     void main()
	     {
	         //create a  with  A, B, C and D
	         CHARDEQUE  a;
	         a.push_back('A');
	         a.push_back('B');
	         a.push_back('C');
	         a.push_back('D');
	
	         //print out the contents
	         print_contents (a,"a");
	
	         cout <<"The first element of a is " <<a.front() <<endl;
	
	         cout <<"The last element of a is " <<a.back() <<endl;
	
	         //now let us modify the first and last elements
	         //using reference ,front() and back()
	
	         CHARDEQUE::reference reffront=a.front();
	         CHARDEQUE::reference refback=a.back();
	
	         reffront='X';
	         refback='Y';
	
	          //print out the contents
	          print_contents (a,"a");
	
	         }
	
	     //function to print the contents of deque
	     void print_contents (CHARDEQUE  deque, char *name)
	     {
	         CHARDEQUE::iterator pdeque;
	
	         cout <<"The contents of "<< name <<" : ";
	
	             for(pdeque = deque.begin();
	             pdeque != deque.end();
	             pdeque++)
	         {
	             cout << *pdeque <<" " ;
	         }
	             cout<<endl;
	
	     }
	
	Program output is:
	
	  The contents of a : A B C D
	
	  The first element of a is A
	
	  The last element of a is D
	
	  The contents of a : X B C Y
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample deque front back reference
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCNET kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
