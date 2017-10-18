---
layout: page
title: "Q148318: FIX: Using #define NOGDI Results in Compilation Syntax Errors"
permalink: kb/148/Q148318/
---

## Q148318: FIX: Using #define NOGDI Results in Compilation Syntax Errors

	Article: Q148318
	Product(s): Microsoft C Compiler
	Version(s): 2.2,4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbGenInfo kbVC kbVC500fix kbArtTypeINF
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.2, 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling a source file that contains the following code:
	
	     #define NOGDI
	     #include <windows.h>
	
	results in several syntax errors such as these:
	
	  winuser.h(8577) : error C2501: 'LOGFONTA' : missing decl-specifiers
	  winuser.h(8577) : error C2146: syntax error : missing ';'  before
	  identifier 'lfFont'
	
	CAUSE
	=====
	
	GDI-specific types like LOGFONTA are not defined when NOGDI is defined. However,
	header files like Winuser.h and Imm.h have structures that contain the
	GDI-specific types without the surrounding "#ifndef NOGDI"/"#endif" pair. The
	compiler generates syntax error for the GDI-specific types inside these
	structures.
	
	RESOLUTION
	==========
	
	Do not use #define NOGDI, or edit the system header files that produce the
	syntax errors to add the "#ifndef NOGDI"/"#endif" pair around the structures
	that contain the GDI-specific types.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbGenInfo kbVC kbVC500fix kbArtTypeINF 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC410 kbVC420
	Version           : :2.2,4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
