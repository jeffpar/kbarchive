---
layout: page
title: "Q46024: DOCFIX: fopen() Will Set errno Values Incorrect in Documentation"
permalink: kb/046/Q46024/
---

## Q46024: DOCFIX: fopen() Will Set errno Values Incorrect in Documentation

	Article: Q46024
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS: 6.0, 6.00a, 6.00ax, 7.0; WINDOWS: 1.0, 1.5; WINDOWS NT: 1.0, 2.0, 2.1, 5.0
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbCRT kbVC100 kbVC150 kbVC200 kbVC500 kbVC600
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for the open() and sopen() functions indicates that these
	functions set errno values, while the fopen() documentation does not explicitly
	state this. However, fopen() will set errno for most of the same error
	conditions as open() and sopen().
	
	Internally, fopen() calls many of the same low-level routines that open() and
	sopen() call. Because these routines set errno on an error, errno is also set
	for errors with fopen(). The one errno value that is NOT set with fopen() is
	EMFILE. For more information on the exact errno values, refer to the
	documentation for open().
	
	This problem was fixed in the Books On-line of Microsoft Visual C++, 32-bit
	Edition, version 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbCRT kbVC100 kbVC150 kbVC200 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS-DOS: 6.0, 6.00a, 6.00ax, 7.0; WINDOWS: 1.0, 1.5; WINDOWS NT: 1.0, 2.0, 2.1, 5.0
	
	=============================================================================
	
