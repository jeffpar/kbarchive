---
layout: page
title: "Q121887: PRB: Debugger Can't Evaluate Cast of Enum to (long&#42;)"
permalink: /kb/121/Q121887/
---

## Q121887: PRB: Debugger Can't Evaluate Cast of Enum to (long&#42;)

	Article: Q121887
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDebug kbide kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Visual Workbench Integrated Debugger, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++, Macintosh Cross-Development Addon, version 2.0 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 6.0, used with:
	      - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual Workbench Debugger expression evaluator cannot evaluate the cast of
	an enumerator to a pointer to a long in C++ code. If you attempt to enter an
	expression of this type in the debugger's watch window, an error occurs. For
	example, if you try to watch the enumerator 'a' as shown in the sample code
	below, the debugger gives this error:
	
	  (long*)a = CXX0019: Error: bad type cast
	
	The error occurs even though the cast is legal.
	
	RESOLUTION
	==========
	
	If the enumerator is assigned to a pointer to a long at compile time, the
	debugger can watch the pointer (see the Sample Code section below).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates the problem. Entering (long*)a in the
	Watch window causes error CXX0019.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /Zi /Od test.cpp
	  */ 
	
	  enum {a=1, b=2, c=3};
	
	  void main()
	  {
	     long *ptr;
	     ptr = (long*)a;  // Cast works correctly in code.
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDebug kbide kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper
	Version           : :2.0,2.1,4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
