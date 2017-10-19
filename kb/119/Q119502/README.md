---
layout: page
title: "Q119502: PRB: PView Sample Does Not Behave Correctly"
permalink: /kb/119/Q119502/
---

## Q119502: PRB: PView Sample Does Not Behave Correctly

	Article: Q119502
	Product(s): Microsoft C Compiler
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): kbprb
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Build and run the PView sample included with Visual C++ 32-bit Edition. The box
	labeled "Process, CPU Time, Privileged, and User" is not filled with the
	expected strings. When you select the button titled "Memory Detail", the
	following error dialog box displays:
	
	  
	
	   -------------------------------------------
	  |              Memory Detail                |
	  |-------------------------------------------|
	  |                                           |
	  |     Unable to retrieve memory detail.     |
	  |                                           |
	   -------------------------------------------
	
	CAUSE
	=====
	
	The system performance monitor APIs return UNICODE strings. For the strings to
	be displayed properly, UNICODE must be defined when you compile the sample
	program.
	
	RESOLUTION
	==========
	
	Modify the makefile compiler options to include /DUNICODE. This has been done
	for you in Visual C++ version 2.0.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kbprb 
	Technology        : kbVCsearch kbAudDeveloper kbvc100
	Version           : 1.00
	Issue type        : kbprb
	
	=============================================================================
	
