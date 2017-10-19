---
layout: page
title: "Q103713: PRB: Low Disk Space May Cause Miscellaneous Build Problems"
permalink: /kb/103/Q103713/
---

## Q103713: PRB: Low Disk Space May Cause Miscellaneous Build Problems

	Article: Q103713
	Product(s): Microsoft C Compiler
	Version(s): 1.00 2.00 2.10
	Operating System(s): 
	Keyword(s): kbCompiler kbprb
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When building a project in the Visual Workbench, syntax errors on BSCMAKE,
	"missing source file" errors from the compiler, or a compiler stack overflow
	error C1063 occurs sporadically under extremely low disk space situations.
	
	CAUSE
	=====
	
	When the available disk space is enough for the executable file but not for
	other files that are being generated, either BSCMAKE or the linker may fail.
	Also, the compiler may generate the compiler stack overflow error instead of an
	error indicating that it cannot write a file due to low disk space.
	
	RESOLUTION
	==========
	
	To work around this problem, try to free up more disk space. Choosing to not
	generate browser information or create precompiled headers may also help.
	
	MORE INFORMATION
	================
	
	Normally, an error indicating that there is either low disk space or that a file
	cannot be created or written to disk is generated instead.
	
	Additional query words: 1.00 2.00 2.10 8.00 9.00 9.10
	
	======================================================================
	Keywords          : kbCompiler kbprb 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 1.00 2.00 2.10
	Issue type        : kbprb
	
	=============================================================================
	
