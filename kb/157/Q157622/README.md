---
layout: page
title: "Q157622: STL Sample for queue::(push,pop,empty,back,front) Functions"
permalink: kb/157/Q157622/
---

## Q157622: STL Sample for queue::(push,pop,empty,back,front) Functions

	Article: Q157622
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600 kbDSupport
	Last Modified: 02-MAY-2002
	
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
	
	The sample code below illustrates how to use the queue::push, queue::pop,
	queue::empty, queue::back, queue::front, and queue::size STL functions in Visual
	C++.
	
	MORE INFORMATION
	================
	
	The queue adapter holds objects of the type defined by the type of container
	supported by the queue. The two containers supported are the list and the deque.
	Objects are inserted by push() and removed by pop(). front() returns the oldest
	item in the queue (also known as FIFO), and back() returns the latest item
	inserted in the queue.
	
	Required Header
	---------------
	
	     <queue>
	
	Prototypes
	----------
	
	  queue::push();
	  queue::pop();
	  queue::empty();
	  queue::back();
	  queue::front();
	  queue::size();
	
	NOTE: The class/parameter names in the prototypes may not match the version in
	the header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The sample shows queue implementation using list and deque containers.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: none
	  // 
	  // <filename> :  queue.cpp
	  // 
	  // Functions:
	  // 
	  //    queue::push(), queue::pop(), queue::empty(), queue::back(),
	  //    queue::front(),queue::size()
	  // 
	  // Written by Debabrata Sarma
	  // of Microsoft Product Support Services,
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  /* Compile options needed: /GX
	  */ 
	  #include <list>
	  #include <iostream>
	  #include <queue>
	  #include <deque>
	  using namespace std;
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  // Using queue with list
	
	  typedef list<int, allocator<int> > INTLIST;
	  typedef queue<int,INTLIST >  INTQUEUE;
	
	  // Using queue with deque
	
	  typedef deque<char*, allocator<char*> > CHARDEQUE;
	  typedef queue<char*,CHARDEQUE> CHARQUEUE;
	
	  void main(void)
	
	  {
	
	      int size_q;
	      INTQUEUE q;
	      CHARQUEUE p;
	
	      // Insert items in the queue(uses list)
	      q.push(42);
	      q.push(100);
	      q.push(49);
	      q.push(201);
	
	      // Output the item inserted last using back()
	      cout << q.back() << endl;
	
	      // Output the size of queue
	      size_q = q.size();
	      cout << "size of q is:" << size_q << endl;
	
	      // Output items in queue using front()
	      // and use pop() to get to next item until
	      // queue is empty
	      while (!q.empty())
	      {
	          cout << q.front() << endl;
	          q.pop();
	
	      }
	
	  // Insert items in the queue(uses deque)
	      p.push("cat");
	      p.push("ape");
	      p.push("dog");
	      p.push("mouse");
	      p.push("horse");
	
	      // Output the item inserted last using back()
	      cout << p.back() << endl;
	
	      // Output the size of queue
	      size_q = p.size();
	      cout << "size of p is:" << size_q << endl;
	
	      // Output items in queue using front()
	      // and use pop() to get to next item until
	      // queue is empty
	      while (!p.empty())
	      {
	          cout << p.front() << endl;
	          p.pop();
	
	      }
	
	  } 
	
	Program Output:
	
	201
	size of q is:4
	42
	100
	49
	201
	horse
	size of p is:5
	cat
	ape
	dog
	mouse
	horse
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample push pop empty back front size
	
	======================================================================
	Keywords          : kbcode kbtemplate kbSTL kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCNET kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
