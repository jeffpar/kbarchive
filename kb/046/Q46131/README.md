---
layout: page
title: "Q46131: DOC: tmpnam() Operation Does Not Change If P_tmpdir Modified"
permalink: /kb/046/Q46131/
---

## Q46131: DOC: tmpnam() Operation Does Not Change If P_tmpdir Modified

{% raw %}

	Article: Q46131
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbVC500 kbVC600
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), used with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, and 6.0ax 
	   - Microsoft C for OS/2, versions 6.0, and 6.0a 
	   - Microsoft C/C++ for MS-DOS 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 4.1, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft C, the documentation for the functions tmpnam(), tempnam() and
	_tempnam() states that under certain conditions they create a name that consists
	of the path prefix defined by the P_tmpdir entry in STDIO.H. This is ambiguous.
	A better way of stating this is that they create a name that consists of a path
	prefix to the root of the current drive; this is also what P_tmpdir is defined
	as. However, P_tmpdir is defined as the root directory on the default drive,
	which is where the created name would reside. However, any modification of
	P_tmpdir in STDIO.H does not change the filename that is created.
	
	The documentation states that changing the definition of P_tmpdir or L_tmpnam
	does not change the operation of tmpnam(). Nor does it change the operation of
	tempnam() or _tempnam(). These two defines are provided only for XENIX/UNIX
	portability. The three functions tmpnam(), tempnam() and _tempnam() do not make
	use of these two defines.
	
	Additional query words: kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbVC500 kbDSupport
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:1.0,2.0,4.0,4.1,5.0,6.0
	
	=============================================================================
	

{% endraw %}
