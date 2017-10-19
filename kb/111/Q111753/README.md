---
layout: page
title: "Q111753: DOC: assert() Macro Does Not Display Pop-Up Window in Win32"
permalink: /kb/111/Q111753/
---

## Q111753: DOC: assert() Macro Does Not Display Pop-Up Window in Win32

	Article: Q111753
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbCRT kbVC
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation in the Microsoft C "Run-Time Library Reference" for the assert
	macro states that in Windows an assertion failure causes a pop-up box to be
	displayed. This is stated similarly in the online help. Although this is true
	for 16-bit Windows applications, under Win32 the macro just causes the
	application to abort; no pop-up window is displayed.
	
	The Visual C++ 2.0 documentation has the correct information.
	
	MORE INFORMATION
	================
	
	The C run-time assert() macro was originally designed to display its diagnostic
	message using console output. In the 16-bit Windows version of the C run time,
	the macro was modified to use the Windows Graphical User Interface (GUI)
	application programming interface (API). This was necessary because 16-bit
	Windows does not support a console API.
	
	Unlike 16-bit Windows, however, Win32 has both a GUI and console API set, and
	therefore the assert() macro returns to its original form as a console output
	macro.
	
	It is possible to create a user-defined version of the assert() macro that
	displays its diagnostic message in a pop-up window. The sample code provided
	below shows one way of doing this:
	
	Sample Code
	-----------
	
	     /* Compile options needed: none
	     */ 
	
	     #include <windows.h>
	     #include <stdio.h>
	     #include <process.h>
	
	     // Prototype for the function called by the assert macro.
	     void  ShowAssertion(void * expr, void * filename, unsigned lineno);
	
	     // The following should all be on one line. It wraps around because
	     // of its length.
	     #define assert(exp) (void)( (exp) || (ShowAssertion(#exp, __FILE__,
	     __LINE__), 0) )
	
	     static char AssertString[] = "Expression %s, File %s, Line %d\n";
	
	     void  ShowAssertion(void * expr, void * filename, unsigned lineno)
	     {
	         char buffer[256];
	
	         sprintf( buffer, AssertString, expr, filename, lineno );
	         MessageBox( NULL, buffer, "ASSERTION FAILED",
	                     MB_OK | MB_ICONHAND | MB_TASKMODAL );
	
	         abort();
	     }
	
	Additional query words: 2.00 debug runtime run time
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbCRT kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:
	
	=============================================================================
	
