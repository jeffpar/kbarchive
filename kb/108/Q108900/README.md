---
layout: page
title: "Q108900: How to Return After F8 into a C Run-Time Library Function"
permalink: /kb/108/Q108900/
---

## Q108900: How to Return After F8 into a C Run-Time Library Function

	Article: Q108900
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDebug kbide
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Visual Workbench Integrated Debugger, used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When stepping into (F8) a C run-time library function in the Visual Workbench
	integrated debugger, the debugger displays the following error message:
	
	  There is no source line debugging information.
	
	The error repeats when single stepping through the library function using the
	Step Over command (F10). To avoid the error, exit the C run-time library
	function by choosing Step Out from the Visual Workbench Debug menu (SHIFT+F7).
	
	NOTE: This does not happen in later versions of Visual C++ 32-bit Edition.
	
	MORE INFORMATION
	================
	
	The C run-time libraries provided with the Visual Workbench are not built with
	debugging information. When debugging in mixed source and assembly mode,
	stepping into one of the library functions via Step Into (F8) causes the
	debugger to display the "no debugging information" message. Once inside the
	run-time library code, the debugger continues to display the message for each
	step inside the library function code until the run-time library code is exited.
	This is expected behavior for the Visual Workbench debugger.
	
	To leave the run-time library function, choose Step Out or the equivalent
	(SHIFT+F7) from the Debug menu. Step Out returns to the first instruction after
	the call to the run-time library function.
	
	Additional query words: kbinf 1.00 1.10
	
	======================================================================
	Keywords          : kbDebug kbide 
	Technology        : kbVCsearch kbAudDeveloper
	
	=============================================================================
	
