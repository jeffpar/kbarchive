---
layout: page
title: "Q158037: STL Sample for the stack::operator== Function"
permalink: kb/158/Q158037/
---

## Q158037: STL Sample for the stack::operator== Function

	Article: Q158037
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbVC420 kbVC500 kbVC600 kbDSupport
	Last Modified: 17-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the stack::operator== STL function
	in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <stack>
	
	Prototype
	---------
	
	     template<class _TYPE, class _C, class _A>
	     bool stack::bool operator==(const stack<_TYPE, _C, _A>& _X) const;
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The stack::operator== function returns true if both stacks have equal elements
	arranged in the same sequence. The stack::operator== function always returns
	false if the two stacks are of different size.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // StackEqual.cpp :  Illustrates how to use the stack::operator==
	  //                   function to determine if two stacks are equal.
	  // 
	  // Functions:
	  // 
	  //    operator== :  Returns true if both stacks are the same.
	  // 
	  // Written by Derek Jamison
	  // of Microsoft Product Support Services,
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  #pragma warning(disable:4786)
	
	  #include <stack>
	  #include <iostream>
	  using namespace std;
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  typedef stack<double, deque<double, allocator<double> >,
	
	             allocator<double> > STACK_DOUBLE;
	
	  void main()
	
	  {
	
	     STACK_DOUBLE stack1,stack2;
	
	     // Add item 4.0 to Stack1.
	     cout << "stack1.push(4.0)  s1=[4.0]" << endl;
	     stack1.push(4.0);
	
	     // Add item 3.0 to Stack1. Current Stack1 contains items 3.0 (top)
	     // 4.0 (bottom).
	     cout << "stack1.push(3.0)  s1=[3.0 4.0]" << endl;
	     stack1.push(3.0);
	
	     // Add item 4.0 to Stack2.
	     cout << "stack2.push(4.0)  s2=[4.0]" << endl;
	     stack2.push(4.0);
	
	     // Compare Stack1 and Stack2. Should return False.
	     cout << "stack1==stack2 is " <<
	        ((stack1==stack2)? "True": "False") << endl << endl;
	
	     // Add item 6.0 to Stack2. Current Stack2 contains items 6.0 (top)
	     // 4.0 (bottom)
	     cout << "stack2.push(6.0)  s2=[6.0 4.0]" << endl;
	     stack2.push(6.0);
	
	     // Compare Stack1 and Stack2. Should return False.
	     cout << "stack1==stack2 is " <<
	        ((stack1==stack2)? "True": "False") << endl << endl;
	
	     // Keep adding item 8.0 to Stack2. Current Stack2 contains items
	     // 8.0 (top), 6.0 and 4.0 (bottom).
	     cout << "stack2.push(8.0)  s2=[8.0 6.0 4.0]" << endl;
	     stack2.push(8.0);
	
	     // Compare Stack1 and Stack2. Should return False.
	     cout << "stack1==stack2 is " <<
	        ((stack1==stack2)? "True": "False") << endl << endl;
	
	     // Delete the top item from Stack2. Current Stack2 contains items
	     // 6.0 (top) and 4.0 (bottom).
	     cout << "stack2.pop()      s2=[6.0 4.0]" << endl;
	     stack2.pop();
	
	     // Delete another item from Stack2. Current Stack2 contains item 4.0.
	     cout << "stack2.pop()      s2=[4.0]" << endl;
	     stack2.pop();
	
	     // Add item 3.0 to Stack2. Current Stack2 contains item 3.0 (top) and
	     // 4.0 (bottom).
	     cout << "stack2.push(3.0)  s2=[3.0 4.0]" << endl;
	     stack2.push(3.0);
	
	     // Compare Stack2 and Stack2. Should return True.
	     cout << "stack1==stack2 is " <<
	        ((stack1==stack2)? "True": "False") << endl << endl;
	
	     // Delete the top item from Stack2. Current Stack2 contains 4.0.
	     cout << "stack2.pop()      s2=[4.0]" << endl;
	     stack2.pop();
	
	     // Delete another item from Stack2. Stack2 should be empty.
	     cout << "stack2.pop()      s2=[]" << endl;
	     stack2.pop();
	
	     // Push item 8.0 to Stack2.
	     cout << "stack2.push(8.0)  s2=[8.0]" << endl;
	     stack2.push(8.0);
	
	     // Compare Stack1 and Stack2. Should return False.
	     cout << "stack1==stack2 is " <<
	        ((stack1==stack2)? "True": "False") << endl << endl;
	
	  }
	
	Program Output
	--------------
	
	  stack1.push(4.0)  s1=[4.0]
	  stack1.push(3.0)  s1=[3.0 4.0]
	  stack2.push(4.0)  s2=[4.0]
	  stack1==stack2 is False
	
	  stack2.push(6.0)  s2=[6.0 4.0]
	  stack1==stack2 is False
	
	  stack2.push(8.0)  s2=[8.0 6.0 4.0]
	  stack1==stack2 is False
	
	  stack2.pop()      s2=[6.0 4.0]
	  stack2.pop()      s2=[4.0]
	  stack2.push(3.0)  s2=[3.0 4.0]
	  stack1==stack2 is True
	
	  stack2.pop()      s2=[4.0]
	  stack2.pop()      s2=[]
	  stack2.push(8.0)  s2=[8.0]
	  stack1==stack2 is False
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample operator==
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
