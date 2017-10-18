---
layout: page
title: "Q114334: PRB: Cannot Open Compiler Intermediate File"
permalink: kb/114/Q114334/
---

## Q114334: PRB: Cannot Open Compiler Intermediate File

	Article: Q114334
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0, 4.1, 4.2, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following error occurs when compiling a file with the Visual C++ compiler:
	
	  fatal error C1083: Cannot open compiler intermediate file:
	  '<tmp directory>;\<tmpfile>': Invalid argument
	
	  -or-
	
	  fatal error C1083: Cannot open compiler intermediate file:
	  '<tmp directory>;\<tmpfile>': No such file or directory
	
	CAUSE
	=====
	
	The error is caused by a semicolon at the end of the TMP environment variable.
	For example:
	
	  TMP=C:\TMP;
	
	RESOLUTION
	==========
	
	The correct way to set up the TMP environment variable from the command line is
	as follows:
	
	  C:\>SET TMP=C:\TMP
	
	MORE INFORMATION
	================
	
	It is important that the environment string does not end with a semicolon (;)
	because the compiler appends the intermediate filename to the TMP path. By
	removing the semicolon from the path, the compiler can create the file
	correctly.
	
	In addition, the TMP variable should be a fully qualified path and not a relative
	path. For example C:TMP may cause the compiler to issue similar errors, but
	C:\TMP will always work correctly. The TMP environment variable should also be
	set to a drive that has sufficient space for the compiler's temporary files.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC220 kbVC410 kbVC420 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
