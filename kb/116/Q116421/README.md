---
layout: page
title: "Q116421: BUG: Evaluating _pascal Functions Can Give Erroneous CXX0039"
permalink: /kb/116/Q116421/
---

## Q116421: BUG: Evaluating _pascal Functions Can Give Erroneous CXX0039

	Article: Q116421
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
	
	Evaluating functions declared with the _pascal calling convention in the
	Codeview command window using either the C or C++ Expression Evaluator can cause
	the following error:
	
	  CXX0039: Error Symbol is ambiguous
	
	This occurs even when the symbol is not ambiguous, although the decorated name of
	the symbol is the same as its undecorated name. Note that this problem can also
	occur with mixed case _pascal declared names if they are exported with their
	mixed case names in a .DEF file. This would be incorrect since the .DEF file is
	not using the correctly decorated name, but if /NOI is not specified when
	linking, no error is given.
	
	RESOLUTION
	==========
	
	Avoid using all uppercase letters in functions declared with the _pascal calling
	convention. Then, turn on Codeview's case sensitivity before evaluating these
	functions in the command window.
	
	In the case of exported functions mentioned above, be sure to use the fully
	decorated name in the .DEF file. If you are unsure what they are, use the linker
	/MAP option to have the linker generate a .map file. This file contains the
	symbol names after they have been decorated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The sample code listed below can be used to illustrate the problem. To do this,
	build a debug version of the program, start a debugging session in Codeview, and
	enter the following commands in the Codeview command window:
	
	  t2                      trace into main
	  oc+                     turn on case sensitivity
	  ? FUNC2()               the CXX0039 error is generated.
	  ? Func1()               no error; the function is evaluated
	
	  oc-
	  ? Func1()               the error is generated
	
	  ? Func1                 always works
	  ? FUNC2                 always works
	
	Sample Code
	-----------
	
	  /* Compile options needed:   /Zi /Od  */ 
	  #include <stdio.h>
	
	  void _pascal Func1(void)
	  {
	      printf("First _pascal function.\n");
	  }
	
	  void _pascal FUNC2(void)
	  {
	      printf("Second _pascal function.\n");
	  }
	
	  void main(void)
	  {
	      printf("Hello World.\n");
	  }
	
	Additional query words: 4.00 4.01 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView400DOS kbCodeView401DOS kbCodeView410DOS kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :4.0,4.01,4.1
	
	=============================================================================
	
