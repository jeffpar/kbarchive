---
layout: page
title: "Q263715: BUG: Incorrect Code with Unsigned Integer Operand &gt; 0x80000000"
permalink: /kb/263/Q263715/
---

## Q263715: BUG: Incorrect Code with Unsigned Integer Operand &gt; 0x80000000

	Article: Q263715
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbCodeGen kbCompiler kbVC600bug
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler may generate incorrect code for floating point binary expressions
	(multiply, add, divide and sub) where the second argument is an unsigned integer
	in the range 0x80000000 to 0xFFFFFFFF.
	
	RESOLUTION
	==========
	
	There are two ways to resolve this problem:
	
	- Assign the argument to a float before you use it in the expression.
	
	- Cast the argument to a double instead of a float.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates the bug, as well as the ways to work
	around it:
	
	  //test.cpp
	  // compiler option needed: /GX
	  //test.cpp
	  #include <iostream>
	  unsigned a=1,b=-2;
	  int main()
	  {
	  //PROBLEM: May produce an incorrect result.
	  std::cout << (float)a /(float)b <<std::endl;
	
	  //WORKAROUND 1: Create a temporary float.
	  float b1=(float)b;
	  std::cout << (float)a /(float)b1 <<std::endl; 
	
	  //WORKAROUND 2: Cast to a double.
	  std::cout << (float)a /(double)b <<std::endl;
	
	  return 0;
	  }
	   
	  /* Program Output: 
	  -0.5
	  2.32831e-010
	  2.32831e-010 
	  */ 
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCodeGen kbCompiler kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:6.0
	Issue type        : kbbug
	
	=============================================================================
	
