---
layout: page
title: "Q85484: BUG: INT3 Encountered When Debugging a P-Code DLL"
permalink: /kb/085/Q85484/
---

## Q85484: BUG: INT3 Encountered When Debugging a P-Code DLL

	Article: Q85484
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for Windows, versions 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to use CodeView versions 4.0 or 4.01 for Windows to debug a
	dynamic-link library (DLL) that contains p-code may cause CodeView to display
	the following error message in the command window:
	
	  Break caused by INT3 in code
	
	Using CodeView for Windows version 4.10 in the same situation may cause a General
	Protection fault.
	
	CAUSE
	=====
	
	Tracing into a Windows DLL that contains p-code with Native mode turned on
	causes CodeView to display the error message given above.
	
	RESOLUTION
	==========
	
	Native mode must be turned off to debug a DLL that contains p-code. To turn off
	Native mode, choose Native from the Options menu. When Native mode is turned on,
	a bullet appears to the left of the command on the menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in CodeView for Windows versions
	4.0, 4.01, and 4.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	With Native mode turned on, CodeView displays native machine instructions in the
	Source and Mixed display modes. The Register window and the Register command
	show the native CPU registers. With Native mode turned off, CodeView displays
	native machine instructions in those parts of a program that contain native
	code, and displays p-code instructions in those parts of a program that contain
	p-code. Also, the Register window and the Register command display the native
	CPU registers when debugging a native routine, and display the p-code
	interpreter's registers when debugging a p-code routine.
	
	Typically, Native mode should be turned off when debugging p-code. Turning Native
	mode on when debugging p-code causes CodeView to display the native machine code
	of the p-code interpreter.
	
	Additional query words: p code pcode 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :4.0,4.01,4.1
	
	=============================================================================
	
