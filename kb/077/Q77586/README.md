---
layout: page
title: "Q77586: PRB: Custom Command-Line Options Disappear"
permalink: kb/077/Q77586/
---

## Q77586: PRB: Custom Command-Line Options Disappear

	Article: Q77586
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbide kbVC kbprb
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Visual Workbench Integrated Debugger, used with:
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiler, linker, and resource compiler command line options may disappear from
	the custom options fields. If you specify custom options, close the dialog box,
	and open it again, the specified options may not appear in the list of
	additional options.
	
	CAUSE
	=====
	
	Specified options that disappear from the custom option fields were reset by
	entries in other option fields. For example, if you specify "/W1" (without
	quotation marks) in the custom option field, close the dialog box, and reopen
	it, the "/W1" option does not appear in the custom options field. However, the
	Warning Level combo box displays Level 1, as specified.
	
	MORE INFORMATION
	================
	
	This is not a problem in Visual C++ 2.0 and later, because of changes to the
	development environment.
	
	Additional query words: 1.00 1.10 1.50 arguments
	
	======================================================================
	Keywords          : kbide kbVC kbprb 
	Technology        : kbVCsearch kbAudDeveloper
	Issue type        : kbprb
	
	=============================================================================
	
