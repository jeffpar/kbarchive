---
layout: page
title: "Q103716: INFO: Debug Session Still Active Even After Last &quot;}&quot; of Main"
permalink: /kb/103/Q103716/
---

## Q103716: INFO: Debug Session Still Active Even After Last &quot;}&quot; of Main

	Article: Q103716
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbide kbVC
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Workbench for Windows, used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0, 2.1, 4.0 
	   - *EDITOR Please do not choose this product*Visual C++ for Windows* use 1699, versions 1.0, 1.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When stepping over the last curly brace "}" of main, WinMain, or LibMain, the
	message box
	
	  There is no source line debugging information
	
	appears and prompts for an OK. This indicates that the debugging session is still
	active and that there is no source code available for the remaining executable
	statements.
	
	MORE INFORMATION
	================
	
	This is an expected behavior of the integrated debugger. To terminate the
	debugging session, press F5 (GO). This results in the message box:
	
	  Process <X> terminated, exit code <X> (X).
	
	Pressing ALT+F5 to stop the debugging session also works. However, using ALT+F5
	is not recommended because this method completely stops the debugger. The
	program's exit code is not executed and other resources may not be freed.
	
	It is possible to step past the closing curly brace by switching to mixed source
	and assembly mode. Press CTRL+F7 or select the View menu and Choose Mixed
	Source/Asm. This enables you to step into the assembly code for the exit code.
	The exit code terminates the program and is executed by the run-time library
	after all the executable statements in a program are completed. When the final
	line of assembly code is reached, the above message will appear.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVC 
	Technology        : kbVSsearch kbAudDeveloper
	Version           : WINDOWS:
	Issue type        : kbinfo
	
	=============================================================================
	
