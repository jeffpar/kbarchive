---
layout: page
title: "Q139349: FIX: C2607 Error Passing Ref to Pointer w/ Templated Functions"
permalink: /kb/139/Q139349/
---

## Q139349: FIX: C2607 Error Passing Ref to Pointer w/ Templated Functions

	Article: Q139349
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.20
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.20 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you pass a reference to a pointer of the templated type, the compiler
	incorrectly generates an error at the point where the function is called. The
	error is:
	
	  C2607: 'initializing' : cannot implicitly convert a '<type>*' to a
	  'type**& ' that is not const
	
	where <type> represents the data type to which the templated data type is
	being instantiated for the function call.
	
	WORKAROUND
	==========
	
	You may be able to accomplish the same thing by remembering that pointers are
	similar to references, so you may be able to pass a pointer to a pointer instead
	of a reference to a pointer. The problem with this is that it requires code
	modification at the point where the function is called because you must pass the
	address of the pointer. Also, you need to modify the code at any point within
	the function where the pointer is referenced, which means that one more level of
	de-referencing is required.
	
	If it is not necessary to change the address the pointer points to, an easier
	solution is to simply pass the pointer instead of a reference (or pointer) to
	the pointer. This workaround requires no code modification at all, but the
	address the pointer points to cannot be permanently changed from within the
	function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	32 bit edition, version 4.0.
	
	Sample Code to Demonstrate Problem
	----------------------------------
	
	  /* Compile options needed: None - build the following as a console app
	     using default options.
	  */ 
	
	  #include <iostream.h>
	
	  template <class T>
	  void fn(T*& ptr)
	  {
	     *ptr = 71957;
	  }
	
	  void main()
	  {
	      int i = 123;
	      int* ip = &i;
	      fn(ip);   // <=== error C2607: 'initializing' : cannot implicitly
	                //      convert a 'int*' to a 'int**& ' that is not const
	     cout << *ip << endl;
	     cin >> i;
	  }
	
	Example Workaround
	------------------
	
	In this case, the address the pointer points to does not need to be permanently
	changed, so you could simply remove the ampersane (&) from this line:
	
	     void fn(T*& ptr)
	
	This is sufficient to make the program compile and run correctly. If it was
	necessary to change the address that ptr points to permanently within the fn
	function, you could change it to void fn(T** ptr), and add an additional level
	of indirection to every reference of ptr within fn. It would also be necessary
	to add the ampersand (&) operator to every call of fn in order to pass the
	address of its argument. In the previous code sample, fn(ip) would have to be
	changed to fn(&ip).
	
	Additional query words: 2.00 2.10 2.20 9.0 9.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbVC200 kbVC210
	Version           : :2.0,2.1,2.20
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
