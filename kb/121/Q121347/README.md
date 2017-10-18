---
layout: page
title: "Q121347: FIX: Unable to Set Breakpoint on Label in Constructor"
permalink: kb/121/Q121347/
---

## Q121347: FIX: Unable to Set Breakpoint on Label in Constructor

	Article: Q121347
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Workbench for Windows, version 1.0, used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The debugger is unable to set the breakpoint and no warning or error messages
	are given when you set the following breakpoint:
	
	     {SimpleClass::SimpleClass}MyLabel
	
	Here SimpleClass is a class and MyLabel is a label inside the constructor. Using
	the full context below does not work either:
	
	     {SimpleClass::SimpleClass(int)}MyLabel
	
	CAUSE
	=====
	
	There are two constructors SimpleClass::SimpleClass and the label happens to be
	in the second of the two constructors as shown in the sample code listed in the
	More Information section below. The expression evaluator searches only the first
	of the contexts specified by the context operator for the label.
	
	RESOLUTION
	==========
	
	Reverse the order of the definitions of the constructors to set the breakpoint
	correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was not reproducible in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates the problem. The debugger does not set a
	breakpoint on {SimpleClass::SimpleClass}MyLabel.
	
	Sample Code
	-----------
	
	  #include <stdio.h>
	
	  class SimpleClass
	  {
	   public:
	     int initval;
	
	     SimpleClass( void );
	     SimpleClass( int );
	  };
	
	  SimpleClass::SimpleClass()
	  {
	     initval = 0;
	  }
	
	  SimpleClass::SimpleClass( int val )
	  {
	     initval = val;
	  MyLabel:
	     ;
	  }
	
	  void main( )
	  {
	     SimpleClass SCOne(10);
	
	     printf( "%d\n", SCOne.initval );
	  }
	
	Additional query words: 1.00 2.00 buglist1.00 buglist2.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVSsearch kbAudDeveloper
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
