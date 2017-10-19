---
layout: page
title: "Q67007: Executing a Function From the Command or Watch Window"
permalink: /kb/067/Q67007/
---

## Q67007: Executing a Function From the Command or Watch Window

	Article: Q67007
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kbCodeView kbDebug kbVC _IK
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS 
	- Microsoft CodeView for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to page 201 of the Microsoft C "Advanced Programming Techniques"
	manual for versions 6.x, "any C function in your program (whether user-written
	or from the library) can be called from the Command window or the Watch
	window."
	
	This statement is not entirely true; you can call only functions compiled with
	full CodeView symbolic debugging information from the Command and Watch windows.
	Therefore, you cannot call any functions in the C run-time library because the
	libraries do not contain symbolic information. The text below provides an
	example of calling a function in the C run-time library.
	
	In Microsoft C/C++ version 7.0, chapter 11 of the "Environment and Tools" manual
	documents calling functions from the CodeView command window.
	
	MORE INFORMATION
	================
	
	An attempt to call, from the Command window, a function that does not have any
	symbolic information fails and CodeView generates an error message. In CodeView
	versions 4.0x, 4.1, and 4.25, the error is as follows:
	
	  CXX0017: Error: symbol not found
	
	  -or-
	
	  CAN0017: Error: symbol not found
	
	In CodeView versions 3.x, the error is as follows:
	
	  CV1017 Error: Syntax error
	
	CodeView versions 2.x display an "unknown symbol" error in the Command window.
	
	An attempt to add to the Watch window a function that does not have any symbolic
	information fails and CodeView generates an error message. In CodeView versions
	4.0x, 4.1, and 4.25, the error is as follows:
	
	  CXX0030: Error: expression cannot be evaluated
	
	  -or-
	
	  CAN0030: Error: expression cannot be evaluated
	
	CodeView versions 3.x ignore the entry and sound the system bell. CodeView
	versions 2.x generate an "unknown symbol" error.
	
	The Advanced Programming Techniques manual provides an example of calling a
	function in the C run-time library from the Command window with the following
	command:
	
	  ?funcname (varlist)
	
	This command invokes the function and displays its return value in the Command
	window. To add the function to the Watch window, use the following command:
	
	  w?funcname (varlist)
	
	Another method to add a function to the Watch window is as follows: choose Add
	Watch from the Watch menu. Type the function name, a left parenthesis, the
	argument list, a right parenthesis, and choose OK. Neither "w" or "?" is
	required in this situation.
	
	If the function required any input or produces any output, the screen flip/swap
	option on the Options menu must be selected.
	
	To call a function in the C run-time library, a function in the Windows
	application programming interface (API), or any other function that does not
	contain CodeView symbolic information, you must write a shell function that
	calls the desired function and passes along the value it returns.
	
	For example, to call the sqrt() function in the C run-time library from the
	CodeView Command or Watch window, create a shell function that looks like the
	following:
	
	Sample Code
	-----------
	
	  /*
	   * Compile options needed: /Zi
	   */ 
	
	  #include <math.h>
	
	  double my_sqrt(double x)
	  {
	     return sqrt(x);
	  }
	
	Compile this function and link it into your application (be sure to specify the
	/CO[DEVIEW] LINK option). Your application does not need to call my_sqrt() for
	the function to be available for direct execution. However, before calling
	my_sqrt() from the Command or Watch window, you must step into the main()
	function to initialize the program's stack.
	
	To run the my_sqrt() function from the Command window, type the following:
	
	  " ?my_sqrt(4.0)" (without the quotation marks)
	
	CodeView displays the value returned by the function on the next line in the
	Command window. In this example, CodeView displays 2.0000000000000, the square
	root of 4.0.
	
	To add the my_sqrt() function to the Watch window, type the following in the
	Command window:
	
	  " w?my_sqrt(4.0)" (without the quotation marks)
	
	To add the my_sqrt() function to the Watch window using the Add Watch command on
	the Watch menu, type the following at the Add Watch prompt:
	
	  " my_sqrt(4.0)" (without the quotation marks)
	
	CodeView executes each function in the Watch window each time it updates the
	Watch window.
	
	Even though these examples use a constant value for the function parameter, you
	can specify any variable that is currently in scope.
	
	Additional query words: 2.20 3.00 3.50 4.00 4.10 docerr
	
	======================================================================
	Keywords          : kbCodeView kbDebug kbVC _IK 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
