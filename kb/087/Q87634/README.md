---
layout: page
title: "Q87634: PRB: Constant String Is Eliminated by the C++ Compiler"
permalink: /kb/087/Q87634/
---

## Q87634: PRB: Constant String Is Eliminated by the C++ Compiler

	Article: Q87634
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC410 kbVC420 kb
	Last Modified: 14-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1, 4.2, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft C/C++ versions 7.0 and later compilers eliminate unreferenced
	constant strings. This happens only with C++ source, not C source. The string is
	declared in the source file, but is not included in the resulting object module.
	
	CAUSE
	=====
	
	In C++, const variables have internal linkage. This is different from the way
	that C handles const variables.
	
	In this case, because the C++ compiler can process only one source file at a
	time, the string is eliminated if it is not referenced in the file in which it
	is declared, even if it is referenced from another file.
	
	RESOLUTION
	==========
	
	The solution is to declare the const string as "extern". This provides external
	linkage, telling the compiler that the string may be used in another module, and
	not to assume that it is an unreferenced symbol; for example
	
	  const char sz[] = "\"the string\"";
	
	would be optimized away in a C++ module, but the following string would not:
	
	  extern const char sz[] = "\"the string"\";
	
	MORE INFORMATION
	================
	
	While this behavior is not a bug in the compiler, the effects of this
	optimization may cause unexpected results. If a string is declared and
	initialized in one module, and referenced only in another module, the string
	will be eliminated from the first module. This means that the other file will
	not have access to the information used in the initialization of the string.
	
	For more information on internal and external linkage, see section 2.4 of the
	""C++ Language Reference"" supplied with C/C++ version 7.0 and Visual C++, or
	refer to the online help supplied with Visual C++.
	
	Additional query words: 8.00 8.00c 9.00 9.10 L2029
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC410 kbVC420 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
