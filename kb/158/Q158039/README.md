---
layout: page
title: "Q158039: STL Sample for the stack::size Function"
permalink: /kb/158/Q158039/
---

## Q158039: STL Sample for the stack::size Function

{% raw %}

	Article: Q158039
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
	
	The sample code below illustrates how to use the stack::size STL function in
	Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <stack>
	
	Prototype
	---------
	
	     template<class _TYPE, class _C, class _A>
	     size_type stack::size() const;
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The stack::size function returns the number of elements in the stack. It is okay
	to call this function with an empty stack; it will return a value of 0.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // StackSize.cpp : Illustrates how to use the size function to determine
	  //                 the number of elements on the stack.
	  // 
	  // Functions:
	  // 
	  //    size :  returns the number of elements in the stack.
	  // 
	  // Written by Derek Jamison
	  // of Microsoft Product Support Services,
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  #pragma warning(disable:4786)
	
	  #include <stack>
	  #include <string>
	  #include <iostream>
	  using namespace std;
	
	   #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  typedef stack<string, deque<string, allocator<string> >,
	
	                allocator<string> > STACK_STRING;
	
	  void main()
	
	  {
	
	     STACK_STRING stack1;
	
	     // Check the size of an empty stack. Should return 0.
	     cout << "stack1.size() equals " << stack1.size() << endl;
	
	     // Add item "Hello" to Stack1.
	     cout << "stack1.push('Hello')" << endl;
	     stack1.push("Hello");
	
	     // Add item "This is the second element" to Stack1.
	     cout << "stack1.push('This is the second element')" << endl;
	     stack1.push("This is the second element");
	
	     // Check the size of Stack1. Should return 2.
	     cout << "stack1.size() equals " << stack1.size() << endl << endl;
	
	     // Add item "Third element" to Stack1.
	     cout << "stack1.push('Third element')" << endl;
	     stack1.push("Third element");
	
	     // Check the size of Stack1. Should return 3.
	     cout << "stack1.size() equals " << stack1.size() << endl << endl;
	
	     // Pop "Third element".
	     cout << "stack1.pop()" << endl;
	     stack1.pop();
	
	     // Pop "This is the second element".
	     cout << "stack1.pop()" << endl;
	     stack1.pop();
	
	     // Check the size of Stack1 again. Should return 1.
	     cout << "stack1.size() equals " << stack1.size()  << endl << endl;
	
	     // Pop "Hello".
	     cout << "stack1.pop()" << endl;
	     stack1.pop();
	
	     // Check the size of Stack1. Should return 0.
	     cout << "stack1.size() equals " << stack1.size() << endl << endl;
	
	  }
	
	Program Output is:
	
	stack1.size() equals 0
	
	stack1.push('Hello')
	stack1.push('This is the second element')
	stack1.size() equals 2
	
	stack1.push('Third element')
	stack1.size() equals 3
	
	stack1.pop()
	stack1.pop()
	stack1.size() equals 1
	
	stack1.pop()
	stack1.size() equals 0
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample size
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
