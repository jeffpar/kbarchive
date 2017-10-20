---
layout: page
title: "Q157623: STL Sample for priority_queue::(push,pop,empty,top) Functions"
permalink: /kb/157/Q157623/
---

## Q157623: STL Sample for priority_queue::(push,pop,empty,top) Functions

{% raw %}

	Article: Q157623
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbVC420 kbVC500 kbVC600 kbDSupport
	Last Modified: 29-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use the priority_queue::push,
	priority_queue::pop, priority_queue::empty, priority_queue::top, and
	priority_queue::size STL functions in Visual C++.
	
	MORE INFORMATION
	================
	
	The priority_queue adapter holds objects of the type defined by the type of
	container supported by the priority_queue. The two containers supported are the
	vector and the deque. Objects are inserted by push() and removed by pop(). top()
	returns the top item in the priority_queue.
	
	Since adapters do not support iteration, a priority_queue has no associated
	iterator.
	
	Priority_queue allows you to maintain a sorted collection of items determined by
	an associated comparator function, such as less, greater, etc. The top item
	therefore becomes the candidate of choice, lowest or highest based on the
	function chosen.
	
	Required Header
	---------------
	
	     <queue>
	
	Prototype
	---------
	
	     priority_queue::push();
	     priority_queue::pop();
	     priority_queue::empty();
	     priority_queue::top();
	     priority_queue::size();
	
	NOTE: The class/parameter names in the prototype may not match the version in the
	header file. Some have been modified to improve readability.
	
	Description
	-----------
	
	The sample shows priority_queue implementation using deque and vector
	containers.
	
	Sample Code
	-----------
	
	  ////////////////////////////////////////////////////////////////////// 
	  // 
	  // Compile options needed: /GX
	  // 
	  // <filename> :  priority_queue.cpp
	  // 
	  // Functions:
	  // 
	  //    priority_queue::push(), priority_queue::pop(),
	  //    priority_queue::empty(), priority_queue::top(), queue::size()
	  // 
	  // Written by Debabrata Sarma
	  // of Microsoft Product Support Services,
	  // Copyright (c) 1996 Microsoft Corporation. All rights reserved.
	  ////////////////////////////////////////////////////////////////////// 
	
	  #include <iostream>
	  #include <queue>
	  #include <deque>
	  #include <vector>
	  #include <functional>
	  using namespace std;
	
	  #if _MSC_VER > 1020   // if VC++ version is > 4.2
	     using namespace std;  // std c++ libs implemented in std
	     #endif
	
	  // Using priority_queue with deque
	  // Use of function greater sorts the items in ascending order
	  typedef deque<int, allocator<int> > INTDQU;
	  typedef priority_queue<int,INTDQU, greater>int>, allocator<int> > INTPRQUE;
	
	  // Using priority_queue with vector
	  // Use of function less sorts the items in descending order
	  typedef vector<char, allocator<char> > CHVECTOR;
	  typedef priority_queue<char,CHVECTOR,less<char>,allocator<char> > CHPRQUE;
	
	  void main(void)
	  {
	      int size_q;
	      INTPRQUE   q;
	      CHPRQUE    p;
	
	      // Insert items in the priority_queue(uses deque)
	      q.push(42);
	      q.push(100);
	      q.push(49);
	      q.push(201);
	
	      // Output the item at the top using top()
	      cout << q.top() << endl;
	      // Output the size of priority_queue
	      size_q = q.size();
	      cout << "size of q is:" << size_q << endl;
	      // Output items in priority_queue using top()
	      // and use pop() to get to next item until
	      // priority_queue is empty
	      while (!q.empty())
	      {
	          cout << q.top() << endl;
	          q.pop();
	      }
	
	  // Insert items in the priority_queue(uses vector)
	      p.push('c');
	      p.push('a');
	      p.push('d');
	      p.push('m');
	      p.push('h');
	
	      // Output the item at the top using top()
	      cout << p.top() << endl;
	
	      // Output the size of priority_queue
	      size_q = p.size();
	      cout << "size of p is:" << size_q << endl;
	
	      // Output items in priority_queue using top()
	      // and use pop() to get to next item until
	      // priority_queue is empty
	      while (!p.empty())
	      {
	          cout << p.top() << endl;
	          p.pop();
	      }
	  }
	
	Program Output:
	
	42
	size of q is:4
	42
	49
	100
	201
	m
	size of p is:5
	m
	h
	d
	c
	a
	
	REFERENCES
	==========
	
	Visual C++ Books On Line: Visual C++ Books:C/C++:Standard C++ Library Reference.
	
	Additional query words: STL STLSample push pop empty top size less() greater()
	
	======================================================================
	Keywords          : kbcode kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
