---
layout: page
title: "Q156790: INFO: STL Sample for the operator == and operato"
permalink: /kb/156/Q156790/
---

## Q156790: INFO: STL Sample for the operator == and operato

{% raw %}

	Article: Q156790
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbVC420 kbVC500 kbVC600 kbDSupport
	Last Modified: 27-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the operator== and operator< STL
	functions for the deque container class in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     < deque>
	
	Prototype
	---------
	
	     template<class T, class A>
	
	         bool operator==(
	             const deque <T, A>& lhs,
	             const deque <T, A>& rhs);
	
	     template<class T, class A>
	
	         bool operator<(
	             const deque <T, A>& lhs,
	             const deque <T, A>& rhs);
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The first template function overloads operator== to compare two objects of
	template class deque. The function returns:
	
	     lhs.size() == rhs.size() && equal(lhs. begin(), lhs. end(),
	     rhs.begin()).
	
	For equality, the number of elements must be equal in both the deque objects.
	
	The second template function overloads operator< to compare two objects of
	template class deque. The function returns:
	
	     lexicographical_compare(lhs. begin(), lhs. end(), rhs.begin(),
	     rhs.end()).
	
	Because lexicographic (as in a dictionary) compare is used, the number of
	elements does not matter while using operator<. In the sample code, adding a
	line of code while creating the b object, such as b.push_front('D');, will make
	b greater than a.
	
	Sample Code
	-----------
	
	     ////////////////////////////////////////////////////////////////////// 
	     // 
	     // Compile options needed: -GX
	     // 
	     // deque.cpp :
	     // 
	     // Functions:
	     // 
	     //    ==
	     //    <
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
	         //create a  with  3 A's
	         CHARDEQUE  a(3,'A');
	         a.push_front('C');
	
	         //create b with 4 B's.
	         CHARDEQUE  b(6,'B');
	
	         //print out the contents
	         print_contents (a,"a");
	         print_contents (b,"b");
	
	         //compare a and b
	         if (a==b)
	             cout <<"a is equal to b"<<endl;
	         else if(a<b)
	                 cout <<"a is less than b"<<endl;
	         else
	             cout <<"a is greater than b" <<endl;
	
	         //assign the contents of b to a
	         a.assign(b.begin(),b.end());
	         print_contents (a,"a");
	         print_contents (b,"b");
	
	         //compare a and b again
	         if (a==b)
	             cout <<"a is equal to b"<<endl;
	         else if(a<b)
	                 cout <<"a is less than b"<<endl;
	         else
	             cout <<"a is greater than b" <<endl;
	
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
	
	  The contents of a : C A A A
	  The contents of b : B B B B B B
	  a is greater than b
	  The contents of a : B B B B B B
	  The contents of b : B B B B B B
	  a is equal to b
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample deque == kbSTL kbtemplate
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
