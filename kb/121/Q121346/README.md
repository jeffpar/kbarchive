---
layout: page
title: "Q121346: BUG: Spaces Preceding Header File Name Generate Build Errors"
permalink: /kb/121/Q121346/
---

## Q121346: BUG: Spaces Preceding Header File Name Generate Build Errors

	Article: Q121346
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,2.0,2.1,4.0,4.1,5.0
	Operating System(s): 
	Keyword(s): kbCompiler kbide kbVC kbVC500bug
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 2.0, 2.1, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following dependency scan errors and/or compiler C1083 errors are generated
	when you attempt to scan dependencies or compile a header file that contains an
	#include directive with leading spaces in the file name:
	
	- Scanning dependencies on a header file included in your source file may
	  generate the following error if the header file name contains leading
	  spaces:
	
	  Could not find the file FILENAME.EXT
	
	  Here " FILENAME.EXT" is the name of the included header file.
	
	- Attempting to compile a source file that includes a header file with leading
	  spaces in the file name generates this compiler error:
	
	  Fatal error C1083: Cannot open include file: ' FILENAME.EXT' : No such file
	  or directory
	
	  Here " FILENAME.EXT" is the name of the included header file.
	
	RESOLUTION
	==========
	
	Delete the space(s) preceding the filename in the #include directive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	In the 32-bit versions of windows, spaces are valid characters in the file names.
	This is by design in the 32-bit versions of Visual C++.
	
	MORE INFORMATION
	================
	
	To reproduce this error, create a text file called TEST.H and include this file
	in your source file with this statement:
	
	     #Include " TEST.H"  // Note the space between quotation mark (") and    TEST.H
	
	Attempting to scan dependencies or compile this file, generates the listed
	errors. Trailing spaces in the included filename are ignored and do not cause
	errors.
	
	Additional query words: kbVC400bug 8.00 8.00c 9.00 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbCompiler kbide kbVC kbVC500bug 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC410 kbVC500 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,1.51,2.0,2.1,4.0,4.1,5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
