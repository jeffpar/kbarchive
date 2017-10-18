---
layout: page
title: "Q141958: FIX: _CRTDBG_MAP_ALLOC Environment Var References Incorrect"
permalink: kb/141/Q141958/
---

## Q141958: FIX: _CRTDBG_MAP_ALLOC Environment Var References Incorrect

	Article: Q141958
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCRT kbDocs kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	There are several incorrect references to setting the _CRTDBG_MAP_ALLOC
	environment variable in the documentation for the debug version of the C
	run-time library.
	
	It is not an environment variable, but rather a preprocessor constant. This
	symbol needs to be defined either in the code with a #define or from the command
	line with the compiler /D option.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	If you look in the header file, Crtdbg.h, you will see that this symbol is used
	as a preprocessor constant.
	
	There are two places where this symbol is referred to as an environment variable
	in the Run-Time Library Reference. From the Help contents, go to "Debug Version
	for the Run-Time Library" in the Run-Time Library Reference book, go to "Memory
	Management and the Debug Heap" and then "Using the Debug Version Versus the Base
	Version." The second sentence in the third paragraph states, "Applications that
	do not want to convert their malloc calls to _malloc_dbg can obtain the source
	file information by defining the _CRTDBG_MAP_ALLOC environment variable." In the
	next paragraph, it also states, "When _DEBUG is not defined, calls to malloc are
	not disturbed, calls to _malloc_dbg are resolved to malloc, the
	_CRTDBG_MAP_ALLOC environment variable is ignored, ..."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbDocs kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600fix 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
