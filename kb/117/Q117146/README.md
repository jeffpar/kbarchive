---
layout: page
title: "Q117146: BUG: Invalid &quot;Argument List Doesn't Match A Function&quot; Error"
permalink: kb/117/Q117146/
---

## Q117146: BUG: Invalid &quot;Argument List Doesn't Match A Function&quot; Error

	Article: Q117146
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 4.0, 4.01, 4.1 
	- Microsoft CodeView for Windows, versions 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Evaluating a C++ function in the Codeview command window using the function's
	default parameter values will cause Codeview to give an error message stating
	that the "argument list doesn't match a function", even though default
	parameters have been specified in the code.
	
	CAUSE
	=====
	
	The Codeview expression evaluator was not designed to process default arguments
	for C++ functions. Therefore, it expects a C++ function to receive the exact
	number of parameters specified in the function's formal parameter list.
	
	RESOLUTION
	==========
	
	For Codeview to evaluate the function properly, you must include values for all
	of the function's parameters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The sample code shown below can be used to demonstrate the problem. To see the
	problem, follow these steps:
	
	1. Build a debug version of the sample code.
	
	2. Start a debugging session using Codeview, and run to the following
	  statement:
	
	  " e = f( d );" (without the quotation marks)
	
	3. In the Codeview command window, enter the command ?f(3). This will cause the
	  error message described above to be generated. However, entering the command
	  ?f(3,10) will work since the expression evaluator expects f to receive two
	  parameters.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /Zi /Od /Tp
	  */ 
	
	  int f( int a, int b = 0 )
	  {
	      return (a + b);
	  }
	
	  void main( void )
	  {
	      int d = 5,  e;
	      e = f( d );
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView400DOS kbCodeView401DOS kbCodeView410DOS kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :4.0,4.01,4.1
	
	=============================================================================
	
