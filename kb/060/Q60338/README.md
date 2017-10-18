---
layout: page
title: "Q60338: PRB: Unable to Set CodeView Breakpoint on Desired Line"
permalink: kb/060/Q60338/
---

## Q60338: PRB: Unable to Set CodeView Breakpoint on Desired Line

	Article: Q60338
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS 
	- Microsoft CodeView for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In CodeView, an attempt to set a breakpoint on a specified line fails.
	
	CAUSE
	=====
	
	The compiler command line did not specify both the /Od and /Zi option switches.
	Some compiler optimizations concatenate code in the executable file unless the
	command line specifies /Od to disable all optimizations.
	
	RESOLUTION
	==========
	
	Recompile the code with the correct options specified.
	
	MORE INFORMATION
	================
	
	The code example below demonstrates this problem. When the code is compiled with
	only the /Zi switch, you cannot set a breakpoint on the indicated line.
	
	Sample Code
	-----------
	
	  /*
	   * Compile options needed: /Zi
	   */ 
	
	  #include <stdio.h>
	
	  int func();
	
	  void main(void)
	  {
	     int a, b, c;
	
	     a = func();  // You cannot set a breakpoint on this line because
	                  // the default optimization concatenates it with the
	                  // following line to form the expression:
	                  //    b = (a = func()) + c
	     b = a + c;
	  }
	
	  int func()
	  {
	     return(10);
	  }
	
	Additional query words: 3.00 3.50 4.00 4.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
