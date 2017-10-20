---
layout: page
title: "Q122847: FIX: Cannot Watch Local Variables of a &#95;&#95;finally Block"
permalink: /kb/122/Q122847/
---

## Q122847: FIX: Cannot Watch Local Variables of a &#95;&#95;finally Block

{% raw %}

	Article: Q122847
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbDebug kbidekbbuglist kbfixlist
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0, 2.10 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When stepping into the __finally block of a try-finally statement, any variables
	that might exist local to that block may not show correct values in the locals
	or watch window of the integrated debugger.
	
	RESOLUTION
	==========
	
	If you need to watch variables used in a __finally block of a try-finally
	statement, either declare the variables outside of the scope of the __finally
	block, or assign the value of the local variable to another variable of the same
	type that has been declared outside the scope of the __finally block.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was not reproducible in Microsoft Visual
	C++, 32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	The try-finally statement is a Microsoft extension to the C language that
	enables applications to guarantee execution of cleanup code when execution of a
	block of code is interrupted.
	
	You can use the sample code listed below to demonstrate the problem described in
	this article. You will see the value of the variable 'i' is incorrect in the
	locals or watch window when stepping through the code of the __finally block.
	
	Sample Code to Demonstrate Problem
	----------------------------------
	
	  /* Compile options needed: /Zi
	  */ 
	
	  #include <stdio.h>
	
	  void main( void )
	  {
	     __try
	     {
	        // guarded section code...
	     }
	     __finally
	     {
	        int i = 2;
	
	        // termination handler code...
	        i = 10;
	        i = 15;
	        i++;
	        printf( "In __finally.  i = %d.\n", i );
	     }
	  }
	
	REFERENCES
	==========
	
	For more information on the try-finally statement, see Chapter 5 of the C
	Language reference.
	
	Additional query words: 1.00 2.00 buglist1.00 buglist2.00 8.00 9.00 exception Visual Workbench VWB 1.1
	
	======================================================================
	Keywords          : kbDebug kbide kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
