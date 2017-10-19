---
layout: page
title: "Q51326: DOC: tmpfile() Creates a Temporary File in the Root Dir"
permalink: /kb/051/Q51326/
---

## Q51326: DOC: tmpfile() Creates a Temporary File in the Root Dir

	Article: Q51326
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbAccess200fix kbCRT kbVC100 kbVC200 kbVC210 kbVC400 kbVC410 kbVC500
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), used with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C/C++ for MS-DOS 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft C run-time library function tmpfile() creates a temporary file in
	the root directory of the current drive. This file has read/write access and is
	automatically deleted when the file is closed.
	
	The documentation for this function implies that the file will be created in the
	current working directory. This is not the case; the file will exist only in the
	root directory. To create a temporary file in a different directory, use the
	functions tmpnam() or tempnam() in conjunction with fopen().
	
	Some obscure side effects can occur on some systems as a result of tmpfile()
	creating a file in the root directory. On a network, you must have read/write
	privileges for the root directory of your current drive. Without these rights,
	tmpfile() will fail to open the temporary file, returning a NULL in the
	process.
	
	Another possible reason tmpfile() might fail is if the root directory is full.
	MS-DOS allows only a limited amount of file entries in the root directory
	depending on the disk format; therefore, if the root is full, you must delete
	some files before you use tmpfile().
	
	Additional query words: Novell
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbAccess200fix kbCRT kbVC100 kbVC200 kbVC210 kbVC400 kbVC410 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:1.0,2.0,2.1,4.0,5.0,6.0
	
	=============================================================================
	
