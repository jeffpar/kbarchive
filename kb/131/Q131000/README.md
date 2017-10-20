---
layout: page
title: "Q131000: FIX: Application Error If /Og &amp; Virtual Operator Call in Loop"
permalink: /kb/131/Q131000/
---

## Q131000: FIX: Application Error If /Og &amp; Virtual Operator Call in Loop

{% raw %}

	Article: Q131000
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbCodeGen kbCompiler kbCPPonly kbVCkbbuglist kbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application error is generated when running a program that meets all these
	conditions:
	
	- It was compiled with global optimization (/Og).
	
	- It defines a virtual operator for a class.
	
	- It constructs an object of that class inside a loop.
	
	- The operator is called inside the loop.
	
	CAUSE
	=====
	
	The computation of the address of the virtual operator is being lifted out of
	the loop.
	
	RESOLUTION
	==========
	
	Use any one of the following four workarounds:
	
	- Move the object outside the loop.
	
	-or-
	
	- Use the functional form of the operator.
	
	-or-
	
	- If the operator does not need to be virtual, do not declare it virtual.
	
	-or-
	
	- Do not do global optimizations.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	  /* Compile options needed: /Og
	  */ 
	  class Test
	  {
	  public:
	      virtual int operator <= ( const Test& T ) const {return 1;}
	  };
	
	  void main( void )
	  {
	      long i;
	      for (i=1; i<=3; i++)
	      {
	          Test T; //Work-around 1: Move this line above the for loop.
	          T <= T; //Work-around 2: Comment out this line, uncomment the next.
	          //T.operator<=(T); // Function form of the operator.
	      }
	  }
	
	Additional query words: 2.00 2.10 9.0 9.1 9.00 9.10
	
	======================================================================
	Keywords          : kbCodeGen kbCompiler kbCPPonly kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
