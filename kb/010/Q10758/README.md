---
layout: page
title: "Q10758: Managing Memory with calloc() and malloc()"
permalink: kb/010/Q10758/
---

## Q10758: Managing Memory with calloc() and malloc()

	Article: Q10758
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 5.1, 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	-------------------------------------------------------------------------------
	
	In an application developed using the large memory model, the calloc()
	and malloc() functions appear to lose large blocks of memory when the
	segment value of an allocation changes. For example, if an application
	requests two 16K memory blocks, and the segment value in the second
	pointer is different from the segment value in the first pointer, the
	difference between the pointers is approximately 24,000 bytes.
	
	This behavior is caused by the method the malloc() function uses to
	perform memory allocations. The malloc() function is tuned to process
	a large number of (relatively) small memory allocations very quickly.
	The malloc() function allocates a large block of memory from MS-DOS
	(8K is the default size), and allocates memory from the block until it
	is full. When an application is greater than 8K, malloc() may allocate
	an additional 8K block of memory and use part of that block to satisfy
	the allocation. If the next request does not fit in the space
	remaining in a given segment, malloc() must request an another
	segment. In the example given above, the new allocation is almost 8K
	beyond the last byte of the previous allocation.
	
	An application can reduce the amount of wasted space by reducing the
	size of the memory block malloc() allocates by changing the value of
	the _amblksiz value. Include the following declaration in your
	application:
	
	     extern unsigned int _amblksiz;
	
	Set _amblksiz to the desired value. Smaller values of _amblksiz waste
	less space at the expense of slower performance for malloc(). However,
	when an application allocates large memory blocks, it tends to make
	fewer calls to malloc() and the performance degradation is minimal.
	Setting _amblksiz to 2 in a test program reduced the space loss to 42
	bytes without noticeably degrading its performance.
	
	Additional query words: kbinf 1.00 1.50 5.10 6.00 6.00a 6.00ax 7.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:
	
	=============================================================================
	
