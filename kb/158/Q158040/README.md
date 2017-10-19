---
layout: page
title: "Q158040: STL Sample for the stack::top and stack::empty Functions"
permalink: /kb/158/Q158040/
---

## Q158040: STL Sample for the stack::top and stack::empty Functions

	Article: Q158040
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
	
	The sample code below illustrates how to use the stack::top and stack::empty STL
	functions in Visual C++.
	
	MORE INFORMATION
	================
	
	Required Header
	---------------
	
	     <stack>
	
	Prototype
	---------
	
	      template<class _TYPE, class _C, class _A>    // Function 1
	      value_type& stack::top();
	
	      template<class _TYPE, class _C, class _A>    // Function 2
	      const value_type& stack::top() const;
	
	      template<class _TYPE, class _C, class _A>    // Function 3
	      bool stack::empty() const;
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The top function returns the topmost element of the stack. You should ensure that
	there are one or more elements on the stack before calling the top function. The
	first version of the top function returns a reference to the element of the top
	of the stack, allowing you to modify the value. The second function returns a
	constant reference, ensuring that you don't accidentally modify the stack.
	
	The empty function returns true if there are no elements in the stack. If there
	are one or more elements, the function will return false. You should use the
	empty function to verify that there are elements left on the stack before
	calling the top function.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // StackTop&Empty.cpp : Illustrates how to use the top function to
	  //                      retrieve the last element of the controlled
	  //                      sequence. It also illustrates how to use the
	  //                      empty function to loop though the stack.
	  // Functions:
	  // 
	  //    top   :  returns the top element of the stack.
	  //    empty :  returns true if the stack has 0 elements.
	  // 
	  // Written by Derek Jamison
	  // of Microsoft Product Support Services,
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  #pragma warning(disable:4786)
	
	  #include <stack>
	  #include <iostream>
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  typedef stack<int, deque<int> > STACK_INT;
	
	  void main()
	
	  {
	
	     STACK_INT stack1;
	
	     cout << "stack1.empty() returned " <<
	
	        (stack1.empty()? "true": "false") << endl;  // Function 3
	
	     cout << "stack1.push(2)" << endl;
	     stack1.push(2);
	
	     if (!stack1.empty())                           // Function 3
	
	        cout << "stack1.top() returned " <<
	        stack1.top() << endl;                       // Function 1
	
	     cout << "stack1.push(5)" << endl;
	     stack1.push(5);
	
	     if (!stack1.empty())                           // Function 3
	
	        cout << "stack1.top() returned " <<
	        stack1.top() << endl;                       // Function 1
	
	     cout << "stack1.push(11)" << endl;
	     stack1.push(11);
	
	     if (!stack1.empty())                           // Function 3
	
	        cout << "stack1.top() returned " <<
	        stack1.top() << endl;                       // Function 1
	
	     // Modify the top item. Set it to 6.
	     if (!stack1.empty()) {                         // Function 3
	        cout << "stack1.top()=6;" << endl;
	        stack1.top()=6;                             // Function 1
	     }
	
	     // Repeat until stack is empty
	     while (!stack1.empty()) {                      // Function 3
	        const int& t=stack1.top();                  // Function 2
	        cout << "stack1.top() returned " << t << endl;
	        cout << "stack1.pop()" << endl;
	        stack1.pop();
	     }
	
	  } 
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample top empty
	
	======================================================================
	Keywords          : kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
