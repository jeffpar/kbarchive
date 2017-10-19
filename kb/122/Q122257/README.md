---
layout: page
title: "Q122257: DOC: Description of Compiler Error C2712 is Incorrect"
permalink: /kb/122/Q122257/
---

## Q122257: DOC: Description of Compiler Error C2712 is Incorrect

	Article: Q122257
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbCompiler kbCPPonly kbVC
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The online Help for compiler error C2712 ("cannot use __try in func with object
	unwinding") states:
	
	  To avoid this error message, compile using /GX option.
	
	This is incorrect. It should read that the workaround is to compile with /GX-,
	which instructs the compiler to disable C++ exception handling unwinding.
	
	Additional query words: 2.00 9.00
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbCompiler kbCPPonly kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:
	
	=============================================================================
	
