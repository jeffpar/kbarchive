---
layout: page
title: "Q135526: FIX: Bad Result If Call Inline Function Twice in Expression"
permalink: kb/135/Q135526/
---

## Q135526: FIX: Bad Result If Call Inline Function Twice in Expression

	Article: Q135526
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCodeGen kbCompiler kbCPPonly kbVC kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 2.1, 2.2, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Invalid results may be generated under these conditions:
	
	- Your code defines an inline function that uses global or static data, and it
	  invokes that function twice within an expression.
	
	- You are using the /Ob1 or /Ob2 or /Ox compiler optimization switch with the
	  32-bit compiler, or you are using the /Ob1g or /Ob2g or /Ox switch with the
	  16-bit compiler.
	
	- The global or static variable appears in the return expression for the
	  function.
	
	RESOLUTION
	==========
	
	Do not use the above optimizations.
	
	-or-
	
	Assign the return value of one of the function calls to a local variable. Then
	use the local variable in the expression.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce the Problem
	------------------------------------
	
	  /* Compile options needed 32-bit Compiler: /Ob1, or /Ob2, or /Ox
	  /* Compile options needed 16-bit Compiler: /Ob1g, or /Ob2g, or /Ox
	  */ 
	
	  #include <stdio.h>
	
	  int  nGlobal = 0;
	
	  inline int test(int nIn) {
	     return  nGlobal = nIn;
	  }
	
	  void main() {
	     // This will incorrectly evaluate to true.
	     if  (test(1) == test(2))
	         printf("test(1) == test(2)\n");
	     else
	         printf("test(1) != test(2)\n");
	
	     // This will correctly evaluate to false.
	     int n = test(2);
	
	     if  (test(1) == n)
	         printf("test(1) == test(2)\n");
	     else
	         printf("test(1) != test(2)\n");
	  }
	
	Additional query words: kbVC400bug 8.00c 9.00 9.10 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbCodeGen kbCompiler kbCPPonly kbVC kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC220 kbVC410 kbVC420 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
