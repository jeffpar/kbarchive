---
layout: page
title: "Q113116: DOC: Undocumented Fatal Error C1053"
permalink: kb/113/Q113116/
---

## Q113116: DOC: Undocumented Fatal Error C1053

	Article: Q113116
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ERRORS.HLP file does not document fatal error C1053, "function too large for
	global optimizations." This error can occur on very large blocks of code.
	
	CAUSE
	=====
	
	The compiler has a limited amount of space available for storing temporary
	variables that it uses to track code within a function or code block.
	
	RESOLUTION
	==========
	
	The compiler could not handle the size of the specified function. You can
	compile without the /Og switch (this includes the /Ox and /O2 switches) or split
	up your code to reduce the size of the function. Note that a function which
	calls inline routines can grow very large.
	
	This was corrected in Microsoft Visual C++, version 2.0
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:
	
	=============================================================================
	
