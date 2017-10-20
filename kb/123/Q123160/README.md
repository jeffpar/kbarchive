---
layout: page
title: "Q123160: FIX: Conditional Breakpoint Doesn't Stop in Recursive Function"
permalink: /kb/123/Q123160/
---

## Q123160: FIX: Conditional Breakpoint Doesn't Stop in Recursive Function

{% raw %}

	Article: Q123160
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbDebug kbidekbfixlist
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, included with:
	   - Microsoft Visual C++, versions 1.5, 1.51 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0, 2.10 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using "Break when Expression is True" in a recursive function in the Visual C++
	integrated debugger may fail to stop program execution even if the expression
	becomes true.
	
	RESOLUTION
	==========
	
	Instead of using "Break when Expression is True," use "Break at Location if
	Expression is True" to work around the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was not reproducible in Microsoft Visual
	C++, 32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	To demonstrate the problem, build the sample code below for debug mode and do
	the following:
	
	1. Choose Breakpoints... from the Debug menu.
	
	2. In the Breakpoints dialog, select "Break when Expression is True" for the
	  Type field.
	
	3. In the Expression field, type "{function1}(i==2)" (without the quotation
	  marks) to specify the expression.
	
	4. Add the above breakpoint to the "Breakpoints:" list.
	
	5. Start the debugger. You will notice that the debugger terminates the debug
	  session without breaking, even though i was equal to 2 at one point.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /Zi /Od
	  */ 
	
	  #include <stdio.h>
	
	  int function1( int i, int j )
	  {
	    if ( i>0 )
	    {
	      return function1( i-1, j+1 );
	    }
	    else
	    {
	      return j;
	    }
	  }
	
	  void main(void)
	  {
	    int i;
	
	    printf( "Before Recursive Call.\n" );
	    i = function1( 10, 0 );
	    printf( "Back from Recursive Call.\n" );
	  }
	
	Additional query words: 1.00 1.50 2.00 2.10
	
	======================================================================
	Keywords          : kbDebug kbide kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
