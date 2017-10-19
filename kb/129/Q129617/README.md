---
layout: page
title: "Q129617: FIX: Destructor Called on Non Constructed Temporary"
permalink: /kb/129/Q129617/
---

## Q129617: FIX: Destructor Called on Non Constructed Temporary

	Article: Q129617
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, versions 1.5, 1.51, 1.52 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The destructor of a class is called on a temporary that was never constructed if
	all the following conditions exist:
	
	- Two classes A and B are created.
	
	- A global function takes an argument of class B by value.
	
	- A conversion operator is used to convert from class A to class B.
	
	- The global function is called with an item of class A.
	
	The destructor being called for an object that was never constructed can cause a
	general protection (GP) fault or other memory errors at run time.
	
	WORKAROUND
	==========
	
	Listed below in order of preference are three workarounds to this problem:
	
	- Define a conversion constructor in class B instead of a conversion operator
	  in class A.
	
	-or-
	
	- Define the function to take an argument of "const B &" instead of taking
	  class B by value.
	
	-or-
	
	- Explicitly instantiate a B object and call the global function with the
	  instance of the B object.
	
	The first workaround produces much cleaner code than the other two workarounds.
	See the sample code listed below for further details.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	The sample code below can be used to reproduce this problem. If the program is
	complied with no options, the following output is displayed when the program is
	run:
	
	  -- A ctor called
	  -- Class A -> Class B conversion called
	  -- B ctor called, Created B: 1245064
	  -- B copy ctor, Created B: 1245096
	  -- B dtor called, Destroyed B: 1245064
	  -- Calling function test(B) on B: 1245076
	  -- B dtor called, Destroyed B: 1245076
	  This B was never constructed!
	  -- B dtor called, Destroyed B: 1245096
	  -- A dtor called
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	  /* Compile options needed, choose one of the following:
	            none           - To demonstrate the problem.
	            /DWORKAROUND1  - For workaround 1.
	            /DWORKAROUND2  - For workaround 2.
	            /DWORKAROUND3  - For workaround 3.
	  */ 
	
	  #include <iostream.h>
	
	  class A;
	
	  class B
	  {
	     B *pBthis;
	  public:
	     B() {
	        pBthis = this;
	        cout << "-- B ctor called, Created B: " << (long)this << endl;
	     }
	  #ifdef WORKAROUND1
	     B(const A&) {
	        pBthis = this;
	        cout << "-- B(A) ctor called, Created B: " << (long)this << endl;
	     }
	  #endif
	     B( const B& b ) {
	        pBthis = this;
	        cout << "-- B copy ctor, Created B: " << (long)this << endl;
	     }
	     ~B() {
	        cout << "-- B dtor called, Destroyed B: " << (long)this << endl;
	       if (pBthis != this)
	           cout << "    This B was never constructed!" << endl;
	     }
	  };
	
	  class A
	  {
	  public:
	
	     A() { cout << "-- A ctor called" << endl; }
	     ~A() { cout << "-- A dtor called" << endl; }
	
	  #ifndef WORKAROUND1
	     operator B() {
	        cout << "-- Class A -> Class B conversion called" << endl;
	        B b1;
	        return b1;
	     }
	  #endif
	
	  };
	
	  #ifdef WORKAROUND2
	  void test(const B &b)
	  #else
	  void test(B b)
	  #endif
	  {
	     cout << "-- Calling function test(B) on B: " << (long)(&b) << endl;
	  }
	
	  int main()
	  {
	     A a;
	  #ifdef WORKAROUND3
	     B b(a);
	     test(b);
	  #else
	     test(a);
	  #endif
	     return 0;
	  }
	
	Additional query words: 1.00 1.50 1.51 1.52 2.00 2.10 8.0 8.00 8.0c 8.00c 9.0 9.00 GPF
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
