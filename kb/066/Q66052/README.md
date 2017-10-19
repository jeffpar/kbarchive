---
layout: page
title: "Q66052: INFO: fflush() &amp; flushall() Do Not Write Data Directly to Disk"
permalink: /kb/066/Q66052/
---

## Q66052: INFO: fflush() &amp; flushall() Do Not Write Data Directly to Disk

	Article: Q66052
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:6.0,6.00a,6.00ax,7.0; WINDOWS:1.0,1.00a; WINDOWS NT:1.0,2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The fflush() and flushall() functions in the C run-time library do not write
	file changes directly to disk. These functions flush the file buffers provided
	by the library; they do not flush the buffers the MS-DOS, OS/2, or Windows NT
	operating systems provide at the system level. For example, if an application
	calls fflush() but MS-DOS does not write its buffers to disk before a system
	crash (or equivalent event), information may still be lost.
	
	MORE INFORMATION
	================
	
	To address this situation in MS-DOS, use the _commit() function after you call
	fflush() or fflushall(). Calling _commit() causes the operating system to flush
	to disk the buffer associated with a file handle.
	
	The OS/2 operating system provides two separate functions, depending on the
	installed version of OS/2. In 16-bit OS/2 (versions 1.x), use the DosBufReset()
	function. In 32-bit OS/2 (version 2.0), use the DosResetBuffer() function.
	
	The Windows NT operating system provides the WIN32 API FlushFileBuffers(). The
	_commit() function included with the Visual C++ 32-bit Edition CRT calls
	FlushFileBuffers to write buffered data to disk.
	
	Microsoft C/C++ version 7.0 introduces the "c" mode option for the fopen()
	function. When an application opens a file and specifies the "c" mode, the
	run-time library writes the contents of the file buffer to disk when the
	application calls the fflush() or _flushall() function. The "c" mode option is a
	Microsoft extension and is not part of the ANSI standard for fopen().
	
	To change the default behavior of the fflush() and _flushall() functions, link
	your application with the COMMODE.OBJ file provided by the products listed at
	the beginning of this article. COMMODE.OBJ changes the global commit flag such
	that calling fflush() or _flushall() commits the file buffer to disk. This flag
	tells fflush() to call _commit() to flush the low- level file when the stream is
	flushed and _commit() in turn calls _dos_commit() for the MS-DOS level file. By
	default flushing a stream does not flush the low-level and MS-DOS level files.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS-DOS:6.0,6.00a,6.00ax,7.0; WINDOWS:1.0,1.00a; WINDOWS NT:1.0,2.0,2.1,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
